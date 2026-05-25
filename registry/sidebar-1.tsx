import {
  BarChart3,
  Blocks,
  type LucideIcon,
  Palette,
  Settings,
  Home,
  Users,
  FileText,
  HelpCircle,
  LogOut,
} from "lucide-react";

type NavItem = {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
};

type NavSection = {
  title?: string;
  items: NavItem[];
};

type Sidebar1Props = {
  brand?: string;
  sections?: NavSection[];
  userName?: string;
  userEmail?: string;
  userInitials?: string;
};

const ICON_MAP: Record<string, LucideIcon> = {
  home: Home,
  blocks: Blocks,
  palette: Palette,
  chart: BarChart3,
  users: Users,
  docs: FileText,
  settings: Settings,
  help: HelpCircle,
};

const DEFAULT_SECTIONS: NavSection[] = [
  {
    items: [
      { icon: "home", label: "Dashboard", href: "#", active: true },
      { icon: "blocks", label: "Blocks", href: "#", badge: "92" },
      { icon: "palette", label: "Themes", href: "#" },
      { icon: "chart", label: "Analytics", href: "#" },
    ],
  },
  {
    title: "Workspace",
    items: [
      { icon: "users", label: "Team", href: "#" },
      { icon: "docs", label: "Documentation", href: "#" },
      { icon: "settings", label: "Settings", href: "#" },
      { icon: "help", label: "Help & Support", href: "#" },
    ],
  },
];

export default function Sidebar1({
  brand = "Forge",
  sections = DEFAULT_SECTIONS,
  userName = "Jane Doe",
  userEmail = "jane@company.com",
  userInitials = "JD",
}: Sidebar1Props) {
  return (
    <aside className="flex h-[600px] w-full max-w-[260px] flex-col border border-border bg-card sm:h-[700px]">
      <div className="flex items-center gap-2.5 border-b border-border px-5 py-4">
        <span
          className="inline-flex size-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground"
          style={{ fontWeight: "var(--title-weight, 700)" }}
        >
          {brand.slice(0, 1)}
        </span>
        <span
          className="text-sm text-foreground"
          style={{ fontWeight: "var(--title-weight, 700)" }}
        >
          {brand}
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {sections.map((section, si) => (
          <div key={section.title ?? si} className={si > 0 ? "mt-6" : ""}>
            {section.title && (
              <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {section.title}
              </p>
            )}
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const Icon = ICON_MAP[item.icon] ?? Home;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors ${
                      item.active
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                        {item.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-border px-3 py-3">
        <div className="flex items-center gap-2.5 rounded-lg px-2.5 py-2">
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
            {userInitials}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">
              {userName}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {userEmail}
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Sign out"
          >
            <LogOut className="size-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
