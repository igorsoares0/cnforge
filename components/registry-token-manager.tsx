"use client";

import { useState, useTransition } from "react";

import { generateRegistryToken } from "@/app/actions/registry-token";
import CopyButton from "@/components/copy-button";
import { Button } from "@/components/ui/button";

export function RegistryTokenManager({ hasToken }: { hasToken: boolean }) {
  const [token, setToken] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function generate() {
    startTransition(async () => {
      const res = await generateRegistryToken();
      if ("token" in res) setToken(res.token);
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={generate} disabled={pending} className="w-fit">
        {pending
          ? "Generating…"
          : hasToken
            ? "Rotate token"
            : "Generate token"}
      </Button>

      {token && (
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">
            Copy this now — it won&apos;t be shown again.
          </p>
          <div className="mt-2 flex items-center gap-2">
            <code className="flex-1 overflow-x-auto rounded-md bg-muted px-3 py-2 font-mono text-sm">
              {token}
            </code>
            <CopyButton value={token} />
          </div>
        </div>
      )}
    </div>
  );
}
