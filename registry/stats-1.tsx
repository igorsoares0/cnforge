import {
  Globe,
  Rocket,
  type LucideIcon,
  Users,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

type StatIcon = "users" | "zap" | "globe" | "rocket";

type Stat = {
  icon: StatIcon;
  value: string;
  label: string;
};

type Stats1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  stats?: Stat[];
};

const ICONS: Record<StatIcon, LucideIcon> = {
  users: Users,
  zap: Zap,
  globe: Globe,
  rocket: Rocket,
};

const DEFAULT_STATS: Stat[] = [
  { icon: "users", value: "50,000+", label: "Active developers" },
  { icon: "zap", value: "99.9%", label: "Uptime SLA" },
  { icon: "globe", value: "120+", label: "Countries served" },
  { icon: "rocket", value: "2M+", label: "Deploys per month" },
];

export default function Stats1({
  eyebrow = "By the numbers",
  title = "Trusted at scale",
  subtitle = "Real metrics from real teams. No asterisks, no fine print.",
  stats = DEFAULT_STATS,
}: Stats1Props) {
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

        <div className="mt-14 grid grid-cols-2 gap-6 sm:mt-16 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => {
            const Icon = ICONS[stat.icon];
            return (
              <article
                key={stat.label}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center sm:p-8"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                  <Icon className="size-5" />
                </span>
                <span
                  className="mt-4 text-3xl tracking-tight text-foreground sm:text-4xl"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
