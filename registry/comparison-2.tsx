import { Check, Minus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Feature = {
  label: string;
  us: boolean;
  them: boolean;
};

type Comparison2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  usLabel?: string;
  themLabel?: string;
  usDescription?: string;
  themDescription?: string;
  features?: Feature[];
  ctaLabel?: string;
  ctaHref?: string;
};

const DEFAULT_FEATURES: Feature[] = [
  { label: "Copy-paste source code", us: true, them: false },
  { label: "No vendor lock-in", us: true, them: false },
  { label: "Multiple theme palettes", us: true, them: false },
  { label: "shadcn CLI compatible", us: true, them: true },
  { label: "Free tier available", us: true, them: true },
  { label: "Responsive at 375px", us: true, them: false },
  { label: "Zero runtime dependency", us: true, them: false },
  { label: "Server component support", us: true, them: false },
];

function FeatureRow({
  label,
  included,
}: {
  label: string;
  included: boolean;
}) {
  return (
    <li className="flex items-center gap-3 text-sm">
      {included ? (
        <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-success/10">
          <Check className="size-3 text-success" />
        </span>
      ) : (
        <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-muted">
          <Minus className="size-3 text-muted-foreground/40" />
        </span>
      )}
      <span
        className={included ? "text-foreground" : "text-muted-foreground"}
      >
        {label}
      </span>
    </li>
  );
}

export default function Comparison2({
  eyebrow = "Compare",
  title = "Why choose us?",
  subtitle = "A side-by-side look at what sets us apart.",
  usLabel = "cnforge",
  themLabel = "Others",
  usDescription = "Open-source, themeable blocks with zero lock-in.",
  themDescription = "Closed-source kits with limited customization.",
  features = DEFAULT_FEATURES,
  ctaLabel = "Get started free",
  ctaHref = "#",
}: Comparison2Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                cf
              </span>
              <div>
                <h3
                  className="text-lg text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {usLabel}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {usDescription}
                </p>
              </div>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {features.map((f) => (
                <FeatureRow
                  key={f.label}
                  label={f.label}
                  included={f.us}
                />
              ))}
            </ul>
            <Button
              nativeButton={false}
              className="mt-8 h-10 w-full rounded-xl bg-primary text-sm text-primary-foreground hover:opacity-90"
              render={<a href={ctaHref}>{ctaLabel}</a>}
            />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-muted text-sm font-bold text-muted-foreground">
                ??
              </span>
              <div>
                <h3
                  className="text-lg text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {themLabel}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {themDescription}
                </p>
              </div>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {features.map((f) => (
                <FeatureRow
                  key={f.label}
                  label={f.label}
                  included={f.them}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
