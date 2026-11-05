"use client";

import { useEffect, useId, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComicProjectModalBackoffice } from "@/app/components/ui/projects/ComicHub/ComicProjectModalBackoffice";
import { ComicProjectModalFlap } from "@/app/components/ui/projects/ComicHub/ComicProjectModalFlap";
import { ComicProjectModalHeader } from "@/app/components/ui/projects/ComicHub/ComicProjectModalHeader";
import { projectsCopy } from "@/app/constants/projectsData";
import type { Project } from "@/app/types/project";

interface ComicProjectModalProps {
  project: Project | null;
  hasMultipleProjects: boolean;
  onPrevProject: () => void;
  onNextProject: () => void;
  onClose: () => void;
}

function renderHighlightedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-black">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const synopsisHeadingId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) dialog.showModal();
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else if (dialog.open) {
      dialog.close();
    }
  }, [project]);

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="fixed inset-0 m-0 flex flex-col h-dvh max-h-dvh w-full max-w-none border-0 p-0 shadow-none overscroll-contain overflow-y-auto overflow-x-hidden bg-white text-black backdrop:bg-black/80 backdrop:backdrop-blur-xs lg:inset-y-8 lg:inset-x-auto lg:my-auto lg:h-auto lg:max-h-[calc(100svh-4rem)] lg:w-11/12 lg:max-w-6xl lg:border-4 lg:border-black lg:shadow-comic-lg"
    >
      <ComicProjectModalHeader
        project={project}
        titleId={titleId}
        hasMultipleProjects={hasMultipleProjects}
        onPrevProject={onPrevProject}
        onNextProject={onNextProject}
        onClose={onClose}
      />

      {/* Grid Editorial Interiço: Orelha Azul HQ (4 col) + Página Centralizada (8 col) */}
      <div className="flex-1 min-h-0 w-full overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex-1 min-h-0 flex flex-col lg:grid lg:grid-cols-12"
          >
          <ComicProjectModalFlap project={project} />

          <article
            aria-labelledby={synopsisHeadingId}
            className="flex-1 min-h-0 flex flex-col justify-between gap-4 bg-white p-5 text-center sm:p-6 lg:col-span-8 overflow-y-auto overscroll-contain"
          >
            {/* Quadro 1: Recordatório Clássico de HQ Centralizado */}
            <blockquote className="relative mt-2 border-3 border-black bg-comic-yellow px-4 py-3.5 shadow-comic-sm sm:mt-2.5">
              <span className="absolute -top-2 left-4 border-2 border-black bg-white px-2 py-0.5 font-bangers text-stat-label text-black uppercase sm:-top-2.5">
                {projectsCopy.modalSynopsisLabel}
              </span>
              <span
                aria-hidden="true"
                className="absolute -top-2 right-4 -rotate-3 border-2 border-black bg-white px-2 py-0.5 font-bangers text-stat-label text-black uppercase shadow-comic-sm sm:-top-2.5"
              >
                {project.challengeSfx}
              </span>
              <p className="mt-1 font-bangers text-h4 text-black uppercase">
                &ldquo;{project.challenge}&rdquo;
              </p>
            </blockquote>

            {/* Quadro 2: A História do Projeto (Negrito Puro sem Sublinhado Amarelo) */}
            <div className="flex flex-col items-center justify-center border-y-2 border-dashed border-zinc-300 py-3.5">
              <h3
                id={synopsisHeadingId}
                className="mb-1.5 font-bangers text-stat-label text-zinc-600 uppercase"
              >
                {projectsCopy.modalStoryHeading}
              </h3>
              <p className="max-w-xl text-center font-comic text-body text-zinc-900">
                {renderHighlightedText(project.summary)}
              </p>
            </div>

            {/* Quadro 3: Backoffice Explicativo (Papel de Cada Pilar no Código) */}
            <ComicProjectModalBackoffice decisions={project.technicalDecisions} />
          </article>
        </motion.div>
      </AnimatePresence>
      </div>
    </dialog>
  );
}
