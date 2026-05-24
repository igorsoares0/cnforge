"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Tier = {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

type Pricing3Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tiers?: Tier[];
};

const DEFAULT_TIERS: Tier[] = [
  {
    name: "Starter",
    monthlyPrice: "$0",
    annualPrice: "$0",
    description: "For side projects and prototypes.",
    features: ["All free blocks", "5 themes", "Community support", "MIT license"],
    ctaLabel: "Start free",
    ctaHref: "#",
  },
  {
    name: "Pro",
    monthlyPrice: "$19",
    annualPrice: "$15",
    description: "For teams shipping production sites.",
    features: [
      "Everything in Starter",
      "All premium blocks",
      "Priority support",
      "Early access",
      "Commercial license",
    ],
    ctaLabel: "Upgrade to Pro",
    ctaHref: "#",
    featured: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "$49",
    annualPrice: "$39",
    description: "For organizations at scale.",
    features: [
      "Everything in Pro",
      "Custom themes",
      "Dedicated support",
      "SLA guarantee",
      "SSO & team seats",
      "Invoice billing",
    ],
    ctaLabel: "Contact sales",
    ctaHref: "#",
  },
];

export default function Pricing3({
  eyebrow = "Pricing",
  title = "Plans that grow with you",
  subtitle = "Start free, upgrade when you're ready. Save 20% with annual billing.",
  tiers = DEFAULT_TIERS,
}: Pricing3Props) {
  const [annual, setAnnual] = useState(false);

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

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !annual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                annual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-1.5 text-[11px] font-semibold text-success">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={
                tier.featured
                  ? "relative flex flex-col rounded-2xl border-2 border-primary bg-card p-8 shadow-xl sm:p-10"
                  : "relative flex flex-col rounded-2xl border border-border bg-card p-8 sm:p-10"
              }
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[11px] font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3
                className="text-lg text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className="text-4xl tracking-tight text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {annual ? tier.annualPrice : tier.monthlyPrice}
                </span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {tier.description}
              </p>

              <Button
                size="lg"
                nativeButton={false}
                className={
                  tier.featured
                    ? "mt-8 h-12 w-full rounded-xl bg-primary px-7 text-sm text-primary-foreground hover:opacity-90"
                    : "mt-8 h-12 w-full rounded-xl border border-border bg-background px-7 text-sm font-medium text-foreground hover:bg-muted"
                }
                render={<a href={tier.ctaHref}>{tier.ctaLabel}</a>}
              />

              <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    <span className="text-sm leading-6 text-foreground">
                      {feature}
                    </span>
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
