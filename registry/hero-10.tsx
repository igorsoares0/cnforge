import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero10Props = {
  announcement?: string;
  announcementHref?: string;
  titleTop?: string;
  titleAccent?: string;
  titleBottom?: string;
  ctaLabel?: string;
  ctaHref?: string;
  caption?: string;
  stats?: { value: string; label: string }[];
};

const DEFAULT_STATS = [
  { value: "75+", label: "blocks" },
  { value: "8", label: "themes" },
  { value: "10k+", label: "installs" },
  { value: "0", label: "runtime deps" },
];

export default function Hero10({
  announcement = "Now at 75+ blocks",
  announcementHref = "#",
  titleTop = "Less boilerplate.",
  titleAccent = "More shipping.",
  titleBottom = "",
  ctaLabel = "Browse blocks",
  ctaHref = "#",
  caption = "Free and open source. Install with one command.",
  stats = DEFAULT_STATS,
}: Hero10Props) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-36">
        <Badge
          variant="outline"
          className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          render={<a href={announcementHref} />}
        >
          <span className="size-1.5 rounded-full bg-success" />
          {announcement}
        </Badge>

        <h1 className="mt-10 sm:mt-14">
          <span
            className="block text-5xl tracking-tight text-foreground sm:text-6xl lg:text-8xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {titleTop}
          </span>
          <span
            className="mt-1 block text-5xl tracking-tight text-primary sm:text-6xl lg:text-8xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {titleAccent}
          </span>
          {titleBottom && (
            <span
              className="mt-1 block text-5xl tracking-tight text-foreground sm:text-6xl lg:text-8xl"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.05)",
              }}
            >
              {titleBottom}
            </span>
          )}
        </h1>

        <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {caption}
        </p>

        <Button
          size="lg"
          nativeButton={false}
          className="mt-10 h-14 rounded-2xl bg-primary px-10 text-base text-primary-foreground hover:opacity-90"
          render={
            <a href={ctaHref}>
              {ctaLabel}
              <ArrowRight className="size-5" />
            </a>
          }
        />
      </div>

      <div className="border-t border-border">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-border sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center sm:py-10">
              <p
                className="text-3xl tracking-tight text-foreground sm:text-4xl"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
