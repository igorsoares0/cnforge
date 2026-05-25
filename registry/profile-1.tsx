import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Stat = {
  value: string;
  label: string;
};

type BadgeItem = {
  label: string;
  color: string;
};

type Profile1Props = {
  name?: string;
  handle?: string;
  bio?: string;
  avatarInitials?: string;
  role?: string;
  stats?: Stat[];
  badges?: BadgeItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

const DEFAULT_STATS: Stat[] = [
  { value: "47", label: "Projects" },
  { value: "1.2k", label: "Contributions" },
  { value: "89", label: "Blocks used" },
  { value: "3", label: "Teams" },
];

const DEFAULT_BADGES: BadgeItem[] = [
  { label: "Early Adopter", color: "bg-amber-500/10 text-amber-600" },
  { label: "Top Contributor", color: "bg-emerald-500/10 text-emerald-600" },
  { label: "Pro Member", color: "bg-blue-500/10 text-blue-600" },
  { label: "Bug Hunter", color: "bg-purple-500/10 text-purple-600" },
];

export default function Profile1({
  name = "Jane Doe",
  handle = "@janedoe",
  bio = "Full-stack engineer building the future of developer tools. Open-source contributor and block enthusiast.",
  avatarInitials = "JD",
  role = "Staff Engineer",
  stats = DEFAULT_STATS,
  badges = DEFAULT_BADGES,
  ctaLabel = "Edit profile",
  ctaHref = "#",
}: Profile1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex size-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground sm:size-24 sm:text-3xl">
            {avatarInitials}
          </span>

          <h1
            className="mt-5 text-2xl tracking-tight text-foreground sm:text-3xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{handle}</p>
          <Badge
            variant="outline"
            className="mt-3 gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            {role}
          </Badge>

          <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
            {bio}
          </p>

          <Button
            variant="outline"
            nativeButton={false}
            className="mt-6 h-9 rounded-lg border-border bg-card px-5 text-sm text-foreground hover:bg-muted"
            render={<a href={ctaHref}>{ctaLabel}</a>}
          />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <p
                className="text-2xl tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3
            className="text-sm uppercase tracking-wider text-muted-foreground"
            style={{ fontWeight: "var(--title-weight, 700)" }}
          >
            Badges
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
