import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero14Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  appUrl?: string;
};

const SIDEBAR_ITEMS = [
  { label: "Overview", active: true },
  { label: "Projects" },
  { label: "Team" },
  { label: "Billing" },
  { label: "Settings" },
];

const METRICS = [
  { label: "Active users", value: "12.4k", delta: "+18%" },
  { label: "MRR", value: "$48k", delta: "+24%" },
  { label: "Conversion", value: "3.2%", delta: "+0.4%" },
];

export default function Hero14({
  eyebrow = "Dashboard preview",
  title = "Run your business from a single page",
  subtitle = "Block templates so polished your customers will think you built them by hand. Drop them in and ship the marketing site you've been postponing.",
  ctaLabel = "Open the demo",
  ctaHref = "#",
  secondaryLabel = "See all blocks",
  secondaryHref = "#",
  appUrl = "app.forge.dev/overview",
}: Hero14Props) {
  return (
    <section className="w-full overflow-hidden bg-background pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Badge
          variant="outline"
          className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
        >
          <span className="size-1.5 rounded-full bg-success" />
          {eyebrow}
        </Badge>
        <h1
          className="mx-auto mt-6 max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          style={{
            fontWeight: "var(--title-weight, 700)",
            lineHeight: "var(--title-leading, 1.05)",
          }}
        >
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {subtitle}
        </p>
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
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl px-4 sm:mt-16 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-amber-400" />
            <span className="size-2.5 rounded-full bg-emerald-400" />
            <div className="mx-auto inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-success" />
              {appUrl}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
            <aside className="hidden border-r border-border bg-background/40 p-4 sm:block">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                <span className="inline-flex size-6 items-center justify-center rounded bg-primary text-[10px] text-primary-foreground">
                  F
                </span>
                Forge
              </div>
              <nav className="mt-5 flex flex-col gap-1">
                {SIDEBAR_ITEMS.map((item) => (
                  <span
                    key={item.label}
                    className={
                      item.active
                        ? "rounded-md bg-muted px-2.5 py-1.5 text-xs font-medium text-foreground"
                        : "rounded-md px-2.5 py-1.5 text-xs text-muted-foreground"
                    }
                  >
                    {item.label}
                  </span>
                ))}
              </nav>
            </aside>

            <div className="p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <p
                  className="text-sm text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  Overview
                </p>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                  Last 30 days
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border bg-background p-3 text-left"
                  >
                    <p className="truncate text-[10px] text-muted-foreground sm:text-xs">
                      {m.label}
                    </p>
                    <p
                      className="mt-1 text-base text-foreground sm:text-lg"
                      style={{ fontWeight: "var(--title-weight, 700)" }}
                    >
                      {m.value}
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium text-success sm:text-xs">
                      {m.delta}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-border bg-background p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-foreground sm:text-sm">
                    Revenue
                  </p>
                  <span className="text-[10px] text-muted-foreground">
                    +24% MoM
                  </span>
                </div>
                <svg
                  viewBox="0 0 400 110"
                  preserveAspectRatio="none"
                  className="mt-3 h-24 w-full text-success sm:h-28"
                  aria-hidden
                >
                  <path
                    d="M0 95 C40 90, 60 78, 80 72 S120 60, 160 50 S200 40, 240 32 S280 25, 320 20 S360 12, 400 8 L400 110 L0 110 Z"
                    fill="currentColor"
                    fillOpacity="var(--sparkline-fill-opacity, 0.14)"
                  />
                  <path
                    d="M0 95 C40 90, 60 78, 80 72 S120 60, 160 50 S200 40, 240 32 S280 25, 320 20 S360 12, 400 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
        />
      </div>

      <div className="h-16 sm:h-20 lg:h-24" aria-hidden />
    </section>
  );
}
