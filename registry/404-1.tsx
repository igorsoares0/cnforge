import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

type NotFound1Props = {
  code?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function NotFound1({
  code = "404",
  title = "Page not found",
  subtitle = "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
  ctaLabel = "Back to home",
  ctaHref = "/",
}: NotFound1Props) {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-background px-4 py-16">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <span
          className="text-8xl tracking-tighter text-muted-foreground/20 sm:text-9xl"
          style={{ fontWeight: "var(--title-weight, 700)" }}
          aria-hidden
        >
          {code}
        </span>

        <h1
          className="mt-4 text-3xl tracking-tight text-foreground sm:text-4xl"
          style={{
            fontWeight: "var(--title-weight, 700)",
            lineHeight: "var(--title-leading, 1.05)",
          }}
        >
          {title}
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {subtitle}
        </p>

        <Button
          size="lg"
          nativeButton={false}
          className="mt-8 h-12 rounded-xl bg-primary px-7 text-sm text-primary-foreground hover:opacity-90"
          render={
            <a href={ctaHref}>
              <ArrowLeft className="size-4" />
              {ctaLabel}
            </a>
          }
        />
      </div>
    </section>
  );
}
