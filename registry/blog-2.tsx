import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type Post = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: { name: string; initials: string };
  href: string;
};

type Blog2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  posts?: Post[];
};

const DEFAULT_POSTS: Post[] = [
  {
    category: "Engineering",
    title: "How we cut bundle size by 40% without touching a line of app code",
    excerpt:
      "A deep dive into tree-shaking, code splitting, and the one Webpack config change that made the biggest difference.",
    date: "May 15, 2026",
    author: { name: "Marcus Chen", initials: "MC" },
    href: "#",
  },
  {
    category: "Product",
    title: "Introducing themes: one class, five palettes",
    excerpt:
      "Ship a dark mode, a warm palette, and three more — all from the same codebase, with zero runtime cost.",
    date: "May 8, 2026",
    author: { name: "Sofia Andrade", initials: "SA" },
    href: "#",
  },
  {
    category: "Design",
    title: "Why every block starts at 375px",
    excerpt:
      "Mobile-first isn't a checkbox. Here's the process we use to make sure blocks look right on the smallest screens first.",
    date: "Apr 28, 2026",
    author: { name: "Ana Torres", initials: "AT" },
    href: "#",
  },
];

const AVATAR_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-orange-500",
];

export default function Blog2({
  eyebrow = "Blog",
  title = "Latest from the team",
  subtitle = "Engineering deep dives, product updates, and the occasional hot take on frontend tooling.",
  posts = DEFAULT_POSTS,
}: Blog2Props) {
  const [featured, ...rest] = posts;

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            {eyebrow}
          </Badge>
          <h2
            className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:mt-16 lg:grid-cols-2">
          {featured && (
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex h-56 items-center justify-center bg-muted sm:h-64">
                <span className="text-5xl font-semibold text-muted-foreground/20">
                  {featured.author.initials}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="self-start rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
                  {featured.category}
                </span>
                <h3
                  className="mt-3 text-xl tracking-tight text-foreground sm:text-2xl"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  <a href={featured.href} className="hover:underline">
                    {featured.title}
                  </a>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className={`inline-flex size-8 items-center justify-center rounded-full text-xs font-semibold text-white ${AVATAR_COLORS[0]}`}>
                    {featured.author.initials}
                  </span>
                  <span className="text-sm text-foreground">{featured.author.name}</span>
                  <span className="text-xs text-muted-foreground">· {featured.date}</span>
                </div>
              </div>
            </article>
          )}

          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <article
                key={post.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:p-8"
              >
                <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-muted sm:size-20">
                  <span className="text-lg font-semibold text-muted-foreground/30">
                    {post.author.initials}
                  </span>
                </div>
                <div className="flex flex-1 flex-col">
                  <span className={`self-start rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${i % 2 === 0 ? "bg-blue-500/10 text-blue-600" : "bg-orange-500/10 text-orange-600"}`}>
                    {post.category}
                  </span>
                  <h3
                    className="mt-2 text-base tracking-tight text-foreground sm:text-lg"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    <a href={post.href} className="hover:underline">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className={`inline-flex size-6 items-center justify-center rounded-full text-[10px] font-semibold text-white ${AVATAR_COLORS[(i + 1) % AVATAR_COLORS.length]}`}>
                      {post.author.initials}
                    </span>
                    <span className="text-sm text-foreground">{post.author.name}</span>
                    <span className="text-xs text-muted-foreground">· {post.date}</span>
                  </div>
                </div>
                <a
                  href={post.href}
                  className="hidden shrink-0 self-center text-muted-foreground transition-colors hover:text-foreground sm:block"
                  aria-label={`Read ${post.title}`}
                >
                  <ArrowRight className="size-5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
