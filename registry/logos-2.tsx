type Logos2Props = {
  caption?: string;
  logos?: string[];
  speed?: number;
};

const DEFAULT_LOGOS = [
  "ACME",
  "GLOBEX",
  "INITECH",
  "UMBRELLA",
  "STARK",
  "WAYNE",
  "OSCORP",
  "CYBERDYNE",
];

export default function Logos2({
  caption = "Trusted by industry leaders worldwide",
  logos = DEFAULT_LOGOS,
  speed = 30,
}: Logos2Props) {
  const items = [...logos, ...logos];

  return (
    <section className="w-full bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {caption}
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden sm:mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <div
          className="flex w-max animate-[marquee_var(--marquee-speed)_linear_infinite] items-center gap-12 sm:gap-16"
          style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
        >
          {items.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="shrink-0 text-base font-semibold tracking-tight text-muted-foreground opacity-70 transition-opacity hover:opacity-100"
            >
              {logo}
            </span>
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
