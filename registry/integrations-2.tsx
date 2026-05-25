import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Integration = {
  name: string;
  description: string;
  category: string;
  connected?: boolean;
};

type Integrations2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  integrations?: Integration[];
};

const DEFAULT_INTEGRATIONS: Integration[] = [
  {
    name: "GitHub",
    description: "Sync repositories, automate workflows, and track issues.",
    category: "Developer",
    connected: true,
  },
  {
    name: "Vercel",
    description: "Deploy previews, production builds, and edge functions.",
    category: "Developer",
    connected: true,
  },
  {
    name: "Stripe",
    description: "Accept payments, manage subscriptions, and handle invoices.",
    category: "Payments",
  },
  {
    name: "Lemon Squeezy",
    description:
      "Digital products, SaaS billing, and global tax compliance.",
    category: "Payments",
  },
  {
    name: "Slack",
    description: "Send notifications and alerts to channels and DMs.",
    category: "Communication",
  },
  {
    name: "Resend",
    description: "Transactional emails, templates, and delivery tracking.",
    category: "Communication",
    connected: true,
  },
  {
    name: "Linear",
    description:
      "Sync issues, track progress, and automate project updates.",
    category: "Project management",
  },
  {
    name: "Notion",
    description: "Sync docs, databases, and knowledge base pages.",
    category: "Project management",
  },
];

export default function Integrations2({
  eyebrow = "Integrations",
  title = "Your tools, connected",
  subtitle = "Browse and manage the integrations powering your workspace.",
  integrations = DEFAULT_INTEGRATIONS,
}: Integrations2Props) {
  const categories = Array.from(
    new Set(integrations.map((i) => i.category))
  );

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
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

        <div className="mt-14 flex flex-col gap-10 sm:mt-16">
          {categories.map((category) => (
            <div key={category}>
              <h3
                className="text-sm uppercase tracking-wider text-muted-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {category}
              </h3>
              <div className="mt-4 flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
                {integrations
                  .filter((i) => i.category === category)
                  .map((integration) => (
                    <div
                      key={integration.name}
                      className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-bold text-foreground">
                          {integration.name.slice(0, 2)}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {integration.name}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                      {integration.connected ? (
                        <Badge className="w-fit border-success/20 bg-success/10 text-xs text-success">
                          Connected
                        </Badge>
                      ) : (
                        <Button
                          variant="outline"
                          className="h-8 w-fit rounded-lg border-border bg-card px-4 text-xs font-medium text-foreground hover:bg-muted"
                        >
                          Connect
                        </Button>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
