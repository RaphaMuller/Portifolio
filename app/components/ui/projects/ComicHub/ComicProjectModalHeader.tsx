import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
    <header className="sticky top-0 z-40 relative flex flex-wrap items-center justify-between gap-3 border-b-4 border-black bg-comic-projects-bg bg-comic-projects-gradient px-4 py-3.5 pr-14 text-white sm:px-6 sm:py-4 sm:pr-16 select-none">
      <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <ActionBadge theme="white" noPadding className="-rotate-2 shadow-comic-sm">
              <span className="block px-2.5 py-1 font-bangers text-h4 text-black uppercase">
                {projectsCopy.issuePrefix} {formatIssueNumber(project.id)}
              </span>
            </ActionBadge>

            <div>
              <h2
                id={titleId}
                className="font-bangers text-h2 text-white text-comic-stroke uppercase"
              >
                {project.title}
              </h2>
              <p className="mt-0.5 inline-block border border-black bg-white px-2 py-0.5 font-bangers text-stat-label text-black uppercase shadow-comic-sm">
                {project.subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 sm:gap-2.5">
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
              <ChevronLeft className="size-5 stroke-[3]" aria-hidden="true" /> {projectsCopy.prevIssueShort}
            </button>

            <button
              type="button"
              onClick={onNextProject}
              aria-label={projectsCopy.nextIssue}
              className="flex items-center gap-1 cursor-pointer border-3 border-black bg-white px-2.5 py-1 font-bangers text-stat-label text-black uppercase shadow-comic-sm transition-transform hover:-translate-y-0.5 hover:bg-comic-yellow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-comic-yellow sm:px-3 sm:py-1.5"
            >
              {projectsCopy.nextIssueShort} <ChevronRight className="size-5 stroke-[3]" aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>

      {/* Botão X Circular de gibi no canto superior direito */}
      <button
        type="button"
        onClick={onClose}
        aria-label={projectsCopy.modalCloseAriaLabel}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 flex size-9 sm:size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 sm:border-3 border-black bg-comic-yellow text-black shadow-comic-sm transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X className="size-5 stroke-[2.5]" aria-hidden="true" />
      </button>
    </header>
  );
}
