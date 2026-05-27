"use client";

import { useState } from "react";
import {
  Bell,
  ChevronDown,
  type LucideIcon,
  Home,
  Blocks,
  Palette,
  BarChart3,
  Users,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  Search,
} from "lucide-react";

type NavItem = {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
};

type NavSection = {
  title: string;
  items: NavItem[];
  defaultOpen?: boolean;
};

type Sidebar2Props = {
  brand?: string;
  sections?: NavSection[];
  userName?: string;
  userEmail?: string;
  userInitials?: string;
  notificationCount?: number;
  searchPlaceholder?: string;
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
    title: "Main",
    defaultOpen: true,
    items: [
      { icon: "home", label: "Dashboard", href: "#", active: true },
      { icon: "blocks", label: "Blocks", href: "#", badge: "106" },
      { icon: "palette", label: "Themes", href: "#" },
      { icon: "chart", label: "Analytics", href: "#" },
    ],
  },
  {
    title: "Workspace",
    defaultOpen: true,
    items: [
      { icon: "users", label: "Team", href: "#", badge: "3" },
      { icon: "docs", label: "Documentation", href: "#" },
    ],
  },
  {
    title: "Account",
    defaultOpen: false,
    items: [
      { icon: "settings", label: "Settings", href: "#" },
      { icon: "help", label: "Help & Support", href: "#" },
    ],
  },
];

export default function Sidebar2({
  brand = "Forge",
  sections = DEFAULT_SECTIONS,
  userName = "Jane Doe",
  userEmail = "jane@company.com",
  userInitials = "JD",
  notificationCount = 5,
  searchPlaceholder = "Search…",
}: Sidebar2Props) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const section of sections) {
      initial[section.title] = !(section.defaultOpen ?? true);
    }
    return initial;
  });

  function toggle(title: string) {
    setCollapsed((prev) => ({ ...prev, [title]: !prev[title] }));
  }

  return (
    <aside className="flex h-[640px] w-full max-w-[280px] flex-col border border-border bg-card sm:h-[720px]">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2.5">
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
        <button
          type="button"
          className="relative inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
          {notificationCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 inline-flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
              {notificationCount > 9 ? "9+" : notificationCount}
            </span>
          )}
        </button>
      </div>

      <div className="border-b border-border px-4 py-3">
        <div className="flex items-center gap-2.5 rounded-lg border border-border bg-background px-3 py-2">
          <Search className="size-3.5 shrink-0 text-muted-foreground" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 border-b border-border px-5 py-3">
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
          {userInitials}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-foreground">
            {userName}
          </p>
          <p className="truncate text-xs text-muted-foreground">{userEmail}</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-3">
        {sections.map((section) => {
          const isCollapsed = collapsed[section.title] ?? false;
          return (
            <div key={section.title} className="mb-1">
              <button
                type="button"
                onClick={() => toggle(section.title)}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {section.title}
                <ChevronDown
                  className={`size-3 transition-transform ${isCollapsed ? "-rotate-90" : ""}`}
                />
              </button>
              {!isCollapsed && (
                <div className="mt-0.5 flex flex-col gap-0.5">
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
              )}
            </div>
          );
        })}
      </nav>

      <div className="border-t border-border px-3 py-3">
        <button
          type="button"
          className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <LogOut className="size-4 shrink-0" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
