"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

type Faq2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
  categories?: string[];
};

const DEFAULT_CATEGORIES = ["General", "Billing", "Technical", "Support"];

const DEFAULT_ITEMS: FaqItem[] = [
  {
    category: "General",
    question: "What is this product?",
    answer:
      "A shadcn-compatible registry of production-ready UI blocks. Install any block with one CLI command — the code is copied into your repo as plain TSX you fully own.",
  },
  {
    category: "General",
    question: "Do I need a design background?",
    answer:
      "No. Blocks come styled and responsive. Edit the copy, swap colors via themes, and ship. The design work is done for you.",
  },
  {
    category: "Billing",
    question: "Is there a free tier?",
    answer:
      "Yes. Most blocks are free forever. Premium blocks require a Pro subscription — cancel anytime, your already-installed code stays.",
  },
  {
    category: "Billing",
    question: "Can I get a refund?",
    answer:
      "We offer a 14-day money-back guarantee. If it's not for you, email us and we'll process the refund — no questions asked.",
  },
  {
    category: "Technical",
    question: "What frameworks are supported?",
    answer:
      "Blocks are built for React and Next.js with Tailwind CSS. They use shadcn's registry protocol, so any project with a components.json can install them.",
  },
  {
    category: "Technical",
    question: "How do updates work?",
    answer:
      "Re-run the CLI to pull a new copy of any block. Since the code lives in your repo, you can also diff and merge changes manually.",
  },
  {
    category: "Support",
    question: "How do I get help?",
    answer:
      "Free users can open GitHub issues. Pro subscribers get priority support via email with a 24-hour response time.",
  },
  {
    category: "Support",
    question: "Can I request a custom block?",
    answer:
      "Open an issue describing the use case. We prioritize blocks that solve common landing-page patterns. Pro users' requests get priority.",
  },
];

export default function Faq2({
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  subtitle = "Find answers by topic. Can't find what you're looking for? Reach out to our team.",
  items = DEFAULT_ITEMS,
  categories = DEFAULT_CATEGORIES,
}: Faq2Props) {
  const [active, setActive] = useState(categories[0]);
  const filtered = items.filter((item) => item.category === active);

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
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

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-[200px_1fr] lg:gap-12">
          <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-x-visible">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`shrink-0 rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            {filtered.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-card px-5 py-4 transition-colors sm:px-6 sm:py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-medium text-foreground">
                  <span>{item.question}</span>
                  <Plus
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
