import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Contact5Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  formAction?: string;
  formMethod?: "GET" | "POST";
  submitLabel?: string;
};

export default function Contact5({
  eyebrow = "Contact",
  title = "Send us a message",
  subtitle = "We'll get back to you within 24 hours.",
  formAction = "#",
  formMethod = "POST",
  submitLabel = "Send message",
}: Contact5Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-lg px-4 sm:px-6">
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
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <form
          action={formAction}
          method={formMethod}
          className="mt-10 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="c5-name"
              className="text-sm font-medium text-foreground"
            >
              Name
            </label>
            <input
              id="c5-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="h-10 rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              placeholder="Jane Doe"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="c5-email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              id="c5-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="h-10 rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              placeholder="jane@company.com"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="c5-message"
              className="text-sm font-medium text-foreground"
            >
              Message
            </label>
            <textarea
              id="c5-message"
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              placeholder="How can we help?"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="mt-2 h-12 w-full rounded-xl bg-primary text-sm text-primary-foreground hover:opacity-90"
          >
            {submitLabel}
          </Button>
        </form>
      </div>
    </section>
  );
}
