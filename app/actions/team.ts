"use server";

import { randomBytes } from "node:crypto";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { sendTeamInviteEmail } from "@/lib/email";

const INVITE_TTL = 7 * 24 * 60 * 60 * 1000;

export type TeamActionState = { error?: string; success?: string };

/** The team owned by the current user, with seat usage, or null. */
async function ownedTeam(userId: string) {
  return db.team.findFirst({
    where: { ownerId: userId },
    include: {
      members: { include: { user: { select: { email: true, name: true } } } },
      invites: { where: { status: "pending" } },
    },
  });
}

function usedSeats(team: { members: unknown[]; invites: unknown[] }) {
  // Active members plus outstanding invites both consume seats.
  return team.members.length + team.invites.length;
}

const inviteSchema = z.object({ email: z.string().email("Enter a valid email") });

export async function inviteMember(
  _prev: TeamActionState,
  formData: FormData,
): Promise<TeamActionState> {
  const session = await auth();
  if (!session?.user?.id) return { error: "Not authenticated" };

  const parsed = inviteSchema.safeParse({ email: formData.get("email") });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid email" };
  }
  const email = parsed.data.email.toLowerCase();

  const team = await ownedTeam(session.user.id);
  if (!team) return { error: "You don't own a team." };

  if (usedSeats(team) >= team.seatLimit) {
    return { error: `All ${team.seatLimit} seats are in use.` };
  }
  if (team.members.some((m) => m.user.email === email)) {
    return { error: "That person is already a member." };
  }
  if (team.invites.some((i) => i.email === email)) {
    return { error: "An invite is already pending for that email." };
  }

  const token = randomBytes(24).toString("hex");
  await db.teamInvite.create({
    data: {
      teamId: team.id,
      email,
      token,
      expiresAt: new Date(Date.now() + INVITE_TTL),
    },
  });

  // The invite is valid regardless of email delivery — don't let a Resend
  // failure (e.g. unverified domain in testing mode) discard it. Fall back to
  // sharing the link manually.
  let emailed = true;
  try {
    await sendTeamInviteEmail(email, token, team.name);
  } catch (err) {
    emailed = false;
    console.error("Failed to send team invite email:", err);
  }

  revalidatePath("/dashboard/team");
  const link = `${process.env.NEXT_PUBLIC_APP_URL ?? ""}/invite/${token}`;
  return {
    success: emailed
      ? `Invite sent to ${email}.`
      : `Invite created for ${email}, but the email couldn't be sent. Share this link directly: ${link}`,
  };
}

export async function revokeInvite(inviteId: string): Promise<TeamActionState> {
  const session = await auth();
  if (!session?.user?.id) return { error: "Not authenticated" };

  const invite = await db.teamInvite.findUnique({
    where: { id: inviteId },
    include: { team: true },
  });
  if (!invite || invite.team.ownerId !== session.user.id) {
    return { error: "Not found" };
  }
  await db.teamInvite.update({
    where: { id: inviteId },
    data: { status: "revoked" },
  });
  revalidatePath("/dashboard/team");
  return { success: "Invite revoked." };
}

export async function removeMember(memberId: string): Promise<TeamActionState> {
  const session = await auth();
  if (!session?.user?.id) return { error: "Not authenticated" };

  const member = await db.teamMember.findUnique({
    where: { id: memberId },
    include: { team: true },
  });
  if (!member || member.team.ownerId !== session.user.id) {
    return { error: "Not found" };
  }
  if (member.role === "owner") return { error: "The owner can't be removed." };

  await db.teamMember.delete({ where: { id: memberId } });
  revalidatePath("/dashboard/team");
  return { success: "Member removed." };
}

/** Accepts an invite for the currently signed-in user. */
export async function acceptInvite(token: string): Promise<TeamActionState> {
  const session = await auth();
  if (!session?.user?.id) return { error: "AUTH_REQUIRED" };

  const invite = await db.teamInvite.findUnique({
    where: { token },
    include: {
      team: {
        include: { members: true, invites: { where: { status: "pending" } } },
      },
    },
  });
  if (!invite || invite.status !== "pending" || invite.expiresAt < new Date()) {
    return { error: "This invite is invalid or has expired." };
  }

  const already = invite.team.members.some((m) => m.userId === session.user.id);
  if (already) {
    await db.teamInvite.update({
      where: { token },
      data: { status: "accepted" },
    });
    return { success: "You're already on this team." };
  }

  if (usedSeats(invite.team) >= invite.team.seatLimit) {
    return { error: "This team has no seats left." };
  }

  await db.$transaction([
    db.teamMember.create({
      data: { teamId: invite.teamId, userId: session.user.id, role: "member" },
    }),
    db.teamInvite.update({ where: { token }, data: { status: "accepted" } }),
  ]);

  return { success: `You've joined ${invite.team.name}.` };
}
