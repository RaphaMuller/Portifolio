"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { ComicSealedCard } from "@/app/components/ui/projects/ComicHub/ComicSealedCard";
import { projectsCopy } from "@/app/constants/projectsData";
import { formatIssueNumber } from "@/app/lib/formatIssueNumber";
import { useComicCarousel } from "@/app/sections/hooks/useComicCarousel";
import type { Project } from "@/app/types/project";

interface ComicProjectsHubProps {
  projectsList: readonly Project[];
  onSelectProject: (project: Project) => void;
}

/**
 * @example
 * <ComicProjectsHub projectsList={filteredProjects} onSelectProject={handleOpenProject} />
 */
export function ComicProjectsHub({
  projectsList,
  onSelectProject,
}: ComicProjectsHubProps) {
  const { emblaRef, isOverflowing, scrollPrev, scrollNext } = useComicCarousel({
    containScroll: "trimSnaps",
    watchKey: projectsList,
  });

  return (
    <div className="relative mx-auto flex min-h-0 w-full flex-1 flex-col px-0 lg:px-8">
      {isOverflowing && (
        <>
          <ActionBadge
            as="button"
            theme="yellow"
            noPadding
            onClick={scrollPrev}
            aria-label={projectsCopy.prevIssue}
            className="absolute top-1/2 left-0 z-30 hidden size-11 -translate-y-1/2 cursor-pointer items-center justify-center select-none transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black sm:size-12 lg:flex"
          >
            <ChevronLeft
              className="size-7 text-black sm:size-8"
              strokeWidth={3}
              aria-hidden="true"
            />
          </ActionBadge>

          <ActionBadge
            as="button"
            theme="yellow"
            noPadding
            onClick={scrollNext}
            aria-label={projectsCopy.nextIssue}
            className="absolute top-1/2 right-0 z-30 hidden size-11 -translate-y-1/2 cursor-pointer items-center justify-center select-none transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black sm:size-12 lg:flex"
          >
            <ChevronRight
              className="size-7 text-black sm:size-8"
              strokeWidth={3}
              aria-hidden="true"
            />
          </ActionBadge>
        </>
      )}

      <div
        className="flex min-h-0 w-full flex-1 flex-col overflow-hidden"
        ref={emblaRef}
      >
        <ul
          aria-label={projectsCopy.issueNavAriaLabel}
          className={`flex min-h-0 w-full flex-1 touch-pan-y items-stretch gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14 ${
            !isOverflowing ? "justify-center" : "justify-start"
          }`}
        >
          {projectsList.map((project, index) => (
            <li
              key={project.id}
              className="flex min-h-0 flex-none basis-full flex-col px-2 sm:px-3 md:basis-2/3 md:px-4 lg:basis-1/2 lg:px-6 xl:basis-2/5 xl:px-8"
            >
              <ComicSealedCard
                project={project}
                issueNumberLabel={formatIssueNumber(index + 1)}
                onSelect={onSelectProject}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
