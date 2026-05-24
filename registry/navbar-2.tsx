"use client";

import { useState } from "react";
import { ArrowRight, Menu, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";

type Navbar2Props = {
  brand?: string;
  brandHref?: string;
  links?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showSearch?: boolean;
};

const DEFAULT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar2({
  brand = "Forge",
  brandHref = "#",
  links = DEFAULT_LINKS,
  ctaLabel = "Get started",
  ctaHref = "#",
  secondaryLabel = "Sign in",
  secondaryHref = "#",
  showSearch = true,
}: Navbar2Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6">
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

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          {showSearch && (
            <button
              type="button"
              aria-label="Search"
              className="hidden size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:inline-flex"
            >
              <Search className="size-4" />
            </button>
          )}
          <Button
            variant="ghost"
            nativeButton={false}
            className="hidden h-9 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted md:inline-flex"
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
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <Button
                variant="outline"
                nativeButton={false}
                className="h-10 w-full justify-center rounded-lg border-border bg-background text-sm font-medium text-foreground hover:bg-muted"
                render={
                  <a href={secondaryHref} onClick={() => setOpen(false)}>
                    {secondaryLabel}
                  </a>
                }
              />
              <Button
                nativeButton={false}
                className="h-10 w-full justify-center rounded-lg bg-primary text-sm text-primary-foreground hover:opacity-90"
                render={
                  <a href={ctaHref} onClick={() => setOpen(false)}>
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
