import {
  Compass,
  Heart,
  type LucideIcon,
  Sparkles,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

type ValueIcon = "compass" | "wrench" | "sparkles" | "heart";

type Value = {
  icon: ValueIcon;
  title: string;
  description: string;
};

type About4Props = {
  eyebrow?: string;
  manifesto?: string;
  attribution?: string;
  valuesTitle?: string;
  values?: Value[];
};

const ICONS: Record<ValueIcon, LucideIcon> = {
  compass: Compass,
  wrench: Wrench,
  sparkles: Sparkles,
  heart: Heart,
};

const DEFAULT_VALUES: Value[] = [
  {
    icon: "compass",
    title: "Ownership over abstraction",
    description:
      "Every block ships as plain TSX you can read, fork, and rewrite. No magic, no runtime, no surprises six months from now.",
  },
  {
    icon: "wrench",
    title: "Boring is a feature",
    description:
      "We use tools you already know — Tailwind, shadcn, Next.js. The exciting part should be your product, not our framework.",
  },
  {
    icon: "sparkles",
    title: "Design defaults that age well",
    description:
      "Themes informed by Linear, Vercel, and Stripe — not the trend cycle. Subtle borders, generous whitespace, semantic tokens.",
  },
  {
    icon: "heart",
    title: "Built for the long game",
    description:
      "Slow product, no VC pressure. We earn revenue, ship monthly, and stay close to the people using what we make.",
  },
];

export default function About4({
  eyebrow = "What we believe",
  manifesto = "Great software stops getting in your way. The best tools we've used disappear once you understand them — they don't demand attention, they hand it back.",
  attribution = "The cnforge team",
  valuesTitle = "Principles we ship by",
  values = DEFAULT_VALUES,
}: About4Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            {eyebrow}
          </Badge>

          <figure className="mt-8">
            <span
              aria-hidden
              className="block font-serif text-6xl leading-none text-quote-mark sm:text-7xl"
            >
              &ldquo;
            </span>
            <blockquote
              className="mt-2 text-2xl tracking-tight text-foreground sm:text-3xl lg:text-4xl"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.15)",
              }}
            >
              {manifesto}
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              — {attribution}
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-14">
          <h3
            className="text-center text-2xl tracking-tight text-foreground sm:text-3xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.1)",
            }}
          >
            {valuesTitle}
          </h3>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = ICONS[value.icon];
              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-7"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h4
                    className="mt-5 text-lg tracking-tight text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
