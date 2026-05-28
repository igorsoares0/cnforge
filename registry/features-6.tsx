"use client";

import {
  BarChart3,
  Layers,
  type LucideIcon,
  Palette,
  Terminal,
} from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";

type TabIcon = "terminal" | "palette" | "layers" | "chart";

type Tab = {
  icon: TabIcon;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  code: string;
  filename: string;
};

type Features6Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tabs?: Tab[];
};

const ICONS: Record<TabIcon, LucideIcon> = {
  terminal: Terminal,
  palette: Palette,
  layers: Layers,
  chart: BarChart3,
};

const DEFAULT_TABS: Tab[] = [
  {
    icon: "terminal",
    label: "Install",
    title: "One CLI command per block",
    description:
      "Pick a block from the registry and pull its TSX source straight into your project. No package, no runtime, no surprise updates.",
    bullets: [
      "Works with the official shadcn CLI",
      "Dependencies resolved automatically",
      "Re-run anytime to fetch updates",
    ],
    filename: "terminal",
    code: `$ npx shadcn add @cnforge/hero-1
✓ Resolved 3 dependencies
✓ Created registry/hero-1.tsx
✓ Updated app/page.tsx
Done in 1.4s`,
  },
  {
    icon: "palette",
    label: "Theme",
    title: "Eight palettes, one CSS class",
    description:
      "Wrap any section in a theme class and every block recolors instantly. Mix themes on the same page — marketing noir, docs solar, app default.",
    bullets: [
      "8 curated palettes shipped",
      "Custom themes via CSS variables",
      "Zero runtime cost — pure CSS",
    ],
    filename: "app/page.tsx",
    code: `<section className="theme-ocean">
  <Hero1 />
  <Pricing1 />
</section>
<section className="theme-noir">
  <Footer1 />
</section>`,
  },
  {
    icon: "layers",
    label: "Compose",
    title: "Blocks that fit together",
    description:
      "Every block uses the same spacing, type scale, and semantic tokens. Stack them in any order and the rhythm stays right.",
    bullets: [
      "Shared semantic tokens",
      "Consistent vertical rhythm",
      "Same prop conventions",
    ],
    filename: "app/page.tsx",
    code: `export default function Page() {
  return (
    <>
      <Navbar1 />
      <Hero5 />
      <Features3 />
      <Pricing2 />
      <Footer4 />
    </>
  );
}`,
  },
  {
    icon: "chart",
    label: "Ship",
    title: "Static-first, fast by default",
    description:
      "Server components, no client JS unless a block needs it. Bundle stays small, TTFB stays low, Lighthouse stays green.",
    bullets: [
      "Server components by default",
      "Bundle under 100kb",
      "Static generation friendly",
    ],
    filename: "lighthouse.txt",
    code: `Performance     98
Accessibility   100
Best practices  100
SEO             100

LCP   1.1s
CLS   0.00
TBT   30ms`,
  },
];

export default function Features6({
  eyebrow = "Features",
  title = "Pick what fits your stack",
  subtitle = "Each tab tells you exactly how the registry plugs into a real Next.js app.",
  tabs = DEFAULT_TABS,
}: Features6Props) {
  const [active, setActive] = useState(0);
  const current = tabs[active];
  const CurrentIcon = ICONS[current.icon];

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

        <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-[260px_1fr] lg:gap-10">
          <div
            role="tablist"
            aria-label="Feature categories"
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {tabs.map((tab, i) => {
              const Icon = ICONS[tab.icon];
              const isActive = i === active;
              return (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`group flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-colors lg:shrink ${
                    isActive
                      ? "bg-card text-foreground shadow-sm ring-1 ring-border"
                      : "text-muted-foreground hover:bg-card/60 hover:text-foreground"
                  }`}
                >
                  <span
                    className={`inline-flex size-8 items-center justify-center rounded-lg ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                  <CurrentIcon className="size-5" />
                </span>
                <h3
                  className="mt-5 text-2xl tracking-tight text-foreground sm:text-3xl"
                  style={{
                    fontWeight: "var(--title-weight, 700)",
                    lineHeight: "var(--title-leading, 1.1)",
                  }}
                >
                  {current.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {current.description}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {current.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-success" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-xl border border-border bg-background">
                <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                  <span className="size-2.5 rounded-full bg-red-400" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs text-muted-foreground">
                    {current.filename}
                  </span>
                </div>
                <pre className="overflow-x-auto p-4 text-xs leading-6 text-foreground sm:text-sm">
                  <code>{current.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
