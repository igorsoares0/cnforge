import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type About1Props = {
  eyebrow?: string;
  title?: string;
  lead?: string;
  supporting?: string;
  ctaLabel?: string;
  ctaHref?: string;
  stats?: { value: string; label: string }[];
};

const DEFAULT_STATS = [
  { value: "2019", label: "Founded" },
  { value: "12k+", label: "Customers" },
  { value: "47", label: "Countries" },
  { value: "32", label: "Team members" },
];

export default function About1({
  eyebrow = "About us",
  title = "Building tools that get out of your way",
  lead = "We started in 2019 with a simple bet: developers want components that look great by default and stay editable forever. Five years later, that bet still holds.",
  supporting = "Today, our team ships from a dozen countries — but the mission hasn't changed. Less boilerplate, more shipping.",
  ctaLabel = "Read our story",
  ctaHref = "#",
  stats = DEFAULT_STATS,
}: About1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="gap-2 self-start border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
            >
              <span className="size-1.5 rounded-full bg-success" />
              {eyebrow}
            </Badge>
            <h2
              className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.05)",
              }}
            >
              {title}
            </h2>
          </div>

          <div className="flex flex-col gap-5 lg:pt-2">
            <p className="text-lg leading-8 text-foreground">{lead}</p>
            <p className="text-base leading-7 text-muted-foreground">
              {supporting}
            </p>
            <Button
              variant="link"
              nativeButton={false}
              className="h-auto self-start p-0 text-sm font-medium text-foreground hover:no-underline"
              render={
                <a href={ctaHref}>
                  {ctaLabel}
                  <ArrowUpRight className="size-4" />
                </a>
              }
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:mt-20 sm:grid-cols-4 sm:gap-10 sm:pt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <p
                className="text-4xl tracking-tight text-foreground sm:text-5xl"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
