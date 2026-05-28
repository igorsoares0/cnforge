import {
  Accessibility,
  Box,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Globe,
  Keyboard,
  Layers,
  Lock,
  type LucideIcon,
  Palette,
  RefreshCw,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

type FeatureIcon =
  | "zap"
  | "lock"
  | "code"
  | "layers"
  | "palette"
  | "terminal"
  | "smartphone"
  | "cloud"
  | "cpu"
  | "database"
  | "workflow"
  | "refresh"
  | "globe"
  | "compass"
  | "box"
  | "sparkles"
  | "accessibility"
  | "keyboard";

type Feature = {
  icon: FeatureIcon;
  label: string;
};

type Features9Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  features?: Feature[];
};

const ICONS: Record<FeatureIcon, LucideIcon> = {
  zap: Zap,
  lock: Lock,
  code: Code2,
  layers: Layers,
  palette: Palette,
  terminal: Terminal,
  smartphone: Smartphone,
  cloud: Cloud,
  cpu: Cpu,
  database: Database,
  workflow: Workflow,
  refresh: RefreshCw,
  globe: Globe,
  compass: Compass,
  box: Box,
  sparkles: Sparkles,
  accessibility: Accessibility,
  keyboard: Keyboard,
};

const DEFAULT_FEATURES: Feature[] = [
  { icon: "zap", label: "Zero runtime" },
  { icon: "code", label: "Plain TSX source" },
  { icon: "palette", label: "8 themes included" },
  { icon: "terminal", label: "shadcn CLI native" },
  { icon: "smartphone", label: "Mobile-first 375 px" },
  { icon: "layers", label: "Composable tokens" },
  { icon: "lock", label: "No vendor lock-in" },
  { icon: "refresh", label: "Versioned updates" },
  { icon: "workflow", label: "Server components" },
  { icon: "globe", label: "i18n friendly" },
  { icon: "accessibility", label: "WCAG AA contrast" },
  { icon: "keyboard", label: "Keyboard navigable" },
  { icon: "sparkles", label: "Hand-tuned defaults" },
  { icon: "box", label: "Tree-shakable imports" },
  { icon: "compass", label: "Semantic tokens" },
  { icon: "cpu", label: "<100 kb bundle" },
  { icon: "cloud", label: "Edge runtime safe" },
  { icon: "database", label: "Headless data slots" },
];

export default function Features9({
  eyebrow = "Everything you get",
  title = "Eighteen reasons it just works",
  subtitle = "The complete inventory of what ships with every block. No asterisks, no enterprise tier hidden behind a sales call.",
  features = DEFAULT_FEATURES,
}: Features9Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 sm:mt-16 sm:grid-cols-3 lg:grid-cols-3 lg:gap-x-10">
          {features.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <li
                key={feature.label}
                className="flex items-center gap-3 border-b border-border pb-4"
              >
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                  <Icon className="size-4" />
                </span>
                <span className="text-sm text-foreground sm:text-base">
                  {feature.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
