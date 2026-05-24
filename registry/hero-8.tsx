import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AVATAR_COLORS = [
  "bg-violet-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-blue-500",
  "bg-rose-500",
];

type Hero8Props = {
  announcement?: string;
  announcementHref?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
  quoteInitials?: string;
  avatars?: string[];
  avatarCount?: string;
};

export default function Hero8({
  announcement = "Trusted by 10,000+ developers",
  announcementHref = "#",
  title = "The fastest way to build beautiful landing pages",
  subtitle = "Production-ready blocks that install in seconds. Stop building from scratch — ship what matters.",
  ctaLabel = "Start building",
  ctaHref = "#",
  secondaryLabel = "See examples",
  secondaryHref = "#",
  quote = "We cut our landing page build time from 2 weeks to 2 hours. The blocks just work — responsive, accessible, and perfectly themed.",
  quoteAuthor = "Sarah Chen",
  quoteRole = "VP Engineering at Acme",
  quoteInitials = "SC",
  avatars = ["AT", "MC", "SA", "JP", "RK"],
  avatarCount = "2,400+",
}: Hero8Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge
              variant="outline"
              className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
              render={<a href={announcementHref} />}
            >
              <span className="size-1.5 rounded-full bg-success" />
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

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((initials, i) => (
                  <span
                    key={initials}
                    className={`inline-flex size-8 items-center justify-center rounded-full border-2 border-background text-[10px] font-bold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span
                  className="text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {avatarCount}
                </span>{" "}
                developers building with us
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-8 text-muted-foreground/30"
              aria-hidden
            >
              <path
                d="M9.135 5.015c-2.427.667-4.34 2.04-5.74 4.12C2 11.214 1.3 13.58 1.3 16.23c0 .934.233 1.674.7 2.22.467.547 1.067.82 1.8.82.667 0 1.22-.22 1.66-.66.44-.44.66-.98.66-1.62 0-.6-.193-1.093-.58-1.48-.387-.387-.887-.627-1.5-.72.16-1.2.673-2.273 1.54-3.22.867-.947 1.82-1.54 2.86-1.78L9.134 5.015zm8.8 0c-2.427.667-4.34 2.04-5.74 4.12-1.4 2.08-2.1 4.447-2.1 7.1 0 .933.233 1.673.7 2.22.467.547 1.067.82 1.8.82.667 0 1.22-.22 1.66-.66.44-.44.66-.98.66-1.62 0-.6-.193-1.093-.58-1.48-.387-.387-.887-.627-1.5-.72.16-1.2.673-2.273 1.54-3.22.867-.947 1.82-1.54 2.86-1.78l.7-4.78z"
                fill="currentColor"
              />
            </svg>
            <blockquote className="mt-4 text-base leading-7 text-foreground sm:text-lg sm:leading-8">
              {quote}
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                {quoteInitials}
              </span>
              <div>
                <p
                  className="text-sm text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {quoteAuthor}
                </p>
                <p className="text-xs text-muted-foreground">{quoteRole}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
