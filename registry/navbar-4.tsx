"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X, type LucideIcon, Blocks, Palette, Terminal, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

type DropdownItem = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

type Navbar4Props = {
  brand?: string;
  brandHref?: string;
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const ICON_MAP: Record<string, LucideIcon> = {
  blocks: Blocks,
  palette: Palette,
  terminal: Terminal,
  zap: Zap,
};

const DEFAULT_LINKS: NavLink[] = [
  {
    label: "Products",
    href: "#",
    dropdown: [
      {
        icon: "blocks",
        title: "UI Blocks",
        description: "100+ production-ready landing page sections",
        href: "#blocks",
      },
      {
        icon: "palette",
        title: "Themes",
        description: "8 curated color palettes, swap with one class",
        href: "#themes",
      },
      {
        icon: "terminal",
        title: "CLI",
        description: "Install any block with a single command",
        href: "#cli",
      },
      {
        icon: "zap",
        title: "Pro",
        description: "Premium blocks and priority support",
        href: "#pro",
      },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar4({
  brand = "Forge",
  brandHref = "#",
  links = DEFAULT_LINKS,
  ctaLabel = "Get started",
  ctaHref = "#",
  secondaryLabel = "Sign in",
  secondaryHref = "#",
}: Navbar4Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full border-b border-border bg-background">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6">
        <a
          href={brandHref}
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground"
        >
          <span
            className="inline-flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground"
            style={{ fontWeight: "var(--title-weight, 700)" }}
            aria-hidden
          >
            {brand.slice(0, 1)}
          </span>
          <span>{brand}</span>
        </a>

        <ul className="ml-2 hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.dropdown ? setOpenDropdown(link.label) : undefined
              }
              onMouseLeave={() =>
                link.dropdown ? setOpenDropdown(null) : undefined
              }
            >
              {link.dropdown ? (
                <>
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                    aria-expanded={openDropdown === link.label}
                  >
                    {link.label}
                    <ChevronDown
                      className={`size-3.5 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {openDropdown === link.label && (
                    <div className="absolute left-1/2 top-full z-50 w-[520px] -translate-x-1/2 pt-2">
                      <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-card p-2 shadow-lg">
                        {link.dropdown.map((item) => {
                          const Icon = ICON_MAP[item.icon] ?? Zap;
                          return (
                            <a
                              key={item.title}
                              href={item.href}
                              className="flex items-start gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted"
                            >
                              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                                <Icon className="size-4" />
                              </span>
                              <div className="flex flex-col gap-0.5">
                                <span className="text-sm font-medium text-foreground">
                                  {item.title}
                                </span>
                                <span className="text-xs leading-4 text-muted-foreground">
                                  {item.description}
                                </span>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Button
            variant="ghost"
            nativeButton={false}
            className="hidden h-9 rounded-lg px-3 text-sm font-medium text-foreground/70 hover:bg-muted hover:text-foreground lg:inline-flex"
            render={<a href={secondaryHref}>{secondaryLabel}</a>}
          />
          <Button
            nativeButton={false}
            className="hidden h-9 rounded-lg bg-primary px-4 text-sm text-primary-foreground hover:opacity-90 sm:inline-flex"
            render={
              <a href={ctaHref}>
                {ctaLabel}
                <ArrowRight className="size-4" />
              </a>
            }
          />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="flex flex-col">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {link.label}
                  </p>
                  {link.dropdown.map((item) => {
                    const Icon = ICON_MAP[item.icon] ?? Zap;
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
                      >
                        <Icon className="size-4 shrink-0 text-muted-foreground" />
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              )
            )}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <Button
                variant="outline"
                nativeButton={false}
                className="h-10 w-full justify-center rounded-lg border-border bg-background text-sm font-medium text-foreground hover:bg-muted"
                render={
                  <a href={secondaryHref} onClick={() => setMobileOpen(false)}>
                    {secondaryLabel}
                  </a>
                }
              />
              <Button
                nativeButton={false}
                className="h-10 w-full justify-center rounded-lg bg-primary text-sm text-primary-foreground hover:opacity-90"
                render={
                  <a href={ctaHref} onClick={() => setMobileOpen(false)}>
                    {ctaLabel}
                    <ArrowRight className="size-4" />
                  </a>
                }
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
