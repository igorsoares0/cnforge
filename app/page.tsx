import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { loadRegistry } from "@/lib/registry";

export default async function Home() {
  const registry = await loadRegistry();

  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-20 sm:py-28">
        <header className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            v0.1 · MVP
          </Badge>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Shadcn Forge
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Copy-paste UI blocks for React and Next.js, built on top of
            shadcn/ui. Pick a block, choose a theme, run the CLI — the code
            lands in your project, ready to edit.
          </p>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Install a block
            </p>
            <pre className="overflow-x-auto rounded-lg border border-border bg-muted px-4 py-3 font-mono text-sm text-foreground">
              <code>npx shadcn add @cnforge/hero-1</code>
            </pre>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Themes
            </span>
            {registry.themes.map((theme) => (
              <Badge key={theme} variant="secondary">
                {theme}
              </Badge>
            ))}
            <span className="text-xs text-muted-foreground">
              · install separately, e.g. <code className="font-mono">@cnforge/theme-noir</code>
            </span>
          </div>
        </header>

        <section className="flex flex-col gap-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Blocks</h2>
            <span className="text-sm text-muted-foreground">
              {registry.blocks.length} available
            </span>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {registry.blocks.map((block) => (
              <li key={block.name}>
                <Link
                  href={`/blocks/${block.name}`}
                  className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-card-foreground">
                      {block.name}
                    </span>
                    <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                      Preview →
                    </span>
                  </div>
                  {block.description && (
                    <p className="text-sm leading-6 text-muted-foreground">
                      {block.description}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
