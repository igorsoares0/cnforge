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

type Blog1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  posts?: Post[];
};

const CATEGORY_COLORS = [
  "bg-emerald-500/10 text-emerald-600",
  "bg-blue-500/10 text-blue-600",
  "bg-orange-500/10 text-orange-600",
];

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

export default function Blog1({
  eyebrow = "Blog",
  title = "Latest from the team",
  subtitle = "Engineering deep dives, product updates, and the occasional hot take on frontend tooling.",
  posts = DEFAULT_POSTS,
}: Blog1Props) {
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

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="flex h-48 items-center justify-center bg-muted">
                <span className="text-4xl font-semibold text-muted-foreground/30">
                  {post.author.initials}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span
                  className={`self-start rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${CATEGORY_COLORS[i % CATEGORY_COLORS.length]}`}
                >
                  {post.category}
                </span>

                <h3
                  className="mt-3 text-lg tracking-tight text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  <a href={post.href} className="hover:underline">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex size-7 items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-foreground">
                      {post.author.initials}
                    </span>
                    <span className="text-sm text-foreground">
                      {post.author.name}
                    </span>
                  </div>
                  <time className="text-xs text-muted-foreground">
                    {post.date}
                  </time>
                </div>
              </div>

              <a
                href={post.href}
                className="flex items-center justify-center gap-1.5 border-t border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Read more
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
