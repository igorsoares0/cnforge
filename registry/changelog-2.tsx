import { Badge } from "@/components/ui/badge";

type Release = {
  version: string;
  date: string;
  title: string;
  type: "feature" | "fix" | "improvement";
  changes: string[];
};

type Changelog2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  releases?: Release[];
};

const TYPE_STYLES: Record<string, string> = {
  feature: "bg-emerald-500/10 text-emerald-600",
  fix: "bg-rose-500/10 text-rose-600",
  improvement: "bg-blue-500/10 text-blue-600",
};

const DEFAULT_RELEASES: Release[] = [
  {
    version: "2.5.0",
    date: "May 24, 2026",
    title: "App blocks and new categories",
    type: "feature",
    changes: [
      "Added dashboard, onboarding, settings, and notification blocks",
      "Four new app-focused categories for SaaS products",
      "All blocks follow the same responsive and theme patterns",
    ],
  },
  {
    version: "2.4.1",
    date: "May 21, 2026",
    title: "Mobile layout fixes",
    type: "fix",
    changes: [
      "Fixed horizontal scrollbar on pricing-4 comparison table",
      "Added stacked card fallback for mobile viewports",
      "Resolved Fragment key warning in mapped table groups",
    ],
  },
  {
    version: "2.4.0",
    date: "May 20, 2026",
    title: "Expanded block catalog",
    type: "improvement",
    changes: [
      "Added 15 new block variations across hero, pricing, and contact",
      "Improved theme switching performance with CSS-only approach",
      "New login and footer block variants",
    ],
  },
  {
    version: "2.3.0",
    date: "May 10, 2026",
    title: "Three new themes",
    type: "feature",
    changes: [
      "Added ocean, rose, and forest themes",
      "Registry endpoint now supports cache-control headers",
      "Migrated CLI to npx shadcn add @cnforge/<name>",
    ],
  },
];

export default function Changelog2({
  eyebrow = "Changelog",
  title = "Release notes",
  subtitle = "Track every update we ship. Organized by version.",
  releases = DEFAULT_RELEASES,
}: Changelog2Props) {
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

        <div className="mt-14 flex flex-col gap-6 sm:mt-16">
          {releases.map((release) => (
            <article
              key={release.version}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                  {release.version}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold capitalize ${TYPE_STYLES[release.type]}`}
                >
                  {release.type}
                </span>
                <time className="text-xs text-muted-foreground">
                  {release.date}
                </time>
              </div>
              <h3
                className="mt-4 text-lg tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {release.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {release.changes.map((change) => (
                  <li
                    key={change}
                    className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mt-2 block size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    {change}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
