import { Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
};

type Testimonials4Props = {
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
      "We rebuilt our entire marketing site in a weekend. The blocks fit together like they were designed for us.",
    author: "Maya Chen",
    role: "VP Engineering",
    company: "Verve",
    initials: "MC",
    rating: 5,
  },
  {
    quote:
      "No more arguments about component architecture. Copy, paste, ship. The code quality is excellent.",
    author: "Tomás R.",
    role: "Staff Engineer",
    company: "FlowStack",
    initials: "TR",
    rating: 5,
  },
  {
    quote:
      "Eight themes saved us weeks of design iteration. Clients pick a palette and we deploy the same day.",
    author: "Lena Park",
    role: "Creative Director",
    company: "Pixel&Co",
    initials: "LP",
    rating: 5,
  },
  {
    quote:
      "The responsive quality is next-level. Every block works perfectly on mobile without any tweaks.",
    author: "James O.",
    role: "Freelancer",
    company: "Independent",
    initials: "JO",
    rating: 4,
  },
  {
    quote:
      "Switched from a UI library with 40+ dependencies to this. Our bundle dropped by 60%.",
    author: "Priya S.",
    role: "CTO",
    company: "NovaTech",
    initials: "PS",
    rating: 5,
  },
  {
    quote:
      "We use it for every new project now. The CLI workflow is exactly what we wanted.",
    author: "David K.",
    role: "Lead Developer",
    company: "BuildRight",
    initials: "DK",
    rating: 5,
  },
];

export default function Testimonials4({
  eyebrow = "Testimonials",
  title = "Loved by developers",
  subtitle = "Hear from teams who shipped faster with production-ready blocks.",
  items = DEFAULT_ITEMS,
}: Testimonials4Props) {
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

        <div className="mt-14 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <figure
              key={item.author}
              className="break-inside-avoid rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`size-4 ${
                      s < item.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-6 text-foreground">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className={`inline-flex size-9 items-center justify-center rounded-full text-xs font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
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
