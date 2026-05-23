import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { loadRegistry } from "@/lib/registry";

type RegistryItemFile =
  | {
      path: string;
      type: "registry:block" | "registry:theme";
      content: string;
      target?: string;
    }
  | {
      path: string;
      type: "registry:file";
      content: string;
      target: string;
    };

type RegistryItem = {
  $schema: string;
  name: string;
  type: "registry:block" | "registry:file";
  title?: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: RegistryItemFile[];
};

const SCHEMA_URL = "https://ui.shadcn.com/schema/registry-item.json";

async function readRegistryFile(relativePath: string): Promise<string> {
  const fullPath = join(process.cwd(), "registry", relativePath);
  return readFile(fullPath, "utf8");
}

async function buildBlockItem(name: string): Promise<RegistryItem | null> {
  const registry = await loadRegistry();
  const block = registry.blocks.find((b) => b.name === name);
  if (!block) return null;

  const content = await readRegistryFile(`${name}.tsx`);

  return {
    $schema: SCHEMA_URL,
    name: block.name,
    type: "registry:block",
    title: block.title ?? block.name,
    description: block.description,
    dependencies: block.dependencies,
    registryDependencies: block.registryDependencies,
    files: [
      {
        path: `blocks/${name}.tsx`,
        type: "registry:block",
        content,
      },
    ],
  };
}

async function buildThemeItem(themeName: string): Promise<RegistryItem | null> {
  const registry = await loadRegistry();
  if (!registry.themes.includes(themeName)) return null;

  const content = await readRegistryFile(`themes/${themeName}.css`);

  return {
    $schema: SCHEMA_URL,
    name: `theme-${themeName}`,
    type: "registry:file",
    title: `${themeName.charAt(0).toUpperCase()}${themeName.slice(1)} theme`,
    description: `cnforge theme palette: ${themeName}. Import into your globals.css to enable the \`.theme-${themeName}\` scope.`,
    files: [
      {
        path: `themes/${themeName}.css`,
        type: "registry:file",
        content,
        target: `app/themes/${themeName}.css`,
      },
    ],
  };
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name: raw } = await params;
  const name = raw.replace(/\.json$/, "");

  const item = name.startsWith("theme-")
    ? await buildThemeItem(name.slice("theme-".length))
    : await buildBlockItem(name);

  if (!item) {
    return new Response(JSON.stringify({ error: `Not found: ${name}` }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }

  return Response.json(item, {
    headers: { "cache-control": "public, max-age=60, s-maxage=300" },
  });
}
