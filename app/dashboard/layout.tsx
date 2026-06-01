import Link from "next/link";

import { auth } from "@/auth";
import { SignOutButton } from "@/components/sign-out-button";
import { db } from "@/lib/db";

const NAV = [
  { href: "/dashboard", label: "Account" },
  { href: "/dashboard/billing", label: "Billing" },
  { href: "/dashboard/registry-token", label: "Registry token" },
  { href: "/dashboard/team", label: "Team" },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const ownsTeam = session?.user?.id
    ? (await db.team.count({ where: { ownerId: session.user.id } })) > 0
    : false;

  const nav = NAV.filter((n) => n.href !== "/dashboard/team" || ownsTeam);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row">
        <aside className="md:w-56 md:shrink-0">
          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            ← Shadcn Forge
          </Link>
          <nav className="mt-6 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-2">
              <SignOutButton />
            </div>
          </nav>
        </aside>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
