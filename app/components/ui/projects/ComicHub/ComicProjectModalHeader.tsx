import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { projectsCopy } from "@/app/constants/projectsData";
import { formatIssueNumber } from "@/app/sections/hooks/useComicProjects";
import type { Project } from "@/app/types/project";

interface ComicProjectModalHeaderProps {
  project: Project;
  titleId: string;
  hasMultipleProjects: boolean;
  onPrevProject: () => void;
  onNextProject: () => void;
  onClose: () => void;
}

/**
 * @example
 * <ComicProjectModalHeader project={project} titleId={titleId} hasMultipleProjects onPrevProject={handlePrev} onNextProject={handleNext} onClose={handleClose} />
 */
export function ComicProjectModalHeader({
  project,
  titleId,
  hasMultipleProjects,
  onPrevProject,
  onNextProject,
  onClose,
}: ComicProjectModalHeaderProps) {
  return (
    <header className="flex flex-col gap-2.5 border-b-4 border-black bg-comic-projects-bg bg-comic-projects-gradient p-3.5 text-white sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center gap-2.5 sm:gap-4"
            >
              <ActionBadge theme="white" noPadding className="-rotate-2 shadow-comic-sm shrink-0">
                <span className="block px-2 py-0.5 font-bangers text-stat-label sm:text-h4 text-black uppercase">
                  {projectsCopy.issuePrefix} {formatIssueNumber(project.id)}
                </span>
              </ActionBadge>

              <div className="min-w-0">
                <h2
                  id={titleId}
                  className="truncate font-bangers text-h3 sm:text-h2 text-white text-comic-stroke uppercase leading-tight"
                >
                  {project.title}
                </h2>
                <p className="mt-0.5 inline-block truncate border border-black bg-white px-1.5 py-0.5 font-bangers text-[10px] sm:text-stat-label text-black uppercase shadow-comic-sm">
                  {project.subtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botão X Circular no Mobile (ancorado no topo direito) */}
        <button
          type="button"
          onClick={onClose}
          aria-label={projectsCopy.modalCloseAriaLabel}
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-3 border-black bg-comic-yellow font-bangers text-xl text-black shadow-comic-sm transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:hidden"
        >
          ✕
        </button>
      </div>

      <div className="flex items-center justify-between gap-2 sm:justify-end sm:gap-2.5">
        {hasMultipleProjects && (
          <nav
            aria-label={projectsCopy.issueNavAriaLabel}
            className="flex items-center gap-1.5 sm:gap-2"
          >
            <button
              type="button"
              onClick={onPrevProject}
              aria-label={projectsCopy.prevIssue}
              className="flex items-center gap-1 cursor-pointer border-3 border-black bg-white px-2.5 py-1 font-bangers text-stat-label text-black uppercase shadow-comic-sm transition-transform hover:-translate-y-0.5 hover:bg-comic-yellow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-comic-yellow sm:px-3 sm:py-1.5"
            >
              <ChevronLeft className="h-4 w-4 stroke-[3]" /> {projectsCopy.prevIssueShort}
            </button>

            <button
              type="button"
              onClick={onNextProject}
              aria-label={projectsCopy.nextIssue}
              className="flex items-center gap-1 cursor-pointer border-3 border-black bg-white px-2.5 py-1 font-bangers text-stat-label text-black uppercase shadow-comic-sm transition-transform hover:-translate-y-0.5 hover:bg-comic-yellow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-comic-yellow sm:px-3 sm:py-1.5"
            >
              {projectsCopy.nextIssueShort} <ChevronRight className="h-4 w-4 stroke-[3]" />
            </button>
          </nav>
        )}

        {/* Botão X Circular no Desktop */}
        <button
          type="button"
          onClick={onClose}
          aria-label={projectsCopy.modalCloseAriaLabel}
          className="hidden h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-3 border-black bg-comic-yellow font-bangers text-xl text-black shadow-comic-sm transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex"
        >
          ✕
        </button>
      </div>
    </header>
  );
}
