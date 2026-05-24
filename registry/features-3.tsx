import {
  Code2,
  Layers,
  Palette,
  Shield,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

type FeatureIcon = "zap" | "shield" | "code" | "layers" | "sparkles" | "palette";

type Feature = {
  icon: FeatureIcon;
  title: string;
  description: string;
  span?: "wide" | "tall";
};

type Features3Props = {
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
  palette: Palette,
};

const DEFAULT_FEATURES: Feature[] = [
  {
    icon: "zap",
    title: "Ship in minutes",
    description:
      "One CLI command installs any block. Edit the copy, push to production — no design system to maintain.",
    span: "wide",
  },
  {
    icon: "palette",
    title: "8 curated themes",
    description:
      "Switch palettes with a CSS class. Dark, light, warm, cool — mix on the same page.",
  },
  {
    icon: "code",
    title: "Plain TSX + Tailwind",
    description:
      "No runtime, no CSS-in-JS. Code you can read, refactor, and maintain like any other component.",
  },
  {
    icon: "shield",
    title: "No vendor lock-in",
    description:
      "Code is copied into your repo. Delete our registry tomorrow — everything still works.",
  },
  {
    icon: "layers",
    title: "41 blocks, 22 categories",
    description:
      "Heroes, pricing, FAQs, footers, login, changelog — every section a landing page needs.",
    span: "wide",
  },
  {
    icon: "sparkles",
    title: "Responsive at 375px",
    description:
      "Every block tested at mobile, tablet, and desktop. No surprise breakage on small screens.",
  },
];

export default function Features3({
  eyebrow = "Features",
  title = "Built different",
  subtitle = "The parts that matter, designed with care. Nothing extra, nothing missing.",
  features = DEFAULT_FEATURES,
}: Features3Props) {
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

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <article
                key={feature.title}
                className={`flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8 ${
                  feature.span === "wide" ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
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
