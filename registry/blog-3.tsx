import { Badge } from "@/components/ui/badge";

type Post = {
  date: string;
  title: string;
  excerpt: string;
  href: string;
};

type Blog3Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  posts?: Post[];
};

const DEFAULT_POSTS: Post[] = [
  {
    date: "May 24",
    title: "Reaching 100 blocks: what we learned scaling a component registry",
    excerpt:
      "The architecture decisions, naming conventions, and automation that got us from 10 blocks to 100 without losing consistency.",
    href: "#",
  },
  {
    date: "May 18",
    title: "CSS variables are the right theming abstraction",
    excerpt:
      "Why we moved from file-per-theme to scoped CSS custom properties, and how it simplified everything.",
    href: "#",
  },
  {
    date: "May 12",
    title: "Server components and the death of 'use client'",
    excerpt:
      "90% of our blocks ship as server components. Here's why that matters for performance and DX.",
    href: "#",
  },
  {
    date: "May 5",
    title: "Mobile-first is a process, not a media query",
    excerpt:
      "How we design every block starting at 375px and the checklist we use before shipping.",
    href: "#",
  },
  {
    date: "Apr 28",
    title: "The registry protocol: how shadcn add actually works",
    excerpt:
      "A technical deep dive into the JSON format, static params, and cache strategy behind our registry endpoint.",
    href: "#",
  },
];

export default function Blog3({
  eyebrow = "Blog",
  title = "From the team",
  subtitle = "Engineering deep dives and product thinking, no fluff.",
  posts = DEFAULT_POSTS,
}: Blog3Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div>
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

        <div className="mt-12 flex flex-col divide-y divide-border">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="group flex flex-col gap-1 py-6 first:pt-0 last:pb-0 sm:flex-row sm:gap-6"
            >
              <time className="shrink-0 text-sm tabular-nums text-muted-foreground sm:w-16 sm:pt-0.5">
                {post.date}
              </time>
              <div className="min-w-0 flex-1">
                <h3
                  className="text-base tracking-tight text-foreground group-hover:text-primary transition-colors"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {post.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
