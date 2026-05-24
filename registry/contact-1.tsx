import { Mail, MapPin, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ContactDetail = {
  icon: "mail" | "phone" | "location";
  label: string;
  value: string;
  href?: string;
};

type Contact1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  details?: ContactDetail[];
  formAction?: string;
  formMethod?: "GET" | "POST";
  submitLabel?: string;
};

const ICONS = { mail: Mail, phone: Phone, location: MapPin } as const;

const DEFAULT_DETAILS: ContactDetail[] = [
  {
    icon: "mail",
    label: "Email",
    value: "hello@yourcompany.com",
    href: "mailto:hello@yourcompany.com",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: "location",
    label: "Office",
    value: "São Paulo, SP — Brazil",
  },
];

export default function Contact1({
  eyebrow = "Contact",
  title = "Get in touch",
  subtitle = "Have a question, want a demo, or just want to say hi? Drop us a line and we'll get back to you within 24 hours.",
  details = DEFAULT_DETAILS,
  formAction = "#",
  formMethod = "POST",
  submitLabel = "Send message",
}: Contact1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
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
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              {subtitle}
            </p>

            <dl className="mt-10 flex flex-col gap-6">
              {details.map((detail) => {
                const Icon = ICONS[detail.icon];
                return (
                  <div key={detail.label} className="flex items-start gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <dt className="text-sm font-medium text-foreground">
                        {detail.label}
                      </dt>
                      <dd className="mt-0.5 text-sm text-muted-foreground">
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="underline-offset-4 hover:underline"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          <form
            action={formAction}
            method={formMethod}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-subject"
                className="text-sm font-medium text-foreground"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className="h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="How can we help?"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-2 h-12 w-full rounded-xl bg-primary px-7 text-sm text-primary-foreground hover:opacity-90 sm:w-auto sm:self-end"
            >
              {submitLabel}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
