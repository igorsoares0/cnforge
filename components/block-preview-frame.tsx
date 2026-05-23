"use client";

import { Monitor, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Viewport = "desktop" | "tablet" | "mobile";

const VIEWPORTS: ReadonlyArray<{
  id: Viewport;
  label: string;
  icon: typeof Monitor;
  width: string;
}> = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "768px" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "375px" },
];

type BlockPreviewFrameProps = {
  src: string;
  title: string;
};

export default function BlockPreviewFrame({
  src,
  title,
}: BlockPreviewFrameProps) {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const current = VIEWPORTS.find((v) => v.id === viewport)!;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-end">
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
          {VIEWPORTS.map((v) => {
            const Icon = v.icon;
            const active = v.id === viewport;
            return (
              <Button
                key={v.id}
                size="sm"
                variant={active ? "default" : "ghost"}
                aria-label={v.label}
                aria-pressed={active}
                className="size-7 rounded-full p-0"
                onClick={() => setViewport(v.id)}
              >
                <Icon className="size-3.5" />
              </Button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center overflow-hidden rounded-lg border border-border bg-muted/40 p-2 sm:p-3">
        <iframe
          key={src}
          src={src}
          title={title}
          loading="lazy"
          className={cn(
            "h-[720px] w-full rounded-md border border-border bg-background shadow-sm",
            "transition-[max-width] duration-300 ease-out",
          )}
          style={{ maxWidth: current.width }}
        />
      </div>
    </div>
  );
}
