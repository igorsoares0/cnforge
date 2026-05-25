import { Badge } from "@/components/ui/badge";

type MetricCard = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
};

type ActivityItem = {
  initials: string;
  name: string;
  action: string;
  time: string;
};

type Dashboard1Props = {
  eyebrow?: string;
  title?: string;
  metrics?: MetricCard[];
  activities?: ActivityItem[];
};

const DEFAULT_METRICS: MetricCard[] = [
  { label: "Revenue", value: "$48.2k", delta: "+12.5%", trend: "up" },
  { label: "Active Users", value: "2,847", delta: "+8.1%", trend: "up" },
  { label: "Orders", value: "1,234", delta: "-2.3%", trend: "down" },
  { label: "Conversion", value: "3.24%", delta: "+0.4%", trend: "up" },
];

const SPARKLINE_PATHS = [
  "M0 20 L8 18 L16 22 L24 15 L32 12 L40 14 L48 8 L56 6 L64 4",
  "M0 16 L8 14 L16 18 L24 10 L32 8 L40 12 L48 6 L56 10 L64 4",
  "M0 8 L8 10 L16 6 L24 12 L32 14 L40 10 L48 16 L56 18 L64 20",
  "M0 22 L8 18 L16 20 L24 14 L32 10 L40 8 L48 6 L56 8 L64 4",
];

const DEFAULT_ACTIVITIES: ActivityItem[] = [
  {
    initials: "JD",
    name: "Jane Doe",
    action: "upgraded to Pro plan",
    time: "2 min ago",
  },
  {
    initials: "MK",
    name: "Mike Kim",
    action: "deployed v2.4.1 to production",
    time: "18 min ago",
  },
  {
    initials: "SR",
    name: "Sara R.",
    action: "invited 3 new team members",
    time: "1 hr ago",
  },
  {
    initials: "AL",
    name: "Alex Lee",
    action: "created project 'Dashboard'",
    time: "3 hr ago",
  },
  {
    initials: "PR",
    name: "Priya R.",
    action: "resolved 5 open issues",
    time: "5 hr ago",
  },
];

const AVATAR_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-purple-500",
  "bg-rose-500",
];

export default function Dashboard1({
  eyebrow = "Dashboard",
  title = "Overview",
  metrics = DEFAULT_METRICS,
  activities = DEFAULT_ACTIVITIES,
}: Dashboard1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div>
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            {eyebrow}
          </Badge>
          <h2
            className="mt-4 text-3xl tracking-tight text-foreground sm:text-4xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <article
              key={metric.label}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <div className="mt-3 flex items-end justify-between">
                <p
                  className="text-3xl tracking-tight text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {metric.value}
                </p>
                <svg
                  viewBox="0 0 64 24"
                  className={`h-8 w-16 ${metric.trend === "up" ? "text-success" : "text-destructive"}`}
                  aria-hidden
                >
                  <path
                    d={SPARKLINE_PATHS[i % SPARKLINE_PATHS.length]}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={`mt-3 text-xs font-medium ${metric.trend === "up" ? "text-success" : "text-destructive"}`}
              >
                {metric.delta}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">
                Revenue over time
              </p>
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                Last 30 days
              </span>
            </div>
            <svg
              viewBox="0 0 400 120"
              preserveAspectRatio="none"
              className="mt-6 h-40 w-full text-success"
              aria-hidden
            >
              <path
                d="M0 100 C40 95, 60 85, 80 80 S120 65, 160 55 S200 40, 240 35 S280 30, 320 28 S360 20, 400 15 L400 120 L0 120 Z"
                fill="currentColor"
                fillOpacity="var(--sparkline-fill-opacity, 0.14)"
              />
              <path
                d="M0 100 C40 95, 60 85, 80 80 S120 65, 160 55 S200 40, 240 35 S280 30, 320 28 S360 20, 400 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="mt-4 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-success" />
                <span className="text-xs text-muted-foreground">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-muted-foreground/30" />
                <span className="text-xs text-muted-foreground">Previous</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-medium text-foreground">
              Recent activity
            </p>
            <div className="mt-4 flex flex-col gap-4">
              {activities.map((item, i) => (
                <div
                  key={item.name + item.action}
                  className="flex items-start gap-3"
                >
                  <span
                    className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                  >
                    {item.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{item.name}</span>{" "}
                      <span className="text-muted-foreground">
                        {item.action}
                      </span>
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
