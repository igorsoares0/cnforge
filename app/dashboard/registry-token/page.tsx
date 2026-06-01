import Link from "next/link";

import { auth } from "@/auth";
import { RegistryTokenManager } from "@/components/registry-token-manager";
import { db } from "@/lib/db";
import { getAccess } from "@/lib/entitlements";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://cnforge.dev";

export default async function RegistryTokenPage() {
  const session = await auth();
  const userId = session!.user.id;

  const [existing, access] = await Promise.all([
    db.registryToken.findFirst({
      where: { userId },
      select: { lastFour: true, createdAt: true, lastUsedAt: true },
    }),
    getAccess(userId),
  ]);

  const configSnippet = `{
  "registries": {
    "@cnforge": {
      "url": "${APP_URL}/r/{name}",
      "headers": { "Authorization": "Bearer \${REGISTRY_TOKEN}" }
    }
  }
}`;

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Registry token</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Install pro blocks via the shadcn CLI by authenticating with a personal
        token.
      </p>

      {!access.entitled && (
        <p className="mt-6 rounded-lg border border-border bg-muted px-4 py-3 text-sm">
          You can create a token now, but pro blocks stay locked until you{" "}
          <Link href="/pricing" className="font-medium underline">
            purchase a plan
          </Link>
          . Free blocks install without a token.
        </p>
      )}

      <div className="mt-6">
        {existing && (
          <p className="mb-4 text-sm text-muted-foreground">
            Active token ending in{" "}
            <span className="font-mono">…{existing.lastFour}</span>, created{" "}
            {existing.createdAt.toLocaleDateString()}. Rotating replaces it.
          </p>
        )}
        <RegistryTokenManager hasToken={!!existing} />
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-semibold">1. Add the registry</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          In your project&apos;s <code>components.json</code>:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-muted p-4 font-mono text-xs">
          <code>{configSnippet}</code>
        </pre>

        <h2 className="mt-6 text-sm font-semibold">2. Set the token</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          In <code>.env.local</code> (don&apos;t commit it):
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-muted p-4 font-mono text-xs">
          <code>REGISTRY_TOKEN=your_token_here</code>
        </pre>

        <h2 className="mt-6 text-sm font-semibold">3. Install</h2>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-muted p-4 font-mono text-xs">
          <code>npx shadcn add @cnforge/hero-3</code>
        </pre>
      </div>
    </div>
  );
}
