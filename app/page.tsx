import { ArrowRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BlockCatalog from "@/components/block-catalog";
import SiteHeader from "@/components/site-header";
import { loadRegistry } from "@/lib/registry";

function getCategory(name: string): string {
  const parts = name.split("-");
  parts.pop();
  return parts.join("-");
}

const FEATURES = [
  "Copy-paste source code — no package dependency",
  "8 theme palettes, swap with one CSS class",
  "Responsive from 375px to desktop",
  "Server components by default",
  "shadcn CLI compatible",
];

export default async function Home() {
  const registry = await loadRegistry();
  const categories = Array.from(
    new Set(registry.blocks.map((b) => getCategory(b.name)))
  ).sort();

  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <SiteHeader />
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-16 pt-20 text-center sm:pb-20 sm:pt-28">
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {registry.blocks.length} blocks · {registry.themes.length} themes
          </Badge>

          <h1
            className="mt-8 max-w-3xl text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            Ship landing pages in minutes, not days
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Production-ready UI blocks for React and Next.js. Pick a block,
            choose a theme, run one CLI command — the code lands in your
            project, ready to edit.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 rounded-xl bg-primary px-8 text-sm text-primary-foreground hover:opacity-90"
              render={
                <a href="#catalog">
                  Browse blocks
                  <ArrowRight className="size-4" />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 rounded-xl border-border bg-background px-8 text-sm font-medium text-foreground hover:bg-muted"
              render={
                <a href="https://github.com/cnforge/cnforge">GitHub</a>
              }
            />
          </div>

          <div className="mt-8">
            <pre className="inline-flex items-center gap-3 rounded-lg border border-border bg-muted px-4 py-2.5 font-mono text-sm text-foreground">
              <code>npx shadcn add @cnforge/hero-1</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-border sm:grid-cols-4">
          {[
            { value: String(registry.blocks.length), label: "Blocks" },
            { value: String(registry.themes.length), label: "Themes" },
            { value: String(categories.length), label: "Categories" },
            { value: "0", label: "Runtime deps" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center sm:py-10">
              <p
                className="text-3xl tracking-tight text-foreground sm:text-4xl"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2
                className="text-3xl tracking-tight text-foreground sm:text-4xl"
                style={{
                  fontWeight: "var(--title-weight, 700)",
                  lineHeight: "var(--title-leading, 1.05)",
                }}
              >
                Everything you need to ship fast
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                No lock-in, no runtime bloat, no vendor dependency. Just
                well-crafted TSX that becomes part of your codebase.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                    <Check className="size-3 text-emerald-600" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Available themes
            </span>
            {registry.themes.map((theme) => (
              <Badge key={theme} variant="secondary">
                {theme}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                className="text-3xl tracking-tight text-foreground sm:text-4xl"
                style={{
                  fontWeight: "var(--title-weight, 700)",
                  lineHeight: "var(--title-leading, 1.05)",
                }}
              >
                Block catalog
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                {registry.blocks.length} blocks across{" "}
                {categories.length} categories. Click to preview.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <BlockCatalog
              blocks={registry.blocks}
              categories={categories}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-muted-foreground">
            Built with cnforge blocks. Open source.
          </p>
        </div>
      </footer>
    </div>
  );
}
