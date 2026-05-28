import { ArrowRight, Copy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero13Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  installCommand?: string;
  filename?: string;
  code?: string;
};

const DEFAULT_CODE = `// app/page.tsx
import { Hero5 } from "@/registry/hero-5";
import { Pricing2 } from "@/registry/pricing-2";

export default function Page() {
  return (
    <main className="theme-ocean">
      <Hero5
        title="Ship the marketing site"
        ctaLabel="Get started"
      />
      <Pricing2 />
    </main>
  );
}`;

export default function Hero13({
  eyebrow = "For developers",
  title = "Marketing pages, built in your editor",
  subtitle = "Browse, install, edit. Every block ships as plain TSX and lands in your repo as source — no runtime, no proprietary tooling, no surprises.",
  ctaLabel = "Get started",
  ctaHref = "#",
  secondaryLabel = "Read the docs",
  secondaryHref = "#",
  installCommand = "npx shadcn add @cnforge/hero-13",
  filename = "app/page.tsx",
  code = DEFAULT_CODE,
}: Hero13Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="w-fit gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
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
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {subtitle}
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 font-mono text-sm text-foreground">
              <span className="text-muted-foreground" aria-hidden>
                $
              </span>
              <span className="flex-1 truncate">{installCommand}</span>
              <button
                type="button"
                aria-label="Copy install command"
                className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Copy className="size-3.5" />
              </button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
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

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-muted-foreground">
                {filename}
              </span>
            </div>
            <pre className="overflow-x-auto p-5 text-xs leading-6 text-foreground sm:text-sm sm:leading-7">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
