import { ArrowLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

type SuggestedLink = {
  label: string;
  href: string;
};

type NotFound2Props = {
  code?: string;
  title?: string;
  subtitle?: string;
  searchPlaceholder?: string;
  searchAction?: string;
  ctaLabel?: string;
  ctaHref?: string;
  links?: SuggestedLink[];
};

const DEFAULT_LINKS: SuggestedLink[] = [
  { label: "Documentation", href: "#docs" },
  { label: "Block gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact support", href: "#contact" },
];

export default function NotFound2({
  code = "404",
  title = "We looked everywhere",
  subtitle = "This page doesn't exist, but maybe you can find what you need below.",
  searchPlaceholder = "Search for pages...",
  searchAction = "#",
  ctaLabel = "Back to home",
  ctaHref = "/",
  links = DEFAULT_LINKS,
}: NotFound2Props) {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-background px-4 py-16">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
        <div className="flex size-20 items-center justify-center rounded-2xl bg-muted">
          <span
            className="text-3xl text-muted-foreground/40"
            style={{ fontWeight: "var(--title-weight, 700)" }}
          >
            {code}
          </span>
        </div>

        <h1
          className="mt-6 text-3xl tracking-tight text-foreground sm:text-4xl"
          style={{
            fontWeight: "var(--title-weight, 700)",
            lineHeight: "var(--title-leading, 1.05)",
          }}
        >
          {title}
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          {subtitle}
        </p>

        <form
          action={searchAction}
          className="mt-8 flex w-full items-center gap-2 rounded-xl border border-border bg-card px-4"
        >
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            type="search"
            name="q"
            placeholder={searchPlaceholder}
            className="h-12 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </form>

        <div className="mt-8 w-full">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Popular pages
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <Button
          size="lg"
          nativeButton={false}
          className="mt-8 h-12 rounded-xl bg-primary px-7 text-sm text-primary-foreground hover:opacity-90"
          render={
            <a href={ctaHref}>
              <ArrowLeft className="size-4" />
              {ctaLabel}
            </a>
          }
        />
      </div>
    </section>
  );
}
