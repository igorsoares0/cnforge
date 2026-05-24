import { ArrowRight, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero6Props = {
  announcement?: string;
  announcementHref?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  videoCaption?: string;
};

export default function Hero6({
  announcement = "Watch the 2-minute demo",
  announcementHref = "#",
  title = "See how it works, then build it yourself",
  subtitle = "Watch a real landing page come together in under two minutes — from CLI install to production deploy. No cuts, no magic.",
  ctaLabel = "Get started free",
  ctaHref = "#",
  secondaryLabel = "Browse blocks",
  secondaryHref = "#",
  videoCaption = "Full walkthrough · 1:47",
}: Hero6Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
            render={<a href={announcementHref} />}
          >
            <Play className="size-3 fill-current" />
            {announcement}
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
          <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
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
        </div>

        <div className="mt-14 sm:mt-16">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
            <div className="flex aspect-video items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                  <Play className="size-6 fill-current" />
                </span>
                <span className="text-sm text-muted-foreground">
                  {videoCaption}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
