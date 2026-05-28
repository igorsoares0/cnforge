import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type FloatingCard = {
  label: string;
  caption: string;
};

type Hero17Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  cards?: FloatingCard[];
};

const DEFAULT_CARDS: FloatingCard[] = [
  { label: "Pricing 3", caption: "Tier comparison" },
  { label: "Hero 5", caption: "Centered launch" },
  { label: "Dashboard 1", caption: "Metrics + activity" },
  { label: "Footer 5", caption: "Mega sitemap" },
];

const CARD_STYLES = [
  "left-[-6%] top-2 -rotate-6 sm:left-[2%] sm:top-4 lg:left-[6%]",
  "right-[-4%] top-10 rotate-6 sm:right-[4%] sm:top-12 lg:right-[8%]",
  "left-[4%] bottom-[-6%] -rotate-3 sm:left-[12%] sm:bottom-[-4%] lg:left-[18%]",
  "right-[2%] bottom-[-2%] rotate-3 sm:right-[10%] sm:bottom-2 lg:right-[16%]",
];

const CARD_TINTS = [
  "bg-muted",
  "bg-muted/80",
  "bg-muted/90",
  "bg-muted/70",
];

export default function Hero17({
  eyebrow = "115+ blocks",
  title = "The fastest way to a landing that doesn't look generic",
  subtitle = "Mix and match production blocks like Lego — each one designed, themed, and battle-tested. Your codebase, your pace.",
  ctaLabel = "Browse the catalog",
  ctaHref = "#",
  secondaryLabel = "Watch a demo",
  secondaryHref = "#",
  cards = DEFAULT_CARDS,
}: Hero17Props) {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden sm:block"
      >
        {cards.map((card, i) => (
          <div
            key={card.label}
            className={`absolute w-44 select-none sm:w-52 lg:w-60 ${CARD_STYLES[i % CARD_STYLES.length]}`}
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <div
                className={`flex h-24 items-center justify-center sm:h-32 ${CARD_TINTS[i % CARD_TINTS.length]}`}
              >
                <span className="text-xl font-semibold text-muted-foreground/20 sm:text-2xl">
                  {card.label.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div className="px-3 py-2">
                <p
                  className="text-xs text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {card.label}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {card.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <Badge
          variant="outline"
          className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
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
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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

        <div className="mt-10 grid w-full max-w-md grid-cols-2 gap-3 sm:hidden">
          {cards.slice(0, 4).map((card, i) => (
            <div
              key={card.label}
              className="overflow-hidden rounded-xl border border-border bg-card text-left"
            >
              <div
                className={`flex h-16 items-center justify-center ${CARD_TINTS[i % CARD_TINTS.length]}`}
              >
                <span className="text-base font-semibold text-muted-foreground/20">
                  {card.label.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div className="px-3 py-2">
                <p
                  className="truncate text-xs text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {card.label}
                </p>
                <p className="truncate text-[10px] text-muted-foreground">
                  {card.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
