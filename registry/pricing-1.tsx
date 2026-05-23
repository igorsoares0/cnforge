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

type Pricing1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tiers?: Tier[];
};

const DEFAULT_TIERS: Tier[] = [
  {
    name: "Starter",
    price: "$0",
    period: "month",
    description: "For hobby projects and learning the ropes.",
    features: [
      "3 blocks per month",
      "All 5 themes included",
      "Community support",
      "MIT license",
      "Standard updates",
    ],
    ctaLabel: "Start free",
    ctaHref: "#",
  },
  {
    name: "Pro",
    price: "$29",
    period: "month",
    description: "For teams shipping production work daily.",
    features: [
      "Unlimited blocks",
      "Priority email support",
      "Early access to new blocks",
      "Custom theme tooling",
      "Annual billing discount",
    ],
    ctaLabel: "Get started",
    ctaHref: "#",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with bespoke requirements.",
    features: [
      "Everything in Pro",
      "SSO and SAML",
      "Dedicated support engineer",
      "Custom SLAs",
      "Annual contracts",
    ],
    ctaLabel: "Contact sales",
    ctaHref: "#",
  },
];

export default function Pricing1({
  eyebrow = "Pricing",
  title = "Simple pricing, no surprises",
  subtitle = "Pick a plan that fits — switch or cancel anytime. Every plan includes the full block library.",
  tiers = DEFAULT_TIERS,
}: Pricing1Props) {
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

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier) => {
            const featured = tier.featured;
            return (
              <article
                key={tier.name}
                className={
                  featured
                    ? "relative flex flex-col rounded-2xl border border-primary bg-primary p-8 shadow-xl sm:p-10"
                    : "relative flex flex-col rounded-2xl border border-border bg-card p-8 sm:p-10"
                }
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-success px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}

                <h3
                  className={
                    featured
                      ? "text-base font-medium text-primary-foreground/80"
                      : "text-base font-medium text-foreground"
                  }
                >
                  {tier.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={
                      featured
                        ? "text-5xl tracking-tight text-primary-foreground"
                        : "text-5xl tracking-tight text-foreground"
                    }
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className={
                        featured
                          ? "text-sm text-primary-foreground/70"
                          : "text-sm text-muted-foreground"
                      }
                    >
                      /{tier.period}
                    </span>
                  )}
                </div>

                <p
                  className={
                    featured
                      ? "mt-4 text-sm leading-6 text-primary-foreground/80"
                      : "mt-4 text-sm leading-6 text-muted-foreground"
                  }
                >
                  {tier.description}
                </p>

                <Button
                  size="lg"
                  nativeButton={false}
                  className={
                    featured
                      ? "mt-8 h-12 w-full rounded-xl bg-primary-foreground px-7 text-sm text-primary hover:opacity-90"
                      : "mt-8 h-12 w-full rounded-xl border border-border bg-background px-7 text-sm font-medium text-foreground hover:bg-muted"
                  }
                  render={<a href={tier.ctaHref}>{tier.ctaLabel}</a>}
                />

                <ul
                  className={
                    featured
                      ? "mt-8 flex flex-col gap-3 border-t border-primary-foreground/20 pt-8"
                      : "mt-8 flex flex-col gap-3 border-t border-border pt-8"
                  }
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={
                          featured
                            ? "mt-0.5 size-4 shrink-0 text-primary-foreground"
                            : "mt-0.5 size-4 shrink-0 text-success"
                        }
                      />
                      <span
                        className={
                          featured
                            ? "text-sm leading-6 text-primary-foreground/90"
                            : "text-sm leading-6 text-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
