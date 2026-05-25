import { Badge } from "@/components/ui/badge";

type NotificationItem = {
  id: string;
  type: "info" | "success" | "warning";
  title: string;
  time: string;
  read: boolean;
};

type NotificationGroup = {
  label: string;
  items: NotificationItem[];
};

type Notification2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  groups?: NotificationGroup[];
};

const TYPE_DOTS: Record<string, string> = {
  info: "bg-blue-500",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
};

const DEFAULT_GROUPS: NotificationGroup[] = [
  {
    label: "Today",
    items: [
      {
        id: "1",
        type: "success",
        title: "Deployment v2.5 completed successfully",
        time: "10 min ago",
        read: false,
      },
      {
        id: "2",
        type: "info",
        title: "Sara R. commented on your pull request",
        time: "1 hr ago",
        read: false,
      },
      {
        id: "3",
        type: "warning",
        title: "SSL certificate expires in 7 days",
        time: "3 hr ago",
        read: false,
      },
    ],
  },
  {
    label: "Yesterday",
    items: [
      {
        id: "4",
        type: "info",
        title: "New block 'dashboard-1' added to registry",
        time: "18 hr ago",
        read: true,
      },
      {
        id: "5",
        type: "success",
        title: "Billing invoice for May processed",
        time: "22 hr ago",
        read: true,
      },
    ],
  },
  {
    label: "This week",
    items: [
      {
        id: "6",
        type: "info",
        title: "Weekly digest: 12 deploys, 3 new members",
        time: "3 days ago",
        read: true,
      },
      {
        id: "7",
        type: "warning",
        title: "API rate limit reached on /r/ endpoint",
        time: "4 days ago",
        read: true,
      },
    ],
  },
];

export default function Notification2({
  eyebrow = "Notifications",
  title = "What's new",
  subtitle = "Your latest updates grouped by date.",
  groups = DEFAULT_GROUPS,
}: Notification2Props) {
  const totalUnread = groups.reduce(
    (sum, g) => sum + g.items.filter((i) => !i.read).length,
    0
  );

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
          {totalUnread > 0 && (
            <span className="mt-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              {totalUnread} unread
            </span>
          )}
        </div>

        <div className="mt-14 flex flex-col gap-8 sm:mt-16">
          {groups.map((group) => (
            <div key={group.label}>
              <h3
                className="text-sm uppercase tracking-wider text-muted-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {group.label}
              </h3>
              <div className="mt-3 flex flex-col gap-2">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 rounded-xl border border-border p-4 transition-colors ${
                      !item.read ? "bg-card" : "bg-background"
                    }`}
                  >
                    <span
                      className={`size-2.5 shrink-0 rounded-full ${TYPE_DOTS[item.type]}`}
                    />
                    <p
                      className={`flex-1 text-sm ${!item.read ? "font-medium text-foreground" : "text-muted-foreground"}`}
                    >
                      {item.title}
                    </p>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {item.time}
                    </span>
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
