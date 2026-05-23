import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type About2Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageBadge?: string;
  stats?: { value: string; label: string }[];
};

const DEFAULT_STATS = [
  { value: "5y", label: "Building since 2019" },
  { value: "32", label: "People across 12 countries" },
];

export default function About2({
  eyebrow = "Our story",
  title = "From a side project to a craft, in five years",
  description = "Born out of frustration with copy-paste UI kits that locked you in, we took the opposite path: every block ships as plain TSX you fully own. We're a small, distributed team obsessed with the developer experience good defaults can unlock.",
  ctaLabel = "Meet the team",
  ctaHref = "#",
  secondaryLabel = "Read our story",
  secondaryHref = "#",
  imageSrc = "https://picsum.photos/seed/cnforge-about-2/1200/1500",
  imageAlt = "Team collaborating in the studio",
  imageBadge = "Est. 2019",
  stats = DEFAULT_STATS,
}: About2Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="gap-2 self-start border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
            >
              <span className="size-1.5 rounded-full bg-success" />
              {eyebrow}
            </Badge>
            <h2
              className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.05)",
              }}
            >
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:gap-8 sm:pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <p
                    className="text-3xl tracking-tight text-foreground sm:text-4xl"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
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

          <div className="relative overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
            />
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-success" />
              {imageBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
