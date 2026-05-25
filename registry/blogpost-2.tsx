import { Badge } from "@/components/ui/badge";

type TocItem = {
  label: string;
  id: string;
};

type Blogpost2Props = {
  category?: string;
  title?: string;
  date?: string;
  readTime?: string;
  author?: { name: string; role: string; initials: string };
  toc?: TocItem[];
  backHref?: string;
};

const SOCIAL_PATHS: Record<string, string> = {
  twitter:
    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

const DEFAULT_TOC: TocItem[] = [
  { label: "The problem", id: "the-problem" },
  { label: "Our approach", id: "our-approach" },
  { label: "Implementation", id: "implementation" },
  { label: "What we learned", id: "what-we-learned" },
];

export default function Blogpost2({
  category = "Product",
  title = "Introducing themes: one class, five palettes",
  date = "May 8, 2026",
  readTime = "6 min read",
  author = {
    name: "Sofia Andrade",
    role: "Product Lead",
    initials: "SA",
  },
  toc = DEFAULT_TOC,
  backHref = "#",
}: Blogpost2Props) {
  return (
    <article className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <a
          href={backHref}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden>&larr;</span> Back to blog
        </a>

        <header className="mt-8 max-w-4xl">
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            {category}
          </Badge>
          <h1
            className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white">
                {author.initials}
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {author.name}
                </p>
                <p className="text-xs text-muted-foreground">{author.role}</p>
              </div>
            </div>
            <span className="text-xs text-muted-foreground">
              {date} · {readTime}
            </span>
          </div>
        </header>

        <div className="mt-10 rounded-2xl bg-muted flex h-56 items-center justify-center sm:h-72 lg:h-96">
          <span className="text-5xl font-semibold text-muted-foreground/15">
            Cover
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-24">
              <p
                className="text-xs uppercase tracking-wider text-muted-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                On this page
              </p>
              <ul className="mt-4 flex flex-col gap-2 border-l border-border pl-4">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Share
                </p>
                <div className="flex gap-2">
                  {Object.entries(SOCIAL_PATHS).map(([name, path]) => (
                    <a
                      key={name}
                      href="#"
                      className="inline-flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      aria-label={`Share on ${name}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-3.5"
                      >
                        <path d={path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </aside>

          <div className="max-w-3xl">
            <div className="flex flex-col gap-6 text-base leading-7 text-muted-foreground">
              <h2
                id="the-problem"
                className="text-2xl tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                The problem
              </h2>
              <p>
                Every component library ships with one visual identity. If
                you want a different palette, you copy the entire theme file
                and manually adjust dozens of color values. It&apos;s tedious,
                error-prone, and creates maintenance burden.
              </p>
              <p>
                We wanted to let users switch between five distinct palettes
                with a single CSS class — no build step, no runtime JS, no
                breaking changes.
              </p>

              <h2
                id="our-approach"
                className="text-2xl tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                Our approach
              </h2>
              <p>
                Instead of hardcoded color values, every block references
                semantic CSS custom properties:{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
                  --background
                </code>
                ,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
                  --primary
                </code>
                ,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
                  --border
                </code>
                . Each theme defines these variables under a scoped class.
              </p>

              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <div className="flex items-center gap-2 border-b border-border px-4 py-2">
                  <span className="size-2.5 rounded-full bg-red-400" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs text-muted-foreground">
                    globals.css
                  </span>
                </div>
                <pre className="overflow-x-auto p-4 text-sm leading-6 text-foreground">
                  <code>{`.theme-ocean {
  --background: 210 40% 98%;
  --primary: 210 100% 52%;
  --border: 210 20% 90%;
}`}</code>
                </pre>
              </div>

              <h2
                id="implementation"
                className="text-2xl tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                Implementation
              </h2>
              <p>
                The migration touched every block file — replacing direct
                Tailwind color classes with semantic tokens. A codemod
                handled 90% of the changes automatically. The remaining 10%
                required manual review where colors carried semantic meaning
                beyond decoration.
              </p>

              <blockquote className="border-l-2 border-primary pl-6 text-foreground italic">
                &ldquo;Themes should be a design decision, not an
                engineering project.&rdquo;
              </blockquote>

              <h2
                id="what-we-learned"
                className="text-2xl tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                What we learned
              </h2>
              <p>
                CSS custom properties are the right abstraction for theming
                at scale. They compose naturally, have zero runtime cost, and
                work with any framework. The biggest lesson: name your tokens
                by purpose, not by color.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-3 border-t border-border pt-8 lg:hidden">
              <p className="text-sm text-muted-foreground">Share</p>
              {Object.entries(SOCIAL_PATHS).map(([name, path]) => (
                <a
                  key={name}
                  href="#"
                  className="inline-flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label={`Share on ${name}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3.5"
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
