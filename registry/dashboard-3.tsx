import { Badge } from "@/components/ui/badge";

type Metric = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
};

type BarItem = {
  label: string;
  value: number;
};

type DonutSegment = {
  label: string;
  value: number;
  color: string;
};

type PageRow = {
  path: string;
  views: string;
  bounce: string;
  avgTime: string;
};

type Dashboard3Props = {
  eyebrow?: string;
  title?: string;
  range?: string;
  metrics?: Metric[];
  bars?: BarItem[];
  segments?: DonutSegment[];
  pages?: PageRow[];
};

const DEFAULT_METRICS: Metric[] = [
  { label: "Sessions", value: "184.2k", delta: "+24.6%", trend: "up" },
  { label: "Pageviews", value: "612.8k", delta: "+18.1%", trend: "up" },
  { label: "Bounce rate", value: "38.4%", delta: "-2.1%", trend: "up" },
  { label: "Avg duration", value: "2m 47s", delta: "+0.8%", trend: "up" },
];

const DEFAULT_BARS: BarItem[] = [
  { label: "Mon", value: 62 },
  { label: "Tue", value: 78 },
  { label: "Wed", value: 54 },
  { label: "Thu", value: 88 },
  { label: "Fri", value: 96 },
  { label: "Sat", value: 44 },
  { label: "Sun", value: 38 },
];

const DEFAULT_SEGMENTS: DonutSegment[] = [
  { label: "Direct", value: 42, color: "text-success" },
  { label: "Organic", value: 28, color: "text-primary" },
  { label: "Referral", value: 18, color: "text-amber-500" },
  { label: "Social", value: 12, color: "text-rose-500" },
];

const DEFAULT_PAGES: PageRow[] = [
  { path: "/", views: "82.4k", bounce: "32%", avgTime: "3m 12s" },
  { path: "/pricing", views: "41.7k", bounce: "28%", avgTime: "4m 02s" },
  { path: "/blocks", views: "29.3k", bounce: "41%", avgTime: "2m 18s" },
  { path: "/docs/install", views: "18.1k", bounce: "22%", avgTime: "5m 41s" },
  { path: "/themes", views: "14.6k", bounce: "36%", avgTime: "2m 54s" },
];

function buildDonutPaths(segments: DonutSegment[]) {
  const total = segments.reduce((acc, s) => acc + s.value, 0);
  let offset = 0;
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  return segments.map((s) => {
    const length = (s.value / total) * circumference;
    const dasharray = `${length} ${circumference - length}`;
    const dashoffset = -offset;
    offset += length;
    return { ...s, dasharray, dashoffset };
  });
}

export default function Dashboard3({
  eyebrow = "Analytics",
  title = "Site performance",
  range = "Last 7 days",
  metrics = DEFAULT_METRICS,
  bars = DEFAULT_BARS,
  segments = DEFAULT_SEGMENTS,
  pages = DEFAULT_PAGES,
}: Dashboard3Props) {
  const maxBar = Math.max(...bars.map((b) => b.value));
  const donutPaths = buildDonutPaths(segments);

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
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
          <div className="inline-flex items-center gap-1 rounded-xl border border-border bg-card p-1 text-xs">
            {["24h", "7d", "30d", "90d"].map((r, i) => (
              <span
                key={r}
                className={
                  i === 1
                    ? "rounded-lg bg-muted px-3 py-1.5 font-medium text-foreground"
                    : "px-3 py-1.5 text-muted-foreground"
                }
              >
                {r}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl border border-border bg-card p-5 sm:p-6"
            >
              <p className="text-xs text-muted-foreground sm:text-sm">
                {metric.label}
              </p>
              <p
                className="mt-2 text-2xl tracking-tight text-foreground sm:text-3xl"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {metric.value}
              </p>
              <p
                className={`mt-2 text-xs font-medium ${metric.trend === "up" ? "text-success" : "text-destructive"}`}
              >
                {metric.delta}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">
                Sessions by day
              </p>
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                {range}
              </span>
            </div>
            <div className="mt-8 flex h-44 items-end justify-between gap-2 sm:gap-3">
              {bars.map((bar) => (
                <div
                  key={bar.label}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    className="w-full rounded-t-md bg-primary transition-all"
                    style={{
                      height: `${(bar.value / maxBar) * 100}%`,
                      opacity: "var(--sparkline-fill-opacity, 0.85)",
                    }}
                  />
                  <span className="text-[10px] text-muted-foreground sm:text-xs">
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
            <p className="text-sm font-medium text-foreground">
              Traffic sources
            </p>
            <div className="mt-4 flex items-center gap-6">
              <svg
                viewBox="0 0 40 40"
                className="size-32 -rotate-90"
                aria-hidden
              >
                {donutPaths.map((p) => (
                  <circle
                    key={p.label}
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    strokeWidth="6"
                    className={p.color}
                    stroke="currentColor"
                    strokeDasharray={p.dasharray}
                    strokeDashoffset={p.dashoffset}
                  />
                ))}
              </svg>
              <ul className="flex flex-1 flex-col gap-2.5 text-xs">
                {segments.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="flex items-center gap-2 text-foreground">
                      <span className={`size-2 rounded-full ${s.color.replace("text-", "bg-")}`} />
                      {s.label}
                    </span>
                    <span className="text-muted-foreground">{s.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-foreground">Top pages</p>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
              {pages.length} rows
            </span>
          </div>

          <div className="mt-4 hidden sm:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="py-2.5 font-medium">Path</th>
                  <th className="py-2.5 text-right font-medium">Views</th>
                  <th className="py-2.5 text-right font-medium">Bounce</th>
                  <th className="py-2.5 text-right font-medium">Avg. time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {pages.map((page) => (
                  <tr key={page.path}>
                    <td className="py-3 font-mono text-xs text-foreground">
                      {page.path}
                    </td>
                    <td className="py-3 text-right text-foreground">
                      {page.views}
                    </td>
                    <td className="py-3 text-right text-muted-foreground">
                      {page.bounce}
                    </td>
                    <td className="py-3 text-right text-muted-foreground">
                      {page.avgTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-col divide-y divide-border sm:hidden">
            {pages.map((page) => (
              <div
                key={page.path}
                className="flex flex-col gap-1.5 py-3 first:pt-0 last:pb-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-foreground">
                    {page.path}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {page.views}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>Bounce {page.bounce}</span>
                  <span aria-hidden>·</span>
                  <span>{page.avgTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
