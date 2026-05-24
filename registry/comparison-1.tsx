import { Check, Minus } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type ComparisonFeature = {
  name: string;
  us: boolean | string;
  them: boolean | string;
};

type Comparison1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  usLabel?: string;
  themLabel?: string;
  features?: ComparisonFeature[];
};

const DEFAULT_FEATURES: ComparisonFeature[] = [
  { name: "Copy-paste source code", us: true, them: false },
  { name: "No vendor lock-in", us: true, them: false },
  { name: "Themed blocks (multiple palettes)", us: true, them: false },
  { name: "shadcn CLI compatible", us: true, them: true },
  { name: "Free tier", us: true, them: true },
  { name: "Responsive at 375px", us: true, them: false },
  { name: "Zero runtime dependency", us: true, them: false },
  { name: "Commercial license", us: "Pro", them: "$299/yr" },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="mx-auto size-5 text-success" />;
  }
  if (value === false) {
    return <Minus className="mx-auto size-5 text-muted-foreground/40" />;
  }
  return (
    <span className="text-sm font-medium text-foreground">{value}</span>
  );
}

export default function Comparison1({
  eyebrow = "Compare",
  title = "See how we stack up",
  subtitle = "Feature-by-feature breakdown so you can make an informed decision.",
  usLabel = "Us",
  themLabel = "Others",
  features = DEFAULT_FEATURES,
}: Comparison1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
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

        <div className="mt-12 overflow-hidden rounded-2xl border border-border sm:mt-16">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="px-5 py-4 text-sm font-medium text-muted-foreground sm:px-6">
                  Feature
                </th>
                <th className="w-28 px-4 py-4 text-center text-sm font-medium text-foreground sm:w-32">
                  {usLabel}
                </th>
                <th className="w-28 px-4 py-4 text-center text-sm font-medium text-muted-foreground sm:w-32">
                  {themLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={feature.name}
                  className={
                    i % 2 === 0
                      ? "border-b border-border bg-background"
                      : "border-b border-border bg-card/50"
                  }
                >
                  <td className="px-5 py-3.5 text-sm text-foreground sm:px-6">
                    {feature.name}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <CellValue value={feature.us} />
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <CellValue value={feature.them} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
