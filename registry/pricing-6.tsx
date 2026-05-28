import { ArrowRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Pricing6Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  planName?: string;
  planDescription?: string;
  price?: string;
  comparePrice?: string;
  period?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  features?: string[];
  guaranteeLabel?: string;
};

const DEFAULT_FEATURES = [
  "All 130+ blocks, ad infinitum",
  "8 curated themes with CSS vars",
  "shadcn CLI compatible",
  "Commercial license included",
  "Lifetime updates",
  "Source code copied to your repo",
  "Priority email support",
  "Early access to new blocks",
  "Figma source files",
  "No vendor lock-in, ever",
];

export default function Pricing6({
  eyebrow = "Pricing",
  title = "One price. Everything in.",
  subtitle = "No tiers, no upsells, no asterisks. Pay once and own the entire registry.",
  planName = "Lifetime access",
  planDescription = "Best for teams who already know what they want.",
  price = "$249",
  comparePrice = "$499",
  period = "one-time",
  ctaLabel = "Get lifetime access",
  ctaHref = "#",
  secondaryLabel = "Read the license",
  secondaryHref = "#",
  features = DEFAULT_FEATURES,
  guaranteeLabel = "30-day money-back guarantee",
}: Pricing6Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
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

        <article className="relative mt-14 overflow-hidden rounded-3xl border border-border bg-card p-8 sm:mt-16 sm:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
              <span className="size-1.5 rounded-full bg-success" />
              {planName}
            </span>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {planDescription}
            </p>

            <div className="mt-7 flex items-baseline gap-3">
              {comparePrice && (
                <span className="text-2xl text-muted-foreground/60 line-through sm:text-3xl">
                  {comparePrice}
                </span>
              )}
              <span
                className="text-6xl tracking-tighter text-foreground sm:text-7xl"
                style={{
                  fontWeight: "var(--title-weight, 800)",
                  lineHeight: "0.9",
                }}
              >
                {price}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{period}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                nativeButton={false}
                className="h-12 rounded-xl bg-primary px-7 text-sm text-primary-foreground hover:opacity-90"
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

            {guaranteeLabel && (
              <p className="mt-4 text-xs text-muted-foreground">
                {guaranteeLabel}
              </p>
            )}
          </div>

          <ul className="mt-10 grid gap-x-8 gap-y-3 border-t border-border pt-8 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm leading-6 text-foreground"
              >
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-success/10">
                  <Check className="size-3 text-success" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
