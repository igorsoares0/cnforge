import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Step = {
  title: string;
  description: string;
};

type Onboarding1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps?: Step[];
  currentStep?: number;
};

const DEFAULT_STEPS: Step[] = [
  {
    title: "Create account",
    description:
      "Sign up with your email or connect your GitHub account to get started.",
  },
  {
    title: "Set up your workspace",
    description:
      "Configure your project settings, invite team members, and connect your tools.",
  },
  {
    title: "Install the CLI",
    description:
      "Run npx cnforge init to set up your local development environment.",
  },
  {
    title: "Add your first block",
    description:
      "Browse the registry and add a production-ready block to your project.",
  },
];

export default function Onboarding1({
  eyebrow = "Getting started",
  title = "Set up in minutes",
  subtitle = "Follow these steps to get your project up and running.",
  steps = DEFAULT_STEPS,
  currentStep = 1,
}: Onboarding1Props) {
  const progress = Math.round((currentStep / steps.length) * 100);

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
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

        <div className="mt-10">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Step {currentStep} of {steps.length}
            </span>
            <span>{progress}% complete</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {steps.map((step, i) => {
            const stepNum = i + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;

            return (
              <div
                key={step.title}
                className={`rounded-2xl border p-6 transition-colors ${
                  isCurrent
                    ? "border-primary bg-card"
                    : isCompleted
                      ? "border-border bg-card/50"
                      : "border-border bg-background"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                      isCompleted
                        ? "bg-success text-white"
                        : isCurrent
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? <Check className="size-4" /> : stepNum}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-base ${isCurrent || isCompleted ? "text-foreground" : "text-muted-foreground"}`}
                      style={{ fontWeight: "var(--title-weight, 700)" }}
                    >
                      {step.title}
                    </h3>
                    {(isCurrent || isCompleted) && (
                      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>
                    )}
                  </div>
                  {isCompleted && (
                    <span className="text-xs font-medium text-success">
                      Done
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="outline"
            className="h-10 rounded-xl border-border bg-card px-6 text-sm text-foreground hover:bg-muted"
            disabled={currentStep <= 1}
          >
            Back
          </Button>
          <Button className="h-10 rounded-xl bg-primary px-6 text-sm text-primary-foreground hover:opacity-90">
            {currentStep >= steps.length ? "Finish" : "Continue"}
          </Button>
        </div>
      </div>
    </section>
  );
}
