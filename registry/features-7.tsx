import { ArrowRight, Check, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type Pair = {
  before: string;
  after: string;
};

type Features7Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  beforeLabel?: string;
  afterLabel?: string;
  pairs?: Pair[];
};

const DEFAULT_PAIRS: Pair[] = [
  {
    before: "Hunt for a UI kit on every project, hope it's still maintained.",
    after: "Pull blocks straight from a registry that updates as we ship.",
  },
  {
    before: "Wrestle with theme providers and runtime CSS-in-JS.",
    after: "Swap palettes with a single class — pure CSS, zero runtime.",
  },
  {
    before: "Discover your kit's licensing terms changed after launch.",
    after: "Own the source. Commit it. Refactor it. Forget us if you want.",
  },
  {
    before: "Lose a week tweaking mobile breakpoints by hand.",
    after: "Every block is mobile-first, tested at 375 px before merge.",
  },
  {
    before: "Glue together components from three different design languages.",
    after: "One shared token system across 100+ blocks, zero visual drift.",
  },
];

export default function Features7({
  eyebrow = "Before & after",
  title = "The shift you'll feel on day one",
  subtitle = "What teams stop fighting once they switch to a registry they own.",
  beforeLabel = "Before",
  afterLabel = "After",
  pairs = DEFAULT_PAIRS,
}: Features7Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            {eyebrow}
          </Badge>
          <h2
            className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 hidden grid-cols-[1fr_auto_1fr] items-stretch overflow-hidden rounded-2xl border border-border sm:mt-16 sm:grid">
          <div className="bg-muted/40 px-6 py-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <X className="size-3.5" />
              {beforeLabel}
            </p>
          </div>
          <div className="bg-muted/40" aria-hidden />
          <div className="bg-primary/5 px-6 py-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              <Check className="size-3.5 text-success" />
              {afterLabel}
            </p>
          </div>

          {pairs.map((pair, i) => (
            <div
              key={pair.after}
              className={`contents ${i % 2 === 1 ? "" : ""}`}
            >
              <div
                className={`flex items-start px-6 py-5 ${i === 0 ? "border-t border-border" : "border-t border-border"}`}
              >
                <p className="text-sm leading-6 text-muted-foreground line-through decoration-muted-foreground/40 sm:text-base">
                  {pair.before}
                </p>
              </div>
              <div className="flex items-center justify-center border-t border-border bg-background px-2 text-muted-foreground/40">
                <ArrowRight className="size-4" />
              </div>
              <div
                className={`flex items-start border-t border-border bg-primary/[0.04] px-6 py-5`}
              >
                <p className="text-sm leading-6 text-foreground sm:text-base">
                  {pair.after}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:hidden">
          {pairs.map((pair) => (
            <article
              key={pair.after}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="flex items-start gap-3 bg-muted/40 px-5 py-4">
                <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/60" />
                <p className="text-sm leading-6 text-muted-foreground line-through decoration-muted-foreground/40">
                  {pair.before}
                </p>
              </div>
              <div className="flex items-start gap-3 bg-primary/[0.04] px-5 py-4">
                <Check className="mt-0.5 size-4 shrink-0 text-success" />
                <p className="text-sm leading-6 text-foreground">
                  {pair.after}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
