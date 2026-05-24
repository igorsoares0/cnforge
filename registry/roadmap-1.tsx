import { Badge } from "@/components/ui/badge";

type RoadmapStatus = "completed" | "in-progress" | "planned";

type RoadmapItem = {
  quarter: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  items: string[];
};

type Roadmap1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  roadmap?: RoadmapItem[];
};

const STATUS_STYLES: Record<RoadmapStatus, { bg: string; label: string }> = {
  completed: { bg: "bg-emerald-500", label: "Completed" },
  "in-progress": { bg: "bg-amber-500", label: "In Progress" },
  planned: { bg: "bg-muted-foreground/40", label: "Planned" },
};

const DEFAULT_ROADMAP: RoadmapItem[] = [
  {
    quarter: "Q1 2026",
    title: "Foundation",
    description: "Core infrastructure and initial block library.",
    status: "completed",
    items: [
      "Registry HTTP endpoint",
      "7 core blocks (hero, about, pricing, etc.)",
      "5 themes with CSS vars model",
    ],
  },
  {
    quarter: "Q2 2026",
    title: "Expansion",
    description: "Massive catalog expansion and showcase.",
    status: "in-progress",
    items: [
      "50+ blocks across 22 categories",
      "8 themes including ocean, rose, forest",
      "Public showcase with preview and code tabs",
    ],
  },
  {
    quarter: "Q3 2026",
    title: "Monetization",
    description: "Premium blocks, auth, and public launch.",
    status: "planned",
    items: [
      "Paid blocks with auth gating",
      "CDN-backed registry with edge caching",
      "MCP server for AI-assisted browsing",
    ],
  },
];

export default function Roadmap1({
  eyebrow = "Roadmap",
  title = "Where we're headed",
  subtitle = "A transparent look at what we've shipped, what we're building, and what's coming next.",
  roadmap = DEFAULT_ROADMAP,
}: Roadmap1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
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

        <div className="relative mt-14 sm:mt-16">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block"
          />

          <div className="flex flex-col gap-10">
            {roadmap.map((item) => {
              const status = STATUS_STYLES[item.status];
              return (
                <article key={item.quarter} className="relative flex gap-6">
                  <div className="relative z-10 mt-1.5 hidden shrink-0 sm:block">
                    <span
                      className={`block size-[15px] rounded-full border-[3px] ${status.bg} border-background`}
                      style={{
                        boxShadow: "0 0 0 2px var(--border)",
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                        {item.quarter}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground`}
                      >
                        <span
                          className={`size-1.5 rounded-full ${status.bg}`}
                        />
                        {status.label}
                      </span>
                    </div>
                    <h3
                      className="mt-3 text-lg tracking-tight text-foreground"
                      style={{ fontWeight: "var(--title-weight, 700)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                    <ul className="mt-3 flex flex-col gap-2">
                      {item.items.map((entry) => (
                        <li
                          key={entry}
                          className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                        >
                          <span className="mt-2 block size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                          {entry}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
