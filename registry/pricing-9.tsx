"use client";

import { Briefcase, Building2, Check, type LucideIcon, User } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Plan = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

type Persona = {
  id: string;
  icon: "user" | "briefcase" | "building";
  label: string;
  tagline: string;
  plans: Plan[];
};

type Pricing9Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  personas?: Persona[];
};

const ICONS: Record<Persona["icon"], LucideIcon> = {
  user: User,
  briefcase: Briefcase,
  building: Building2,
};

const DEFAULT_PERSONAS: Persona[] = [
  {
    id: "solo",
    icon: "user",
    label: "Solo developer",
    tagline: "One person, one repo — light and free for most cases.",
    plans: [
      {
        name: "Hobby",
        price: "$0",
        period: "free forever",
        description: "Side projects and prototypes.",
        features: ["20 free blocks", "3 themes", "Community support"],
        ctaLabel: "Start free",
        ctaHref: "#",
      },
      {
        name: "Indie",
        price: "$12",
        period: "/mo",
        description: "For freelancers shipping client work.",
        features: [
          "All 130+ blocks",
          "All 8 themes",
          "Commercial license",
          "Email support",
        ],
        ctaLabel: "Choose Indie",
        ctaHref: "#",
        featured: true,
      },
    ],
  },
  {
    id: "team",
    icon: "briefcase",
    label: "Small team",
    tagline: "Up to 10 seats, faster support, shared workspace.",
    plans: [
      {
        name: "Team",
        price: "$39",
        period: "/mo",
        description: "Up to 5 seats.",
        features: [
          "All 130+ blocks",
          "Up to 5 seats",
          "Priority email support",
          "Early access",
        ],
        ctaLabel: "Choose Team",
        ctaHref: "#",
        featured: true,
      },
      {
        name: "Team Plus",
        price: "$79",
        period: "/mo",
        description: "Up to 10 seats with extras.",
        features: [
          "Everything in Team",
          "Up to 10 seats",
          "Slack support",
          "Quarterly reviews",
        ],
        ctaLabel: "Choose Team Plus",
        ctaHref: "#",
      },
    ],
  },
  {
    id: "enterprise",
    icon: "building",
    label: "Agency · Enterprise",
    tagline: "Unlimited seats, SSO, custom contracts.",
    plans: [
      {
        name: "Business",
        price: "$199",
        period: "/mo",
        description: "For agencies juggling many clients.",
        features: [
          "Unlimited seats",
          "SSO + audit log",
          "Invoice billing",
          "Dedicated CSM",
        ],
        ctaLabel: "Choose Business",
        ctaHref: "#",
        featured: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Bespoke contracts and security review.",
        features: [
          "Everything in Business",
          "Custom MSA",
          "Security questionnaire",
          "On-call support",
        ],
        ctaLabel: "Contact sales",
        ctaHref: "#",
      },
    ],
  },
];

export default function Pricing9({
  eyebrow = "Pricing",
  title = "Pricing that matches how you work",
  subtitle = "Pick the path that sounds like you — we'll show you the plans built for it.",
  personas = DEFAULT_PERSONAS,
}: Pricing9Props) {
  const [activeId, setActiveId] = useState(personas[0]?.id ?? "");
  const active = personas.find((p) => p.id === activeId) ?? personas[0];

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {personas.map((persona) => {
            const Icon = ICONS[persona.icon];
            const isActive = persona.id === activeId;
            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => setActiveId(persona.id)}
                aria-pressed={isActive}
                className={`flex items-start gap-4 rounded-2xl border p-5 text-left transition-colors ${
                  isActive
                    ? "border-primary bg-card ring-1 ring-primary"
                    : "border-border bg-card hover:bg-muted/40"
                }`}
              >
                <span
                  className={`inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <Icon className="size-5" />
                </span>
                <div>
                  <p
                    className="text-sm text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {persona.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {persona.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {active.plans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? "relative flex flex-col rounded-2xl border-2 border-primary bg-card p-6 sm:p-8"
                  : "relative flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8"
              }
            >
              {plan.featured && (
                <span className="absolute -top-2.5 left-4 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  Recommended
                </span>
              )}
              <p
                className="text-base text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {plan.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span
                  className="text-4xl tracking-tight text-foreground"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                )}
              </div>

              <Button
                nativeButton={false}
                className={
                  plan.featured
                    ? "mt-6 h-11 w-full rounded-xl bg-primary text-sm text-primary-foreground hover:opacity-90"
                    : "mt-6 h-11 w-full rounded-xl border border-border bg-background text-sm text-foreground hover:bg-muted"
                }
                render={<a href={plan.ctaHref}>{plan.ctaLabel}</a>}
              />

              <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-border pt-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-6 text-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
