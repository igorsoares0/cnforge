import { Badge } from "@/components/ui/badge";

type LogoItem = {
  name: string;
  description: string;
  initials: string;
};

type Logos3Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  logos?: LogoItem[];
};

const LOGO_COLORS = [
  "bg-blue-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-cyan-500",
];

const DEFAULT_LOGOS: LogoItem[] = [
  { name: "ACME", description: "Cloud infrastructure", initials: "AC" },
  { name: "GLOBEX", description: "Enterprise solutions", initials: "GX" },
  { name: "INITECH", description: "Developer tools", initials: "IT" },
  { name: "STARK", description: "AI & automation", initials: "SK" },
  { name: "WAYNE", description: "Security platform", initials: "WE" },
  { name: "OSCORP", description: "Data analytics", initials: "OC" },
];

export default function Logos3({
  eyebrow = "Trusted by",
  title = "Companies that build with us",
  subtitle = "From startups to enterprises, teams of all sizes trust our platform.",
  logos = DEFAULT_LOGOS,
}: Logos3Props) {
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

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:mt-16 lg:grid-cols-3">
          {logos.map((logo, i) => (
            <div
              key={logo.name}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
            >
              <span
                className={`inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white ${LOGO_COLORS[i % LOGO_COLORS.length]}`}
              >
                {logo.initials}
              </span>
              <div>
                <p
                  className="text-sm tracking-tight text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {logo.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {logo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
