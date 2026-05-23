import { Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type FaqItem = {
  question: string;
  answer: string;
};

type Faq1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
};

const DEFAULT_ITEMS: FaqItem[] = [
  {
    question: "How is this different from a component library?",
    answer:
      "You don't install us as a dependency. Each block is copied into your repo as plain TSX you fully own. Edit anything, no vendor lock-in, no runtime, no version bumps to fear.",
  },
  {
    question: "Can I use it with my existing shadcn setup?",
    answer:
      "Yes — that's the point. Add @cnforge as a registry in your components.json and install blocks alongside any other shadcn primitives. The CLI handles the rest.",
  },
  {
    question: "Do themes work like shadcn's light/dark mode?",
    answer:
      "Slightly different. Themes are CSS files scoped by class (.theme-noir, .theme-solar). You can mix multiple themes on the same page — useful for product previews or storytelling sections.",
  },
  {
    question: "What happens when a block is updated?",
    answer:
      "Nothing automatic — the code is yours. Re-run the CLI to pull a new copy if you want the update, or diff and merge by hand.",
  },
  {
    question: "Is there a free tier?",
    answer:
      "Most blocks are free. A handful of premium ones require an account and an API key in your components.json — the CLI takes care of authentication.",
  },
  {
    question: "Can I request a block?",
    answer:
      "Open an issue describing the use case. We prioritize blocks that solve a recurring landing-page pattern — heros, pricing, FAQs, features, that kind of thing.",
  },
];

export default function Faq1({
  eyebrow = "FAQ",
  title = "Questions, answered",
  subtitle = "Everything you'd ask in a sales call, surfaced here so you don't have to.",
  items = DEFAULT_ITEMS,
}: Faq1Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
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

        <div className="mt-12 flex flex-col gap-3 sm:mt-16">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border bg-card px-5 py-4 transition-colors open:bg-card sm:px-6 sm:py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-medium text-foreground sm:text-lg">
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
    </section>
  );
}
