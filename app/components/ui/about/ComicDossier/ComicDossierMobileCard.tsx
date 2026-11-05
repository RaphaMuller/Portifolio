"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { HeroPowerMeter } from "@/app/components/ui/about/HeroPowerMeter";
import { aboutData } from "@/app/constants/aboutData";

interface ComicDossierMobileCardProps {
  onOpenDossier: () => void;
}

/**
 * @example
 * <ComicDossierMobileCard onOpenDossier={() => setIsModalOpen(true)} />
 */
export function ComicDossierMobileCard({
  onOpenDossier,
}: ComicDossierMobileCardProps) {
  return (
    <div className="flex h-full min-h-0 w-full flex-col justify-between gap-2.5 p-3.5 sm:p-4 text-center md:hidden">
      {/* 1. Foto Ampliada do Setup (Ocupa o espaço livre dinamicamente) */}
      <div className="relative min-h-28 sm:min-h-36 max-h-52 w-full flex-1 overflow-hidden border-3 border-black bg-black shadow-comic-sm">
        <Image
          src="/Setup_v2.png"
          alt="Workspace de desenvolvimento do herói"
          fill
          quality={95}
          sizes="(max-width: 768px) 90vw, 400px"
          className="object-cover"
          priority
        />
        <span className="absolute right-2 bottom-2 inline-flex items-center gap-1 border-2 border-black bg-comic-yellow px-2 py-0.5 font-bangers text-stat-label text-black shadow-comic-sm">
          <Sparkles className="size-3 text-black" aria-hidden="true" />
          <span>{aboutData.hqBadge}</span>
        </span>
      </div>

      {/* 2. Badges de Stack Core no Topo (Ponte visual entre foto e texto) */}
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {aboutData.coreStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1 border border-black bg-white px-2 py-0.5 font-bangers text-stat-label text-black shadow-comic-sm"
          >
            <span className="size-1.5 rounded-full border border-black bg-comic-yellow" />
            {tech}
          </span>
        ))}
      </div>

      {/* 3. Mini-Bio Editorial em Recordatório de Quadrinhos com Badge Ampliada */}
      <div className="relative border-2 border-black bg-white px-3 py-2 text-left shadow-comic-sm">
        <span className="absolute -top-2.5 left-2 border border-black bg-comic-yellow px-2 py-0.5 font-bangers text-xs tracking-wider text-black uppercase leading-none">
          DIRETRIZ DA MISSÃO
        </span>
        <p className="mt-0.5 font-comic text-caption text-zinc-900 leading-tight">
          {aboutData.bioSummary}
        </p>
      </div>

      {/* 4. Estatísticas Confirmadas Empilhadas em Coluna */}
      <div className="w-full">
        <HeroPowerMeter compact direction="column" />
      </div>

      {/* 5. Botão de Alto Impacto para Abertura do Dossiê Completo */}
      <button
        type="button"
        onClick={onOpenDossier}
        aria-label={aboutData.openDossierAriaLabel}
        className="cursor-pointer border-3 border-black bg-comic-yellow px-4 py-2 font-bangers text-h4 text-black uppercase shadow-comic transition-transform hover:-translate-y-0.5 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        {aboutData.openDossierLabel}
      </button>
    </div>
  );
}
