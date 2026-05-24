import { Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type FaqItem = {
  question: string;
  answer: string;
};

type Faq3Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
};

const DEFAULT_ITEMS: FaqItem[] = [
  {
    question: "How is this different from a component library?",
    answer:
      "You don't install us as a dependency. Each block is copied into your repo as plain TSX you fully own.",
  },
  {
    question: "Can I use it with my existing shadcn setup?",
    answer:
      "Yes. Add @cnforge as a registry and install blocks alongside any other shadcn primitives.",
  },
  {
    question: "Do themes work like light/dark mode?",
    answer:
      "Themes are CSS files scoped by class. You can mix multiple themes on the same page.",
  },
  {
    question: "What happens when a block is updated?",
    answer:
      "Nothing automatic — the code is yours. Re-run the CLI to pull a new copy if you want the update.",
  },
  {
    question: "Is there a free tier?",
    answer:
      "Most blocks are free. Premium ones require an account and an API key in your components.json.",
  },
  {
    question: "Can I request a custom block?",
    answer:
      "Open an issue describing the use case. We prioritize blocks that solve common landing-page patterns.",
  },
];

export default function Faq3({
  eyebrow = "FAQ",
  title = "Common questions",
  subtitle = "Quick answers to the things people ask most.",
  items = DEFAULT_ITEMS,
}: Faq3Props) {
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

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

        <div className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col gap-4">
            {left.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-card px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-sm font-medium text-foreground sm:text-base">
                  <span>{item.question}</span>
                  <Plus
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {right.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-card px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-sm font-medium text-foreground sm:text-base">
                  <span>{item.question}</span>
                  <Plus
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
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
