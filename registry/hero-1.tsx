import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero1Props = {
  announcement?: string;
  announcementHref?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  activeBuilds?: { value: string; delta: string };
  trustedBy?: { initials: string[]; more: string; caption: string };
  deploys?: { delta: string; caption: string };
  quote?: { text: string; author: string; role: string };
};

const AVATAR_COLORS = ["bg-emerald-500", "bg-blue-500", "bg-orange-500"];

export default function Hero1({
  announcement = "Series B announcement",
  announcementHref = "#",
  title = "Ship faster, break less",
  subtitle = "One platform for your team to build, preview, and deploy with confidence.",
  ctaLabel = "Get started",
  ctaHref = "#",
  secondaryLabel = "Learn more",
  secondaryHref = "#",
  activeBuilds = { value: "25 mil", delta: "+12.4% this week" },
  trustedBy = {
    initials: ["MC", "JL", "AP"],
    more: "+9k",
    caption: "10k+ teams building daily",
  },
  deploys = { delta: "+38%", caption: "Last 7 days" },
  quote = {
    text: "Cut our deploy time from hours to minutes. It just works.",
    author: "Priya R.",
    role: "Staff Engineer, Linear",
  },
}: Hero1Props) {
  return (
    <section className="w-full bg-background py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-2">
        <article className="flex flex-col rounded-2xl border border-border bg-card p-8 sm:p-10">
          <Badge
            variant="outline"
            className="gap-2 self-start border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
            render={<a href={announcementHref} />}
          >
            <span className="size-1.5 rounded-full bg-success" />
            {announcement}
            <ArrowUpRight className="size-3" />
          </Badge>

          <h1
            className="mt-8 text-5xl tracking-tight text-foreground sm:text-6xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
            {subtitle}
          </p>

          <div className="mt-auto flex items-center gap-6 pt-10">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 rounded-xl bg-primary px-8 text-sm text-primary-foreground hover:opacity-90"
              render={<a href={ctaHref}>{ctaLabel}</a>}
            />
            <Button
              variant="link"
              nativeButton={false}
              className="h-auto p-0 text-sm font-medium text-foreground hover:no-underline"
              render={<a href={secondaryHref}>{secondaryLabel}</a>}
            />
          </div>
        </article>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">Active builds</p>
            <p
              className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl"
              style={{ fontWeight: "var(--title-weight, 700)" }}
            >
              {activeBuilds.value}
            </p>
            <p className="mt-auto pt-6 text-xs font-medium text-success">
              {activeBuilds.delta}
            </p>
          </article>

          <article className="flex flex-col rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">Trusted by</p>
            <div className="mt-6 flex items-center -space-x-2">
              {trustedBy.initials.map((initials, i) => (
                <span
                  key={initials}
                  className={`inline-flex size-9 items-center justify-center rounded-full border-2 border-card text-xs font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                >
                  {initials}
                </span>
              ))}
              <span className="inline-flex size-9 items-center justify-center rounded-full border-2 border-card bg-muted text-xs font-semibold text-muted-foreground">
                {trustedBy.more}
              </span>
            </div>
            <p className="mt-auto pt-6 text-xs text-muted-foreground">
              {trustedBy.caption}
            </p>
          </article>

          <article className="flex flex-col rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Deploys</p>
              <p className="text-xs font-medium text-success">{deploys.delta}</p>
            </div>
            <svg
              viewBox="0 0 120 32"
              preserveAspectRatio="none"
              className="mt-6 h-12 w-full text-success"
              aria-hidden
            >
              <path
                d="M 0 26 L 12 23 L 24 27 L 36 20 L 48 18 L 60 16 L 72 12 L 84 9 L 96 6 L 108 8 L 120 4 L 120 32 L 0 32 Z"
                fill="currentColor"
                fillOpacity="var(--sparkline-fill-opacity, 0.14)"
              />
              <path
                d="M 0 26 L 12 23 L 24 27 L 36 20 L 48 18 L 60 16 L 72 12 L 84 9 L 96 6 L 108 8 L 120 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-auto pt-4 text-xs text-muted-foreground">
              {deploys.caption}
            </p>
          </article>

          <article className="flex flex-col rounded-2xl border border-quote-border bg-quote p-6">
            <span
              aria-hidden
              className="font-serif text-3xl leading-none text-quote-mark"
            >
              &ldquo;
            </span>
            <p className="mt-2 text-sm leading-6 text-quote-foreground">
              {quote.text}
            </p>
            <div className="mt-auto pt-4">
              <p className="text-sm font-medium text-quote-mark">
                {quote.author}
              </p>
              <p className="text-xs text-muted-foreground">{quote.role}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
