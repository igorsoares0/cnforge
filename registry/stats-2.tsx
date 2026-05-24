type Stat = {
  value: string;
  label: string;
};

type Stats2Props = {
  stats?: Stat[];
};

const DEFAULT_STATS: Stat[] = [
  { value: "50K+", label: "Developers" },
  { value: "99.9%", label: "Uptime" },
  { value: "120+", label: "Countries" },
  { value: "2M+", label: "Deploys" },
];

export default function Stats2({
  stats = DEFAULT_STATS,
}: Stats2Props) {
  return (
    <section className="w-full border-y border-border bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span
                className="text-3xl tracking-tight text-foreground sm:text-4xl"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {stat.value}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
