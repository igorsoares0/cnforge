import { db } from "@/lib/db";

export type AccessVia = "individual" | "team" | null;

export type Access = {
  entitled: boolean;
  via: AccessVia;
  teamId: string | null;
};

/**
 * A user has pro access if they hold an active individual purchase, or are a
 * member of a team whose purchase is active. Kept generic so templates can
 * reuse the same entitlement model later.
 */
export async function getAccess(userId: string): Promise<Access> {
  const [individual, membership] = await Promise.all([
    db.purchase.findFirst({
      where: { userId, plan: "individual", status: "active" },
      select: { id: true },
    }),
    db.teamMember.findFirst({
      where: { userId, team: { purchase: { status: "active" } } },
      select: { teamId: true },
    }),
  ]);

  if (individual) return { entitled: true, via: "individual", teamId: null };
  if (membership)
    return { entitled: true, via: "team", teamId: membership.teamId };
  return { entitled: false, via: null, teamId: null };
}

export async function isEntitled(userId: string): Promise<boolean> {
  return (await getAccess(userId)).entitled;
}
