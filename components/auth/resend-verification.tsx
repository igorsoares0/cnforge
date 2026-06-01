"use client";

import { useActionState } from "react";

import { resendVerification, type ActionState } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initial: ActionState = {};

export function ResendVerification() {
  const [state, action, pending] = useActionState(resendVerification, initial);

  if (state.success) {
    return (
      <p className="mt-8 rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground">
        {state.success}
      </p>
    );
  }

  return (
    <form action={action} className="mt-8 flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "Sending…" : "Resend verification email"}
      </Button>
    </form>
  );
}
