import { Badge } from "@/components/ui/badge";

type Step = {
  title: string;
  description: string;
};

type HowItWorks3Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps?: Step[];
};

const STEP_COLORS = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-purple-500",
];

const DEFAULT_STEPS: Step[] = [
  {
    title: "Install the CLI",
    description:
      "One command to scaffold your project with all the right defaults. Zero config required.",
  },
  {
    title: "Browse the registry",
    description:
      "Pick from 90+ blocks across 35 categories. Preview each one with all 8 themes before adding.",
  },
  {
    title: "Customize the code",
    description:
      "Every block lands as plain TSX in your repo. Change copy, swap icons, adjust layout — it's your code.",
  },
  {
    title: "Deploy with confidence",
    description:
      "No runtime dependencies, no CDN, no vendor lock-in. Push to any hosting provider and ship.",
  },
];

export default function HowItWorks3({
  eyebrow = "How it works",
  title = "From zero to shipped",
  subtitle = "Four simple steps to go from blank project to production-ready landing page.",
  steps = DEFAULT_STEPS,
}: HowItWorks3Props) {
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <span
                className={`inline-flex size-12 items-center justify-center rounded-xl text-xl font-bold text-white ${STEP_COLORS[i % STEP_COLORS.length]}`}
              >
                {i + 1}
              </span>
              <h3
                className="mt-5 text-base tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
