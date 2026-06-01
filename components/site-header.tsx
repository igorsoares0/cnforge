import Link from "next/link";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function SiteHeader() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          cnforge
        </Link>
        <nav className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/pricing">Pricing</Link>}
          />
          {session?.user ? (
            <Button
              size="sm"
              render={<Link href="/dashboard">Dashboard</Link>}
            />
          ) : (
            <Button
              size="sm"
              render={<Link href="/login">Sign in</Link>}
            />
          )}
        </nav>
      </div>
    </header>
  );
}
