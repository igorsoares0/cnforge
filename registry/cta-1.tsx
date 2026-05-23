import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type Cta1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function Cta1({
  eyebrow = "Ready when you are",
  title = "Ship your next landing this afternoon",
  subtitle = "One CLI command per block. Copy, paste, deploy — no design system to maintain, no library to babysit.",
  ctaLabel = "Get started",
  ctaHref = "#",
  secondaryLabel = "Browse blocks",
  secondaryHref = "#",
}: Cta1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <article className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, var(--primary-foreground) 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--primary-foreground) 0, transparent 35%)",
            }}
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground/90 backdrop-blur">
              <span className="size-1.5 rounded-full bg-primary-foreground" />
              {eyebrow}
            </span>

            <h2
              className="mt-6 text-4xl tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.05)",
              }}
            >
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/80 sm:text-lg sm:leading-8">
              {subtitle}
            </p>

            <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                nativeButton={false}
                className="h-12 rounded-xl bg-primary-foreground px-7 text-sm text-primary hover:opacity-90"
                render={
                  <a href={ctaHref}>
                    {ctaLabel}
                    <ArrowRight className="size-4" />
                  </a>
                }
              />
              <Button
                size="lg"
                variant="ghost"
                nativeButton={false}
                className="h-12 rounded-xl px-7 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10"
                render={<a href={secondaryHref}>{secondaryLabel}</a>}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
