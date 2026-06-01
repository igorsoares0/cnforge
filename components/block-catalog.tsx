"use client";

import { Lock } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Block = {
  name: string;
  title?: string;
  description?: string;
  tier?: "free" | "pro";
};

type BlockCatalogProps = {
  blocks: Block[];
  categories: string[];
};

function getCategory(name: string): string {
  const parts = name.split("-");
  parts.pop();
  return parts.join("-");
}

export default function BlockCatalog({
  blocks,
  categories,
}: BlockCatalogProps) {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? blocks
      : blocks.filter((b) => getCategory(b.name) === active);

  return (
    <div>
      <nav className="flex gap-2 overflow-x-auto pb-4">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            active === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          All ({blocks.length})
        </button>
        {categories.map((cat) => {
          const count = blocks.filter(
            (b) => getCategory(b.name) === cat
          ).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </nav>

      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((block) => (
          <li key={block.name}>
            <Link
              href={`/blocks/${block.name}`}
              className="group flex flex-col gap-2.5 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/30"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono text-sm font-semibold text-foreground">
                  {block.name}
                  {block.tier !== "free" ? (
                    <Lock className="size-3 text-muted-foreground" />
                  ) : (
                    <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      Free
                    </span>
                  )}
                </span>
                <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                  Preview →
                </span>
              </div>
              {block.description && (
                <p className="line-clamp-2 text-xs leading-5 text-muted-foreground">
                  {block.description}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
