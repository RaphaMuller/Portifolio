"use client";

import Image from "next/image";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { projectsCopy } from "@/app/constants/projectsData";
import type { Project } from "@/app/types/project";

interface ComicSealedCardProps {
  project: Project;
  issueNumberLabel: string;
  onSelect: (project: Project) => void;
}

/**
 * @example
 * <ComicSealedCard project={project} issueNumberLabel="#01" onSelect={handleOpenProject} />
 */
export function ComicSealedCard({
  project,
  issueNumberLabel,
  onSelect,
}: ComicSealedCardProps) {
  return (
    <article className="flex min-h-0 w-full max-w-full flex-1 flex-col items-stretch p-0 sm:p-1.5 lg:items-center">
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`${projectsCopy.openModalAriaLabelPrefix} ${project.title}`}
        className="group/sealed relative mx-auto flex aspect-2/3 max-h-full min-h-0 w-full flex-1 cursor-pointer flex-col overflow-hidden rounded-sm border-2 border-white/35 bg-white/10 p-1.5 text-left shadow-comic-lg backdrop-blur-xs transition-transform duration-300 ease-out hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-comic-yellow sm:p-2.5 md:aspect-auto lg:aspect-2/3 lg:w-auto lg:max-w-md xl:max-w-lg"
      >
        {/* Polybag top header seal */}
        <div
          aria-hidden="true"
          className="relative mb-1.5 flex h-5 w-full shrink-0 items-center justify-between border-b border-white/30 bg-white/15 px-2.5 sm:h-6"
        >
          <span className="h-1 w-10 rounded-full bg-white/35" />
          <span className="border border-black bg-comic-yellow px-1.5 py-0.5 text-stat-label text-black uppercase shadow-comic-sm">
            {projectsCopy.sealedBadgeLabel}
          </span>
          <span className="h-1 w-10 rounded-full bg-white/35" />
        </div>

        {/* Comic cover and backing board */}
        <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden border-3 border-black bg-comic-surface-dark shadow-comic-sm sm:border-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            quality={100}
            preload
            decoding="sync"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 35vw"
            className="object-fill"
          />

          {/* Top cover stamps */}
          <div className="absolute top-2.5 right-2.5 left-2.5 z-10 flex items-center justify-between gap-2">
            <span className="comic-stamp-pill bg-comic-green text-white">
              {issueNumberLabel}
            </span>

            <span className="comic-stamp-pill rotate-3 bg-comic-red text-white">
              {project.action}
            </span>
          </div>

          {/* Cover footer title badge */}
          <div className="absolute inset-x-2.5 bottom-2.5 z-10 flex items-end justify-start">
            <ActionBadge theme="white" noPadding className="shadow-comic">
              <div className="px-3 py-1.5 sm:px-3.5 sm:py-2">
                <h3 className="font-bangers text-h3 text-black uppercase">
                  {project.title}
                </h3>
                <p className="mt-0.5 font-comic text-caption font-bold text-comic-muted uppercase">
                  {project.subtitle}
                </p>
              </div>
            </ActionBadge>
          </div>
        </div>

        {/* Plastic polybag crease and gloss sheen overlays */}
        <span
          aria-hidden="true"
          className="comic-plastic-crease pointer-events-none absolute inset-0 z-20 ring-1 ring-white/40 ring-inset"
        />
        <span
          aria-hidden="true"
          className="comic-plastic-sheen pointer-events-none absolute inset-0 z-20 opacity-85 transition-opacity duration-500 ease-out group-hover/sealed:opacity-100"
        />
      </button>
    </article>
  );
}
