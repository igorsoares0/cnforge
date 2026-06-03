import Link from "next/link";

import { auth } from "@/auth";
import { AcceptInvite } from "@/components/team/accept-invite";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export default async function InvitePage({
  params,
}: PageProps<"/invite/[token]">) {
  const { token } = await params;
  const session = await auth();

  const invite = await db.teamInvite.findUnique({
    where: { token },
    include: { team: { select: { name: true } } },
  });

  const valid =
    invite && invite.status === "pending" && invite.expiresAt > new Date();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center text-foreground">
      <div className="w-full max-w-sm">
        {!valid ? (
          <>
            <h1 className="text-2xl font-semibold tracking-tight">
              Invite unavailable
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              This invite is invalid, revoked, or has expired.
            </p>
            <Button
              className="mt-6"
              nativeButton={false}
              render={<Link href="/">Back to home</Link>}
            />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold tracking-tight">
              Join {invite.team.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              You&apos;ve been invited to join this team on cnforge, unlocking
              all pro blocks.
            </p>
            <div className="mt-8">
              {session?.user ? (
                <AcceptInvite token={token} />
              ) : (
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-muted-foreground">
                    Sign in or create an account to accept.
                  </p>
                  <Button
                    size="lg"
                    nativeButton={false}
                    render={
                      <Link href={`/login?callbackUrl=/invite/${token}`}>
                        Sign in
                      </Link>
                    }
                  />
                  <Button
                    variant="outline"
                    size="lg"
                    nativeButton={false}
                    render={
                      <Link href={`/signup?callbackUrl=/invite/${token}`}>
                        Create account
                      </Link>
                    }
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
