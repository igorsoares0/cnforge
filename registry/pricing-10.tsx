import { ArrowRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type UsageTier = {
  range: string;
  price: string;
  perUnit?: string;
  description: string;
  featured?: boolean;
};

type Pricing10Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  unitLabel?: string;
  tiers?: UsageTier[];
  includedTitle?: string;
  included?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const DEFAULT_TIERS: UsageTier[] = [
  {
    range: "Up to 10k",
    price: "Free",
    description: "Generous starting tier — never charged.",
  },
  {
    range: "10k → 100k",
    price: "$0.20",
    perUnit: "/1k",
    description: "Pay only for what you ship past the free band.",
  },
  {
    range: "100k → 1M",
    price: "$0.12",
    perUnit: "/1k",
    description: "Discounted rate kicks in automatically.",
    featured: true,
  },
  {
    range: "1M → 10M",
    price: "$0.06",
    perUnit: "/1k",
    description: "Volume rate for high-traffic apps.",
  },
  {
    range: "10M+",
    price: "Custom",
    description: "Talk to sales for committed-use pricing.",
  },
];

const DEFAULT_INCLUDED = [
  "Unlimited projects on every tier",
  "No per-seat fees, ever",
  "Real-time usage dashboard",
  "Hard caps to prevent surprise bills",
  "Volume discounts auto-applied",
];

export default function Pricing10({
  eyebrow = "Pricing",
  title = "Pay only for what you actually ship",
  subtitle = "Usage-based pricing with a generous free tier. Rates drop automatically as you grow.",
  unitLabel = "events per month",
  tiers = DEFAULT_TIERS,
  includedTitle = "Included on every tier",
  included = DEFAULT_INCLUDED,
  ctaLabel = "Start free",
  ctaHref = "#",
  secondaryLabel = "Read the billing docs",
  secondaryHref = "#",
}: Pricing10Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            {eyebrow}
          </Badge>
          <h2
            className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-border sm:mt-16">
          <div className="flex items-center justify-between gap-3 bg-card px-5 py-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              {unitLabel}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Rate
            </p>
          </div>

          <ul className="flex flex-col divide-y divide-border bg-background">
            {tiers.map((tier) => (
              <li
                key={tier.range}
                className={
                  tier.featured
                    ? "flex items-center justify-between gap-4 bg-primary/[0.04] px-5 py-5 sm:px-6"
                    : "flex items-center justify-between gap-4 px-5 py-5 sm:px-6"
                }
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p
                      className="text-sm text-foreground sm:text-base"
                      style={{ fontWeight: "var(--title-weight, 700)" }}
                    >
                      {tier.range}
                    </p>
                    {tier.featured && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        Sweet spot
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs leading-5 text-muted-foreground sm:text-sm">
                    {tier.description}
                  </p>
                </div>
                <div className="flex items-baseline gap-1 shrink-0">
                  <span
                    className="text-lg tracking-tight text-foreground sm:text-2xl"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {tier.price}
                  </span>
                  {tier.perUnit && (
                    <span className="text-xs text-muted-foreground sm:text-sm">
                      {tier.perUnit}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <p
            className="text-sm uppercase tracking-[0.14em] text-foreground"
            style={{ fontWeight: "var(--title-weight, 700)" }}
          >
            {includedTitle}
          </p>
          <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-6 text-foreground"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
            <Button
              nativeButton={false}
              className="h-11 rounded-xl bg-primary px-6 text-sm text-primary-foreground hover:opacity-90"
              render={
                <a href={ctaHref}>
                  {ctaLabel}
                  <ArrowRight className="size-4" />
                </a>
              }
            />
            <Button
              variant="link"
              nativeButton={false}
              className="h-auto p-0 text-sm font-medium text-foreground hover:no-underline"
              render={<a href={secondaryHref}>{secondaryLabel}</a>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
