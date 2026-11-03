import { useId } from "react";
import Image from "next/image";
import { Code, ExternalLink } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { projectsCopy } from "@/app/constants/projectsData";

interface ComicPanelOpeningProps {
  issueNumberLabel: string;
  title: string;
  subtitle: string;
  action: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

/**
 * @example
 * <ComicPanelOpening issueNumberLabel="#01" title="FOOTLE" subtitle="Dedução Esportiva Diária" action="GOLAÇO!" image="/footle.png" githubUrl="https://github.com/..." demoUrl="https://..." />
 */
export function ComicPanelOpening({
  issueNumberLabel,
  title,
  subtitle,
  action,
  image,
  githubUrl,
  demoUrl,
}: ComicPanelOpeningProps) {
  const headingId = useId();

  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden border-3 sm:border-4 border-black bg-zinc-950 shadow-[4px_4px_0_0_#000]">
      <section
        aria-labelledby={headingId}
        className="relative h-full w-full min-h-0 flex-1"
      >
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          quality={100}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform"
          priority
        />

        {/* Selos de Capa da HQ nos Cantos Superiores */}
        <span className="absolute top-2.5 left-2.5 z-10 border-2 border-black bg-comic-green px-2 py-0.5 font-bangers text-stat-label text-white shadow-comic-sm">
          {issueNumberLabel}
        </span>

        <span className="absolute top-2.5 right-2.5 z-10 rotate-3 border-2 border-black bg-comic-red px-2 py-0.5 font-bangers text-stat-label text-white uppercase shadow-comic-sm">
          {action}
        </span>

        {/* Base com Título em ActionBadge e Botões Soltos Brancos */}
        <div className="absolute inset-x-2.5 bottom-2.5 z-20 flex flex-wrap items-end justify-between gap-2 sm:inset-x-3.5 sm:bottom-3.5">
          {/* Título e Subtítulo em ActionBadge */}
          <ActionBadge theme="white" noPadding className="shadow-comic">
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 select-none">
              <h2
                id={headingId}
                className="font-bangers text-xl sm:text-2xl text-black leading-none uppercase"
              >
                {title}
              </h2>
              <p className="mt-0.5 font-comic text-caption font-bold text-zinc-700 uppercase tracking-wide">
                {subtitle}
              </p>
            </div>
          </ActionBadge>

          {/* Botões CÓDIGO e DEMO Soltos com Tema Branco */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border-2 border-black bg-white px-2.5 py-1 font-bangers text-stat-label text-black uppercase shadow-comic-sm transition-transform hover:-translate-y-0.5 hover:scale-105 focus-visible:ring-2 focus-visible:ring-comic-blue sm:px-3 sm:py-1.5"
              >
                <Code className="size-3.5 sm:size-4" aria-hidden="true" />
                <span>{projectsCopy.codeLabel}</span>
              </a>
            )}

            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border-2 border-black bg-white px-2.5 py-1 font-bangers text-stat-label text-black uppercase shadow-comic-sm transition-transform hover:-translate-y-0.5 hover:scale-105 focus-visible:ring-2 focus-visible:ring-comic-blue sm:px-3 sm:py-1.5"
              >
                <ExternalLink className="size-3.5 sm:size-4" aria-hidden="true" />
                <span>{projectsCopy.demoLabel}</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
