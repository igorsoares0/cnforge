import { ArrowRight, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero7Props = {
  announcement?: string;
  announcementHref?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  rating?: string;
  ratingCount?: string;
  mockupTitle?: string;
};

export default function Hero7({
  announcement = "New: 50+ production-ready blocks",
  announcementHref = "#",
  title = "Ship landing pages in minutes, not days",
  subtitle = "Beautiful, responsive UI blocks you can install with one CLI command. Copy, paste, customize — done.",
  ctaLabel = "Get started",
  ctaHref = "#",
  secondaryLabel = "View blocks",
  secondaryHref = "#",
  rating = "4.9",
  ratingCount = "2.4k",
  mockupTitle = "forge.dev",
}: Hero7Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
            render={<a href={announcementHref} />}
          >
            <span className="size-1.5 rounded-full bg-success" />
            {announcement}
            <ArrowRight className="size-3" />
          </Badge>

          <h1
            className="mt-8 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
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
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 rounded-xl border-border bg-background px-7 text-sm font-medium text-foreground hover:bg-muted"
              render={<a href={secondaryHref}>{secondaryLabel}</a>}
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span
                className="text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {rating}
              </span>{" "}
              ({ratingCount} reviews)
            </span>
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-amber-400" />
              <span className="size-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-muted-foreground">
                {mockupTitle}
              </span>
            </div>
            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-3 hidden border-r border-border bg-background p-4 lg:block">
                <div className="flex flex-col gap-3">
                  {["Dashboard", "Blocks", "Themes", "Settings"].map(
                    (item, i) => (
                      <span
                        key={item}
                        className={`rounded-lg px-3 py-2 text-xs ${i === 1 ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
                        style={
                          i === 1
                            ? { fontWeight: "var(--title-weight, 700)" }
                            : undefined
                        }
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="col-span-12 p-6 lg:col-span-9 lg:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p
                      className="text-sm text-foreground"
                      style={{ fontWeight: "var(--title-weight, 700)" }}
                    >
                      All blocks
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      50 blocks across 22 categories
                    </p>
                  </div>
                  <span className="inline-flex h-8 items-center rounded-lg bg-primary px-3 text-xs text-primary-foreground">
                    + Add block
                  </span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {["Hero", "Pricing", "Features", "CTA", "FAQ", "Footer"].map(
                    (cat) => (
                      <div
                        key={cat}
                        className="rounded-lg border border-border bg-muted p-4"
                      >
                        <div className="h-16 rounded bg-background" />
                        <p className="mt-3 text-xs text-muted-foreground">
                          {cat}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
