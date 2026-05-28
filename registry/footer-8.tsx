import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SOCIAL_PATHS: Record<string, string> = {
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  github:
    "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-1.92c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.91 10.91 0 015.73 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.79.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z",
  linkedin:
    "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 6.99V22h-4.56v-6.62c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.49V22H7.62V8z",
};

type FooterLink = { label: string; href: string };
type FooterSocial = {
  label: string;
  href: string;
  icon: "x" | "github" | "linkedin";
};

type Footer8Props = {
  brand?: string;
  brandHref?: string;
  badgeLabel?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  columns?: { title: string; links: FooterLink[] }[];
  socials?: FooterSocial[];
  copyright?: string;
  legalLinks?: FooterLink[];
};

const DEFAULT_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Blocks", href: "#blocks" },
      { label: "Themes", href: "#themes" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#docs" },
      { label: "Changelog", href: "#changelog" },
      { label: "Support", href: "#support" },
    ],
  },
];

const DEFAULT_SOCIALS: FooterSocial[] = [
  { label: "X", href: "#x", icon: "x" },
  { label: "GitHub", href: "#github", icon: "github" },
  { label: "LinkedIn", href: "#linkedin", icon: "linkedin" },
];

const DEFAULT_LEGAL: FooterLink[] = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

export default function Footer8({
  brand = "Forge",
  brandHref = "#",
  badgeLabel = "v2 is here",
  ctaTitle = "Start shipping pages today",
  ctaSubtitle = "Browse the full catalog and add a block in seconds.",
  ctaLabel = "Get started",
  ctaHref = "#",
  columns = DEFAULT_COLUMNS,
  socials = DEFAULT_SOCIALS,
  copyright = `© ${new Date().getFullYear()} Forge`,
  legalLinks = DEFAULT_LEGAL,
}: Footer8Props) {
  return (
    <footer className="w-full bg-muted/30 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-background">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.3fr_2fr] lg:gap-14 lg:p-14">
            <div className="flex flex-col gap-5">
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
              <Badge
                variant="outline"
                className="w-fit gap-1.5 border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground"
              >
                <Sparkles className="size-3 text-primary" />
                {badgeLabel}
              </Badge>
              <h3
                className="text-2xl tracking-tight text-foreground sm:text-3xl"
                style={{
                  fontWeight: "var(--title-weight, 700)",
                  lineHeight: "var(--title-leading, 1.1)",
                }}
              >
                {ctaTitle}
              </h3>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                {ctaSubtitle}
              </p>
              <Button
                nativeButton={false}
                className="mt-2 h-11 w-fit rounded-xl bg-primary px-6 text-sm text-primary-foreground hover:opacity-90"
                render={
                  <a href={ctaHref}>
                    {ctaLabel}
                    <ArrowRight className="size-4" />
                  </a>
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {columns.map((col) => (
                <div key={col.title} className="flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                    {col.title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-border px-8 py-6 sm:flex-row sm:items-center sm:px-10 lg:px-14">
            <p className="text-xs text-muted-foreground">{copyright}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-3.5"
                      aria-hidden
                    >
                      <path d={SOCIAL_PATHS[social.icon]} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
