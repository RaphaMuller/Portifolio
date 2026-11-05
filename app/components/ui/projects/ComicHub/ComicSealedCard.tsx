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
    <article className="flex h-full w-full min-h-0 max-w-full items-center justify-center p-1 sm:p-1.5">
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`${projectsCopy.openModalAriaLabelPrefix} ${project.title}`}
        className="group/sealed relative flex aspect-2/3 w-full max-w-xs sm:max-w-sm h-auto md:h-full md:w-auto md:max-h-full md:max-w-full cursor-pointer flex-col overflow-hidden rounded-sm border-2 border-white/35 bg-white/10 p-1.5 sm:p-2.5 text-left shadow-comic-lg backdrop-blur-xs transition-transform duration-300 ease-out hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-comic-yellow"
      >
        {/* Aba Superior do Saco Plástico Lacrado (Polybag Header Seal) */}
        <div
          aria-hidden="true"
          className="relative mb-1.5 flex h-5 sm:h-6 w-full shrink-0 items-center justify-between border-b border-white/30 bg-white/15 px-2.5"
        >
          <span className="h-1 w-10 rounded-full bg-white/35" />
          <span className="border border-black bg-comic-yellow px-1.5 py-0.5 font-mono text-stat-label font-bold text-black uppercase shadow-comic-sm">
            {projectsCopy.sealedBadgeLabel}
          </span>
          <span className="h-1 w-10 rounded-full bg-white/35" />
        </div>

        {/* Capa da HQ + Papel Cartão Interno (Backing Board) */}
        <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden border-3 sm:border-4 border-black bg-zinc-950 shadow-comic-sm">
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            quality={100}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover/sealed:scale-105"
            priority
          />

          {/* Selos Superiores da Capa */}
          <div className="absolute top-2.5 right-2.5 left-2.5 z-10 flex items-center justify-between gap-2">
            <span className="border-2 border-black bg-comic-green px-2 py-0.5 font-bangers text-stat-label text-white shadow-comic-sm">
              {issueNumberLabel}
            </span>

            <span className="rotate-3 border-2 border-black bg-comic-red px-2 py-0.5 font-bangers text-stat-label text-white uppercase shadow-comic-sm">
              {project.action}
            </span>
          </div>

          {/* Rodapé da Capa com Título em ActionBadge */}
          <div className="absolute inset-x-2.5 bottom-2.5 z-10 flex items-end justify-start">
            <ActionBadge theme="white" noPadding className="shadow-comic">
              <div className="px-3 py-1.5 sm:px-3.5 sm:py-2">
                <h3 className="font-bangers text-h3 text-black uppercase">
                  {project.title}
                </h3>
                <p className="mt-0.5 font-comic text-caption font-bold text-zinc-700 uppercase">
                  {project.subtitle}
                </p>
              </div>
            </ActionBadge>
          </div>
        </div>

        {/* Camada de Plástico Transparente com Vincos e Reflexo 100% do Container */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 comic-plastic-crease ring-1 ring-inset ring-white/40"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 comic-plastic-sheen opacity-85 transition-opacity duration-500 ease-out group-hover/sealed:opacity-100"
        />
      </button>
    </article>
  );
}
