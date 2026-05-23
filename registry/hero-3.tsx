import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero3Props = {
  announcement?: string;
  announcementHref?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  socialProof?: { initials: string[]; caption: string };
  fileName?: string;
};

const AVATAR_COLORS = ["bg-emerald-500", "bg-blue-500", "bg-orange-500"];

export default function Hero3({
  announcement = "Now with Tailwind v4",
  announcementHref = "#",
  title = "Drop-in UI for your next launch",
  subtitle = "Production-ready React blocks designed for shipping speed. One CLI command and the code lives in your repo.",
  ctaLabel = "Install the CLI",
  ctaHref = "#",
  secondaryLabel = "View source",
  secondaryHref = "#",
  socialProof = {
    initials: ["MC", "JL", "AP"],
    caption: "Used by 25k+ developers",
  },
  fileName = "app/page.tsx",
}: Hero3Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col">
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
            className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
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
            <div className="flex items-center -space-x-2">
              {socialProof.initials.map((initials, i) => (
                <span
                  key={initials}
                  className={`inline-flex size-8 items-center justify-center rounded-full border-2 border-background text-xs font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                >
                  {initials}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{socialProof.caption}</p>
          </div>
        </div>

        <article className="overflow-hidden rounded-2xl border border-border bg-card">
          <header className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-amber-400" />
            <span className="size-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              {fileName}
            </span>
          </header>
          <pre className="overflow-x-auto px-5 py-5 font-mono text-xs leading-6 text-muted-foreground sm:text-sm sm:leading-7">
            <code>
              <span className="opacity-70">
                {"// 1 command. Zero design system to maintain."}
              </span>
              {"\n\n"}
              <span className="font-semibold text-quote-mark">import</span>
              {" { "}
              <span className="text-foreground">Hero</span>
              {" } "}
              <span className="font-semibold text-quote-mark">from</span>{" "}
              <span className="text-foreground">{'"@/blocks/hero"'}</span>
              {"\n\n"}
              <span className="font-semibold text-quote-mark">
                export default function
              </span>{" "}
              <span className="text-foreground">Page</span>
              {"() {\n  "}
              <span className="font-semibold text-quote-mark">return</span>{" "}
              <span className="text-foreground">{"<Hero />"}</span>
              {"\n}"}
            </code>
          </pre>
        </article>
      </div>
    </section>
  );
}
