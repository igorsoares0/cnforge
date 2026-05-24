import { Badge } from "@/components/ui/badge";

type GalleryItem = {
  alt: string;
  caption?: string;
};

type Gallery1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: GalleryItem[];
};

const PLACEHOLDER_COLORS = [
  "bg-muted",
  "bg-muted/80",
  "bg-muted/60",
  "bg-muted",
  "bg-muted/70",
  "bg-muted/90",
];

const DEFAULT_ITEMS: GalleryItem[] = [
  { alt: "Dashboard overview", caption: "Dashboard" },
  { alt: "Analytics view", caption: "Analytics" },
  { alt: "Settings panel", caption: "Settings" },
  { alt: "Team management", caption: "Team" },
  { alt: "API explorer", caption: "API" },
  { alt: "Deployment logs", caption: "Deploy" },
];

export default function Gallery1({
  eyebrow = "Gallery",
  title = "See it in action",
  subtitle = "Screenshots from real projects built with our blocks and themes.",
  items = DEFAULT_ITEMS,
}: Gallery1Props) {
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

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <figure
              key={item.alt}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div
                className={`flex h-48 items-center justify-center sm:h-56 ${PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length]}`}
              >
                <span className="text-2xl font-semibold text-muted-foreground/20">
                  {item.alt.slice(0, 2).toUpperCase()}
                </span>
              </div>
              {item.caption && (
                <figcaption className="px-4 py-3 text-center text-sm text-muted-foreground">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
