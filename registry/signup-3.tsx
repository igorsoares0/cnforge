import { ArrowRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SOCIAL_PATHS: Record<string, string> = {
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  google:
    "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
};

type Signup3Props = {
  brand?: string;
  title?: string;
  subtitle?: string;
  formAction?: string;
  formMethod?: "GET" | "POST";
  submitLabel?: string;
  loginHref?: string;
  tosHref?: string;
  privacyHref?: string;
  features?: string[];
};

const DEFAULT_FEATURES = [
  "100+ production-ready blocks",
  "8 theme palettes",
  "No credit card required",
];

export default function Signup3({
  brand = "Forge",
  title = "Create your free account",
  subtitle = "Get started in under 60 seconds.",
  formAction = "#",
  formMethod = "POST",
  submitLabel = "Create account",
  loginHref = "#",
  tosHref = "#tos",
  privacyHref = "#privacy",
  features = DEFAULT_FEATURES,
}: Signup3Props) {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col items-center text-center">
            <span
              className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground"
              style={{ fontWeight: "var(--title-weight, 700)" }}
            >
              {brand.slice(0, 1)}
            </span>
            <h1
              className="mt-5 text-2xl tracking-tight text-foreground"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.05)",
              }}
            >
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
              >
                <Check className="size-3 text-emerald-600" />
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-background text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d={SOCIAL_PATHS.github} />
              </svg>
              GitHub
            </button>
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-background text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d={SOCIAL_PATHS.google} />
              </svg>
              Google
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-3 text-muted-foreground">
                or with email
              </span>
            </div>
          </div>

          <form
            action={formAction}
            method={formMethod}
            className="flex flex-col gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="signup3-first"
                  className="text-sm font-medium text-foreground"
                >
                  First name
                </label>
                <input
                  id="signup3-first"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  placeholder="Jane"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="signup3-last"
                  className="text-sm font-medium text-foreground"
                >
                  Last name
                </label>
                <input
                  id="signup3-last"
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
              <label
                htmlFor="signup3-email"
                className="text-sm font-medium text-foreground"
              >
                Work email
              </label>
              <input
                id="signup3-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="jane@company.com"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="signup3-password"
                className="text-sm font-medium text-foreground"
              >
                Password
              </label>
              <input
                id="signup3-password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="••••••••"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-1 h-10 w-full rounded-lg bg-primary text-sm text-primary-foreground hover:opacity-90"
            >
              {submitLabel}
              <ArrowRight className="size-4" />
            </Button>
          </form>

          <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
            By signing up, you agree to our{" "}
            <a
              href={tosHref}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href={privacyHref}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a
            href={loginHref}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </section>
  );
}
