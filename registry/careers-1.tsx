import { ArrowRight, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Job = {
  title: string;
  department: string;
  location: string;
  type: string;
  href: string;
};

type Careers1Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  jobs?: Job[];
  emptyMessage?: string;
};

const DEFAULT_JOBS: Job[] = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    href: "#senior-frontend",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    href: "#product-designer",
  },
  {
    title: "Developer Advocate",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    href: "#developer-advocate",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    href: "#backend-engineer",
  },
  {
    title: "Technical Writer",
    department: "Documentation",
    location: "Remote",
    type: "Contract",
    href: "#technical-writer",
  },
];

const DEPT_COLORS: Record<string, string> = {
  Engineering: "bg-blue-500/10 text-blue-600",
  Design: "bg-purple-500/10 text-purple-600",
  Marketing: "bg-amber-500/10 text-amber-600",
  Documentation: "bg-emerald-500/10 text-emerald-600",
};

export default function Careers1({
  eyebrow = "Careers",
  title = "Join our team",
  subtitle = "We're looking for talented people to help us build the future of developer tools. Check out our open positions.",
  jobs = DEFAULT_JOBS,
  emptyMessage = "No open positions right now. Check back soon!",
}: Careers1Props) {
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

        {jobs.length === 0 ? (
          <p className="mt-14 text-center text-sm text-muted-foreground">
            {emptyMessage}
          </p>
        ) : (
          <div className="mt-14 flex flex-col gap-3">
            {jobs.map((job) => (
              <a
                key={job.href}
                href={job.href}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-base tracking-tight text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${DEPT_COLORS[job.department] ?? "bg-muted text-muted-foreground"}`}
                    >
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {job.location}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="w-fit shrink-0 rounded-lg bg-primary px-4 text-sm text-primary-foreground hover:opacity-90"
                  tabIndex={-1}
                >
                  Apply
                  <ArrowRight className="size-3.5" />
                </Button>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
