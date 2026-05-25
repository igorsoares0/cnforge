import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Waitlist2Props = {
  brand?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  formAction?: string;
  placeholder?: string;
  ctaLabel?: string;
  trustNote?: string;
  spotsLeft?: number;
  totalSpots?: number;
  testimonial?: { text: string; author: string; role: string };
  features?: string[];
};

const DEFAULT_FEATURES = [
  "Priority access to all blocks",
  "Early adopter pricing locked in",
  "Direct Slack channel with the team",
  "Vote on the roadmap",
];

export default function Waitlist2({
  brand = "Forge",
  eyebrow = "Early Access",
  title = "Get in before everyone else",
  subtitle = "We're letting people in gradually. Claim your spot and lock in early adopter pricing forever.",
  formAction = "#",
  placeholder = "you@company.com",
  ctaLabel = "Claim my spot",
  trustNote = "No credit card required",
  spotsLeft = 127,
  totalSpots = 500,
  testimonial = {
    text: "Got early access last week. Already shipped two landing pages with it. The blocks are ridiculously good.",
    author: "Marcus C.",
    role: "Indie Hacker",
  },
  features = DEFAULT_FEATURES,
}: Waitlist2Props) {
  const progress = Math.round(
    ((totalSpots - spotsLeft) / totalSpots) * 100
  );

  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-background px-4 py-16">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="hidden flex-col justify-center rounded-2xl bg-primary p-10 lg:flex">
          <span
            className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/20 text-lg font-bold text-primary-foreground"
            style={{ fontWeight: "var(--title-weight, 700)" }}
          >
            {brand.slice(0, 1)}
          </span>

          <blockquote className="mt-10 border-l-2 border-primary-foreground/30 pl-5">
            <p className="text-base leading-7 text-primary-foreground/90 italic">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <footer className="mt-4">
              <p className="text-sm font-medium text-primary-foreground">
                {testimonial.author}
              </p>
              <p className="text-xs text-primary-foreground/60">
                {testimonial.role}
              </p>
            </footer>
          </blockquote>

          <div className="mt-auto pt-10">
            <p className="text-xs text-primary-foreground/60">
              What you get with early access
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-primary-foreground/40" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Badge
            variant="outline"
            className="gap-2 self-start border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            {eyebrow}
          </Badge>

          <h1
            className="mt-6 text-3xl tracking-tight text-foreground sm:text-4xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {subtitle}
          </p>

          <div className="mt-8">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>
                {spotsLeft} of {totalSpots} spots left
              </span>
              <span>{progress}% claimed</span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <form
            action={formAction}
            method="POST"
            className="mt-6 flex flex-col gap-3"
          >
            <label className="sr-only" htmlFor="waitlist2-email">
              Email
            </label>
            <input
              id="waitlist2-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={placeholder}
              className="h-12 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 w-full rounded-xl bg-primary text-sm text-primary-foreground hover:opacity-90"
            >
              {ctaLabel}
              <ArrowRight className="size-4" />
            </Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">{trustNote}</p>

          <div className="mt-8 rounded-xl border border-border bg-card p-4 lg:hidden">
            <p className="text-sm text-foreground italic">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              — {testimonial.author}, {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
