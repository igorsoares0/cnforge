import Link from "next/link";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { getAccess } from "@/lib/entitlements";

export default async function DashboardPage() {
  const session = await auth();
  const userId = session!.user.id;
  const access = await getAccess(userId);

  const planLabel = !access.entitled
    ? "Free"
    : access.via === "team"
      ? "Teams (member)"
      : "Individual";

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Account</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Signed in as {session?.user?.email}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Plan
          </p>
          <p className="mt-1 text-lg font-semibold">{planLabel}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Block access
          </p>
          <p className="mt-1 text-lg font-semibold">
            {access.entitled ? "All blocks" : "Free blocks only"}
          </p>
        </div>
      </div>

      {!access.entitled && (
        <div className="mt-6 rounded-xl border border-border bg-muted p-5">
          <p className="text-sm">
            You&apos;re on the free tier. Unlock every pro block with a one-time
            purchase.
          </p>
          <div className="mt-4">
            <Button render={<Link href="/pricing">View pricing</Link>} />
          </div>
        </div>
      )}
    </div>
  );
}
