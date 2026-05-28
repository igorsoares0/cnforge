import { ChevronDown, Globe } from "lucide-react";

const SOCIAL_PATHS: Record<string, string> = {
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  github:
    "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-1.92c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.91 10.91 0 015.73 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.79.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z",
  discord:
    "M20.32 4.37a19.8 19.8 0 00-4.89-1.52.07.07 0 00-.08.04c-.21.38-.45.87-.61 1.26a18.27 18.27 0 00-5.49 0 12.64 12.64 0 00-.62-1.26.08.08 0 00-.08-.04 19.74 19.74 0 00-4.89 1.52.07.07 0 00-.03.03C1.11 8.39.33 12.28.73 16.12a.08.08 0 00.03.06 19.9 19.9 0 005.99 3.03.08.08 0 00.08-.03c.46-.63.87-1.3 1.22-2a.08.08 0 00-.04-.11 13.1 13.1 0 01-1.87-.9.08.08 0 01-.01-.13c.13-.09.25-.19.37-.29a.08.08 0 01.08-.01c3.93 1.79 8.18 1.79 12.06 0a.08.08 0 01.08.01c.12.1.25.2.37.29a.08.08 0 01-.01.13c-.6.35-1.22.65-1.87.9a.08.08 0 00-.04.11c.36.7.77 1.37 1.22 2a.08.08 0 00.08.03 19.83 19.83 0 006-3.03.08.08 0 00.03-.06c.46-4.83-.78-9.03-3.3-12.75a.06.06 0 00-.03-.03zM8.02 13.69c-1.1 0-2.01-1.01-2.01-2.26 0-1.24.89-2.26 2.01-2.26 1.13 0 2.02 1.02 2.01 2.26 0 1.25-.89 2.26-2.01 2.26zm7.44 0c-1.1 0-2.01-1.01-2.01-2.26 0-1.24.89-2.26 2.01-2.26 1.13 0 2.02 1.02 2.01 2.26 0 1.25-.88 2.26-2.01 2.26z",
};

type FooterLink = { label: string; href: string };
type FooterSocial = {
  label: string;
  href: string;
  icon: "x" | "github" | "discord";
};

type Footer7Props = {
  brand?: string;
  brandHref?: string;
  statusLabel?: string;
  statusHref?: string;
  version?: string;
  region?: string;
  columns?: { title: string; links: FooterLink[] }[];
  socials?: FooterSocial[];
  copyright?: string;
};

const DEFAULT_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Blocks", href: "#blocks" },
      { label: "Themes", href: "#themes" },
      { label: "Registry", href: "#registry" },
      { label: "CLI", href: "#cli" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "API reference", href: "#api" },
      { label: "Changelog", href: "#changelog" },
      { label: "Open source", href: "#oss" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Status", href: "#status" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Security", href: "#security" },
      { label: "Support", href: "#support" },
    ],
  },
];

const DEFAULT_SOCIALS: FooterSocial[] = [
  { label: "X", href: "#x", icon: "x" },
  { label: "GitHub", href: "#github", icon: "github" },
  { label: "Discord", href: "#discord", icon: "discord" },
];

export default function Footer7({
  brand = "Forge",
  brandHref = "#",
  statusLabel = "All systems operational",
  statusHref = "#status",
  version = "v2.4.1",
  region = "us-east-1",
  columns = DEFAULT_COLUMNS,
  socials = DEFAULT_SOCIALS,
  copyright = `© ${new Date().getFullYear()} Forge Labs, Inc.`,
}: Footer7Props) {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
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

            <a
              href={statusHref}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <span className="relative inline-flex size-2 items-center justify-center">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/40" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              {statusLabel}
            </a>

            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 font-mono">
                {version}
              </span>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 font-mono transition-colors hover:bg-muted"
              >
                <Globe className="size-3" />
                {region}
                <ChevronDown className="size-3" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
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

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">{copyright}</p>
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
    </footer>
  );
}
