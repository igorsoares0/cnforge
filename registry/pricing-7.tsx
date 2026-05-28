import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Tier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

type Pricing7Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tiers?: Tier[];
};

const DEFAULT_TIERS: Tier[] = [
  {
    name: "Hobby",
    price: "$0",
    period: "free forever",
    description: "Try the registry on a side project.",
    features: ["20 free blocks", "3 themes", "Community help"],
    ctaLabel: "Start",
    ctaHref: "#",
  },
  {
    name: "Starter",
    price: "$12",
    period: "per month",
    description: "One developer, one project.",
    features: [
      "All 130+ blocks",
      "All 8 themes",
      "Commercial license",
      "Email support",
    ],
    ctaLabel: "Choose Starter",
    ctaHref: "#",
  },
  {
    name: "Team",
    price: "$39",
    period: "per month",
    description: "For small product teams.",
    features: [
      "Everything in Starter",
      "5 team seats",
      "Priority support",
      "Early access",
    ],
    ctaLabel: "Choose Team",
    ctaHref: "#",
    featured: true,
  },
  {
    name: "Business",
    price: "$99",
    period: "per month",
    description: "Bigger teams with bigger needs.",
    features: [
      "Everything in Team",
      "Unlimited seats",
      "SSO + audit log",
      "Invoice billing",
    ],
    ctaLabel: "Choose Business",
    ctaHref: "#",
  },
];

export default function Pricing7({
  eyebrow = "Pricing",
  title = "Four tiers, no surprises",
  subtitle = "Start small, scale when it pays off. Every tier includes the full block library.",
  tiers = DEFAULT_TIERS,
}: Pricing7Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={
                tier.featured
                  ? "relative flex flex-col rounded-2xl border-2 border-primary bg-card p-6"
                  : "relative flex flex-col rounded-2xl border border-border bg-card p-6"
              }
            >
              {tier.featured && (
                <span className="absolute -top-2.5 left-4 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  Popular
                </span>
              )}
              <p
                className="text-sm text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {tier.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {tier.description}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span
                  className="text-3xl tracking-tight text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {tier.price}
                </span>
              </div>
              {tier.period && (
                <p className="text-xs text-muted-foreground">{tier.period}</p>
              )}

              <Button
                size="sm"
                nativeButton={false}
                className={
                  tier.featured
                    ? "mt-5 h-9 w-full rounded-lg bg-primary px-4 text-xs text-primary-foreground hover:opacity-90"
                    : "mt-5 h-9 w-full rounded-lg border border-border bg-background px-4 text-xs text-foreground hover:bg-muted"
                }
                render={<a href={tier.ctaHref}>{tier.ctaLabel}</a>}
              />

              <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-border pt-5">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs leading-5 text-foreground"
                  >
                    <Check className="mt-0.5 size-3.5 shrink-0 text-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
