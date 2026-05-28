import { Badge } from "@/components/ui/badge";

type RelatedPost = {
  title: string;
  category: string;
  readTime: string;
  href: string;
};

type Blogpost3Props = {
  category?: string;
  title?: string;
  subtitle?: string;
  date?: string;
  readTime?: string;
  author?: { name: string; role: string; initials: string };
  backHref?: string;
  related?: RelatedPost[];
};

const DEFAULT_RELATED: RelatedPost[] = [
  {
    title: "Designing themes that don't fight your brand",
    category: "Design",
    readTime: "5 min",
    href: "#",
  },
  {
    title: "Why we picked CSS variables over Tailwind config",
    category: "Engineering",
    readTime: "7 min",
    href: "#",
  },
  {
    title: "The case against the dark mode toggle",
    category: "Opinion",
    readTime: "4 min",
    href: "#",
  },
];

export default function Blogpost3({
  category = "Design",
  title = "The hidden cost of every UI library you've ever installed",
  subtitle = "After a decade of shipping with closed-source kits, we'd accumulated more technical debt than features. Here's what we did about it.",
  date = "May 22, 2026",
  readTime = "10 min read",
  author = {
    name: "Helena Brooks",
    role: "Head of Design",
    initials: "HB",
  },
  backHref = "#",
  related = DEFAULT_RELATED,
}: Blogpost3Props) {
  return (
    <article className="w-full bg-background pb-16 sm:pb-20 lg:pb-24">
      <div className="relative">
        <div className="flex h-64 items-center justify-center bg-muted sm:h-80 lg:h-[480px]">
          <span className="text-6xl font-semibold text-muted-foreground/15 sm:text-7xl">
            Cover
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto -mt-12 max-w-3xl px-4 sm:-mt-16 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
          <a
            href={backHref}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span aria-hidden>&larr;</span> Back to blog
          </a>

          <header className="mt-6">
            <Badge
              variant="outline"
              className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
            >
              <span className="size-1.5 rounded-full bg-success" />
              {category}
            </Badge>
            <h1
              className="mt-5 text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl"
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

            <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-purple-500 text-sm font-semibold text-white">
                  {author.initials}
                </span>
                <div>
                  <p
                    className="text-sm text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {author.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{author.role}</p>
                </div>
              </div>
              <span className="ml-auto text-xs text-muted-foreground">
                {date} · {readTime}
              </span>
            </div>
          </header>
        </div>

        <div className="mt-12 flex flex-col gap-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          <p>
            <span
              className="float-left mr-3 mt-1 text-6xl leading-[0.85] text-foreground sm:text-7xl"
              style={{ fontWeight: "var(--title-weight, 700)" }}
            >
              W
            </span>
            e didn&apos;t mean to build our own block library. We just kept
            hitting the same wall. Every UI kit we tried solved 80% of the
            problem and made the remaining 20% twice as painful. Customizing a
            single component meant fighting a build system someone else
            designed.
          </p>

          <p>
            The breaking point came on a Tuesday. We were shipping a
            white-label dashboard for a client and the &ldquo;configurable&rdquo;
            theme system only exposed eight color variables. Eight. To change
            the border radius, you had to fork the package.
          </p>

          <figure className="my-4 border-y border-border py-8">
            <blockquote
              className="text-2xl tracking-tight text-foreground sm:text-3xl"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.2)",
              }}
            >
              &ldquo;Every shortcut we took with a third-party kit cost us
              triple, six months later, when we needed to customize it.&rdquo;
            </blockquote>
          </figure>

          <p>
            That night, we made a list of everything we wished a component
            library would do: ship as source code we own, theme with CSS
            variables, work with the shadcn CLI we already used, and never —
            ever — require a runtime dependency. Three weeks later, cnforge
            shipped its first ten blocks.
          </p>

          <h2
            className="mt-4 text-2xl tracking-tight text-foreground sm:text-3xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.1)",
            }}
          >
            What we got wrong (twice)
          </h2>
          <p>
            The first version of the registry shipped each block as a separate
            file per theme. Five themes meant five copies of every block.
            Maintenance was a nightmare; updating a hero meant editing five
            files. We knew it was wrong before launch but shipped it anyway.
          </p>
          <p>
            The rewrite — moving every theme to CSS variables on a single
            file — took two weeks and removed roughly 40% of the codebase. The
            registry got faster, smaller, and easier to contribute to. The
            lesson: solve the duplication problem before it has a chance to
            scale.
          </p>

          <h2
            className="mt-4 text-2xl tracking-tight text-foreground sm:text-3xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.1)",
            }}
          >
            Where we&apos;re going next
          </h2>
          <p>
            We&apos;re less than a year into this and the catalog already
            covers most of what teams actually ship. The next chapter is about
            depth — themes that aren&apos;t just color palettes, blocks that
            integrate with real backends, and tooling that makes contribution
            feel like fun instead of work.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <p
            className="text-xs uppercase tracking-wider text-muted-foreground"
            style={{ fontWeight: "var(--title-weight, 700)" }}
          >
            Keep reading
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((post) => (
              <a
                key={post.title}
                href={post.href}
                className="group flex flex-col gap-2 rounded-xl border border-border bg-background p-4 transition-colors hover:bg-muted/50"
              >
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {post.category}
                </span>
                <p
                  className="text-sm leading-5 text-foreground"
                  style={{ fontWeight: "var(--title-weight, 600)" }}
                >
                  {post.title}
                </p>
                <span className="mt-auto text-xs text-muted-foreground">
                  {post.readTime}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
