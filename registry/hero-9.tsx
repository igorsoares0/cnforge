import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type LiveEvent = {
  initials: string;
  action: string;
  time: string;
};

type Hero9Props = {
  announcement?: string;
  announcementHref?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  events?: LiveEvent[];
};

const AVATAR_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-purple-500",
];

const DEFAULT_EVENTS: LiveEvent[] = [
  { initials: "MC", action: "deployed hero-9 to production", time: "just now" },
  { initials: "SA", action: "added 3 blocks to project", time: "2 min ago" },
  { initials: "JD", action: "switched theme to ocean", time: "5 min ago" },
  { initials: "PR", action: "installed @cnforge/pricing-4", time: "8 min ago" },
];

export default function Hero9({
  announcement = "Live activity",
  announcementHref = "#",
  title = "Build in public, ship in private",
  subtitle = "See what developers are building right now. Join thousands shipping faster with production-ready blocks.",
  ctaLabel = "Start building",
  ctaHref = "#",
  secondaryLabel = "View activity",
  secondaryHref = "#",
  events = DEFAULT_EVENTS,
}: Hero9Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:gap-16">
        <div className="flex flex-col justify-center">
          <Badge
            variant="outline"
            className="gap-2 self-start border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
            render={<a href={announcementHref} />}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
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
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Happening now
          </p>
          {events.map((event, i) => (
            <div
              key={event.initials + event.action}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/20"
              style={{ opacity: 1 - i * 0.15 }}
            >
              <span
                className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
              >
                {event.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-foreground">
                  {event.action}
                </p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
              {i === 0 && (
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
