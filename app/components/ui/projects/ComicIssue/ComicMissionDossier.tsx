import { useId } from "react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { projectsCopy } from "@/app/constants/projectsData";
import type { Project } from "@/app/types/project";

interface ComicMissionDossierProps {
  project: Project;
}

function renderHighlightedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.slice(2, -2);
      return (
        <strong
          key={index}
          className="border-b-2 border-black bg-comic-yellow/50 px-1 font-bold text-black"
        >
          {content}
        </strong>
      );
    }
    return part;
  });
}

/**
 * @example
 * <ComicMissionDossier project={project} />
 */
export function ComicMissionDossier({ project }: ComicMissionDossierProps) {
  const headingId = useId();

  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col justify-between overflow-hidden border-3 sm:border-4 border-black bg-comic-bege bg-comic-dots p-2.5 sm:p-3 lg:p-2 xl:p-3 shadow-[4px_4px_0_0_#000]">
      {/* Tarja Tática de Cabeçalho com Alto Contraste */}
      <div className="mb-2 lg:mb-1.5 xl:mb-2 flex items-center justify-between border-2 border-black bg-black px-2.5 py-1 select-none">
        <span className="font-mono text-stat-label lg:text-[11px] xl:text-stat-label font-bold uppercase tracking-widest text-comic-yellow">
          REF: {project.title} {"//"} DOSSIÊ TÉCNICO
        </span>
        <span className="border border-black bg-comic-red px-1.5 py-0.5 font-bangers text-[10px] uppercase text-white shadow-comic-sm">
          CLASSIFICAÇÃO: NÍVEL 3
        </span>
      </div>

      {/* Conteúdo Narrativo da Missão */}
      <section
        aria-labelledby={headingId}
        className="no-scrollbar flex min-h-0 flex-1 flex-col justify-between gap-2 sm:gap-2.5 lg:gap-1.5 xl:gap-2.5 overflow-y-auto overflow-x-hidden pr-0.5"
      >
        <div className="space-y-2 sm:space-y-2.5 lg:space-y-1.5 xl:space-y-2.5">
          {/* Card de Título em Destaque */}
          <div className="border-2 border-black bg-white p-2 sm:p-2.5 lg:p-1.5 lg:px-2.5 xl:p-2.5 shadow-comic-sm">
            <h3
              id={headingId}
              className="font-bangers text-2xl sm:text-3xl text-black lg:text-2xl xl:text-3xl 2xl:text-4xl leading-none uppercase tracking-bangers-wide"
            >
              {project.title}
            </h3>
            <p className="mt-0.5 font-comic text-caption sm:text-stat-label lg:text-xs xl:text-stat-label font-bold text-zinc-700 uppercase tracking-wide">
              {project.subtitle}
            </p>
          </div>

          {/* Resumo da Missão (Linguagem Direta) */}
          <div className="border-l-4 border-comic-red bg-white/80 p-2 sm:p-2.5 lg:p-1.5 lg:px-2.5 xl:p-2.5 shadow-comic-sm">
            <span className="block font-bangers text-stat-label lg:text-xs xl:text-stat-label text-comic-red uppercase tracking-wider">
              SOBRE A MISSÃO:
            </span>
            <p className="mt-0.5 font-comic text-description lg:text-[13px] lg:leading-snug xl:text-description xl:leading-relaxed font-bold leading-relaxed text-zinc-900">
              {renderHighlightedText(project.summary)}
            </p>
          </div>

          {/* Engenharia & Bastidores (Destaque nos Termos Técnicos) */}
          <div className="border-l-4 border-comic-blue bg-white/80 p-2 sm:p-2.5 lg:p-1.5 lg:px-2.5 xl:p-2.5 shadow-comic-sm">
            <span className="block font-bangers text-stat-label lg:text-xs xl:text-stat-label text-comic-blue uppercase tracking-wider">
              ENGENHARIA & BASTIDORES:
            </span>
            <p className="mt-0.5 font-comic text-description lg:text-[13px] lg:leading-snug xl:text-description xl:leading-relaxed font-bold leading-relaxed text-zinc-900">
              {renderHighlightedText(project.engineering)}
            </p>
          </div>

          {/* Arsenal de Tecnologias em Formato ActionBadge */}
          {project.tags && project.tags.length > 0 && (
            <div className="pt-0.5 select-none">
              <span className="mb-1 block font-bangers text-stat-label lg:text-xs xl:text-stat-label text-zinc-700 uppercase">
                {projectsCopy.arsenalHeading}:
              </span>
              <div className="flex flex-wrap gap-1.5 lg:gap-1 xl:gap-1.5">
                {project.tags.map((tag) => (
                  <ActionBadge key={tag} theme="yellow" noPadding>
                    <span className="px-2 py-0.5 text-xs lg:px-1.5 lg:py-0.25 lg:text-[11px] xl:px-2 xl:py-0.5 xl:text-xs font-bangers tracking-bangers-wide">
                      {tag}
                    </span>
                  </ActionBadge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Diretriz de Campo / Desafio com Carimbo */}
        <div className="relative mt-auto flex flex-col justify-between border-2 border-black bg-white p-2 sm:p-2.5 lg:p-1.5 lg:px-2.5 xl:p-2.5 shadow-comic">
          <div className="mb-1 flex items-center justify-between border-b border-black pb-1 select-none">
            <span className="font-bangers text-stat-label lg:text-xs xl:text-stat-label text-comic-red uppercase tracking-wider">
              DIRETRIZ DA MISSÃO
            </span>
            <span className="font-mono text-stat-label lg:text-[10px] xl:text-stat-label text-zinc-500 uppercase">
              REGRA DE CAMPO
            </span>
          </div>

          <div className="flex items-end justify-between gap-2">
            <p className="flex-1 font-mouse text-base text-zinc-900 leading-tight sm:text-lg lg:text-sm lg:leading-tight xl:text-base 2xl:text-lg">
              &ldquo;{project.challenge}&rdquo;
            </p>

            <span
              aria-hidden="true"
              className="shrink-0 -rotate-6 border-2 border-black bg-comic-yellow px-2 py-0.5 font-bangers text-stat-label text-comic-stroke text-comic-red shadow-comic-sm uppercase select-none sm:text-h3 lg:text-sm lg:px-1.5 lg:py-0.5 xl:text-h3 xl:px-2"
            >
              {project.challengeSfx}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
