import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Cta2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  visualCaption?: string;
};

export default function Cta2({
  eyebrow = "Ready to ship?",
  title = "Launch your next landing page today",
  subtitle = "Stop rebuilding the same sections from scratch. Install what you need, customize the copy, push to production.",
  bullets = [
    "One CLI command per block",
    "Five curated themes included",
    "No vendor lock-in — it's your code",
  ],
  ctaLabel = "Get started free",
  ctaHref = "#",
  secondaryLabel = "View all blocks",
  secondaryHref = "#",
  visualCaption = "npx shadcn add @cnforge/hero-1",
}: Cta2Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <article className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <Badge
                variant="outline"
                className="gap-2 self-start border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
              >
                <span className="size-1.5 rounded-full bg-success" />
                {eyebrow}
              </Badge>

              <h2
                className="mt-6 text-3xl tracking-tight text-foreground sm:text-4xl"
                style={{
                  fontWeight: "var(--title-weight, 700)",
                  lineHeight: "var(--title-leading, 1.05)",
                }}
              >
                {title}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {subtitle}
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-success" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
                  variant="ghost"
                  nativeButton={false}
                  className="h-12 rounded-xl px-7 text-sm font-medium text-foreground hover:bg-muted"
                  render={<a href={secondaryHref}>{secondaryLabel}</a>}
                />
              </div>
            </div>

            <div className="flex items-center justify-center bg-muted/50 p-8 sm:p-10 lg:p-14">
              <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-background shadow-lg">
                <div className="flex items-center gap-1.5 border-b border-border bg-card px-4 py-3">
                  <span className="size-2.5 rounded-full bg-red-400/60" />
                  <span className="size-2.5 rounded-full bg-yellow-400/60" />
                  <span className="size-2.5 rounded-full bg-green-400/60" />
                  <span className="ml-3 text-xs text-muted-foreground">
                    Terminal
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-mono text-sm text-muted-foreground">
                    <span className="text-success">$</span>{" "}
                    <span className="text-foreground">{visualCaption}</span>
                  </p>
                  <p className="mt-3 font-mono text-xs leading-5 text-muted-foreground">
                    ✓ hero-1.tsx added to registry/hero-1.tsx
                    <br />✓ Dependencies installed
                    <br />
                    <span className="text-success">
                      Done in 1.2s
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
