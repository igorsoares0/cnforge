#!/usr/bin/env node
// Deprecated: cnforge is now distributed as a shadcn registry.
// The legacy `cnforge add` CLI has been replaced by the official shadcn CLI.

const args = process.argv.slice(2);
const positional = args.find((a) => !a.startsWith("-"));
const target = positional && positional !== "add" ? positional : "<block>";

process.stderr.write(`✗ "npx cnforge" is deprecated.

cnforge now ships as a shadcn registry. Use the official CLI instead:

  npx shadcn add @cnforge/${target}

One-time setup — add the registry to your components.json:

  {
    "registries": {
      "@cnforge": { "url": "https://cnforge.dev/r/{name}" }
    }
  }

Themes install separately, e.g.:

  npx shadcn add @cnforge/theme-noir

See specs.md for the full reference.
`);
process.exit(2);
