import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type SettingsSection = {
  id: string;
  label: string;
};

type NotificationOption = {
  label: string;
  description: string;
  enabled: boolean;
};

type Settings1Props = {
  eyebrow?: string;
  title?: string;
  sections?: SettingsSection[];
  activeSection?: string;
  profileName?: string;
  profileEmail?: string;
  profileBio?: string;
  notifications?: NotificationOption[];
  currentPlan?: string;
  planPrice?: string;
};

const DEFAULT_SECTIONS: SettingsSection[] = [
  { id: "profile", label: "Profile" },
  { id: "notifications", label: "Notifications" },
  { id: "billing", label: "Billing" },
];

const DEFAULT_NOTIFICATIONS: NotificationOption[] = [
  {
    label: "Email notifications",
    description: "Receive email updates about your account activity.",
    enabled: true,
  },
  {
    label: "Push notifications",
    description: "Get browser notifications for important events.",
    enabled: false,
  },
  {
    label: "Weekly digest",
    description: "Receive a weekly summary of your project metrics.",
    enabled: true,
  },
  {
    label: "Marketing emails",
    description: "Updates about new features and product announcements.",
    enabled: false,
  },
];

export default function Settings1({
  eyebrow = "Settings",
  title = "Account settings",
  sections = DEFAULT_SECTIONS,
  activeSection = "profile",
  profileName = "Jane Doe",
  profileEmail = "jane@company.com",
  profileBio = "Full-stack developer building with cnforge blocks.",
  notifications = DEFAULT_NOTIFICATIONS,
  currentPlan = "Pro",
  planPrice = "$29/mo",
}: Settings1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
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

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
          <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-x-visible">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  section.id === activeSection
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3
                className="text-lg text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                Profile
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Your public profile information.
              </p>
              <div className="mt-6 flex flex-col gap-5">
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
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Bio
                  </label>
                  <textarea
                    defaultValue={profileBio}
                    rows={3}
                    className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button className="h-10 rounded-xl bg-primary px-6 text-sm text-primary-foreground hover:opacity-90">
                  Save changes
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3
                className="text-lg text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                Notifications
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage how you receive notifications.
              </p>
              <div className="mt-6 flex flex-col divide-y divide-border">
                {notifications.map((opt) => (
                  <div
                    key={opt.label}
                    className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {opt.label}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {opt.description}
                      </p>
                    </div>
                    <span
                      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
                        opt.enabled ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <span
                        className={`inline-block size-3.5 rounded-full bg-white transition-transform ${
                          opt.enabled
                            ? "translate-x-[18px]"
                            : "translate-x-[3px]"
                        }`}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3
                className="text-lg text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                Billing
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage your subscription and billing details.
              </p>
              <div className="mt-6 flex items-center justify-between rounded-xl border border-border bg-background p-4">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Current plan
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {currentPlan} — {planPrice}
                  </p>
                </div>
                <Badge className="border-success/20 bg-success/10 text-success">
                  Active
                </Badge>
              </div>
              <div className="mt-4 flex gap-3">
                <Button
                  variant="outline"
                  className="h-10 rounded-xl border-border bg-card px-6 text-sm text-foreground hover:bg-muted"
                >
                  Change plan
                </Button>
                <Button
                  variant="outline"
                  className="h-10 rounded-xl border-border bg-card px-6 text-sm text-foreground hover:bg-muted"
                >
                  Billing history
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
