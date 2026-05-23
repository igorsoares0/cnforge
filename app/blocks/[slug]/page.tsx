import Link from "next/link";
import { notFound } from "next/navigation";

import BlockPreviewFrame from "@/components/block-preview-frame";
import CodeBlock from "@/components/code-block";
import CopyButton from "@/components/copy-button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import ThemeSwitcher from "@/components/theme-switcher";
import { blockComponents } from "@/lib/blocks";
import { loadBlockSource, loadRegistry } from "@/lib/registry";

export async function generateStaticParams() {
  const registry = await loadRegistry();
  return registry.blocks.map((block) => ({ slug: block.name }));
}

export default async function BlockPreviewPage({
  params,
  searchParams,
}: PageProps<"/blocks/[slug]">) {
  const { slug } = await params;
  const search = await searchParams;
  const themeParam = search.theme;
  const requestedTheme = Array.isArray(themeParam) ? themeParam[0] : themeParam;
  const theme = requestedTheme ?? "default";

  const registry = await loadRegistry();
  const block = registry.blocks.find((b) => b.name === slug);
  if (!block || !registry.themes.includes(theme)) {
    notFound();
  }

  const Component = blockComponents[slug];
  if (!Component) {
    notFound();
  }

  const source = await loadBlockSource(slug);

  const command =
    theme === "default"
      ? `npx shadcn add @cnforge/${slug}`
      : `npx shadcn add @cnforge/${slug} @cnforge/theme-${theme}`;

  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-8">
          <Link
            href="/"
            className="w-fit text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Shadcn Forge
          </Link>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="font-mono text-2xl font-semibold tracking-tight">
                {slug}
              </h1>
              {block.description && (
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  {block.description}
                </p>
              )}
            </div>
            <ThemeSwitcher themes={registry.themes} active={theme} />
          </div>
          <div className="relative">
            <pre className="overflow-x-auto rounded-lg border border-border bg-muted px-4 py-3 pr-12 font-mono text-sm text-foreground">
              <code>{command}</code>
            </pre>
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <CopyButton value={command} />
            </div>
          </div>
        </div>
      </header>

      <div className="w-full px-6 py-6">
        <Tabs defaultValue="preview" className="gap-4">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <BlockPreviewFrame
              src={
                theme === "default"
                  ? `/blocks/${slug}/preview`
                  : `/blocks/${slug}/preview?theme=${theme}`
              }
              title={`${slug} preview`}
            />
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock code={source} lang="tsx" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
