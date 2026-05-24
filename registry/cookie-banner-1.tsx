"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type CookieBanner1Props = {
  message?: string;
  acceptLabel?: string;
  declineLabel?: string;
  learnMoreHref?: string;
  learnMoreLabel?: string;
};

export default function CookieBanner1({
  message = "We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies.",
  acceptLabel = "Accept all",
  declineLabel = "Decline",
  learnMoreHref = "#privacy",
  learnMoreLabel = "Learn more",
}: CookieBanner1Props) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
        <p className="text-sm leading-6 text-muted-foreground">
          {message}{" "}
          <a
            href={learnMoreHref}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {learnMoreLabel}
          </a>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <Button
            size="sm"
            className="h-9 rounded-lg border border-border bg-card px-4 text-sm text-foreground hover:bg-muted"
            onClick={() => setDismissed(true)}
          >
            {declineLabel}
          </Button>
          <Button
            size="sm"
            className="h-9 rounded-lg bg-primary px-4 text-sm text-primary-foreground hover:opacity-90"
            onClick={() => setDismissed(true)}
          >
            {acceptLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
