import { Badge } from "@/components/ui/badge";

const SOCIAL_PATHS: Record<string, string> = {
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  linkedin:
    "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 6.99V22h-4.56v-6.62c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.49V22H7.62V8z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
};

const AVATAR_COLORS = [
  "bg-violet-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-blue-500",
  "bg-pink-500",
  "bg-cyan-500",
];

type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  social?: { x?: string; linkedin?: string; github?: string };
};

type Team4Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  members?: Member[];
};

const DEFAULT_MEMBERS: Member[] = [
  {
    name: "Ana Torres",
    role: "CEO & Co-founder",
    bio: "Previously VP Engineering at Vercel. 12 years building developer tools and infrastructure at scale. Passionate about making developers more productive.",
    initials: "AT",
    social: { x: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Marcus Chen",
    role: "CTO & Co-founder",
    bio: "Ex-Google Staff Engineer. Open source maintainer with contributions to React, Vite, and Turbopack. Writes Rust on weekends.",
    initials: "MC",
    social: { x: "#", github: "#" },
  },
  {
    name: "Sofia Andrade",
    role: "Head of Design",
    bio: "Led design systems at Stripe and Linear. Typography nerd who believes every pixel matters. Runs a popular design newsletter.",
    initials: "SA",
    social: { linkedin: "#", x: "#" },
  },
  {
    name: "James Park",
    role: "Staff Engineer",
    bio: "Full-stack generalist with a frontend bias. Previously at Shopify building checkout infra. Conference speaker and Tailwind contributor.",
    initials: "JP",
    social: { github: "#", linkedin: "#" },
  },
  {
    name: "Lena Kim",
    role: "Product Manager",
    bio: "Shipped 0-to-1 products at Notion and Figma. Obsessed with developer experience and measuring what matters.",
    initials: "LK",
    social: { linkedin: "#", x: "#" },
  },
  {
    name: "David Okafor",
    role: "Developer Advocate",
    bio: "Former educator turned DevRel. 50k YouTube subscribers. Writes tutorials that actually make sense.",
    initials: "DO",
    social: { x: "#", github: "#" },
  },
];

export default function Team4({
  eyebrow = "Our team",
  title = "The people behind the product",
  subtitle = "A small, senior team that moves fast and cares deeply about craft.",
  members = DEFAULT_MEMBERS,
}: Team4Props) {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Badge
              variant="outline"
              className="gap-2 border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
            >
              <span className="size-1.5 rounded-full bg-success" />
              {eyebrow}
            </Badge>
            <h2
              className="mt-6 text-3xl tracking-tight text-foreground sm:text-4xl"
              style={{
                fontWeight: "var(--title-weight, 700)",
                lineHeight: "var(--title-leading, 1.05)",
              }}
            >
              {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {subtitle}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {members.map((member, i) => (
              <article
                key={member.name}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`inline-flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                  >
                    {member.initials}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="truncate text-sm text-foreground"
                      style={{ fontWeight: "var(--title-weight, 700)" }}
                    >
                      {member.name}
                    </h3>
                    <p className="truncate text-xs text-success">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
                  {member.bio}
                </p>
                {member.social && (
                  <div className="mt-4 flex items-center gap-2.5 border-t border-border pt-4">
                    {Object.entries(member.social).map(([platform, href]) => (
                      <a
                        key={platform}
                        href={href}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={platform}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path d={SOCIAL_PATHS[platform]} />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
