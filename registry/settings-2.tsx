import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Tab = {
  id: string;
  label: string;
};

type Settings2Props = {
  eyebrow?: string;
  title?: string;
  tabs?: Tab[];
  activeTab?: string;
  profileName?: string;
  profileEmail?: string;
  profileAvatar?: string;
  dangerZoneTitle?: string;
  dangerZoneDescription?: string;
};

const DEFAULT_TABS: Tab[] = [
  { id: "general", label: "General" },
  { id: "security", label: "Security" },
  { id: "api", label: "API keys" },
  { id: "danger", label: "Danger zone" },
];

type ApiKey = {
  name: string;
  prefix: string;
  created: string;
};

const DEFAULT_KEYS: ApiKey[] = [
  { name: "Production", prefix: "sk_live_...a4f2", created: "May 1, 2026" },
  { name: "Development", prefix: "sk_test_...b7e9", created: "Apr 15, 2026" },
];

export default function Settings2({
  eyebrow = "Settings",
  title = "Account",
  tabs = DEFAULT_TABS,
  activeTab = "general",
  profileName = "Jane Doe",
  profileEmail = "jane@company.com",
  profileAvatar = "JD",
  dangerZoneTitle = "Delete account",
  dangerZoneDescription = "Permanently delete your account and all associated data. This action cannot be undone.",
}: Settings2Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Badge
          variant="outline"
          className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
        >
          <span className="size-1.5 rounded-full bg-success" />
          {eyebrow}
        </Badge>
        <h2
          className="mt-4 text-3xl tracking-tight text-foreground sm:text-4xl"
          style={{
            fontWeight: "var(--title-weight, 700)",
            lineHeight: "var(--title-leading, 1.05)",
          }}
        >
          {title}
        </h2>

        <nav className="mt-8 flex gap-1 overflow-x-auto border-b border-border">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`shrink-0 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                tab.id === activeTab
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-8">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3
              className="text-base text-foreground"
              style={{ fontWeight: "var(--title-weight, 700)" }}
            >
              Profile
            </h3>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex flex-col items-center gap-2">
                <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                  {profileAvatar}
                </span>
                <button
                  type="button"
                  className="text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  Change
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    defaultValue={profileName}
                    className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={profileEmail}
                    className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button className="h-9 rounded-lg bg-primary px-5 text-sm text-primary-foreground hover:opacity-90">
                Save
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3
              className="text-base text-foreground"
              style={{ fontWeight: "var(--title-weight, 700)" }}
            >
              API keys
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage keys for programmatic access.
            </p>
            <div className="mt-5 flex flex-col divide-y divide-border">
              {DEFAULT_KEYS.map((key) => (
                <div
                  key={key.prefix}
                  className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {key.name}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                      {key.prefix}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">
                      {key.created}
                    </span>
                    <button
                      type="button"
                      className="text-xs font-medium text-destructive hover:underline"
                    >
                      Revoke
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="mt-5 h-9 rounded-lg border-border bg-card px-5 text-sm text-foreground hover:bg-muted"
            >
              Create new key
            </Button>
          </div>

          <div className="rounded-2xl border border-destructive/30 bg-card p-6 sm:p-8">
            <h3
              className="text-base text-destructive"
              style={{ fontWeight: "var(--title-weight, 700)" }}
            >
              {dangerZoneTitle}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {dangerZoneDescription}
            </p>
            <Button
              variant="outline"
              className="mt-5 h-9 rounded-lg border-destructive/30 px-5 text-sm text-destructive hover:bg-destructive/10"
            >
              Delete account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
