import { ArrowRight, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero16Props = {
  eyebrow?: string;
  bigStat?: string;
  statLabel?: string;
  trendLabel?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  proof?: { value: string; label: string }[];
};

const DEFAULT_PROOF = [
  { value: "47", label: "countries shipping" },
  { value: "12k", label: "weekly active devs" },
  { value: "99.99%", label: "registry uptime" },
];

export default function Hero16({
  eyebrow = "By the numbers",
  bigStat = "100M+",
  statLabel = "blocks copied into production codebases",
  trendLabel = "+312% YoY",
  title = "The numbers do the talking",
  subtitle = "Teams across 47 countries pull blocks from our registry every day. Here's what that adds up to.",
  ctaLabel = "See the metrics",
  ctaHref = "#",
  secondaryLabel = "Read the report",
  secondaryHref = "#",
  proof = DEFAULT_PROOF,
}: Hero16Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <Badge
              variant="outline"
              className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
            >
              <span className="size-1.5 rounded-full bg-success" />
              {eyebrow}
            </Badge>
            <div className="mt-6 flex flex-col items-center lg:items-start">
              <span
                className="text-7xl tracking-tighter text-foreground sm:text-8xl lg:text-[10rem]"
                style={{
                  fontWeight: "var(--title-weight, 800)",
                  lineHeight: "0.85",
                }}
              >
                {bigStat}
              </span>
              {trendLabel && (
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                  <TrendingUp className="size-3.5" />
                  {trendLabel}
                </span>
              )}
              <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
                {statLabel}
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h1
              className="text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.05)",
              }}
            >
              {title}
            </h1>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {subtitle}
            </p>

            <ul className="mt-8 flex flex-col gap-4 border-t border-border pt-6">
              {proof.map((item) => (
                <li
                  key={item.label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span
                    className="text-2xl tracking-tight text-foreground sm:text-3xl"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {item.value}
                  </span>
                  <span className="text-right text-sm text-muted-foreground">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
