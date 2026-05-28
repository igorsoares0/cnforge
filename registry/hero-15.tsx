import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero15Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  marqueeTitle?: string;
  brands?: string[];
};

const DEFAULT_BRANDS = [
  "Acme Corp",
  "Lumina",
  "Northwind",
  "Helix",
  "Vertex",
  "Pulse",
  "Loom",
  "Stratos",
  "Halcyon",
  "Aperture",
  "Mercury",
  "Cobalt",
];

export default function Hero15({
  eyebrow = "Trusted by builders",
  title = "Production blocks for product teams",
  subtitle = "Stop rebuilding the same hero, pricing, and footer for every launch. Drop in blocks designed by the people who used to do it for a living.",
  ctaLabel = "Browse the catalog",
  ctaHref = "#",
  secondaryLabel = "Live demo",
  secondaryHref = "#",
  marqueeTitle = "Shipping at",
  brands = DEFAULT_BRANDS,
}: Hero15Props) {
  const marqueeStyle = `@keyframes cnforge-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.cnforge-marquee-track {
  animation: cnforge-marquee 36s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .cnforge-marquee-track { animation: none; }
}`;

  return (
    <section className="w-full overflow-hidden bg-background pt-16 sm:pt-20 lg:pt-24">
      <style dangerouslySetInnerHTML={{ __html: marqueeStyle }} />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Badge
          variant="outline"
          className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
        >
          <span className="size-1.5 rounded-full bg-success" />
          {eyebrow}
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

      <div className="mt-14 sm:mt-20 lg:mt-24">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {marqueeTitle}
        </p>
        <div className="relative mt-6 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24"
          />
          <div className="cnforge-marquee-track flex w-max gap-10 py-6 sm:gap-14">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="shrink-0 text-2xl tracking-tight text-muted-foreground/70 sm:text-3xl"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="h-12 sm:h-16 lg:h-20" aria-hidden />
    </section>
  );
}
