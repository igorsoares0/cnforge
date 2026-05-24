"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

type Banner2Props = {
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
  dismissible?: boolean;
};

export default function Banner2({
  text = "We just shipped v2.0 with 28 new blocks and 5 themes.",
  ctaLabel = "Learn more",
  ctaHref = "#",
  dismissible = true,
}: Banner2Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative w-full border-b border-border bg-card px-4 py-2.5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <p className="flex-1 text-sm text-foreground">
          <span className="mr-2 inline-flex size-1.5 rounded-full bg-success" />
          {text}
        </p>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {ctaLabel}
            <ArrowRight className="size-3" />
          </a>

          {dismissible && (
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Dismiss"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
