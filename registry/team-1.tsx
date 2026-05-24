type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  social?: { x?: string; linkedin?: string; github?: string };
};

type Team1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  members?: Member[];
};

import { Badge } from "@/components/ui/badge";

const AVATAR_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-violet-500",
];

const SOCIAL_PATHS: Record<string, string> = {
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
};

const DEFAULT_MEMBERS: Member[] = [
  {
    name: "Ana Torres",
    role: "CEO & Co-founder",
    bio: "Former eng lead at Vercel. Obsessed with developer tooling.",
    initials: "AT",
    social: { x: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Marcus Chen",
    role: "CTO & Co-founder",
    bio: "Built infra at Stripe. Believes shipping fast beats shipping perfect.",
    initials: "MC",
    social: { x: "#", github: "#" },
  },
  {
    name: "Sofia Andrade",
    role: "Head of Design",
    bio: "Led design systems at Linear. Makes pixels do what they're told.",
    initials: "SA",
    social: { x: "#", linkedin: "#" },
  },
  {
    name: "James Park",
    role: "Staff Engineer",
    bio: "Open-source maintainer. Writes code that other people actually read.",
    initials: "JP",
    social: { github: "#" },
  },
];

export default function Team1({
  eyebrow = "Our team",
  title = "Meet the people building this",
  subtitle = "A small crew that ships fast, obsesses over details, and answers support emails personally.",
  members = DEFAULT_MEMBERS,
}: Team1Props) {
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

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {members.map((member, i) => (
            <article
              key={member.name}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center sm:p-8"
            >
              <span
                className={`inline-flex size-16 items-center justify-center rounded-full text-lg font-semibold text-white ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
              >
                {member.initials}
              </span>
              <h3
                className="mt-4 text-base tracking-tight text-foreground"
                style={{ fontWeight: "var(--title-weight, 700)" }}
              >
                {member.name}
              </h3>
              <p className="mt-0.5 text-sm text-success">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {member.bio}
              </p>
              {member.social && (
                <div className="mt-4 flex items-center gap-3">
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
    </section>
  );
}
