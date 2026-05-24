import { Fragment } from "react";
import { Check, Minus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type PlanColumn = {
  name: string;
  price: string;
  period: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

type FeatureRow = {
  name: string;
  values: (boolean | string)[];
};

type FeatureGroup = {
  category: string;
  features: FeatureRow[];
};

type Pricing4Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  plans?: PlanColumn[];
  groups?: FeatureGroup[];
};

const DEFAULT_PLANS: PlanColumn[] = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    ctaLabel: "Get started",
    ctaHref: "#free",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    ctaLabel: "Upgrade",
    ctaHref: "#pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/mo",
    ctaLabel: "Contact sales",
    ctaHref: "#enterprise",
  },
];

const DEFAULT_GROUPS: FeatureGroup[] = [
  {
    category: "Blocks",
    features: [
      { name: "Free blocks", values: [true, true, true] },
      { name: "Premium blocks", values: [false, true, true] },
      { name: "Custom blocks", values: [false, false, true] },
      { name: "Block count", values: ["20", "50+", "Unlimited"] },
    ],
  },
  {
    category: "Themes",
    features: [
      { name: "Default theme", values: [true, true, true] },
      { name: "All themes", values: [false, true, true] },
      { name: "Custom themes", values: [false, false, true] },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Community support", values: [true, true, true] },
      { name: "Priority support", values: [false, true, true] },
      { name: "Dedicated support", values: [false, false, true] },
      { name: "SLA guarantee", values: [false, false, true] },
    ],
  },
];

function FeatureValue({ val }: { val: boolean | string }) {
  if (val === true) return <Check className="size-4 text-success" />;
  if (val === false) return <Minus className="size-4 text-muted-foreground/40" />;
  return <span className="text-sm text-foreground">{val}</span>;
}

export default function Pricing4({
  eyebrow = "Pricing",
  title = "Compare plans",
  subtitle = "Find the right plan for your team. All plans include access to our core block library.",
  plans = DEFAULT_PLANS,
  groups = DEFAULT_GROUPS,
}: Pricing4Props) {
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

        {/* Mobile: stacked cards */}
        <div className="mt-14 flex flex-col gap-6 sm:hidden">
          {plans.map((plan, planIdx) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "rounded-2xl border-2 border-primary bg-card p-6"
                  : "rounded-2xl border border-border bg-card p-6"
              }
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-base text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {plan.name}
                </span>
                {plan.featured && (
                  <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                    Popular
                  </span>
                )}
              </div>
              <div className="mt-2 flex items-baseline gap-0.5">
                <span
                  className="text-3xl tracking-tight text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {plan.period}
                </span>
              </div>
              <Button
                size="sm"
                nativeButton={false}
                className={
                  plan.featured
                    ? "mt-4 h-9 w-full rounded-lg bg-primary px-5 text-sm text-primary-foreground hover:opacity-90"
                    : "mt-4 h-9 w-full rounded-lg border border-border bg-background px-5 text-sm text-foreground hover:bg-muted"
                }
                render={<a href={plan.ctaHref}>{plan.ctaLabel}</a>}
              />
              <div className="mt-5 flex flex-col gap-4">
                {groups.map((group) => (
                  <div key={group.category}>
                    <p className="border-t border-border pb-2 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                      {group.category}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {group.features.map((feature) => (
                        <li
                          key={feature.name}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-muted-foreground">
                            {feature.name}
                          </span>
                          <FeatureValue val={feature.values[planIdx]} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: comparison table */}
        <div className="mt-14 hidden sm:mt-16 sm:block">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-[40%] pb-8 text-left" />
                {plans.map((plan) => (
                  <th key={plan.name} className="w-[20%] pb-8 text-center">
                    <div className="flex flex-col items-center gap-2">
                      {plan.featured && (
                        <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                          Popular
                        </span>
                      )}
                      <span
                        className="text-base text-foreground"
                        style={{ fontWeight: "var(--title-weight, 700)" }}
                      >
                        {plan.name}
                      </span>
                      <div className="flex items-baseline gap-0.5">
                        <span
                          className="text-3xl tracking-tight text-foreground"
                          style={{ fontWeight: "var(--title-weight, 700)" }}
                        >
                          {plan.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {plan.period}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        nativeButton={false}
                        className={
                          plan.featured
                            ? "mt-1 h-9 rounded-lg bg-primary px-5 text-sm text-primary-foreground hover:opacity-90"
                            : "mt-1 h-9 rounded-lg border border-border bg-card px-5 text-sm text-foreground hover:bg-muted"
                        }
                        render={
                          <a href={plan.ctaHref}>{plan.ctaLabel}</a>
                        }
                      />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <Fragment key={group.category}>
                  <tr>
                    <td
                      colSpan={plans.length + 1}
                      className="border-t border-border pb-3 pt-8 text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
                    >
                      {group.category}
                    </td>
                  </tr>
                  {group.features.map((feature) => (
                    <tr
                      key={feature.name}
                      className="border-t border-border/50"
                    >
                      <td className="py-3 text-sm text-muted-foreground">
                        {feature.name}
                      </td>
                      {feature.values.map((val, i) => (
                        <td key={i} className="py-3 text-center">
                          <span className="inline-flex justify-center">
                            <FeatureValue val={val} />
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
