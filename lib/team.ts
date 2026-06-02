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
    if (member) {
      // Already on the team (e.g. accepted via the explicit button) — just
      // settle the invite's status.
      await db.teamInvite.update({
        where: { id: invite.id },
        data: { status: "accepted" },
      });
      continue;
    }

    // Seat-aware: count members rather than `members + pending invites` so the
    // very invite we're accepting can't block itself when the team is at limit.
    if (invite.team._count.members >= invite.team.seatLimit) continue;

    await db.$transaction([
      db.teamMember.create({
        data: { teamId: invite.teamId, userId, role: "member" },
      }),
      db.teamInvite.update({
        where: { id: invite.id },
        data: { status: "accepted" },
      }),
    ]);
  }
}
