"use client";

import { motion, type Variants } from "framer-motion";
import type { Project } from "@/app/types/project";
import { MangaSvgFrame } from "./MangaSvgFrame";
import { MangaPanelHeroContent } from "./MangaPanelHeroContent";
import { MangaPanelDossier } from "./MangaPanelDossier";
import { MangaPanelArsenal } from "./MangaPanelArsenal";
import { MangaPanelExecution } from "./MangaPanelExecution";

interface MangaProjectCardProps {
  project: Project;
  pageNumber: number;
  slideDirection: 1 | -1;
}

const cardVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeIn" },
  }),
};

/**
 * @example
 * <MangaProjectCard project={project} pageNumber={1} slideDirection={1} />
 */
export function MangaProjectCard({
  project,
  pageNumber,
  slideDirection,
}: MangaProjectCardProps) {
  return (
    <motion.article
      key={project.id}
      custom={slideDirection}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="relative aspect-manga w-[min(94vw,460px)] sm:w-[min(90vw,540px)] lg:w-auto h-auto lg:h-full max-h-[58vh] sm:max-h-[66vh] lg:max-h-full max-w-full select-none bg-white shadow-comic sm:shadow-comic-lg shrink-0"
    >
      {/* Background SVG: Manga layout, clipped hero image, and vector borders */}
      <MangaSvgFrame
        projectImage={project.image}
        projectTitle={project.title}
      />

      {/* Panel 1 Overlay: Badges and Title Banner */}
      <MangaPanelHeroContent
        pageNumber={pageNumber}
        action={project.action}
        title={project.title}
        subtitle={project.subtitle}
      />

      {/* Panel 2 Overlay: Mission Dossier */}
      <MangaPanelDossier description={project.description} />

      {/* Panel 3 Overlay: Tech Arsenal */}
      <MangaPanelArsenal tags={project.tags} />

      {/* Panel 4 Overlay: Action Buttons (Execution) */}
      <MangaPanelExecution
        githubUrl={project.githubUrl}
        demoUrl={project.demoUrl}
      />
    </motion.article>
  );
}
