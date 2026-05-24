type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
};

type Testimonials3Props = {
  items?: Testimonial[];
  speed?: number;
};

const AVATAR_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-cyan-500",
  "bg-violet-500",
  "bg-amber-500",
];

const DEFAULT_ITEMS: Testimonial[] = [
  {
    quote: "Cut our landing-page time from a week to an afternoon.",
    author: "Priya R.",
    role: "Staff Engineer",
    initials: "PR",
  },
  {
    quote: "Finally, a UI kit that doesn't make every site look the same.",
    author: "Marcus L.",
    role: "Co-founder",
    initials: "ML",
  },
  {
    quote: "We replaced three component libraries with this. Less code, faster builds.",
    author: "Sofia A.",
    role: "Tech Lead",
    initials: "SA",
  },
  {
    quote: "Themed blocks are a killer feature for multi-brand projects.",
    author: "Jonas K.",
    role: "Founder",
    initials: "JK",
  },
  {
    quote: "What sold me was how clean the copied code is. Just TSX and Tailwind.",
    author: "Aisha P.",
    role: "Senior Dev",
    initials: "AP",
  },
  {
    quote: "Shipped our seed-round landing in two days. Investors loved it.",
    author: "Henrique D.",
    role: "CEO",
    initials: "HD",
  },
];

export default function Testimonials3({
  items = DEFAULT_ITEMS,
  speed = 35,
}: Testimonials3Props) {
  const doubled = [...items, ...items];

  return (
    <section className="w-full bg-background py-12 sm:py-16">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <div
          className="flex w-max animate-[marquee_var(--marquee-speed)_linear_infinite] gap-6"
          style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
        >
          {doubled.map((item, i) => (
            <figure
              key={`${item.author}-${i}`}
              className="flex w-80 shrink-0 flex-col rounded-2xl border border-border bg-card p-6"
            >
              <blockquote className="flex-1 text-sm leading-6 text-foreground">
                <span
                  aria-hidden
                  className="mb-1 block font-serif text-2xl leading-none text-quote-mark"
                >
                  &ldquo;
                </span>
                {item.quote}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className={`inline-flex size-8 items-center justify-center rounded-full text-xs font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                >
                  {item.initials}
                </span>
                <div>
                  <span className="text-sm font-medium text-foreground">
                    {item.author}
                  </span>
                  <span className="ml-1 text-xs text-muted-foreground">
                    · {item.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
