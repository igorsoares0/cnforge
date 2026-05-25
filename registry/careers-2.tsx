import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Department = {
  name: string;
  description: string;
  openRoles: number;
  href: string;
};

type Careers2Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  departments?: Department[];
  totalRoles?: number;
};

const DEPT_ICONS: Record<string, string> = {
  Engineering: "{ }",
  Design: "◐",
  Marketing: "◈",
  Product: "▣",
  Operations: "⚙",
};

const DEPT_COLORS: Record<string, string> = {
  Engineering: "bg-blue-500",
  Design: "bg-purple-500",
  Marketing: "bg-amber-500",
  Product: "bg-emerald-500",
  Operations: "bg-rose-500",
};

const DEFAULT_DEPARTMENTS: Department[] = [
  {
    name: "Engineering",
    description:
      "Build the infrastructure, APIs, and frontend that powers our platform.",
    openRoles: 4,
    href: "#engineering",
  },
  {
    name: "Design",
    description:
      "Shape the visual language, design system, and user experience.",
    openRoles: 2,
    href: "#design",
  },
  {
    name: "Marketing",
    description:
      "Tell our story through content, community, and developer advocacy.",
    openRoles: 1,
    href: "#marketing",
  },
  {
    name: "Product",
    description:
      "Define the roadmap, prioritize features, and talk to customers.",
    openRoles: 2,
    href: "#product",
  },
  {
    name: "Operations",
    description:
      "Keep the company running — finance, legal, people, and processes.",
    openRoles: 1,
    href: "#operations",
  },
];

export default function Careers2({
  eyebrow = "Careers",
  title = "Find your team",
  subtitle = "We're organized into small, focused teams. Explore departments to see where you'd fit.",
  departments = DEFAULT_DEPARTMENTS,
  totalRoles = 10,
}: Careers2Props) {
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
          <p className="mt-3 text-sm font-medium text-success">
            {totalRoles} open roles across {departments.length} teams
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <a
              key={dept.name}
              href={dept.href}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex size-10 items-center justify-center rounded-xl text-sm text-white ${DEPT_COLORS[dept.name] ?? "bg-muted"}`}
                >
                  {DEPT_ICONS[dept.name] ?? "•"}
                </span>
                <div>
                  <h3
                    className="text-base text-foreground"
                    style={{ fontWeight: "var(--title-weight, 700)" }}
                  >
                    {dept.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {dept.openRoles} open role
                    {dept.openRoles !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
                {dept.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                View roles
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            nativeButton={false}
            className="h-10 rounded-xl border-border bg-card px-6 text-sm font-medium text-foreground hover:bg-muted"
            render={<a href="#all-roles">View all {totalRoles} roles</a>}
          />
        </div>
      </div>
    </section>
  );
}
