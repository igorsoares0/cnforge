import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type OfficeHours = {
  days: string;
  hours: string;
};

type Contact3Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  address?: string;
  officeHours?: OfficeHours[];
  mapLabel?: string;
};

const DEFAULT_HOURS: OfficeHours[] = [
  { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
  { days: "Saturday", hours: "10:00 AM – 2:00 PM" },
  { days: "Sunday", hours: "Closed" },
];

export default function Contact3({
  eyebrow = "Visit us",
  title = "Get in touch",
  subtitle = "We'd love to hear from you. Drop by our office, give us a call, or send an email.",
  email = "hello@forge.dev",
  phone = "+1 (555) 123-4567",
  address = "123 Market St, Suite 400\nSan Francisco, CA 94105",
  officeHours = DEFAULT_HOURS,
  mapLabel = "Our office",
}: Contact3Props) {
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

        <div className="mt-14 grid gap-8 sm:mt-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                  <Mail className="size-4" />
                </span>
                <div>
                  <p
                    className="text-sm text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    Email
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                  <Phone className="size-4" />
                </span>
                <div>
                  <p
                    className="text-sm text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    Phone
                  </p>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="mt-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p
                    className="text-sm text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    Address
                  </p>
                  <p className="mt-0.5 whitespace-pre-line text-sm text-muted-foreground">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                  <Clock className="size-4" />
                </span>
                <p
                  className="text-sm text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  Office hours
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {officeHours.map((entry) => (
                  <div
                    key={entry.days}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground">{entry.days}</span>
                    <span className="text-muted-foreground">{entry.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-muted">
            <div className="flex flex-1 items-center justify-center p-10">
              <div className="text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-card text-foreground">
                  <MapPin className="size-6" />
                </span>
                <p
                  className="mt-4 text-sm text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {mapLabel}
                </p>
                <p className="mt-1 whitespace-pre-line text-xs text-muted-foreground">
                  {address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
