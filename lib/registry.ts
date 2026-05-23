import { readFile } from "node:fs/promises";
import { join } from "node:path";

export type Block = {
  name: string;
  title?: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
};

export type Registry = {
  themes: string[];
  blocks: Block[];
};

const REGISTRY_FILE = join(process.cwd(), "registry", "registry.json");

export async function loadRegistry(): Promise<Registry> {
  const raw = await readFile(REGISTRY_FILE, "utf8");
  return JSON.parse(raw) as Registry;
}

export async function findBlock(name: string): Promise<Block | undefined> {
  const registry = await loadRegistry();
  return registry.blocks.find((b) => b.name === name);
}

export async function loadBlockSource(slug: string): Promise<string> {
  const file = join(process.cwd(), "registry", `${slug}.tsx`);
  return readFile(file, "utf8");
}
