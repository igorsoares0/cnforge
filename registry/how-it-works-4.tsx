import { Badge } from "@/components/ui/badge";

type Step = {
  title: string;
  description: string;
  filename: string;
  code: string;
};

type HowItWorks4Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps?: Step[];
};

const DEFAULT_STEPS: Step[] = [
  {
    title: "Add the registry to your project",
    description:
      "Point shadcn at the cnforge registry once. After this you can install any block by name — no extra config, no manual copying.",
    filename: "components.json",
    code: `{
  "registries": {
    "@cnforge": {
      "url": "https://cnforge.dev/r/{name}"
    }
  }
}`,
  },
  {
    title: "Install the blocks you want",
    description:
      "Pick a block from the catalog and run one command. Source lands directly in your repo as plain TSX — yours to edit, refactor, or rip apart.",
    filename: "terminal",
    code: `$ npx shadcn add @cnforge/hero-1
✓ Created registry/hero-1.tsx
✓ Updated app/page.tsx
Done in 1.2s`,
  },
  {
    title: "Swap themes with a single class",
    description:
      "All eight themes live as CSS variables. Wrap your app (or any section) in a theme class and every block recolors instantly.",
    filename: "app/layout.tsx",
    code: `<body className="theme-ocean">
  <Hero1 />
  <Pricing1 />
  <Footer1 />
</body>`,
  },
];

export default function HowItWorks4({
  eyebrow = "How it works",
  title = "Three commands. Zero lock-in.",
  subtitle = "Configure once, install per-block, theme at the section level.",
  steps = DEFAULT_STEPS,
}: HowItWorks4Props) {
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

        <div className="mt-14 flex flex-col gap-12 sm:mt-20 sm:gap-20">
          {steps.map((step, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={step.title}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div>
                  <span
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-sm text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="mt-5 text-2xl tracking-tight text-foreground sm:text-3xl"
                    style={{
                      fontWeight: "var(--title-weight, 700)",
                      lineHeight: "var(--title-leading, 1.1)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    {step.description}
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                    <span className="size-2.5 rounded-full bg-red-400" />
                    <span className="size-2.5 rounded-full bg-amber-400" />
                    <span className="size-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs text-muted-foreground">
                      {step.filename}
                    </span>
                  </div>
                  <pre className="overflow-x-auto p-4 text-sm leading-6 text-foreground sm:p-5">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
