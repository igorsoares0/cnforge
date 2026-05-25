import { Button } from "@/components/ui/button";

type MaintenanceItem = {
  label: string;
  status: "done" | "in-progress" | "pending";
};

type Maintenance1Props = {
  brand?: string;
  title?: string;
  subtitle?: string;
  eta?: string;
  items?: MaintenanceItem[];
  statusHref?: string;
  statusLabel?: string;
};

const STATUS_STYLES: Record<string, { dot: string; text: string }> = {
  done: { dot: "bg-emerald-500", text: "text-emerald-600" },
  "in-progress": { dot: "bg-amber-500 animate-pulse", text: "text-amber-600" },
  pending: { dot: "bg-muted-foreground/30", text: "text-muted-foreground" },
};

const STATUS_LABELS: Record<string, string> = {
  done: "Complete",
  "in-progress": "In progress",
  pending: "Pending",
};

const DEFAULT_ITEMS: MaintenanceItem[] = [
  { label: "Database migration", status: "done" },
  { label: "API server update", status: "in-progress" },
  { label: "Cache rebuild", status: "pending" },
  { label: "Health checks", status: "pending" },
];

export default function Maintenance1({
  brand = "Forge",
  title = "Scheduled maintenance",
  subtitle = "We're performing planned upgrades to improve reliability. This should take about 30 minutes.",
  eta = "Estimated completion: 4:30 AM UTC",
  items = DEFAULT_ITEMS,
  statusHref = "#",
  statusLabel = "View status page",
}: Maintenance1Props) {
  const completed = items.filter((i) => i.status === "done").length;
  const progress = Math.round((completed / items.length) * 100);

  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-background px-4 py-16">
      <div className="mx-auto w-full max-w-md text-center">
        <span
          className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground"
          style={{ fontWeight: "var(--title-weight, 700)" }}
        >
          {brand.slice(0, 1)}
        </span>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1">
          <span className="size-2 animate-pulse rounded-full bg-amber-500" />
          <span className="text-xs font-semibold text-amber-600">
            Maintenance in progress
          </span>
        </div>

        <h1
          className="mt-6 text-3xl tracking-tight text-foreground sm:text-4xl"
          style={{
            fontWeight: "var(--title-weight, 700)",
            lineHeight: "var(--title-leading, 1.05)",
          }}
        >
          {title}
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {subtitle}
        </p>

        <div className="mt-8">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-4">
          <div className="flex flex-col gap-3">
            {items.map((item) => {
              const style = STATUS_STYLES[item.status];
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`size-2 shrink-0 rounded-full ${style.dot}`}
                    />
                    <span className="text-sm text-foreground">
                      {item.label}
                    </span>
                  </div>
                  <span className={`text-xs font-medium ${style.text}`}>
                    {STATUS_LABELS[item.status]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">{eta}</p>

        <Button
          variant="outline"
          nativeButton={false}
          className="mt-6 h-10 rounded-xl border-border bg-card px-6 text-sm text-foreground hover:bg-muted"
          render={<a href={statusHref}>{statusLabel}</a>}
        />
      </div>
    </section>
  );
}
