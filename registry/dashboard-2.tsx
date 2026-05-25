import { Badge } from "@/components/ui/badge";

type Metric = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
};

type Task = {
  title: string;
  status: "done" | "in-progress" | "todo";
  assignee: string;
};

type Project = {
  name: string;
  progress: number;
  members: number;
};

type Dashboard2Props = {
  eyebrow?: string;
  title?: string;
  metrics?: Metric[];
  tasks?: Task[];
  projects?: Project[];
};

const DEFAULT_METRICS: Metric[] = [
  { label: "MRR", value: "$12.4k", delta: "+18%", trend: "up" },
  { label: "Churn", value: "2.1%", delta: "-0.3%", trend: "up" },
  { label: "Active projects", value: "47", delta: "+5", trend: "up" },
];

const STATUS_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  done: { bg: "bg-emerald-500/10", text: "text-emerald-600", label: "Done" },
  "in-progress": {
    bg: "bg-amber-500/10",
    text: "text-amber-600",
    label: "In progress",
  },
  todo: { bg: "bg-muted", text: "text-muted-foreground", label: "To do" },
};

const DEFAULT_TASKS: Task[] = [
  { title: "Deploy v2.5 to production", status: "done", assignee: "JD" },
  { title: "Review onboarding block PR", status: "in-progress", assignee: "MK" },
  { title: "Update API rate-limit docs", status: "in-progress", assignee: "SR" },
  { title: "Fix notification badge z-index", status: "todo", assignee: "AL" },
  { title: "Add gallery-2 masonry variant", status: "todo", assignee: "PR" },
];

const DEFAULT_PROJECTS: Project[] = [
  { name: "Dashboard redesign", progress: 82, members: 4 },
  { name: "Block registry v3", progress: 56, members: 3 },
  { name: "Theme marketplace", progress: 25, members: 2 },
];

const AVATAR_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-purple-500",
  "bg-rose-500",
];

export default function Dashboard2({
  eyebrow = "Dashboard",
  title = "Workspace",
  metrics = DEFAULT_METRICS,
  tasks = DEFAULT_TASKS,
  projects = DEFAULT_PROJECTS,
}: Dashboard2Props) {
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

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p
                className="mt-2 text-3xl tracking-tight text-foreground"
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

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">Tasks</p>
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                {tasks.length} total
              </span>
            </div>
            <div className="mt-4 flex flex-col divide-y divide-border">
              {tasks.map((task) => {
                const style = STATUS_STYLES[task.status];
                return (
                  <div
                    key={task.title}
                    className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white ${AVATAR_COLORS[tasks.indexOf(task) % AVATAR_COLORS.length]}`}
                      >
                        {task.assignee}
                      </span>
                      <p className="truncate text-sm text-foreground">
                        {task.title}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${style.bg} ${style.text}`}
                    >
                      {style.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">Projects</p>
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                {projects.length} active
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-5">
              {projects.map((project) => (
                <div key={project.name}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">
                      {project.name}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {project.members} member{project.members !== 1 ? "s" : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
