import { Check, Minus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Tier = {
  name: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

type FeatureRow = {
  label: string;
  values: (boolean | string)[];
};

type Comparison3Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tiers?: Tier[];
  rows?: FeatureRow[];
};

const DEFAULT_TIERS: Tier[] = [
  {
    name: "Free",
    description: "For tinkering and solo projects",
    ctaLabel: "Start free",
    ctaHref: "#",
  },
  {
    name: "Pro",
    description: "For freelancers and small teams",
    ctaLabel: "Upgrade",
    ctaHref: "#",
    highlighted: true,
  },
  {
    name: "Studio",
    description: "For agencies and bigger teams",
    ctaLabel: "Contact us",
    ctaHref: "#",
  },
];

const DEFAULT_ROWS: FeatureRow[] = [
  { label: "Blocks included", values: ["20", "115", "115 + early access"] },
  { label: "Themes included", values: ["3", "8", "8 + custom"] },
  { label: "Copy-paste source", values: [true, true, true] },
  { label: "Commercial license", values: [false, true, true] },
  { label: "Figma source files", values: [false, true, true] },
  { label: "Block requests", values: [false, "1/mo", "Unlimited"] },
  { label: "Priority support", values: [false, false, true] },
  { label: "Team seats", values: ["1", "5", "Unlimited"] },
];

function CellValue({
  value,
  emphasized,
}: {
  value: boolean | string;
  emphasized: boolean;
}) {
  if (value === true) {
    return (
      <Check
        className={`mx-auto size-5 ${emphasized ? "text-primary" : "text-success"}`}
      />
    );
  }
  if (value === false) {
    return <Minus className="mx-auto size-5 text-muted-foreground/30" />;
  }
  return (
    <span
      className={`text-sm font-medium ${emphasized ? "text-foreground" : "text-foreground"}`}
    >
      {value}
    </span>
  );
}

export default function Comparison3({
  eyebrow = "Plans compared",
  title = "Pick the tier that fits",
  subtitle = "Same blocks, different scale. Upgrade only when you need more.",
  tiers = DEFAULT_TIERS,
  rows = DEFAULT_ROWS,
}: Comparison3Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

        <div className="mt-14 hidden overflow-hidden rounded-2xl border border-border sm:mt-16 sm:block">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="px-5 py-5 text-sm font-medium text-muted-foreground sm:px-6">
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className={`px-4 py-5 text-center align-top ${tier.highlighted ? "bg-primary/5" : ""}`}
                  >
                    <p
                      className="text-base text-foreground"
                      style={{ fontWeight: "var(--title-weight, 700)" }}
                    >
                      {tier.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {tier.description}
                    </p>
                    <Button
                      nativeButton={false}
                      className={
                        tier.highlighted
                          ? "mt-4 h-9 w-full rounded-lg bg-primary px-3 text-xs text-primary-foreground hover:opacity-90"
                          : "mt-4 h-9 w-full rounded-lg border border-border bg-background px-3 text-xs text-foreground hover:bg-muted"
                      }
                      render={<a href={tier.ctaHref}>{tier.ctaLabel}</a>}
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={
                    i % 2 === 0
                      ? "border-b border-border bg-background"
                      : "border-b border-border bg-card/40"
                  }
                >
                  <td className="px-5 py-3.5 text-sm text-foreground sm:px-6">
                    {row.label}
                  </td>
                  {row.values.map((value, j) => (
                    <td
                      key={tiers[j].name}
                      className={`px-4 py-3.5 text-center ${tiers[j].highlighted ? "bg-primary/5" : ""}`}
                    >
                      <CellValue
                        value={value}
                        emphasized={Boolean(tiers[j].highlighted)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:hidden">
          {tiers.map((tier, j) => (
            <article
              key={tier.name}
              className={
                tier.highlighted
                  ? "rounded-2xl border-2 border-primary bg-card p-6"
                  : "rounded-2xl border border-border bg-card p-6"
              }
            >
              <p
                className="text-base text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {tier.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {tier.description}
              </p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {rows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="text-right text-foreground">
                      {row.values[j] === true ? (
                        <Check className="size-4 text-success" />
                      ) : row.values[j] === false ? (
                        <Minus className="size-4 text-muted-foreground/40" />
                      ) : (
                        <span className="font-medium">{row.values[j]}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                nativeButton={false}
                className={
                  tier.highlighted
                    ? "mt-5 h-10 w-full rounded-lg bg-primary text-sm text-primary-foreground hover:opacity-90"
                    : "mt-5 h-10 w-full rounded-lg border border-border bg-background text-sm text-foreground hover:bg-muted"
                }
                render={<a href={tier.ctaHref}>{tier.ctaLabel}</a>}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
