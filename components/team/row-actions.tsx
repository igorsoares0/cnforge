"use client";

import { useTransition } from "react";

import { removeMember, revokeInvite } from "@/app/actions/team";
import { Button } from "@/components/ui/button";

export function RemoveMemberButton({ memberId }: { memberId: string }) {
  const [pending, start] = useTransition();
  return (
    <Button
      variant="ghost"
      size="sm"
      disabled={pending}
      onClick={() => start(async () => void (await removeMember(memberId)))}
    >
      Remove
    </Button>
  );
}

export function RevokeInviteButton({ inviteId }: { inviteId: string }) {
  const [pending, start] = useTransition();
  return (
    <Button
      variant="ghost"
      size="sm"
      disabled={pending}
      onClick={() => start(async () => void (await revokeInvite(inviteId)))}
    >
      Revoke
    </Button>
  );
}
