import { Badge } from "@/components/ui/badge";

type Feature = {
  title: string;
  description: string;
  tag?: string;
};

type Column = {
  status: string;
  items: Feature[];
};

type Roadmap2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  columns?: Column[];
};

const STATUS_STYLES: Record<string, { header: string; tag: string }> = {
  Planned: {
    header: "bg-muted text-muted-foreground",
    tag: "bg-muted text-muted-foreground",
  },
  "In Progress": {
    header: "bg-amber-500/10 text-amber-600",
    tag: "bg-amber-500/10 text-amber-600",
  },
  Done: {
    header: "bg-emerald-500/10 text-emerald-600",
    tag: "bg-emerald-500/10 text-emerald-600",
  },
};

const DEFAULT_COLUMNS: Column[] = [
  {
    status: "Planned",
    items: [
      {
        title: "AI block generation",
        description: "Describe a block in natural language, get code.",
        tag: "Q4 2026",
      },
      {
        title: "Figma plugin",
        description: "Export frames directly as registry blocks.",
        tag: "Q4 2026",
      },
      {
        title: "Block analytics",
        description: "See which blocks are most installed.",
      },
    ],
  },
  {
    status: "In Progress",
    items: [
      {
        title: "Paid blocks tier",
        description: "Premium blocks with auth-gated registry endpoint.",
        tag: "Q3 2026",
      },
      {
        title: "Theme marketplace",
        description: "Community-contributed themes with revenue share.",
        tag: "Q3 2026",
      },
    ],
  },
  {
    status: "Done",
    items: [
      {
        title: "8 theme palettes",
        description: "CSS vars model with .theme-<name> scoping.",
        tag: "Shipped",
      },
      {
        title: "85+ blocks",
        description: "31 categories, all responsive and server-component ready.",
        tag: "Shipped",
      },
      {
        title: "shadcn CLI support",
        description: "Install via npx shadcn add @cnforge/<block>.",
        tag: "Shipped",
      },
    ],
  },
];

export default function Roadmap2({
  eyebrow = "Roadmap",
  title = "What we're building",
  subtitle = "A living board of what's planned, in progress, and shipped.",
  columns = DEFAULT_COLUMNS,
}: Roadmap2Props) {
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3">
          {columns.map((col) => {
            const styles = STATUS_STYLES[col.status] ?? STATUS_STYLES.Planned;
            return (
              <div key={col.status} className="flex flex-col">
                <div
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 ${styles.header}`}
                >
                  <span
                    className="text-sm"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {col.status}
                  </span>
                  <span className="text-xs">{col.items.length}</span>
                </div>
                <div className="mt-3 flex flex-col gap-3">
                  {col.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-card p-4"
                    >
                      <h3
                        className="text-sm text-foreground"
                        style={{ fontWeight: "var(--title-weight, 700)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                        {item.description}
                      </p>
                      {item.tag && (
                        <span
                          className={`mt-3 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${styles.tag}`}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
