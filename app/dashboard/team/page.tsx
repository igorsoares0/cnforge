import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { InviteForm } from "@/components/team/invite-form";
import {
  RemoveMemberButton,
  RevokeInviteButton,
} from "@/components/team/row-actions";
import { db } from "@/lib/db";

export default async function TeamPage() {
  const session = await auth();
  const team = await db.team.findFirst({
    where: { ownerId: session!.user.id },
    include: {
      members: {
        include: { user: { select: { name: true, email: true } } },
        orderBy: { joinedAt: "asc" },
      },
      invites: {
        where: { status: "pending" },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  // Only team owners have a team to manage.
  if (!team) redirect("/dashboard");

  const usedSeats = team.members.length + team.invites.length;
  const seatsLeft = team.seatLimit - usedSeats;

  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{team.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {usedSeats} of {team.seatLimit} seats used
          </p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-sm font-semibold">Invite a member</h2>
        <div className="mt-3">
          <InviteForm disabled={seatsLeft <= 0} />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold">Members</h2>
        <ul className="mt-3 divide-y divide-border rounded-xl border border-border">
          {team.members.map((m) => (
            <li key={m.id} className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-sm font-medium">
                  {m.user.name ?? m.user.email}
                </p>
                <p className="text-xs text-muted-foreground">{m.user.email}</p>
              </div>
              {m.role === "owner" ? (
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  Owner
                </span>
              ) : (
                <RemoveMemberButton memberId={m.id} />
              )}
            </li>
          ))}
        </ul>
      </section>

      {team.invites.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-semibold">Pending invites</h2>
          <ul className="mt-3 divide-y divide-border rounded-xl border border-border">
            {team.invites.map((inv) => (
              <li
                key={inv.id}
                className="flex items-center justify-between px-4 py-3"
              >
                <p className="text-sm">{inv.email}</p>
                <RevokeInviteButton inviteId={inv.id} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
