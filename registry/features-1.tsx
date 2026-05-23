import {
  Code2,
  Layers,
  LineChart,
  Shield,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

type FeatureIcon = "zap" | "shield" | "code" | "layers" | "sparkles" | "chart";

type Feature = {
  icon: FeatureIcon;
  title: string;
  description: string;
};

type Features1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  features?: Feature[];
};

const ICONS: Record<FeatureIcon, LucideIcon> = {
  zap: Zap,
  shield: Shield,
  code: Code2,
  layers: Layers,
  sparkles: Sparkles,
  chart: LineChart,
};

const DEFAULT_FEATURES: Feature[] = [
  {
    icon: "zap",
    title: "Ship in minutes",
    description:
      "Drop a block in, edit copy, push. From idea to deploy without leaving your editor.",
  },
  {
    icon: "shield",
    title: "Yours forever",
    description:
      "Code is copied into your repo. No vendor lock-in, no runtime, no surprise breakage.",
  },
  {
    icon: "code",
    title: "Editable by default",
    description:
      "Every block is plain TSX with Tailwind. Read, refactor, restyle — it's your codebase.",
  },
  {
    icon: "layers",
    title: "Themes that compose",
    description:
      "Five curated palettes you can mix on the same page. Switch by toggling a CSS class.",
  },
  {
    icon: "sparkles",
    title: "Distinct, not generic",
    description:
      "Hand-tuned defaults that don't scream 'AI mockup'. Confident type, real spacing.",
  },
  {
    icon: "chart",
    title: "Responsive at 375px",
    description:
      "Every block tested at mobile, tablet, desktop. No surprise breakage on the small screen.",
  },
];

export default function Features1({
  eyebrow = "Features",
  title = "Everything you need, nothing you don't",
  subtitle = "Production-ready blocks designed for the parts of a SaaS marketing site you actually need to build.",
  features = DEFAULT_FEATURES,
}: Features1Props) {
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

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
                  className="mt-6 text-lg tracking-tight text-foreground"
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
