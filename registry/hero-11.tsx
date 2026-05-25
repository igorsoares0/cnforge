import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero11Props = {
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
  floatingStats?: { value: string; label: string };
  trustCaption?: string;
  trustLogos?: string[];
};

const DEFAULT_LOGOS = ["Linear", "Vercel", "Stripe", "Resend"];

export default function Hero11({
  announcement = "New: image-first hero blocks",
  announcementHref = "#",
  title = "Your product deserves a better first impression",
  subtitle = "Full-bleed imagery meets conversion-ready copy. Drop in an image, customize the text, and ship a hero that actually sells.",
  ctaLabel = "Get started",
  ctaHref = "#",
  secondaryLabel = "See examples",
  secondaryHref = "#",
  imageSrc,
  imageAlt = "Product screenshot",
  floatingStats = { value: "99.9%", label: "Uptime" },
  trustCaption = "Trusted by teams at",
  trustLogos = DEFAULT_LOGOS,
}: Hero11Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="gap-2 self-start border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
              render={<a href={announcementHref} />}
            >
              <span className="size-1.5 rounded-full bg-success" />
              {announcement}
            </Badge>

            <h1
              className="mt-8 text-4xl tracking-tight text-foreground sm:text-5xl"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.05)",
              }}
            >
              {title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
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

            <div className="mt-10 border-t border-border pt-6">
              <p className="text-xs text-muted-foreground">{trustCaption}</p>
              <div className="mt-3 flex flex-wrap items-center gap-6">
                {trustLogos.map((logo) => (
                  <span
                    key={logo}
                    className="text-sm font-semibold text-muted-foreground/60"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center bg-muted">
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="size-10 text-muted-foreground/25"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                    <span className="text-xs text-muted-foreground/40">
                      {imageAlt}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-4 shadow-lg sm:-bottom-6 sm:-left-6">
              <p
                className="text-2xl tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {floatingStats.value}
              </p>
              <p className="text-xs text-muted-foreground">
                {floatingStats.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
