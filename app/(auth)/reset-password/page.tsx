"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useActionState } from "react";

import { resetPassword, type ActionState } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initial: ActionState = {};

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  );
}

function ResetPasswordForm() {
  const token = useSearchParams().get("token") ?? "";
  const [state, action, pending] = useActionState(resetPassword, initial);

  if (!token) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Invalid link</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This reset link is missing or malformed.
        </p>
        <Link
          href="/forgot-password"
          className="mt-6 inline-block text-sm font-medium text-foreground hover:underline"
        >
          Request a new link
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Set a new password</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Choose a strong password you don&apos;t use elsewhere.
        </p>
      </div>

      {state.success ? (
        <div className="mt-8 text-center">
          <p className="rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground">
            {state.success}
          </p>
          <Link
            href="/login"
            className="mt-6 inline-block text-sm font-medium text-foreground hover:underline"
          >
            Go to sign in
          </Link>
        </div>
      ) : (
        <form action={action} className="mt-8 flex flex-col gap-4">
          <input type="hidden" name="token" value={token} />
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium">
              New password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
            />
          </div>
          {state.error && (
            <p className="text-sm text-destructive" role="alert">
              {state.error}
            </p>
          )}
          <Button type="submit" size="lg" className="w-full" disabled={pending}>
            {pending ? "Updating…" : "Update password"}
          </Button>
        </form>
      )}
    </div>
  );
}
