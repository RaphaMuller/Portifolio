"use client";

import { motion } from "framer-motion";
import { ComicSectionBody } from "@/app/components/ui/global/ComicSection/ComicSectionBody";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicSectionHeader } from "@/app/components/ui/global/ComicSection/ComicSectionHeader";
import { ComicProjectModal } from "@/app/components/ui/projects/ComicHub/ComicProjectModal";
import { ComicProjectsHub } from "@/app/components/ui/projects/ComicHub/ComicProjectsHub";
import { motionPresets } from "@/app/constants/motionPresets";
import { projectCategories, projectsCopy } from "@/app/constants/projectsData";
import { useComicProjects } from "@/app/sections/hooks/useComicProjects";

/**
 * @example
 * <ComicProjects />
 */
export function ComicProjects() {
  const {
    activeCategory,
    filteredProjects,
    selectedProject,
    hasMultipleProjects,
    handleSelectCategory,
    handleOpenProject,
    handleCloseProject,
    handlePrevProject,
    handleNextProject,
  } = useComicProjects();

  return (
    <ComicSectionContainer
      id="projects"
      variant="dark"
      mode="fit"
      ariaLabel={projectsCopy.sectionAriaLabel}
    >
      <ComicSectionBody>
        <ComicSectionHeader
          chapter={projectsCopy.chapter}
          title={projectsCopy.title}
          theme="projects"
          rightSlot={
            <nav
              aria-label={projectsCopy.filtersAriaLabel}
              className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2"
            >
              {projectCategories.map((category) => {
                const isSelected = activeCategory === category;
                const pillClasses = isSelected
                  ? "bg-comic-yellow text-black -translate-y-0.5 shadow-comic-sm"
                  : "bg-comic-surface-elevated text-white hover:bg-comic-masthead";

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => handleSelectCategory(category)}
                    className={`cursor-pointer border-2 border-black px-2.5 py-1 font-bangers text-stat-label uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-comic-yellow ${pillClasses}`}
                  >
                    {category}
                  </button>
                );
              })}
            </nav>
          }
        />

        <motion.div
          {...motionPresets.blockSlideUp}
          className="flex min-h-0 w-full flex-1 flex-col"
        >
          <ComicProjectsHub
            projectsList={filteredProjects}
            onSelectProject={handleOpenProject}
          />
        </motion.div>

        <ComicProjectModal
          project={selectedProject}
          hasMultipleProjects={hasMultipleProjects}
          onPrevProject={handlePrevProject}
          onNextProject={handleNextProject}
          onClose={handleCloseProject}
        />
      </ComicSectionBody>
    </ComicSectionContainer>
  );
}
