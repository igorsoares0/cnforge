import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Contact2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  formAction?: string;
  formMethod?: "GET" | "POST";
  submitLabel?: string;
};

export default function Contact2({
  eyebrow = "Contact us",
  title = "Let's talk about your project",
  subtitle = "Fill out the form and we'll get back to you within one business day.",
  formAction = "#",
  formMethod = "POST",
  submitLabel = "Send message",
}: Contact2Props) {
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

        <form
          action={formAction}
          method={formMethod}
          className="mt-10 flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:mt-14 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="c2-first" className="text-sm font-medium text-foreground">
                First name
              </label>
              <input
                id="c2-first"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="Jane"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="c2-last" className="text-sm font-medium text-foreground">
                Last name
              </label>
              <input
                id="c2-last"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
                className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="c2-email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="c2-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              placeholder="jane@company.com"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="c2-company" className="text-sm font-medium text-foreground">
              Company
              <span className="ml-1 text-muted-foreground">(optional)</span>
            </label>
            <input
              id="c2-company"
              name="company"
              type="text"
              autoComplete="organization"
              className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              placeholder="Acme Inc."
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="c2-message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="c2-message"
              name="message"
              required
              rows={4}
              className="resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              placeholder="Tell us about your project..."
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="mt-2 h-12 w-full rounded-xl bg-primary px-7 text-sm text-primary-foreground hover:opacity-90"
          >
            {submitLabel}
          </Button>
        </form>
      </div>
    </section>
  );
}
