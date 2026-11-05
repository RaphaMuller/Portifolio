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
    <header className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-black bg-comic-projects-bg bg-comic-projects-gradient px-4 py-3.5 text-white sm:px-6 sm:py-4">
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
              className="cursor-pointer border-3 border-black bg-white px-2.5 py-1.5 font-bangers text-stat-label text-black uppercase shadow-comic-sm transition-transform hover:-translate-y-0.5 hover:bg-comic-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-comic-yellow sm:px-3"
            >
              ◀ {projectsCopy.prevIssueShort}
            </button>

            <button
              type="button"
              onClick={onNextProject}
              aria-label={projectsCopy.nextIssue}
              className="cursor-pointer border-3 border-black bg-white px-2.5 py-1.5 font-bangers text-stat-label text-black uppercase shadow-comic-sm transition-transform hover:-translate-y-0.5 hover:bg-comic-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-comic-yellow sm:px-3"
            >
              {projectsCopy.nextIssueShort} ▶
            </button>
          </nav>
        )}

        <button
          type="button"
          onClick={onClose}
          aria-label={projectsCopy.modalCloseAriaLabel}
          className="shrink-0 cursor-pointer border-3 border-black bg-comic-yellow px-3.5 py-1.5 font-bangers text-stat-label text-black uppercase shadow-comic-sm transition-transform hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {projectsCopy.modalCloseLabel}
        </button>
      </div>
    </header>
  );
}
