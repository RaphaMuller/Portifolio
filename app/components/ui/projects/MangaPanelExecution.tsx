import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { interactiveClasses } from "@/app/components/ui/global/ActionBadge/actionBadgeTheme";
import { projectsCopy } from "@/app/constants/projectsData";

interface MangaPanelExecutionProps {
  githubUrl?: string;
  demoUrl?: string;
}

/**
 * @example
 * <MangaPanelExecution githubUrl="https://github.com/..." demoUrl="https://..." />
 */
export function MangaPanelExecution({
  githubUrl,
  demoUrl,
}: MangaPanelExecutionProps) {
  return (
    <div className="manga-panel-execution flex flex-col items-start justify-end gap-1.5 sm:gap-2 p-1.5 sm:p-2.5 md:p-3 pb-2 sm:pb-3 md:pb-4">
      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-1.5 sm:gap-2">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex cursor-pointer items-center gap-1 sm:gap-1.5 border sm:border-2 border-black bg-comic-yellow px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[11px] md:text-stat-label text-black shadow-comic-sm transition-transform hover:scale-105 ${interactiveClasses}`}
          >
            <FaGithub className="size-3 sm:size-3.5 md:size-4" aria-hidden="true" />
            <span>{projectsCopy.codeLabel}</span>
          </a>
        )}

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex cursor-pointer items-center gap-1 sm:gap-1.5 border sm:border-2 border-black bg-comic-red px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[11px] md:text-stat-label text-white shadow-comic-sm transition-transform hover:scale-105 ${interactiveClasses}`}
          >
            <ExternalLink className="size-3 sm:size-3.5 md:size-4" aria-hidden="true" />
            <span>{projectsCopy.demoLabel}</span>
          </a>
        )}
      </div>
    </div>
  );
}
