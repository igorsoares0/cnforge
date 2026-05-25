import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Plan = {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

type Pricing5Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  plans?: Plan[];
  billingCycle?: "monthly" | "annual";
  saveBadge?: string;
};

const DEFAULT_PLANS: Plan[] = [
  {
    name: "Starter",
    monthlyPrice: "$0",
    annualPrice: "$0",
    description: "For personal projects and experimentation.",
    features: [
      "10 blocks",
      "2 themes",
      "Community support",
      "MIT license",
    ],
    ctaLabel: "Get started",
    ctaHref: "#",
  },
  {
    name: "Pro",
    monthlyPrice: "$29",
    annualPrice: "$19",
    description: "For teams shipping real products.",
    features: [
      "All 90+ blocks",
      "All 8 themes",
      "Priority support",
      "Commercial license",
      "Early access to new blocks",
    ],
    popular: true,
    ctaLabel: "Start free trial",
    ctaHref: "#",
  },
  {
    name: "Enterprise",
    monthlyPrice: "$99",
    annualPrice: "$79",
    description: "For organizations with custom needs.",
    features: [
      "Everything in Pro",
      "Custom themes",
      "Dedicated support",
      "SLA guarantee",
      "SSO & SAML",
      "Invoice billing",
    ],
    ctaLabel: "Contact sales",
    ctaHref: "#",
  },
];

export default function Pricing5({
  eyebrow = "Pricing",
  title = "Simple, transparent pricing",
  subtitle = "Start free. Upgrade when you're ready. Cancel anytime.",
  plans = DEFAULT_PLANS,
  billingCycle = "annual",
  saveBadge = "Save 35%",
}: Pricing5Props) {
  const isAnnual = billingCycle === "annual";

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
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !isAnnual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <span
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                isAnnual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Annual
              {saveBadge && (
                <span className="rounded-full bg-success/20 px-2 py-0.5 text-[10px] font-semibold text-success">
                  {saveBadge}
                </span>
              )}
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-6 sm:p-8 ${
                plan.popular
                  ? "relative border-primary bg-card shadow-sm"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3
                className="text-lg text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className="text-4xl tracking-tight text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              {isAnnual && plan.annualPrice !== plan.monthlyPrice && (
                <p className="mt-1 text-xs text-muted-foreground">
                  <span className="line-through">
                    {plan.monthlyPrice}/mo
                  </span>{" "}
                  billed annually
                </p>
              )}
              <p className="mt-3 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <Button
                nativeButton={false}
                className={`mt-6 h-10 w-full rounded-xl text-sm hover:opacity-90 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-foreground hover:bg-muted"
                }`}
                render={
                  <a href={plan.ctaHref ?? "#"}>
                    {plan.ctaLabel ?? "Get started"}
                  </a>
                }
              />

              <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-border pt-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check className="size-4 shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
