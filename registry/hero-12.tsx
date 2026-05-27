import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero12Props = {
  announcement?: string;
  announcementHref?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  trustLogos?: string[];
};

const DEFAULT_LOGOS = ["Vercel", "Stripe", "Linear", "Resend", "Raycast"];

export default function Hero12({
  announcement = "Now with 100+ blocks",
  announcementHref = "#",
  title = "Build stunning landing pages at the speed of thought",
  subtitle = "Production-ready UI blocks that drop into your codebase. No runtime, no lock-in — just clean TSX you own forever.",
  ctaLabel = "Get started free",
  ctaHref = "#",
  secondaryLabel = "View blocks",
  secondaryHref = "#",
  imageSrc,
  trustLogos = DEFAULT_LOGOS,
}: Hero12Props) {
  return (
    <section className="relative w-full overflow-hidden">
      {imageSrc ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt=""
            aria-hidden
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </>
      ) : (
        <div className="absolute inset-0 bg-muted" />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pb-20 pt-24 text-center sm:px-6 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-40">
        <Badge
          variant="outline"
          className="gap-2 border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm"
          render={<a href={announcementHref} />}
        >
          <span className="size-1.5 rounded-full bg-success" />
          {announcement}
        </Badge>

        <h1
          className="mt-8 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-7xl"
          style={{
            fontWeight: "var(--title-weight, 700)",
            lineHeight: "var(--title-leading, 1.05)",
          }}
        >
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 rounded-xl bg-primary px-8 text-sm text-primary-foreground hover:opacity-90"
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
            className="h-12 rounded-xl border-border bg-background/80 px-8 text-sm font-medium text-foreground backdrop-blur-sm hover:bg-muted"
            render={<a href={secondaryHref}>{secondaryLabel}</a>}
          />
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
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
    </section>
  );
}
