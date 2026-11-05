"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { ComicSealedCard } from "@/app/components/ui/projects/ComicHub/ComicSealedCard";
import { projectsCopy } from "@/app/constants/projectsData";
import { formatIssueNumber } from "@/app/sections/hooks/useComicProjects";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const syncCarouselState = useCallback((api: EmblaCarouselType) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi
      .on("init", syncCarouselState)
      .on("reInit", syncCarouselState)
      .on("select", syncCarouselState);

    queueMicrotask(() => syncCarouselState(emblaApi));

    return () => {
      emblaApi
        .off("init", syncCarouselState)
        .off("reInit", syncCarouselState)
        .off("select", syncCarouselState);
    };
  }, [emblaApi, syncCarouselState, projectsList]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const isOverflowing = canScrollPrev || canScrollNext;

  return (
    <div className="relative mx-auto flex h-full min-h-0 w-full flex-1 items-stretch justify-center px-4 sm:px-8">
      {isOverflowing && (
        <>
          <ActionBadge
            theme="yellow"
            noPadding
            onClick={scrollPrev}
            aria-label={projectsCopy.prevIssue}
            className="absolute top-1/2 left-0 z-30 flex h-11 w-11 sm:h-12 sm:w-12 -translate-y-1/2 cursor-pointer items-center justify-center font-bangers text-h3 select-none transition-transform hover:scale-110 active:scale-95"
          >
            ◀
          </ActionBadge>

          <ActionBadge
            theme="yellow"
            noPadding
            onClick={scrollNext}
            aria-label={projectsCopy.nextIssue}
            className="absolute top-1/2 right-0 z-30 flex h-11 w-11 sm:h-12 sm:w-12 -translate-y-1/2 cursor-pointer items-center justify-center font-bangers text-h3 select-none transition-transform hover:scale-110 active:scale-95"
          >
            ▶
          </ActionBadge>
        </>
      )}

      <div className="flex h-full min-h-0 w-full flex-1 overflow-hidden" ref={emblaRef}>
        <ul
          aria-label={projectsCopy.issueNavAriaLabel}
          className={`flex h-full min-h-0 w-full touch-pan-y items-stretch gap-4 sm:gap-6 md:gap-8 ${
            !isOverflowing ? "justify-center" : "justify-start"
          }`}
        >
          {projectsList.map((project, index) => (
            <li
              key={project.id}
              className="flex h-full min-h-0 max-w-full flex-none items-center justify-center"
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
