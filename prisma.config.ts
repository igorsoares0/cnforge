import { readFileSync } from "node:fs";

import { defineConfig, env } from "prisma/config";

// Prisma 7 no longer auto-loads dotenv files for the config, so load them here.
// Precedence: .env.local (real, gitignored) overrides .env (placeholders).
for (const file of [".env", ".env.local"]) {
  try {
    for (const line of readFileSync(file, "utf8").split("\n")) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (!match) continue;
      const key = match[1];
      let value = (match[2] ?? "").trim();
      if (/^(["']).*\1$/.test(value)) value = value.slice(1, -1);
      process.env[key] = value;
    }
  } catch {
    // file may not exist — fine
  }
}

// Prisma 7: connection URLs live here (not in schema.prisma).
// The migration engine uses the direct (unpooled) Neon connection.
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DIRECT_URL"),
  },
});
