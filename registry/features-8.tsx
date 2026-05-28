import { Badge } from "@/components/ui/badge";

type StatFeature = {
  stat: string;
  unit?: string;
  title: string;
  description: string;
};

type Features8Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  features?: StatFeature[];
};

const DEFAULT_FEATURES: StatFeature[] = [
  {
    stat: "0",
    unit: "kb runtime",
    title: "Nothing extra to ship",
    description:
      "Every block is plain TSX and Tailwind. There's no library to import, no theme provider to mount, no JS to send to the browser unless a block needs it.",
  },
  {
    stat: "8",
    unit: "themes",
    title: "Recolor with one class",
    description:
      "Wrap any section in a theme class and the entire palette changes. Mix themes on the same page without forking a single component.",
  },
  {
    stat: "375",
    unit: "px tested",
    title: "Mobile-first, every block",
    description:
      "Each block is built and reviewed at the smallest reasonable viewport first. No surprise overflow, no breakpoints duct-taped on after the fact.",
  },
  {
    stat: "1",
    unit: "command",
    title: "Add a block in seconds",
    description:
      "npx shadcn add @cnforge/<block> pulls the source straight into your repo with dependencies resolved. Re-run any time to fetch updates.",
  },
];

export default function Features8({
  eyebrow = "By the numbers",
  title = "Built with constraints, shipped with care",
  subtitle = "Four metrics that capture what the registry is actually like to use.",
  features = DEFAULT_FEATURES,
}: Features8Props) {
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

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex items-baseline gap-2">
                <span
                  className="text-6xl tracking-tighter text-foreground sm:text-7xl"
                  style={{
                    fontWeight: "var(--title-weight, 800)",
                    lineHeight: "0.9",
                  }}
                >
                  {feature.stat}
                </span>
                {feature.unit && (
                  <span className="text-sm text-muted-foreground">
                    {feature.unit}
                  </span>
                )}
              </div>
              <h3
                className="mt-6 text-lg tracking-tight text-foreground sm:text-xl"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
