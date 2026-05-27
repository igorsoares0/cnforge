import { Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

type Faq4Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
};

const DEFAULT_ITEMS: FaqItem[] = [
  {
    category: "Getting started",
    question: "How do I install a block?",
    answer:
      "Run npx shadcn add @cnforge/<block-name>. The CLI copies the source into your project — no package dependency.",
  },
  {
    category: "Getting started",
    question: "Do I need to configure anything first?",
    answer:
      "Add @cnforge as a registry in your components.json. After that, every block is one command away.",
  },
  {
    category: "Getting started",
    question: "Does it work with existing shadcn projects?",
    answer:
      "Yes. Blocks use the same tokens and primitives. They slot in alongside your existing components.",
  },
  {
    category: "Themes",
    question: "How do themes work?",
    answer:
      "Themes are CSS files scoped by class. Apply .theme-<name> to any container and all blocks inside inherit the palette.",
  },
  {
    category: "Themes",
    question: "Can I mix themes on the same page?",
    answer:
      "Absolutely. Wrap different sections in different theme classes — each block picks up its nearest ancestor's palette.",
  },
  {
    category: "Themes",
    question: "Can I create my own theme?",
    answer:
      "Yes. Copy any theme CSS file, rename the class, and adjust the CSS variables to your brand colors.",
  },
  {
    category: "Billing",
    question: "Is there a free tier?",
    answer:
      "Most blocks are free and open source. Premium blocks require a license key configured in components.json.",
  },
  {
    category: "Billing",
    question: "Can I use free blocks commercially?",
    answer:
      "Yes. Free blocks are MIT licensed. Use them in personal, client, or commercial projects without attribution.",
  },
];

export default function Faq4({
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  subtitle = "Everything you need to know about getting started and making the most of the platform.",
  items = DEFAULT_ITEMS,
}: Faq4Props) {
  const categories = Array.from(new Set(items.map((i) => i.category)));

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

        <div className="mt-14 flex flex-col gap-12 sm:mt-16">
          {categories.map((cat) => (
            <div key={cat} className="grid gap-4 lg:grid-cols-[240px_1fr] lg:gap-10">
              <div className="flex items-start">
                <h3
                  className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground lg:sticky lg:top-24"
                  style={{ fontWeight: "var(--title-weight, 700)" }}
                >
                  {cat}
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {items
                  .filter((i) => i.category === cat)
                  .map((item) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
