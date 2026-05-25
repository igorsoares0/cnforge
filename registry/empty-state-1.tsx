import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

type EmptyState1Props = {
  icon?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function EmptyState1({
  icon = "📂",
  title = "No projects yet",
  description = "Create your first project to start building with blocks. It only takes a few seconds.",
  ctaLabel = "Create project",
  ctaHref = "#",
  secondaryLabel = "Learn more",
  secondaryHref = "#",
}: EmptyState1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-md px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex size-16 items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/50">
            <span className="text-2xl" aria-hidden>
              {icon}
            </span>
          </div>

          <h2
            className="mt-6 text-xl tracking-tight text-foreground sm:text-2xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              className="h-10 rounded-xl bg-primary px-6 text-sm text-primary-foreground hover:opacity-90"
              render={
                <a href={ctaHref}>
                  <Plus className="size-4" />
                  {ctaLabel}
                </a>
              }
            />
            <Button
              variant="outline"
              nativeButton={false}
              className="h-10 rounded-xl border-border bg-card px-6 text-sm text-foreground hover:bg-muted"
              render={<a href={secondaryHref}>{secondaryLabel}</a>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
