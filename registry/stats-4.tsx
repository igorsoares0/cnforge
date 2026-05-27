import {
  ArrowDownRight,
  ArrowUpRight,
  Blocks,
  Globe,
  Palette,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

type StatIcon = "zap" | "palette" | "blocks" | "globe";

type Stat = {
  icon: StatIcon;
  value: string;
  label: string;
  change: string;
  trend: "up" | "down";
};

type Stats4Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  stats?: Stat[];
};

const ICONS: Record<StatIcon, LucideIcon> = {
  zap: Zap,
  palette: Palette,
  blocks: Blocks,
  globe: Globe,
};

const DEFAULT_STATS: Stat[] = [
  {
    icon: "blocks",
    value: "106",
    label: "Total blocks",
    change: "+12 this month",
    trend: "up",
  },
  {
    icon: "palette",
    value: "8",
    label: "Themes available",
    change: "+2 since launch",
    trend: "up",
  },
  {
    icon: "zap",
    value: "42ms",
    label: "Avg. install time",
    change: "-18% from last release",
    trend: "down",
  },
  {
    icon: "globe",
    value: "25k+",
    label: "Monthly installs",
    change: "+34% MoM",
    trend: "up",
  },
];

export default function Stats4({
  eyebrow = "Metrics",
  title = "Growing every week",
  subtitle = "Real numbers from our registry. Updated in real-time.",
  stats = DEFAULT_STATS,
}: Stats4Props) {
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

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = ICONS[stat.icon];
            const isPositive = stat.trend === "up";
            const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;

            return (
              <article
                key={stat.label}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium ${
                      isPositive
                        ? "bg-emerald-500/10 text-emerald-600"
                        : "bg-blue-500/10 text-blue-600"
                    }`}
                  >
                    <TrendIcon className="size-3" />
                    {stat.trend === "up" ? "Up" : "Down"}
                  </span>
                </div>

                <div>
                  <span
                    className="text-3xl tracking-tight text-foreground sm:text-4xl"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {stat.value}
                  </span>
                  <p
                    className="mt-1 text-sm text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {stat.label}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
