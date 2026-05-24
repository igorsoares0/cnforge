import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Feature = {
  title: string;
  description: string;
};

type Waitlist1Props = {
  brand?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  formAction?: string;
  placeholder?: string;
  ctaLabel?: string;
  trustNote?: string;
  features?: Feature[];
  launchLabel?: string;
};

const DEFAULT_FEATURES: Feature[] = [
  {
    title: "Instant setup",
    description: "Go from zero to production in under two minutes.",
  },
  {
    title: "Built for scale",
    description: "Handles millions of requests without breaking a sweat.",
  },
  {
    title: "Developer-first",
    description: "APIs, SDKs, and docs designed for great DX.",
  },
];

export default function Waitlist1({
  brand = "Forge",
  eyebrow = "Coming Soon",
  title = "Something big is brewing",
  subtitle = "We're building the next generation of developer tools. Be the first to know when we launch.",
  formAction = "#",
  placeholder = "you@company.com",
  ctaLabel = "Join the waitlist",
  trustNote = "No spam. Unsubscribe anytime.",
  features = DEFAULT_FEATURES,
  launchLabel = "Launching Q3 2026",
}: Waitlist1Props) {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-background px-4 py-16">
      <div className="mx-auto w-full max-w-2xl text-center">
        <span
          className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground"
          style={{ fontWeight: "var(--title-weight, 700)" }}
        >
          {brand.slice(0, 1)}
        </span>

        <Badge
          variant="outline"
          className="mt-6 gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
        >
          <span className="size-1.5 rounded-full bg-success" />
          {eyebrow}
        </Badge>

        <h1
          className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          style={{
            fontWeight: "var(--title-weight, 700)",
            lineHeight: "var(--title-leading, 1.05)",
          }}
        >
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {subtitle}
        </p>

        <form
          action={formAction}
          method="POST"
          className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <label className="sr-only" htmlFor="waitlist-email">
            Email
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={placeholder}
            className="h-12 w-full flex-1 rounded-xl border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
          />
          <Button
            type="submit"
            size="lg"
            className="h-12 shrink-0 rounded-xl bg-primary px-6 text-sm text-primary-foreground hover:opacity-90"
          >
            {ctaLabel}
            <ArrowRight className="size-4" />
          </Button>
        </form>

        <p className="mt-3 text-xs text-muted-foreground">{trustNote}</p>

        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
          <span className="size-2 rounded-full bg-success" />
          {launchLabel}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-5 text-left"
            >
              <h3
                className="text-sm tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
