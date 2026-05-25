import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type ForgotPassword1Props = {
  brand?: string;
  title?: string;
  subtitle?: string;
  formAction?: string;
  formMethod?: "GET" | "POST";
  submitLabel?: string;
  loginHref?: string;
};

export default function ForgotPassword1({
  brand = "Forge",
  title = "Reset your password",
  subtitle = "Enter the email address associated with your account and we'll send you a link to reset your password.",
  formAction = "#",
  formMethod = "POST",
  submitLabel = "Send reset link",
  loginHref = "#",
}: ForgotPassword1Props) {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <span
            className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground"
            style={{ fontWeight: "var(--title-weight, 700)" }}
          >
            {brand.slice(0, 1)}
          </span>
          <h1
            className="mt-6 text-2xl tracking-tight text-foreground"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <form
          action={formAction}
          method={formMethod}
          className="mt-8 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="forgot-email"
              className="text-sm font-medium text-foreground"
            >
              Email address
            </label>
            <input
              id="forgot-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="h-10 rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              placeholder="jane@company.com"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="mt-2 h-10 w-full rounded-lg bg-primary text-sm text-primary-foreground hover:opacity-90"
          >
            {submitLabel}
            <ArrowRight className="size-4" />
          </Button>
        </form>

        <p className="mt-6 text-center">
          <a
            href={loginHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Back to sign in
          </a>
        </p>
      </div>
    </section>
  );
}
