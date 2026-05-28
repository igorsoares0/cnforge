import { ArrowRight, Check, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Addon = {
  name: string;
  description: string;
  price: string;
  period?: string;
};

type Pricing8Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  planName?: string;
  planDescription?: string;
  price?: string;
  period?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  addonsTitle?: string;
  addonsSubtitle?: string;
  addons?: Addon[];
};

const DEFAULT_FEATURES = [
  "All 130+ blocks",
  "All 8 themes included",
  "Commercial license",
  "Email support, 24h response",
  "Lifetime updates",
];

const DEFAULT_ADDONS: Addon[] = [
  {
    name: "Custom theme",
    description: "We design a palette matched to your brand and ship it as CSS vars.",
    price: "$199",
  },
  {
    name: "Priority support",
    description: "Dedicated Slack channel with a 4-hour response SLA from our team.",
    price: "$49",
    period: "/mo",
  },
  {
    name: "Figma source files",
    description: "Editable Figma library kept in sync with every registry release.",
    price: "$79",
    period: "/mo",
  },
  {
    name: "Bespoke blocks",
    description: "We build a block to your spec and add it to your private registry.",
    price: "$499",
    period: "/block",
  },
];

export default function Pricing8({
  eyebrow = "Pricing",
  title = "Pick a base, add what you need",
  subtitle = "One simple plan to start. Bolt on whatever your team actually uses.",
  planName = "Pro plan",
  planDescription = "Everything required to ship a production marketing site.",
  price = "$29",
  period = "/mo",
  features = DEFAULT_FEATURES,
  ctaLabel = "Start Pro plan",
  ctaHref = "#",
  addonsTitle = "Optional add-ons",
  addonsSubtitle = "Stack any combination on top of the Pro plan.",
  addons = DEFAULT_ADDONS,
}: Pricing8Props) {
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

        <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
          <article className="flex flex-col rounded-2xl border-2 border-primary bg-card p-8 sm:p-10">
            <p
              className="text-sm uppercase tracking-[0.14em] text-primary"
              style={{ fontWeight: "var(--title-weight, 700)" }}
            >
              {planName}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {planDescription}
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span
                className="text-5xl tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 800)" }}
              >
                {price}
              </span>
              {period && (
                <span className="text-sm text-muted-foreground">{period}</span>
              )}
            </div>

            <Button
              size="lg"
              nativeButton={false}
              className="mt-7 h-12 w-full rounded-xl bg-primary text-sm text-primary-foreground hover:opacity-90"
              render={
                <a href={ctaHref}>
                  {ctaLabel}
                  <ArrowRight className="size-4" />
                </a>
              }
            />

            <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-border pt-6">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-muted text-foreground">
                <Plus className="size-4" />
              </span>
              <div>
                <p
                  className="text-base text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {addonsTitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {addonsSubtitle}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6"
                >
                  <div>
                    <p
                      className="text-sm text-foreground"
                      style={{ fontWeight: "var(--title-weight, 700)" }}
                    >
                      {addon.name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                      {addon.description}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1 sm:shrink-0">
                    <span
                      className="text-xl tracking-tight text-foreground"
                      style={{ fontWeight: "var(--title-weight, 700)" }}
                    >
                      {addon.price}
                    </span>
                    {addon.period && (
                      <span className="text-xs text-muted-foreground">
                        {addon.period}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
