import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type Cta3Props = {
  title?: string;
  subtitle?: string;
  inputPlaceholder?: string;
  inputName?: string;
  ctaLabel?: string;
  formAction?: string;
  formMethod?: "GET" | "POST";
  trustNote?: string;
};

export default function Cta3({
  title = "Stay in the loop",
  subtitle = "Get notified when we ship new blocks, themes, and features. No spam — just product updates.",
  inputPlaceholder = "you@company.com",
  inputName = "email",
  ctaLabel = "Subscribe",
  formAction = "#",
  formMethod = "POST",
  trustNote = "Unsubscribe in one click · No marketing list",
}: Cta3Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <article className="mx-auto max-w-2xl rounded-2xl border border-border bg-card px-6 py-10 text-center sm:px-10 sm:py-14">
          <h2
            className="text-3xl tracking-tight text-foreground sm:text-4xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {subtitle}
          </p>

          <form
            action={formAction}
            method={formMethod}
            className="mt-8 flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-center"
          >
            <label className="sr-only" htmlFor="cta3-email">
              Email
            </label>
            <input
              id="cta3-email"
              type="email"
              name={inputName}
              placeholder={inputPlaceholder}
              required
              autoComplete="email"
              className="h-12 w-full flex-1 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 sm:max-w-xs"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 rounded-xl bg-primary px-6 text-sm text-primary-foreground hover:opacity-90"
            >
              {ctaLabel}
              <ArrowRight className="size-4" />
            </Button>
          </form>

          <p className="mt-3 text-xs text-muted-foreground">{trustNote}</p>
        </article>
      </div>
    </section>
  );
}
