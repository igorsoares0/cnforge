import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const SOCIAL_PATHS: Record<string, string> = {
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  google:
    "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
};

const AVATAR_COLORS = ["bg-emerald-500", "bg-blue-500", "bg-orange-500"];

type Signup4Props = {
  brand?: string;
  panelTitle?: string;
  panelSubtitle?: string;
  stats?: { value: string; label: string }[];
  socialProof?: { initials: string[]; caption: string };
  title?: string;
  subtitle?: string;
  formAction?: string;
  formMethod?: "GET" | "POST";
  submitLabel?: string;
  loginHref?: string;
  tosHref?: string;
  privacyHref?: string;
};

const DEFAULT_STATS = [
  { value: "100+", label: "Blocks" },
  { value: "8", label: "Themes" },
  { value: "25k+", label: "Installs" },
];

export default function Signup4({
  brand = "Forge",
  panelTitle = "Start building beautiful UIs today",
  panelSubtitle = "Join thousands of developers who ship landing pages in minutes instead of days.",
  stats = DEFAULT_STATS,
  socialProof = {
    initials: ["MC", "JL", "AP"],
    caption: "Joined by 25k+ developers",
  },
  title = "Create your account",
  subtitle = "Free forever. No credit card required.",
  formAction = "#",
  formMethod = "POST",
  submitLabel = "Get started",
  loginHref = "#",
  tosHref = "#tos",
  privacyHref = "#privacy",
}: Signup4Props) {
  return (
    <section className="flex min-h-[80vh] w-full bg-background">
      <div className="hidden w-1/2 flex-col justify-between bg-card p-10 lg:flex xl:p-14">
        <div>
          <a
            href="#"
            className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground"
          >
            <span
              className="inline-flex size-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground"
              style={{ fontWeight: "var(--title-weight, 700)" }}
            >
              {brand.slice(0, 1)}
            </span>
            <span>{brand}</span>
          </a>
        </div>

        <div className="max-w-md">
          <h2
            className="text-3xl tracking-tight text-foreground xl:text-4xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {panelTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {panelSubtitle}
          </p>

          <div className="mt-8 flex items-center gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-2xl tracking-tight text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-2">
            {socialProof.initials.map((initials, i) => (
              <span
                key={initials}
                className={`inline-flex size-8 items-center justify-center rounded-full border-2 border-card text-xs font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
              >
                {initials}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {socialProof.caption}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center px-4 py-16 lg:w-1/2">
        <div className="w-full max-w-sm">
          <div className="lg:hidden">
            <span
              className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground"
              style={{ fontWeight: "var(--title-weight, 700)" }}
            >
              {brand.slice(0, 1)}
            </span>
          </div>
          <h1
            className="mt-6 text-2xl tracking-tight text-foreground lg:mt-0"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-card text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d={SOCIAL_PATHS.github} />
              </svg>
              GitHub
            </button>
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-card text-sm font-medium text-foreground transition-colors hover:bg-muted"
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
              <span className="bg-background px-3 text-muted-foreground">
                or with email
              </span>
            </div>
          </div>

          <form
            action={formAction}
            method={formMethod}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="signup4-name"
                className="text-sm font-medium text-foreground"
              >
                Full name
              </label>
              <input
                id="signup4-name"
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
                htmlFor="signup4-email"
                className="text-sm font-medium text-foreground"
              >
                Work email
              </label>
              <input
                id="signup4-email"
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
                htmlFor="signup4-password"
                className="text-sm font-medium text-foreground"
              >
                Password
              </label>
              <input
                id="signup4-password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                className="h-10 rounded-lg border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="••••••••"
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

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              href={loginHref}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
