import { Badge } from "@/components/ui/badge";

type Testimonials2Props = {
  eyebrow?: string;
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  initials?: string;
  metric?: { value: string; label: string };
};

const QUOTE =
  "We replaced our entire marketing site stack — three component libraries, a custom design system, and a Figma-to-code pipeline — with a single registry. Shipped in two weeks what took us three months before. The code is cleaner, the pages are faster, and the team is happier.";

export default function Testimonials2({
  eyebrow = "What customers say",
  quote = QUOTE,
  author = "Elena Vasquez",
  role = "VP of Engineering",
  company = "Lattice",
  initials = "EV",
  metric = { value: "3x", label: "faster time to ship" },
}: Testimonials2Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            {eyebrow}
          </Badge>
        </div>

        <figure className="mt-10 sm:mt-14">
          <span
            aria-hidden
            className="block text-center font-serif text-6xl leading-none text-quote-mark sm:text-7xl"
          >
            &ldquo;
          </span>
          <blockquote className="mt-4 text-center text-xl leading-9 tracking-tight text-foreground sm:text-2xl sm:leading-10">
            {quote}
          </blockquote>

          <figcaption className="mt-10 flex flex-col items-center gap-4">
            <span
              aria-hidden
              className="inline-flex size-14 items-center justify-center rounded-full bg-emerald-500 text-lg font-semibold text-white"
            >
              {initials}
            </span>
            <div className="text-center">
              <span
                className="block text-base text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {author}
              </span>
              <span className="mt-0.5 block text-sm text-muted-foreground">
                {role}, {company}
              </span>
            </div>
          </figcaption>
        </figure>

        {metric && (
          <div className="mx-auto mt-12 flex max-w-xs flex-col items-center rounded-2xl border border-border bg-card px-8 py-6 text-center">
            <span
              className="text-4xl tracking-tight text-foreground sm:text-5xl"
              style={{ fontWeight: "var(--title-weight, 700)" }}
            >
              {metric.value}
            </span>
            <span className="mt-1 text-sm text-muted-foreground">
              {metric.label}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
