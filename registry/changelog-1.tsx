import { Badge } from "@/components/ui/badge";

type Release = {
  version: string;
  date: string;
  title: string;
  changes: string[];
};

type Changelog1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  releases?: Release[];
};

const DEFAULT_RELEASES: Release[] = [
  {
    version: "2.4.0",
    date: "May 20, 2026",
    title: "New block categories and theme improvements",
    changes: [
      "Added 6 new block categories: stats, team, how-it-works, contact, blog, banner",
      "Improved theme switching performance with CSS-only approach",
      "Fixed mobile responsiveness in navbar and FAQ blocks",
    ],
  },
  {
    version: "2.3.0",
    date: "May 10, 2026",
    title: "Three new themes and registry improvements",
    changes: [
      "Added ocean, rose, and forest themes",
      "Registry endpoint now supports cache-control headers",
      "Migrated CLI to npx shadcn add @cnforge/<name>",
    ],
  },
  {
    version: "2.2.0",
    date: "Apr 28, 2026",
    title: "CSS variables theme model",
    changes: [
      "Migrated from file-per-theme to CSS variables model",
      "All blocks now use semantic tokens exclusively",
      "Themes are scoped by .theme-<name> class for easy composition",
    ],
  },
];

export default function Changelog1({
  eyebrow = "Changelog",
  title = "What's new",
  subtitle = "The latest updates, improvements, and fixes shipped to production.",
  releases = DEFAULT_RELEASES,
}: Changelog1Props) {
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
            {releases.map((release) => (
              <article key={release.version} className="relative flex gap-6">
                <div className="relative z-10 mt-1.5 hidden shrink-0 sm:block">
                  <span className="block size-[15px] rounded-full border-[3px] border-primary bg-background" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                      {release.version}
                    </span>
                    <time className="text-xs text-muted-foreground">
                      {release.date}
                    </time>
                  </div>
                  <h3
                    className="mt-3 text-lg tracking-tight text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {release.title}
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {release.changes.map((change) => (
                      <li
                        key={change}
                        className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-2 block size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
