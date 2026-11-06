"use client";

import { useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ComicProjectModalBackoffice } from "@/app/components/ui/projects/ComicHub/ComicProjectModalBackoffice";
import { ComicProjectModalFlap } from "@/app/components/ui/projects/ComicHub/ComicProjectModalFlap";
import { ComicProjectModalHeader } from "@/app/components/ui/projects/ComicHub/ComicProjectModalHeader";
import { projectsCopy } from "@/app/constants/projectsData";
import { renderBoldText } from "@/app/lib/renderBoldText";
import { useComicDialog } from "@/app/sections/hooks/useComicDialog";
import type { Project } from "@/app/types/project";

interface ComicProjectModalProps {
  project: Project | null;
  hasMultipleProjects: boolean;
  onPrevProject: () => void;
  onNextProject: () => void;
  onClose: () => void;
}

/**
 * @example
 * <ComicProjectModal project={selectedProject} hasMultipleProjects onPrevProject={handlePrev} onNextProject={handleNext} onClose={handleCloseProject} />
 */
export function ComicProjectModal({
  project,
  hasMultipleProjects,
  onPrevProject,
  onNextProject,
  onClose,
}: ComicProjectModalProps) {
  const dialogRef = useComicDialog(Boolean(project));
  const titleId = useId();
  const synopsisHeadingId = useId();

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="fixed inset-0 m-0 flex h-dvh max-h-dvh w-full max-w-none flex-col overflow-x-hidden overflow-y-auto overscroll-contain border-0 bg-white p-0 text-black shadow-none backdrop:bg-black/80 backdrop:backdrop-blur-xs lg:inset-x-0 lg:inset-y-8 lg:m-auto lg:h-auto lg:modal-max-h-fit lg:w-11/12 lg:max-w-6xl lg:border-4 lg:border-black lg:shadow-comic-lg"
    >
      <ComicProjectModalHeader
        project={project}
        titleId={titleId}
        hasMultipleProjects={hasMultipleProjects}
        onPrevProject={onPrevProject}
        onNextProject={onNextProject}
        onClose={onClose}
      />

      {/* Editorial grid: comic book flap (4 cols) + centered story page (8 cols) */}
      <div className="flex w-full flex-1 flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex flex-1 flex-col lg:grid lg:grid-cols-12"
          >
            <ComicProjectModalFlap project={project} />

            <article
              aria-labelledby={synopsisHeadingId}
              className="flex flex-1 flex-col justify-between gap-4 bg-white p-5 text-center sm:p-6 lg:col-span-8"
            >
              {/* Panel 1: Classic centered comic caption box */}
              <blockquote className="relative mt-2 border-3 border-black bg-comic-yellow px-4 py-3.5 shadow-comic-sm sm:mt-2.5">
                <span className="absolute -top-2 left-4 border-2 border-black bg-white px-2 py-0.5 font-bangers text-stat-label text-black uppercase sm:-top-2.5">
                  {projectsCopy.modalSynopsisLabel}
                </span>
                <span
                  aria-hidden="true"
                  className="comic-stamp-pill absolute -top-2 right-4 -rotate-3 bg-white text-black sm:-top-2.5"
                >
                  {project.challengeSfx}
                </span>
                <p className="mt-1 font-bangers text-h4 text-black uppercase">
                  &ldquo;{project.challenge}&rdquo;
                </p>
              </blockquote>

              {/* Panel 2: Project narrative */}
              <div className="flex flex-col items-center justify-center border-y-2 border-dashed border-comic-divider py-3.5">
                <h3
                  id={synopsisHeadingId}
                  className="mb-1.5 font-bangers text-stat-label text-comic-subtle uppercase"
                >
                  {projectsCopy.modalStoryHeading}
                </h3>
                <p className="max-w-xl text-center font-comic text-body text-comic-ink">
                  {renderBoldText(project.summary)}
                </p>
              </div>

              {/* Panel 3: Technical architecture breakdown */}
              <ComicProjectModalBackoffice
                decisions={project.technicalDecisions}
              />
            </article>
          </motion.div>
        </AnimatePresence>
      </div>
    </dialog>
  );
}
