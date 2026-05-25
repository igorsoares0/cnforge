import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Step = {
  title: string;
  description: string;
};

type Onboarding2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps?: Step[];
  currentStep?: number;
};

const DEFAULT_STEPS: Step[] = [
  {
    title: "Create account",
    description: "Sign up with email or GitHub.",
  },
  {
    title: "Connect repo",
    description: "Link your Git repository.",
  },
  {
    title: "Pick a theme",
    description: "Choose from 8 visual palettes.",
  },
  {
    title: "Add blocks",
    description: "Install blocks via CLI.",
  },
  {
    title: "Deploy",
    description: "Push to production in one click.",
  },
];

export default function Onboarding2({
  eyebrow = "Getting started",
  title = "You're almost there",
  subtitle = "Complete these steps to set up your workspace.",
  steps = DEFAULT_STEPS,
  currentStep = 2,
}: Onboarding2Props) {
  const completedCount = currentStep - 1;

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
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
          <p className="mt-3 text-sm text-muted-foreground">
            {completedCount} of {steps.length} completed
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 sm:mt-14">
          {steps.map((step, i) => {
            const stepNum = i + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;

            return (
              <div
                key={step.title}
                className={`relative flex flex-col items-center rounded-2xl border p-6 text-center transition-colors ${
                  isCurrent
                    ? "border-primary bg-card shadow-sm"
                    : isCompleted
                      ? "border-success/30 bg-success/[0.03]"
                      : "border-border bg-background"
                }`}
              >
                <span
                  className={`inline-flex size-10 items-center justify-center rounded-full text-sm font-semibold ${
                    isCompleted
                      ? "bg-success text-white"
                      : isCurrent
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="size-4" />
                  ) : (
                    stepNum
                  )}
                </span>
                <h3
                  className={`mt-4 text-sm ${
                    isCurrent || isCompleted
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                  {step.description}
                </p>
                {isCompleted && (
                  <span className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-success">
                    Complete
                  </span>
                )}
                {isCurrent && (
                  <span className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Current
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button className="h-10 rounded-xl bg-primary px-8 text-sm text-primary-foreground hover:opacity-90">
            {currentStep >= steps.length ? "Finish setup" : "Continue setup"}
          </Button>
        </div>
      </div>
    </section>
  );
}
