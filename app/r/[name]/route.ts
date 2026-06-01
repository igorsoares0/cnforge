import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { isEntitled } from "@/lib/entitlements";
import { loadRegistry, tierOf } from "@/lib/registry";
import { resolveRegistryToken } from "@/lib/registry-token";

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

function jsonError(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "content-type": "application/json" },
  });
}

/** Returns true if the bearer token belongs to an entitled user. */
async function isAuthorized(request: Request): Promise<boolean> {
  const header = request.headers.get("authorization") ?? "";
  const token = header.replace(/^Bearer\s+/i, "").trim();
  if (!token) return false;
  const userId = await resolveRegistryToken(token);
  if (!userId) return false;
  return isEntitled(userId);
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name: raw } = await params;
  const name = raw.replace(/\.json$/, "");

  // Themes are always free to install.
  if (name.startsWith("theme-")) {
    const theme = await buildThemeItem(name.slice("theme-".length));
    if (!theme) return jsonError(`Not found: ${name}`, 404);
    return Response.json(theme, {
      headers: { "cache-control": "public, max-age=60, s-maxage=300" },
    });
  }

  const registry = await loadRegistry();
  const block = registry.blocks.find((b) => b.name === name);
  if (!block) return jsonError(`Not found: ${name}`, 404);

  // Pro blocks require a valid registry token from an entitled user.
  if (tierOf(block) === "pro" && !(await isAuthorized(request))) {
    return jsonError(
      `"${name}" is a pro block. Add your registry token to components.json, or unlock it at ${process.env.NEXT_PUBLIC_APP_URL ?? "https://cnforge.dev"}/pricing`,
      401,
    );
  }

  const item = await buildBlockItem(name);
  if (!item) return jsonError(`Not found: ${name}`, 404);

  // Per-user gated content must not be cached by shared caches.
  const cacheControl =
    tierOf(block) === "pro"
      ? "private, no-store"
      : "public, max-age=60, s-maxage=300";
  return Response.json(item, { headers: { "cache-control": cacheControl } });
}
