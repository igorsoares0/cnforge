import { db } from "@/lib/db";

/**
 * Auto-accept any pending team invites addressed to this user's verified email.
 *
 * Email invites are keyed by address, so claiming them here lets an invitee
 * join no matter how they signed up. It closes the gap where the invite's
 * `callbackUrl` was lost across the email/password signup + verification flow,
 * leaving the invite `pending` and the user without team access.
 *
 * Only honors invites for a confirmed email: reaching an authenticated session
 * already proves control of the address (credentials sign-in is blocked until
 * verified; OAuth verifies on the provider side). Idempotent and seat-aware —
 * full teams leave the invite pending, and re-running is a no-op once the
 * membership exists.
 */
export async function claimPendingInvites(userId: string): Promise<void> {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { email: true, emailVerified: true },
  });
  if (!user?.email || !user.emailVerified) return;

  const invites = await db.teamInvite.findMany({
    where: {
      email: user.email,
      status: "pending",
      expiresAt: { gt: new Date() },
    },
    include: { team: { include: { _count: { select: { members: true } } } } },
  });

  for (const invite of invites) {
    const member = await db.teamMember.findUnique({
      where: { teamId_userId: { teamId: invite.teamId, userId } },
      select: { id: true },
    });

    if (!member) {
      // Seat-aware: count members rather than `members + pending invites` so
      // the very invite we're accepting can't block itself at the limit.
      if (invite.team._count.members >= invite.team.seatLimit) continue;

      try {
        await db.teamMember.create({
          data: { teamId: invite.teamId, userId, role: "member" },
        });
      } catch (err) {
        // The membership check above is a TOCTOU window: concurrent dashboard
        // loads can both pass it and race to insert. The (teamId, userId)
        // unique constraint makes that safe — the loser just treats it as
        // "already a member" and falls through to settle the invite.
        if (!isUniqueViolation(err)) throw err;
      }
    }

    await db.teamInvite.update({
      where: { id: invite.id },
      data: { status: "accepted" },
    });
  }
}

/** Prisma's P2002 = unique constraint violation. Matched by code to stay robust
 * across the RSC bundle, where `instanceof` checks can be unreliable. */
function isUniqueViolation(err: unknown): boolean {
  return (
    typeof err === "object" &&
    err !== null &&
    (err as { code?: unknown }).code === "P2002"
  );
}
