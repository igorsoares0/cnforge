import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero2Props = {
  announcement?: string;
  announcementHref?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  trustedByCaption?: string;
  logos?: string[];
};

const DEFAULT_LOGOS = ["ACME", "GLOBEX", "INITECH", "UMBRELLA", "STARK", "WAYNE"];

export default function Hero2({
  announcement = "Read the v2 changelog",
  announcementHref = "#",
  title = "The fastest way to ship production UI",
  subtitle = "Curated React blocks with multiple themes. Copy, paste, ship — no design system to maintain.",
  ctaLabel = "Start building",
  ctaHref = "#",
  secondaryLabel = "Read the docs",
  secondaryHref = "#",
  trustedByCaption = "Trusted by teams at",
  logos = DEFAULT_LOGOS,
}: Hero2Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <Badge
          variant="outline"
          className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          render={<a href={announcementHref} />}
        >
          <span className="size-1.5 rounded-full bg-success" />
          {announcement}
          <ArrowUpRight className="size-3" />
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
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {subtitle}
        </p>

        <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
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

        <div className="mt-16 flex w-full flex-col items-center gap-6 sm:mt-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {trustedByCaption}
          </p>
          <div className="grid w-full grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-base font-semibold tracking-tight text-muted-foreground opacity-70"
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
