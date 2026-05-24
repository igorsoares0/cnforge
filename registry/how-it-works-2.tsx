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

type HowItWorks2Props = {
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
      "Run npx shadcn add and pick the blocks you need. They land in your project as plain TSX files.",
  },
  {
    icon: "code",
    title: "Customize everything",
    description:
      "Change copy, swap icons, adjust spacing. It's your code now — edit it like any other component.",
  },
  {
    icon: "rocket",
    title: "Ship to production",
    description:
      "Push to your hosting provider. No runtime dependency, no CDN, no vendor lock-in.",
  },
];

export default function HowItWorks2({
  eyebrow = "How it works",
  title = "From zero to shipped in three steps",
  subtitle = "No design degree needed. Go from blank page to production landing in under an hour.",
  steps = DEFAULT_STEPS,
}: HowItWorks2Props) {
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
            className="absolute left-6 top-0 hidden h-full w-px bg-border sm:block"
          />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const Icon = ICONS[step.icon];
              return (
                <div key={step.title} className="relative flex gap-6">
                  <div className="relative z-10 flex shrink-0 flex-col items-center">
                    <span className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm">
                      <Icon className="size-5" />
                    </span>
                    <span className="mt-2 inline-flex size-6 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <h3
                      className="text-lg tracking-tight text-foreground"
                      style={{ fontWeight: "var(--title-weight, 700)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
