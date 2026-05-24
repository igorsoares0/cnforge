import { Badge } from "@/components/ui/badge";

type Milestone = {
  year: string;
  title: string;
  description: string;
};

type About3Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  milestones?: Milestone[];
};

const DEFAULT_MILESTONES: Milestone[] = [
  {
    year: "2023",
    title: "Founded",
    description:
      "Started in a São Paulo apartment with one idea: make landing pages as fast to build as they are to design in Figma.",
  },
  {
    year: "2024",
    title: "First 1,000 users",
    description:
      "Launched the first 10 blocks and 3 themes. Word spread through Twitter and dev communities.",
  },
  {
    year: "2025",
    title: "shadcn registry integration",
    description:
      "Migrated to the official shadcn CLI. One command to install any block — no custom tooling needed.",
  },
  {
    year: "2026",
    title: "50 blocks, 8 themes",
    description:
      "Grew to 50 blocks across 22 categories with 8 curated themes. Thousands of teams shipping with us weekly.",
  },
];

export default function About3({
  eyebrow = "Our story",
  title = "From side project to production tool",
  subtitle = "A timeline of how we got here — and where we're going.",
  milestones = DEFAULT_MILESTONES,
}: About3Props) {
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
            className="absolute left-[23px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block"
          />

          <div className="flex flex-col gap-10">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative flex gap-6">
                <div className="relative z-10 hidden shrink-0 sm:block">
                  <span className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-foreground shadow-sm">
                    {milestone.year.slice(-2)}
                  </span>
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground sm:hidden">
                      {milestone.year}
                    </span>
                    <span className="hidden text-xs text-muted-foreground sm:block">
                      {milestone.year}
                    </span>
                  </div>
                  <h3
                    className="mt-2 text-lg tracking-tight text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {milestone.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
