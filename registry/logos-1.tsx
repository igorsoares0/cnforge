type Logos1Props = {
  caption?: string;
  logos?: string[];
};

const DEFAULT_LOGOS = [
  "ACME",
  "GLOBEX",
  "INITECH",
  "UMBRELLA",
  "STARK",
  "WAYNE",
];

export default function Logos1({
  caption = "Trusted by teams shipping every week",
  logos = DEFAULT_LOGOS,
}: Logos1Props) {
  return (
    <section className="w-full bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {caption}
        </p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:mt-10 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-base font-semibold tracking-tight text-muted-foreground opacity-70 transition-opacity hover:opacity-100"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
