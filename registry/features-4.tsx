import {
  Blocks,
  Globe,
  Palette,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

type FeatureIcon = "zap" | "palette" | "terminal" | "globe" | "blocks";

type Feature = {
  icon: FeatureIcon;
  title: string;
  description: string;
};

type Features4Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  highlight?: {
    icon: FeatureIcon;
    title: string;
    description: string;
    stat: string;
    statLabel: string;
  };
  features?: Feature[];
};

const ICONS: Record<FeatureIcon, LucideIcon> = {
  zap: Zap,
  palette: Palette,
  terminal: Terminal,
  globe: Globe,
  blocks: Blocks,
};

const DEFAULT_HIGHLIGHT = {
  icon: "zap" as FeatureIcon,
  title: "Ship in minutes",
  description:
    "One CLI command drops a production-ready block into your repo. Edit the copy, push to prod — no design system to maintain, no runtime to configure.",
  stat: "100+",
  statLabel: "blocks available",
};

const DEFAULT_FEATURES: Feature[] = [
  {
    icon: "palette",
    title: "Theme in one class",
    description:
      "8 curated palettes you apply with a CSS class. Dark, light, warm, cool — mix on the same page.",
  },
  {
    icon: "terminal",
    title: "CLI native",
    description:
      "Works with the official shadcn CLI. No extra tooling, no config files, no build step.",
  },
  {
    icon: "globe",
    title: "Responsive at 375 px",
    description:
      "Every block is mobile-first. Tested at phone, tablet, and desktop before it enters the registry.",
  },
  {
    icon: "blocks",
    title: "Own the code",
    description:
      "Source is copied, not imported. Delete the registry tomorrow — everything still works.",
  },
];

export default function Features4({
  eyebrow = "Features",
  title = "Everything you need, nothing you don't",
  subtitle = "Batteries-included blocks that respect your codebase. No lock-in, no runtime, no bloat.",
  highlight = DEFAULT_HIGHLIGHT,
  features = DEFAULT_FEATURES,
}: Features4Props) {
  const HighlightIcon = ICONS[highlight.icon];

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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

        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-3">
          <article className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-2 lg:row-span-2">
            <div>
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <HighlightIcon className="size-6" />
              </span>
              <h3
                className="mt-6 text-2xl tracking-tight text-foreground sm:text-3xl"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {highlight.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                {highlight.description}
              </p>
            </div>
            <div className="mt-8 flex items-end gap-2 border-t border-border pt-6">
              <span
                className="text-4xl tracking-tight text-foreground sm:text-5xl"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {highlight.stat}
              </span>
              <span className="mb-1 text-sm text-muted-foreground">
                {highlight.statLabel}
              </span>
            </div>
          </article>

          {features.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <article
                key={feature.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                  <Icon className="size-5" />
                </span>
                <h3
                  className="mt-5 text-lg tracking-tight text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
