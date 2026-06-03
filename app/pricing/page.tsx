import { Check } from "lucide-react";
import Link from "next/link";

import { auth } from "@/auth";
import { CheckoutButton } from "@/components/checkout-button";
import { Button } from "@/components/ui/button";
import { getAccess } from "@/lib/entitlements";
import { PRICE_INDIVIDUAL, PRICE_TEAM } from "@/lib/paddle";

const PLANS = [
  {
    plan: "individual" as const,
    name: "Individual",
    price: "$99",
    priceId: PRICE_INDIVIDUAL,
    tagline: "One-time. Lifetime access for one developer.",
    features: [
      "Every pro block, forever",
      "All themes",
      "CLI install via your registry token",
      "Future templates included",
    ],
  },
  {
    plan: "team" as const,
    name: "Teams",
    price: "$399",
    priceId: PRICE_TEAM,
    tagline: "One-time. Up to 10 seats for your whole team.",
    features: [
      "Everything in Individual",
      "Up to 10 members (owner + 9)",
      "Invite & manage members",
      "Shared access to all blocks",
    ],
    highlight: true,
  },
];

export default async function PricingPage() {
  const session = await auth();
  const access = session?.user?.id
    ? await getAccess(session.user.id)
    : { entitled: false };

  return (
    <div className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
        >
          ← Shadcn Forge
        </Link>
        <div className="mt-8 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">
            One purchase. Every block.
          </h1>
          <p className="mt-3 text-muted-foreground">
            15% of blocks are free forever. Unlock the full library with a single
            one-time payment — no subscription.
          </p>
        </div>

        {access.entitled && (
          <p className="mt-8 rounded-lg border border-border bg-muted px-4 py-3 text-sm">
            You already have full access.{" "}
            <Link href="/dashboard" className="font-medium underline">
              Go to dashboard
            </Link>
          </p>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PLANS.map((p) => (
            <div
              key={p.plan}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.highlight
                  ? "border-primary bg-card"
                  : "border-border bg-card"
              }`}
            >
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                <span className="text-sm text-muted-foreground">one-time</span>
              </div>
              <ul className="mt-6 flex flex-col gap-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {access.entitled ? (
                  <Button size="lg" className="w-full" disabled>
                    You have access
                  </Button>
                ) : session?.user?.id ? (
                  <CheckoutButton
                    priceId={p.priceId}
                    plan={p.plan}
                    userId={session.user.id}
                    email={session.user.email ?? ""}
                    label={`Get ${p.name}`}
                  />
                ) : (
                  <Button size="lg" className="w-full" nativeButton={false} render={
                    <Link href={`/login?callbackUrl=/pricing`}>Sign in to buy</Link>
                  } />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
