import { Badge } from "@/components/ui/badge";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
};

type Testimonials1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: Testimonial[];
};

const AVATAR_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-cyan-500",
];

const DEFAULT_ITEMS: Testimonial[] = [
  {
    quote:
      "Cut our landing-page time from a week to an afternoon. The blocks just look right out of the box — no fighting Tailwind defaults.",
    author: "Priya R.",
    role: "Staff Engineer, Linear",
    initials: "PR",
  },
  {
    quote:
      "Finally, a UI kit that doesn't make every site look the same. The themes give us identity without designing from scratch.",
    author: "Marcus L.",
    role: "Co-founder, Drift",
    initials: "ML",
  },
  {
    quote:
      "We replaced three different component libraries with this. Less code, faster builds, and the team actually enjoys editing the markup.",
    author: "Sofia A.",
    role: "Tech Lead, Vercel",
    initials: "SA",
  },
  {
    quote:
      "Themed blocks are a killer feature. Built a marketing site and a separate docs portal sharing the same registry but with different palettes.",
    author: "Jonas K.",
    role: "Founder, Resend",
    initials: "JK",
  },
  {
    quote:
      "What sold me was how clean the copied code is. No CSS-in-JS, no runtime — just TSX and Tailwind I can actually maintain.",
    author: "Aisha P.",
    role: "Senior Dev, Stripe",
    initials: "AP",
  },
  {
    quote:
      "Used it to ship our seed-round landing in two days. Investors thought we had a designer on staff.",
    author: "Henrique D.",
    role: "CEO, Slope",
    initials: "HD",
  },
];

export default function Testimonials1({
  eyebrow = "Testimonials",
  title = "Builders shipping faster",
  subtitle = "What teams say after replacing their old UI stack with copy-paste blocks.",
  items = DEFAULT_ITEMS,
}: Testimonials1Props) {
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
          {items.map((item, i) => (
            <figure
              key={item.author}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <blockquote className="flex-1 text-sm leading-6 text-foreground sm:text-base sm:leading-7">
                <span
                  aria-hidden
                  className="mb-2 block font-serif text-3xl leading-none text-quote-mark"
                >
                  &ldquo;
                </span>
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  aria-hidden
                  className={`inline-flex size-10 items-center justify-center rounded-full text-sm font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                >
                  {item.initials}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {item.author}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.role}
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
