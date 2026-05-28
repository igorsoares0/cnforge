import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  link?: { label: string; href: string };
};

type Features5Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  features?: Feature[];
};

const DEFAULT_FEATURES: Feature[] = [
  {
    eyebrow: "Speed",
    title: "From idea to shipped landing in an afternoon",
    description:
      "Pick blocks, edit copy, push. The slowest part of building a marketing site is no longer building the marketing site.",
    link: { label: "See the workflow", href: "#" },
  },
  {
    eyebrow: "Ownership",
    title: "Source code you actually keep",
    description:
      "Every block ships as plain TSX into your repository. Delete our registry next year — your site keeps working, your codebase stays yours.",
    link: { label: "How it works", href: "#" },
  },
  {
    eyebrow: "Design",
    title: "Defaults that won't embarrass you in two years",
    description:
      "Borders, spacing, and type chosen with the patience of a senior designer. We tuned everything so you ship with confident defaults, not a Figma quick-export.",
  },
  {
    eyebrow: "Themes",
    title: "Eight palettes that compose on the same page",
    description:
      "A single class swaps the entire color system. Marketing site noir, docs portal solar, app dashboard default — one registry, three identities.",
    link: { label: "Browse themes", href: "#" },
  },
];

export default function Features5({
  eyebrow = "Features",
  title = "Reasons teams keep coming back",
  subtitle = "Four ideas that shape every block we ship. No checkboxes, no fluff — just the parts that matter.",
  features = DEFAULT_FEATURES,
}: Features5Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
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

        <ol className="mt-14 flex flex-col divide-y divide-border border-t border-border sm:mt-16">
          {features.map((feature, i) => (
            <li
              key={feature.title}
              className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 py-10 sm:grid-cols-[100px_1fr] sm:gap-x-10 sm:py-14"
            >
              <span
                className="text-3xl tracking-tight text-muted-foreground sm:text-4xl"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {feature.eyebrow}
                </p>
                <h3
                  className="text-2xl tracking-tight text-foreground sm:text-3xl"
                  style={{
                    fontWeight: "var(--title-weight, 700)",
                    lineHeight: "var(--title-leading, 1.1)",
                  }}
                >
                  {feature.title}
                </h3>
                <p className="mt-1 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {feature.description}
                </p>
                {feature.link && (
                  <a
                    href={feature.link.href}
                    className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:opacity-80"
                  >
                    {feature.link.label}
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
