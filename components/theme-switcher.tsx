"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

type ThemeSwitcherProps = {
  themes: string[];
  active: string;
};

export default function ThemeSwitcher({ themes, active }: ThemeSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
      {themes.map((theme) => {
        const isActive = theme === active;
        return (
          <Button
            key={theme}
            size="sm"
            variant={isActive ? "default" : "ghost"}
            className="rounded-full px-4"
            onClick={() => {
              const query = theme === "default" ? "" : `?theme=${theme}`;
              router.replace(`${pathname}${query}`, { scroll: false });
            }}
          >
            {theme}
          </Button>
        );
      })}
    </div>
  );
}
