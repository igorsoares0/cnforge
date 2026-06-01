import Link from "next/link";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

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
  const purchases = await db.purchase.findMany({
    where: { userId: session!.user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Your one-time purchases.
      </p>

      {purchases.length === 0 ? (
        <div className="mt-8 rounded-xl border border-border bg-muted p-5">
          <p className="text-sm">You haven&apos;t purchased a plan yet.</p>
          <div className="mt-4">
            <Button render={<Link href="/pricing">See plans</Link>} />
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
