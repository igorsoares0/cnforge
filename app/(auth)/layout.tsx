import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background px-4 py-16 text-foreground">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mb-8 flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Shadcn Forge
        </Link>
        {children}
      </div>
    </div>
  );
}
