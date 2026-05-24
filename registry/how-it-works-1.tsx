import {
  Code2,
  type LucideIcon,
  Rocket,
  Terminal,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

type StepIcon = "terminal" | "code" | "rocket";

type Step = {
  icon: StepIcon;
  title: string;
  description: string;
};

type HowItWorks1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps?: Step[];
};

const ICONS: Record<StepIcon, LucideIcon> = {
  terminal: Terminal,
  code: Code2,
  rocket: Rocket,
};

const DEFAULT_STEPS: Step[] = [
  {
    icon: "terminal",
    title: "Install with one command",
    description:
      "Run npx shadcn add and pick the blocks you need. They land in your project as plain TSX files — no package to manage.",
  },
  {
    icon: "code",
    title: "Customize everything",
    description:
      "Change copy, swap icons, adjust spacing. It's your code now — edit it like any other component in your repo.",
  },
  {
    icon: "rocket",
    title: "Ship to production",
    description:
      "Push to your hosting provider. No runtime dependency, no CDN, no vendor lock-in. It's just Next.js.",
  },
];

export default function HowItWorks1({
  eyebrow = "How it works",
  title = "Three steps to a production site",
  subtitle = "No design degree needed. Go from blank page to shipped landing in under an hour.",
  steps = DEFAULT_STEPS,
}: HowItWorks1Props) {
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

        <div className="relative mt-14 sm:mt-16">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block"
          />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = ICONS[step.icon];
              return (
                <article key={step.title} className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm">
                    <span
                      className="absolute -top-2 -right-2 inline-flex size-6 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground"
                    >
                      {i + 1}
                    </span>
                    <Icon className="size-5" />
                  </span>
                  <h3
                    className="mt-6 text-lg tracking-tight text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
