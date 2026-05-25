"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

type Banner3Props = {
  text?: string;
  linkLabel?: string;
  linkHref?: string;
  dismissible?: boolean;
  badge?: string;
};

export default function Banner3({
  text = "Introducing themes — switch between 8 palettes with a single class.",
  linkLabel = "Learn more",
  linkHref = "#",
  dismissible = true,
  badge = "New",
}: Banner3Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative w-full border-b border-border bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 px-4 py-2.5">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3">
        {badge && (
          <span className="shrink-0 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
            {badge}
          </span>
        )}
        <p className="text-sm text-foreground">
          {text}
        </p>
        {linkLabel && (
          <a
            href={linkHref}
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:opacity-80"
          >
            {linkLabel}
            <ArrowRight className="size-3" />
          </a>
        )}
      </div>

      {dismissible && (
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Dismiss"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
