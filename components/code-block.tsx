import { codeToHtml } from "shiki";

import CopyButton from "@/components/copy-button";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  code: string;
  lang?: string;
  className?: string;
};

export default async function CodeBlock({
  code,
  lang = "tsx",
  className,
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-card",
        className,
      )}
    >
      <div className="absolute right-2 top-2 z-10 rounded-md border border-border bg-card/90 backdrop-blur">
        <CopyButton value={code} />
      </div>
      <div
        className="overflow-x-auto p-4 text-sm [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:font-mono [&_pre]:leading-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
