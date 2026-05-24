"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

type Banner1Props = {
  text?: string;
  linkLabel?: string;
  linkHref?: string;
  dismissible?: boolean;
};

export default function Banner1({
  text = "We just launched v2.0 — new blocks, new themes, same CLI.",
  linkLabel = "See what's new",
  linkHref = "#",
  dismissible = true,
}: Banner1Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative w-full bg-primary px-4 py-2.5 text-center text-sm text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-3">
        <span className="size-1.5 shrink-0 rounded-full bg-primary-foreground/50" />
        <p className="leading-6">
          {text}
          {linkLabel && (
            <a
              href={linkHref}
              className="ml-2 inline-flex items-center gap-1 font-medium underline underline-offset-4 hover:opacity-80"
            >
              {linkLabel}
              <ArrowRight className="size-3" />
            </a>
          )}
        </p>
      </div>

      {dismissible && (
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          aria-label="Dismiss"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
