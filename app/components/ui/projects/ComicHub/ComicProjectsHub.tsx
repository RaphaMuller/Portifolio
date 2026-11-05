"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

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
    <div className="relative mx-auto flex h-full min-h-0 w-full flex-1 items-stretch justify-center px-0 sm:px-4 lg:px-8">
      {isOverflowing && (
        <>
          <ActionBadge
            theme="yellow"
            noPadding
            onClick={scrollPrev}
            aria-label={projectsCopy.prevIssue}
            className="absolute top-1/2 left-0 z-30 hidden lg:flex h-11 w-11 sm:h-12 sm:w-12 -translate-y-1/2 cursor-pointer items-center justify-center select-none transition-transform hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 stroke-[3] text-black" />
          </ActionBadge>

          <ActionBadge
            theme="yellow"
            noPadding
            onClick={scrollNext}
            aria-label={projectsCopy.nextIssue}
            className="absolute top-1/2 right-0 z-30 hidden lg:flex h-11 w-11 sm:h-12 sm:w-12 -translate-y-1/2 cursor-pointer items-center justify-center select-none transition-transform hover:scale-110 active:scale-95"
          >
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 stroke-[3] text-black" />
          </ActionBadge>
        </>
      )}

      <div className="flex h-full min-h-0 w-full flex-1 overflow-hidden" ref={emblaRef}>
        <ul aria-label={projectsCopy.issueNavAriaLabel} className="flex h-full min-h-0 w-full touch-pan-y items-center gap-2 sm:gap-3 md:gap-4">
          {projectsList.map((project, index) => (
            <li
              key={project.id}
              className="min-w-0 flex-none basis-full sm:basis-2/3 lg:basis-2/3 xl:basis-1/2 flex h-full min-h-0 items-center justify-center p-1 sm:p-2"
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
