import { Badge } from "@/components/ui/badge";

type Stat = {
  value: string;
  label: string;
  description: string;
  progress: number;
};

type Stats3Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  stats?: Stat[];
};

const DEFAULT_STATS: Stat[] = [
  {
    value: "99.9%",
    label: "Uptime",
    description: "Measured over the last 12 months across all regions.",
    progress: 99.9,
  },
  {
    value: "4.8/5",
    label: "Satisfaction",
    description: "Average rating from post-deploy developer surveys.",
    progress: 96,
  },
  {
    value: "87%",
    label: "Adoption",
    description: "Teams that use blocks in production after trial.",
    progress: 87,
  },
  {
    value: "42ms",
    label: "Avg. latency",
    description: "P95 response time from our CDN edge network.",
    progress: 58,
  },
];

export default function Stats3({
  eyebrow = "By the numbers",
  title = "Built for reliability",
  subtitle = "Our infrastructure is designed to handle whatever you throw at it.",
  stats = DEFAULT_STATS,
}: Stats3Props) {
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

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5"
            >
              <span
                className="text-3xl tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {stat.value}
              </span>
              <p
                className="text-sm text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {stat.label}
              </p>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
              <p className="text-xs leading-5 text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
