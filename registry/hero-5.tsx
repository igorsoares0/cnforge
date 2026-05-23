import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Hero5Props = {
  announcement?: string;
  announcementHref?: string;
  title?: string;
  subtitle?: string;
  inputPlaceholder?: string;
  inputName?: string;
  ctaLabel?: string;
  formAction?: string;
  formMethod?: "GET" | "POST";
  trustNote?: string;
  socialProof?: { initials: string[]; caption: string };
};

const AVATAR_COLORS = ["bg-emerald-500", "bg-blue-500", "bg-orange-500"];

export default function Hero5({
  announcement = "Waitlist now open",
  announcementHref = "#",
  title = "Be first when we launch",
  subtitle = "Drop your email and we'll send you an invite the day we open access. No marketing list, no spam — just a single message when it's ready.",
  inputPlaceholder = "you@company.com",
  inputName = "email",
  ctaLabel = "Get early access",
  formAction = "#",
  formMethod = "POST",
  trustNote = "No credit card · Unsubscribe in one click",
  socialProof = {
    initials: ["MC", "JL", "AP"],
    caption: "5,400+ developers already in line",
  },
}: Hero5Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <Badge
          variant="outline"
          className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          render={<a href={announcementHref} />}
        >
          <span className="size-1.5 rounded-full bg-success" />
          {announcement}
        </Badge>

        <h1
          className="mt-8 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          style={{
            fontWeight: "var(--title-weight, 700)",
            lineHeight: "var(--title-leading, 1.05)",
          }}
        >
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {subtitle}
        </p>

        <form
          action={formAction}
          method={formMethod}
          className="mt-10 flex w-full max-w-md flex-col gap-2 sm:flex-row"
        >
          <label className="sr-only" htmlFor="hero5-email">
            Email
          </label>
          <input
            id="hero5-email"
            type="email"
            name={inputName}
            placeholder={inputPlaceholder}
            required
            autoComplete="email"
            className="h-12 flex-1 rounded-xl border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
          />
          <Button
            type="submit"
            size="lg"
            nativeButton={false}
            className="h-12 rounded-xl bg-primary px-6 text-sm text-primary-foreground hover:opacity-90"
            render={
              <button type="submit">
                {ctaLabel}
                <ArrowRight className="size-4" />
              </button>
            }
          />
        </form>

        <p className="mt-3 text-xs text-muted-foreground">{trustNote}</p>

        <div className="mt-10 flex items-center gap-3">
          <div className="flex items-center -space-x-2">
            {socialProof.initials.map((initials, i) => (
              <span
                key={initials}
                className={`inline-flex size-8 items-center justify-center rounded-full border-2 border-background text-xs font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
              >
                {initials}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">{socialProof.caption}</p>
        </div>
      </div>
    </section>
  );
}
