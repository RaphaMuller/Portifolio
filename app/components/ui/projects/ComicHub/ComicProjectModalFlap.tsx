import Image from "next/image";
import { Code, ExternalLink } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { projectsCopy } from "@/app/constants/projectsData";
import type { Project } from "@/app/types/project";

interface ComicProjectModalFlapProps {
  project: Project;
}

/**
 * @example
 * <ComicProjectModalFlap project={project} />
 */
export function ComicProjectModalFlap({ project }: ComicProjectModalFlapProps) {
  return (
    <aside
      aria-label={projectsCopy.modalFlapAriaLabel}
      className="flex flex-col items-center justify-between gap-4 border-b-4 border-black bg-comic-projects-bg bg-comic-projects-gradient p-4 text-center text-white lg:col-span-4 lg:border-r-4 lg:border-b-0 sm:p-5 h-full"
    >
      {/* Miniatura da Capa (Visível em Desktop na Orelha do Livro) */}
      <div className="relative hidden aspect-2/3 w-full max-w-44 xl:max-w-48 overflow-hidden border-3 border-black bg-zinc-900 shadow-comic lg:block">
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized
          quality={100}
          sizes="260px"
          className="object-cover object-top"
        />
        <span className="absolute top-2 right-2 rotate-3 border-2 border-black bg-comic-yellow px-2 py-0.5 font-bangers text-stat-label text-black uppercase shadow-comic-sm">
          {project.action}
        </span>
      </div>

      {/* Botões de Ação Principais Padronizados (Amarelo + Branco) */}
      <div className="grid w-full grid-cols-2 gap-2.5 lg:grid-cols-1">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-black bg-comic-yellow px-3 py-2 font-bangers text-h4 text-black uppercase shadow-comic-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
            <span>{projectsCopy.demoLabel}</span>
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-black bg-white px-3 py-2 font-bangers text-h4 text-black uppercase shadow-comic-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-comic-yellow"
          >
            <Code className="size-4 shrink-0" aria-hidden="true" />
            <span>{projectsCopy.codeLabel}</span>
          </a>
        )}
      </div>

      {/* Arsenal de Tecnologias 100% Centralizado */}
      <div className="w-full border-t-2 border-dashed border-white/35 pt-3">
        <span className="mb-2 block text-center font-bangers text-stat-label text-comic-yellow uppercase">
          — {projectsCopy.arsenalHeading} —
        </span>
        <ul
          aria-label={projectsCopy.techListAriaLabel}
          className="flex flex-wrap items-center justify-center gap-1.5"
        >
          {project.tags.map((tag) => (
            <li key={tag}>
              <ActionBadge theme="white" noPadding>
                <span className="px-2 py-0.5 font-bangers text-stat-label text-black">
                  {tag}
                </span>
              </ActionBadge>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
