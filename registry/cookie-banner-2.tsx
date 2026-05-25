"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type CookieCategory = {
  id: string;
  label: string;
  description: string;
  required?: boolean;
};

type CookieBanner2Props = {
  title?: string;
  description?: string;
  categories?: CookieCategory[];
  acceptLabel?: string;
  declineLabel?: string;
  saveLabel?: string;
};

const DEFAULT_CATEGORIES: CookieCategory[] = [
  {
    id: "essential",
    label: "Essential",
    description: "Required for the site to function.",
    required: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Help us understand how you use the site.",
  },
  {
    id: "marketing",
    label: "Marketing",
    description: "Used for personalized ads and retargeting.",
  },
];

export default function CookieBanner2({
  title = "Cookie preferences",
  description = "We use cookies to improve your experience. Choose which categories you'd like to allow.",
  categories = DEFAULT_CATEGORIES,
  acceptLabel = "Accept all",
  declineLabel = "Reject all",
  saveLabel = "Save preferences",
}: CookieBanner2Props) {
  const [visible, setVisible] = useState(true);
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      categories.map((c) => [c.id, c.required ?? false])
    )
  );

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-border bg-card p-5 shadow-xl sm:bottom-6 sm:right-6">
      <h3
        className="text-sm text-foreground"
        style={{ fontWeight: "var(--title-weight, 700)" }}
      >
        {title}
      </h3>
      <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
        {description}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex items-center justify-between gap-3"
          >
            <div>
              <p className="text-xs font-medium text-foreground">
                {cat.label}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {cat.description}
              </p>
            </div>
            <button
              type="button"
              aria-label={`Toggle ${cat.label}`}
              disabled={cat.required}
              onClick={() =>
                setEnabled((prev) => ({
                  ...prev,
                  [cat.id]: !prev[cat.id],
                }))
              }
              className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
                enabled[cat.id] || cat.required
                  ? "bg-primary"
                  : "bg-muted"
              } ${cat.required ? "opacity-60" : "cursor-pointer"}`}
            >
              <span
                className={`inline-block size-3.5 rounded-full bg-white transition-transform ${
                  enabled[cat.id] || cat.required
                    ? "translate-x-[18px]"
                    : "translate-x-[3px]"
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <Button
          className="h-9 w-full rounded-lg bg-primary text-xs text-primary-foreground hover:opacity-90"
          onClick={() => setVisible(false)}
        >
          {acceptLabel}
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            className="h-9 rounded-lg border-border bg-card text-xs text-foreground hover:bg-muted"
            onClick={() => setVisible(false)}
          >
            {declineLabel}
          </Button>
          <Button
            variant="outline"
            className="h-9 rounded-lg border-border bg-card text-xs text-foreground hover:bg-muted"
            onClick={() => setVisible(false)}
          >
            {saveLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
