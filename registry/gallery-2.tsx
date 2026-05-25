import { Badge } from "@/components/ui/badge";

type GalleryItem = {
  alt: string;
  caption?: string;
  tall?: boolean;
};

type Gallery2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: GalleryItem[];
};

const PLACEHOLDER_COLORS = [
  "bg-muted",
  "bg-muted/70",
  "bg-muted/85",
  "bg-muted/60",
  "bg-muted/90",
  "bg-muted/75",
];

const DEFAULT_ITEMS: GalleryItem[] = [
  { alt: "Dashboard overview", caption: "Dashboard", tall: true },
  { alt: "Block library", caption: "Blocks" },
  { alt: "Theme editor", caption: "Themes" },
  { alt: "Analytics panel", caption: "Analytics" },
  { alt: "Team workspace", caption: "Team", tall: true },
  { alt: "Deployment logs", caption: "Deploy" },
];

export default function Gallery2({
  eyebrow = "Gallery",
  title = "Built with blocks",
  subtitle = "Real interfaces assembled from our registry. Mix, match, and make it yours.",
  items = DEFAULT_ITEMS,
}: Gallery2Props) {
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

        <div className="mt-14 columns-1 gap-4 sm:mt-16 sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <figure
              key={item.alt}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div
                className={`flex items-center justify-center ${
                  item.tall ? "h-72 sm:h-80" : "h-44 sm:h-52"
                } ${PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length]}`}
              >
                <span className="text-3xl font-semibold text-muted-foreground/15">
                  {item.alt.slice(0, 2).toUpperCase()}
                </span>
              </div>
              {item.caption && (
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">
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
