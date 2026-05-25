import { Badge } from "@/components/ui/badge";

type Blogpost1Props = {
  category?: string;
  title?: string;
  subtitle?: string;
  date?: string;
  readTime?: string;
  author?: { name: string; role: string; initials: string };
  tags?: string[];
  backHref?: string;
};

export default function Blogpost1({
  category = "Engineering",
  title = "How we cut bundle size by 40% without touching a line of app code",
  subtitle = "A deep dive into tree-shaking, code splitting, and the one Webpack config change that made the biggest difference.",
  date = "May 15, 2026",
  readTime = "8 min read",
  author = {
    name: "Marcus Chen",
    role: "Staff Engineer",
    initials: "MC",
  },
  tags = ["Performance", "Webpack", "DX"],
  backHref = "#",
}: Blogpost1Props) {
  return (
    <article className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <a
          href={backHref}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden>&larr;</span> Back to blog
        </a>

        <header className="mt-8">
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            {category}
          </Badge>
          <h1
            className="mt-6 text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {subtitle}
          </p>

          <div className="mt-8 flex items-center gap-4 border-b border-border pb-8">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white">
              {author.initials}
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">
                {author.name}
              </p>
              <p className="text-xs text-muted-foreground">{author.role}</p>
            </div>
            <span className="ml-auto text-xs text-muted-foreground">
              {date} · {readTime}
            </span>
          </div>
        </header>

        <div className="mt-10 rounded-2xl bg-muted flex h-64 items-center justify-center sm:h-80">
          <span className="text-4xl font-semibold text-muted-foreground/15">
            Cover
          </span>
        </div>

        <div className="mt-12 flex flex-col gap-6 text-base leading-7 text-muted-foreground">
          <p>
            When we started auditing our production bundle, the numbers were
            sobering: 420 KB of JavaScript shipped on every page load,
            blocking render for nearly two seconds on median mobile
            connections. Something had to change.
          </p>

          <h2
            className="text-2xl tracking-tight text-foreground"
            style={{ fontWeight: "var(--title-weight, 700)" }}
          >
            The audit
          </h2>
          <p>
            We ran webpack-bundle-analyzer and immediately spotted the
            culprits — three utility libraries imported at the top level that
            were only used in a single route. Moving them behind dynamic
            imports saved 80 KB in one commit.
          </p>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs text-muted-foreground">
                webpack.config.js
              </span>
            </div>
            <pre className="overflow-x-auto p-4 text-sm leading-6 text-foreground">
              <code>{`module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 50000,
    },
    usedExports: true,
  },
};`}</code>
            </pre>
          </div>

          <h2
            className="text-2xl tracking-tight text-foreground"
            style={{ fontWeight: "var(--title-weight, 700)" }}
          >
            The results
          </h2>
          <p>
            After three focused PRs over two weeks, we reduced the initial
            bundle from 420 KB to 248 KB — a 41% reduction. Time to
            Interactive dropped from 3.2s to 1.8s on a throttled 4G
            connection.
          </p>

          <blockquote className="border-l-2 border-primary pl-6 text-foreground italic">
            &ldquo;The best optimizations are the ones where you remove code
            instead of adding it.&rdquo;
          </blockquote>

          <p>
            None of these changes required modifying application logic. Every
            improvement came from build configuration and import hygiene —
            proof that infrastructure work compounds.
          </p>
        </div>

        <footer className="mt-12 border-t border-border pt-8">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white">
              {author.initials}
            </span>
            <div>
              <p
                className="text-sm text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                Written by {author.name}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {author.role} · Writes about performance, DX, and frontend
                infrastructure.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
