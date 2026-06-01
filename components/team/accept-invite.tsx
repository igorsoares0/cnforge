"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { acceptInvite } from "@/app/actions/team";
import { Button } from "@/components/ui/button";

export function AcceptInvite({ token }: { token: string }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  function accept() {
    start(async () => {
      const res = await acceptInvite(token);
      if (res.success) {
        router.push("/dashboard");
        router.refresh();
      } else {
        setMessage(res.error ?? "Something went wrong.");
      }
    });
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <Button size="lg" onClick={accept} disabled={pending}>
        {pending ? "Joining…" : "Accept invite"}
      </Button>
      {message && <p className="text-sm text-destructive">{message}</p>}
    </div>
  );
}
