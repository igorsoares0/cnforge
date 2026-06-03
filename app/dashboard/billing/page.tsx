import Link from "next/link";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { getAccess } from "@/lib/entitlements";

function formatAmount(amount: number | null, currency: string | null) {
  if (amount == null) return "—";
  // Paddle totals are in minor units.
  const value = amount / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency ?? "USD",
  }).format(value);
}

export default async function BillingPage() {
  const session = await auth();
  const userId = session!.user.id;
  const [purchases, access] = await Promise.all([
    db.purchase.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    }),
    getAccess(userId),
  ]);

  // A team member's access comes from the owner's purchase, so they have no
  // Purchase rows of their own. Show their team access instead of the "buy a
  // plan" upsell, which would wrongly imply they have no access.
  const team =
    purchases.length === 0 && access.via === "team" && access.teamId
      ? await db.team.findUnique({
          where: { id: access.teamId },
          select: { name: true },
        })
      : null;

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Your one-time purchases.
      </p>

      {team ? (
        <div className="mt-8 rounded-xl border border-border bg-card p-5">
          <p className="text-sm font-medium">
            Pro access via {team.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            You&apos;re a member of this team, which unlocks every pro block.
            Billing is managed by the team owner.
          </p>
        </div>
      ) : purchases.length === 0 ? (
        <div className="mt-8 rounded-xl border border-border bg-muted p-5">
          <p className="text-sm">You haven&apos;t purchased a plan yet.</p>
          <div className="mt-4">
            <Button nativeButton={false} render={<Link href="/pricing">See plans</Link>} />
          </div>
        </div>
      ) : (
        <ul className="mt-8 flex flex-col gap-3">
          {purchases.map((p) => (
            <li
              key={p.id}
              className="flex items-center justify-between rounded-xl border border-border bg-card p-5"
            >
              <div>
                <p className="font-medium capitalize">{p.plan} plan</p>
                <p className="text-xs text-muted-foreground">
                  {p.createdAt.toLocaleDateString()} · {p.status}
                </p>
              </div>
              <span className="font-mono text-sm">
                {formatAmount(p.amount, p.currency)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
