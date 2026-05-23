import { notFound } from "next/navigation";

import { blockComponents } from "@/lib/blocks";
import { loadRegistry } from "@/lib/registry";

export async function generateStaticParams() {
  const registry = await loadRegistry();
  return registry.blocks.map((block) => ({ slug: block.name }));
}

export default async function BlockIframePreview({
  params,
  searchParams,
}: PageProps<"/blocks/[slug]/preview">) {
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

  return (
    <div className={`theme-${theme}`}>
      <Component />
    </div>
  );
}
