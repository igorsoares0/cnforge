import { Badge } from "@/components/ui/badge";

type GalleryItem = {
  alt: string;
  caption: string;
  tag?: string;
};

type Gallery3Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  featured?: GalleryItem;
  items?: GalleryItem[];
};

const PLACEHOLDER_COLORS = [
  "bg-muted",
  "bg-muted/85",
  "bg-muted/70",
  "bg-muted/90",
  "bg-muted/60",
];

const DEFAULT_FEATURED: GalleryItem = {
  alt: "Analytics dashboard overview",
  caption: "Analytics dashboard",
  tag: "Featured",
};

const DEFAULT_ITEMS: GalleryItem[] = [
  { alt: "Settings panel", caption: "Settings", tag: "Settings" },
  { alt: "Team workspace", caption: "Team workspace", tag: "Workspace" },
  { alt: "Block library catalog", caption: "Block library", tag: "Catalog" },
  { alt: "Theme editor preview", caption: "Theme editor", tag: "Editor" },
];

export default function Gallery3({
  eyebrow = "Showcase",
  title = "Built with the registry",
  subtitle = "A curated showcase of interfaces shipped with cnforge blocks and themes.",
  featured = DEFAULT_FEATURED,
  items = DEFAULT_ITEMS,
}: Gallery3Props) {
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

        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-5">
          <figure className="group relative overflow-hidden rounded-2xl border border-border bg-card lg:col-span-3">
            <div
              className={`flex h-72 items-center justify-center sm:h-96 lg:h-[480px] ${PLACEHOLDER_COLORS[0]}`}
            >
              <span className="text-5xl font-semibold text-muted-foreground/15">
                {featured.alt.slice(0, 2).toUpperCase()}
              </span>
            </div>
            {featured.tag && (
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                <span className="size-1.5 rounded-full bg-success" />
                {featured.tag}
              </span>
            )}
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent px-5 pb-5 pt-12 sm:px-6 sm:pb-6">
              <p
                className="text-lg tracking-tight text-foreground sm:text-xl"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {featured.caption}
              </p>
            </figcaption>
          </figure>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {items.slice(0, 4).map((item, i) => (
              <figure
                key={item.alt}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div
                  className={`flex h-44 items-center justify-center sm:h-52 lg:h-28 ${PLACEHOLDER_COLORS[(i + 1) % PLACEHOLDER_COLORS.length]}`}
                >
                  <span className="text-2xl font-semibold text-muted-foreground/15">
                    {item.alt.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className="truncate text-sm text-foreground">
                    {item.caption}
                  </span>
                  {item.tag && (
                    <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {item.tag}
                    </span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
