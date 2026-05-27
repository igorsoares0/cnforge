import { Badge } from "@/components/ui/badge";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
};

type Testimonials5Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  featured?: Testimonial;
  items?: Testimonial[];
};

const AVATAR_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-purple-500",
  "bg-pink-500",
];

const DEFAULT_FEATURED: Testimonial = {
  quote:
    "We migrated our entire marketing site to these blocks in a single sprint. The code quality is outstanding — clean TSX, semantic tokens, zero runtime. Our team went from dreading landing page work to actually enjoying it.",
  author: "Maya Chen",
  role: "VP Engineering",
  company: "Verve",
  initials: "MC",
};

const DEFAULT_ITEMS: Testimonial[] = [
  {
    quote:
      "Eight themes saved us weeks of design iteration. Clients pick a palette and we deploy the same day.",
    author: "Lena Park",
    role: "Creative Director",
    company: "Pixel&Co",
    initials: "LP",
  },
  {
    quote:
      "Switched from a UI library with 40+ dependencies to this. Our bundle dropped by 60%.",
    author: "Priya S.",
    role: "CTO",
    company: "NovaTech",
    initials: "PS",
  },
  {
    quote:
      "The responsive quality is next-level. Every block works perfectly on mobile without any tweaks.",
    author: "James O.",
    role: "Freelancer",
    company: "Independent",
    initials: "JO",
  },
];

export default function Testimonials5({
  eyebrow = "Testimonials",
  title = "Trusted by builders",
  subtitle = "Hear from the teams shipping faster with production-ready blocks.",
  featured = DEFAULT_FEATURED,
  items = DEFAULT_ITEMS,
}: Testimonials5Props) {
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

        <figure className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-card p-8 sm:mt-16 sm:p-10">
          <blockquote>
            <span
              aria-hidden
              className="mb-3 block font-serif text-4xl leading-none text-quote-mark"
            >
              &ldquo;
            </span>
            <p className="text-base leading-7 text-foreground sm:text-lg sm:leading-8">
              {featured.quote}
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-6">
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
              {featured.initials}
            </span>
            <div>
              <span
                className="text-base text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {featured.author}
              </span>
              <p className="text-sm text-muted-foreground">
                {featured.role} · {featured.company}
              </p>
            </div>
          </figcaption>
        </figure>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {items.map((item, i) => (
            <figure
              key={item.author}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <blockquote className="flex-1 text-sm leading-6 text-foreground">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className={`inline-flex size-8 items-center justify-center rounded-full text-xs font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                >
                  {item.initials}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {item.author}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.role} · {item.company}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
