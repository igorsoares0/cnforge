import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Cta4Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  stats?: { value: string; label: string }[];
};

const DEFAULT_STATS = [
  { value: "100+", label: "blocks" },
  { value: "8", label: "themes" },
  { value: "0", label: "runtime deps" },
];

export default function Cta4({
  eyebrow = "Limited time",
  title = "Start building today",
  subtitle = "Join thousands of developers shipping landing pages in minutes instead of days. Free blocks, premium themes, zero lock-in.",
  primaryLabel = "Get started free",
  primaryHref = "#",
  secondaryLabel = "See all blocks",
  secondaryHref = "#catalog",
  stats = DEFAULT_STATS,
}: Cta4Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-primary/[0.03]" />

          <div className="relative flex flex-col items-center px-6 py-14 text-center sm:px-12 sm:py-20">
            <Badge
              variant="outline"
              className="gap-2 border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground"
            >
              <Sparkles className="size-3" />
              {eyebrow}
            </Badge>

            <h2
              className="mt-8 max-w-2xl text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.05)",
              }}
            >
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                nativeButton={false}
                className="h-12 rounded-xl bg-primary px-8 text-sm text-primary-foreground hover:opacity-90"
                render={
                  <a href={primaryHref}>
                    {primaryLabel}
                    <ArrowRight className="size-4" />
                  </a>
                }
              />
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                className="h-12 rounded-xl border-border bg-background px-8 text-sm font-medium text-foreground hover:bg-muted"
                render={
                  <a href={secondaryHref}>{secondaryLabel}</a>
                }
              />
            </div>

            <div className="mt-12 flex items-center gap-6 sm:gap-10">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                  {i > 0 && (
                    <div className="h-8 w-px bg-border" aria-hidden />
                  )}
                  <div className="flex flex-col items-center">
                    <span
                      className="text-2xl tracking-tight text-foreground sm:text-3xl"
                      style={{ fontWeight: "var(--title-weight, 700)" }}
                    >
                      {stat.value}
                    </span>
                    <span className="mt-0.5 text-xs text-muted-foreground">
                      {stat.label}
                    </span>
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
