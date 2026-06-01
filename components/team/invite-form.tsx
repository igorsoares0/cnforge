"use client";

import { useActionState, useEffect, useRef } from "react";

import { inviteMember, type TeamActionState } from "@/app/actions/team";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initial: TeamActionState = {};

export function InviteForm({ disabled }: { disabled: boolean }) {
  const [state, action, pending] = useActionState(inviteMember, initial);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <form ref={formRef} action={action} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Input
          name="email"
          type="email"
          placeholder="teammate@company.com"
          required
          disabled={disabled || pending}
        />
        <Button type="submit" disabled={disabled || pending}>
          {pending ? "Sending…" : "Invite"}
        </Button>
      </div>
      {state.error && <p className="text-sm text-destructive">{state.error}</p>}
      {state.success && (
        <p className="text-sm text-muted-foreground">{state.success}</p>
      )}
      {disabled && (
        <p className="text-sm text-muted-foreground">
          All seats are in use. Remove a member or revoke an invite to free one
          up.
        </p>
      )}
    </form>
  );
}
