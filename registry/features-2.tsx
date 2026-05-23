import { ArrowRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type FeatureRow = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Features2Props = {
  rows?: FeatureRow[];
};

const DEFAULT_ROWS: FeatureRow[] = [
  {
    eyebrow: "Performance",
    title: "Built to ship at the speed of your team",
    description:
      "Server components by default, Tailwind v4 under the hood. Pages render in milliseconds and the bundle stays under 100kb.",
    bullets: [
      "Zero runtime — every block is plain TSX",
      "Tree-shakable imports, no global CSS",
      "Static generation friendly",
    ],
    ctaLabel: "Read the perf notes",
    ctaHref: "#",
    imageSrc: "https://picsum.photos/seed/cnforge-features-2-a/1200/900",
    imageAlt: "Performance dashboard mockup",
  },
  {
    eyebrow: "Design system",
    title: "Five curated themes, infinite combinations",
    description:
      "Scoped CSS classes let you mix palettes on the same page. Marketing site noir, docs portal solar, app dashboard default — one registry, three identities.",
    bullets: [
      "default · noir · solar · 3tchat · midnight",
      "Custom themes via CSS file in your repo",
      "No theme provider, no runtime toggle cost",
    ],
    ctaLabel: "Preview the themes",
    ctaHref: "#",
    imageSrc: "https://picsum.photos/seed/cnforge-features-2-b/1200/900",
    imageAlt: "Theme palette preview",
  },
  {
    eyebrow: "Workflow",
    title: "One CLI command, your code forever",
    description:
      "Run `npx shadcn add @cnforge/<block>` and the TSX lands in your repo. Edit it, refactor it, delete it — no library to update, no breaking changes to fear.",
    bullets: [
      "Official shadcn CLI — no proprietary tooling",
      "Dependencies resolved automatically",
      "Re-run anytime to pull updates",
    ],
    ctaLabel: "See the install flow",
    ctaHref: "#",
    imageSrc: "https://picsum.photos/seed/cnforge-features-2-c/1200/900",
    imageAlt: "CLI terminal screenshot",
  },
];

export default function Features2({ rows = DEFAULT_ROWS }: Features2Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6 sm:gap-24 lg:gap-32">
        {rows.map((row, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={row.title}
              className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
            >
              <div
                className={
                  reversed
                    ? "flex flex-col lg:order-2"
                    : "flex flex-col lg:order-1"
                }
              >
                <Badge
                  variant="outline"
                  className="w-fit gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                >
                  <span className="size-1.5 rounded-full bg-success" />
                  {row.eyebrow}
                </Badge>
                <h3
                  className="mt-5 text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl"
                  style={{
                    fontWeight: "var(--title-weight, 700)",
                    lineHeight: "var(--title-leading, 1.05)",
                  }}
                >
                  {row.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {row.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {row.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" />
                      <span className="text-sm leading-6 text-foreground sm:text-base">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
                {row.ctaLabel && (
                  <a
                    href={row.ctaHref ?? "#"}
                    className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:opacity-80"
                  >
                    {row.ctaLabel}
                    <ArrowRight className="size-4" />
                  </a>
                )}
              </div>

              <div
                className={
                  reversed
                    ? "relative overflow-hidden rounded-2xl border border-border lg:order-1"
                    : "relative overflow-hidden rounded-2xl border border-border lg:order-2"
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={row.imageSrc}
                  alt={row.imageAlt ?? ""}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
