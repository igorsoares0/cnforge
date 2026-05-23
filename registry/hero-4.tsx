import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero4Props = {
  announcement?: string;
  announcementHref?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  socialProof?: { initials: string[]; caption: string };
  overlay?: { value: string; label: string };
};

const AVATAR_COLORS = ["bg-emerald-500", "bg-blue-500", "bg-orange-500"];

export default function Hero4({
  announcement = "New · Tailwind v4 ready",
  announcementHref = "#",
  title = "Ship beautiful UIs without losing a weekend",
  subtitle = "Production-ready React blocks you copy into your codebase. No vendor lock-in, no runtime, no design system to maintain.",
  ctaLabel = "Get started",
  ctaHref = "#",
  secondaryLabel = "Browse blocks",
  secondaryHref = "#",
  imageSrc = "https://picsum.photos/seed/cnforge-hero-4/1200/1200",
  imageAlt = "Product preview",
  socialProof = {
    initials: ["MC", "JL", "AP"],
    caption: "Trusted by 25k+ developers",
  },
  overlay = { value: "+38%", label: "Deploys this week" },
}: Hero4Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col">
            <Badge
              className="gap-2 self-start border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
              render={<a href={announcementHref} />}
            >
              <span className="size-1.5 rounded-full bg-success" />
              {announcement}
              <ArrowUpRight className="size-3" />
            </Badge>

            <h1
              className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.05)",
              }}
            >
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
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

            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center -space-x-2">
                {socialProof.initials.map((initials, i) => (
                  <span
                    key={initials}
                    className={`inline-flex size-8 items-center justify-center rounded-full border-2 border-background text-xs font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{socialProof.caption}</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="aspect-[4/3] w-full object-cover lg:aspect-square"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-lg backdrop-blur sm:bottom-6 sm:right-6">
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-success/10 text-success">
                <TrendingUp className="size-4" />
              </span>
              <div className="flex flex-col">
                <p
                  className="text-base tracking-tight text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {overlay.value}
                </p>
                <p className="text-xs text-muted-foreground">{overlay.label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
