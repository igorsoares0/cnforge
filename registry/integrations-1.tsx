import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type Integration = {
  name: string;
  description: string;
  category: string;
  href: string;
};

type Integrations1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  integrations?: Integration[];
};

const DEFAULT_INTEGRATIONS: Integration[] = [
  {
    name: "Stripe",
    description: "Accept payments, manage subscriptions, and handle invoices.",
    category: "Payments",
    href: "#",
  },
  {
    name: "GitHub",
    description: "Sync repos, automate workflows, and track issues.",
    category: "Developer",
    href: "#",
  },
  {
    name: "Slack",
    description: "Send notifications and alerts to channels and DMs.",
    category: "Communication",
    href: "#",
  },
  {
    name: "Vercel",
    description: "Deploy previews, production builds, and edge functions.",
    category: "Infrastructure",
    href: "#",
  },
  {
    name: "Linear",
    description: "Sync issues, track progress, and automate project updates.",
    category: "Project management",
    href: "#",
  },
  {
    name: "Resend",
    description: "Transactional emails, templates, and delivery tracking.",
    category: "Communication",
    href: "#",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Payments: "bg-emerald-500/10 text-emerald-600",
  Developer: "bg-violet-500/10 text-violet-600",
  Communication: "bg-blue-500/10 text-blue-600",
  Infrastructure: "bg-orange-500/10 text-orange-600",
  "Project management": "bg-pink-500/10 text-pink-600",
};

export default function Integrations1({
  eyebrow = "Integrations",
  title = "Connects with your stack",
  subtitle = "First-class integrations with the tools your team already uses. No glue code, no middleware.",
  integrations = DEFAULT_INTEGRATIONS,
}: Integrations1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
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

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {integrations.map((integration) => (
            <a
              key={integration.name}
              href={integration.href}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-muted text-sm font-bold text-foreground">
                  {integration.name.slice(0, 2)}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${CATEGORY_COLORS[integration.category] ?? "bg-muted text-foreground"}`}
                >
                  {integration.category}
                </span>
              </div>
              <h3
                className="mt-5 text-base tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {integration.name}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-6 text-muted-foreground">
                {integration.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                Learn more
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
