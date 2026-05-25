import { Badge } from "@/components/ui/badge";

type NotificationItem = {
  id: string;
  type: "info" | "success" | "warning";
  title: string;
  description: string;
  time: string;
  read: boolean;
};

type Notification1Props = {
  eyebrow?: string;
  title?: string;
  unreadCount?: number;
  items?: NotificationItem[];
};

const TYPE_STYLES: Record<string, string> = {
  info: "bg-blue-500",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
};

const TYPE_ICONS: Record<string, string> = {
  info: "i",
  success: "✓",
  warning: "!",
};

const DEFAULT_ITEMS: NotificationItem[] = [
  {
    id: "1",
    type: "success",
    title: "Deployment successful",
    description:
      "v2.4.1 deployed to production. All health checks passed.",
    time: "2 min ago",
    read: false,
  },
  {
    id: "2",
    type: "info",
    title: "New team member",
    description:
      "Sara R. accepted the invitation and joined the workspace.",
    time: "1 hr ago",
    read: false,
  },
  {
    id: "3",
    type: "warning",
    title: "API rate limit approaching",
    description:
      "You’ve used 85% of your monthly API quota. Consider upgrading.",
    time: "3 hr ago",
    read: false,
  },
  {
    id: "4",
    type: "info",
    title: "Weekly report ready",
    description:
      "Your project metrics for the past week are now available.",
    time: "5 hr ago",
    read: true,
  },
  {
    id: "5",
    type: "success",
    title: "Invoice paid",
    description:
      "Payment of $29.00 for the Pro plan was processed successfully.",
    time: "1 day ago",
    read: true,
  },
  {
    id: "6",
    type: "info",
    title: "Scheduled maintenance",
    description:
      "Planned downtime on May 28 from 2:00–4:00 AM UTC.",
    time: "2 days ago",
    read: true,
  },
];

export default function Notification1({
  eyebrow = "Notifications",
  title = "Stay updated",
  unreadCount = 3,
  items = DEFAULT_ITEMS,
}: Notification1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
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
          </div>
          {unreadCount > 0 && (
            <span className="self-start rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground sm:self-auto">
              {unreadCount} unread
            </span>
          )}
        </div>

        <div className="mt-8 flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex items-start gap-4 p-4 sm:p-5 ${!item.read ? "bg-primary/[0.03]" : ""}`}
            >
              <span
                className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${TYPE_STYLES[item.type]}`}
              >
                {TYPE_ICONS[item.type]}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {item.time}
                    </span>
                    {!item.read && (
                      <span className="size-2 rounded-full bg-primary" />
                    )}
                  </div>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Mark all as read
          </button>
        </div>
      </div>
    </section>
  );
}
