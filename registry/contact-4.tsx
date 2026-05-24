import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Office = {
  city: string;
  country: string;
  address: string;
  email: string;
  phone: string;
};

type Contact4Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  offices?: Office[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const DEFAULT_OFFICES: Office[] = [
  {
    city: "San Francisco",
    country: "United States",
    address: "123 Market St, Suite 400\nSan Francisco, CA 94105",
    email: "sf@forge.dev",
    phone: "+1 (555) 123-4567",
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "10 Finsbury Square\nLondon EC2A 1AF",
    email: "london@forge.dev",
    phone: "+44 20 7946 0958",
  },
  {
    city: "São Paulo",
    country: "Brazil",
    address: "Av. Paulista, 1578\nSão Paulo, SP 01310-200",
    email: "sp@forge.dev",
    phone: "+55 11 3456-7890",
  },
];

export default function Contact4({
  eyebrow = "Contact",
  title = "Our offices",
  subtitle = "We have teams across the globe. Find the office nearest to you or reach out online.",
  offices = DEFAULT_OFFICES,
  ctaTitle = "Can't find what you need?",
  ctaSubtitle = "Our support team is available 24/7 to help with any questions.",
  ctaLabel = "Get in touch",
  ctaHref = "#",
}: Contact4Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" />
            {eyebrow}
          </Badge>
          <h2
            className="mt-6 text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{
              fontWeight: "var(--title-weight, 700)",
              lineHeight: "var(--title-leading, 1.05)",
            }}
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <div
              key={office.city}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                  {office.city.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <h3
                    className="text-base text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {office.city}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {office.country}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-1 flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <p className="whitespace-pre-line text-sm leading-6 text-muted-foreground">
                    {office.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-muted-foreground" />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-muted-foreground" />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3
              className="text-lg text-foreground"
              style={{ fontWeight: "var(--title-weight, 700)" }}
            >
              {ctaTitle}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{ctaSubtitle}</p>
          </div>
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 shrink-0 rounded-xl bg-primary px-7 text-sm text-primary-foreground hover:opacity-90"
            render={
              <a href={ctaHref}>
                {ctaLabel}
                <ArrowRight className="size-4" />
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
}
