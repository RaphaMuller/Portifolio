"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { HeroPowerMeter } from "@/app/components/ui/about/HeroPowerMeter";
import { aboutData } from "@/app/constants/aboutData";

interface ComicDossierSidebarProps {
  className?: string;
}

/**
 * @example
 * <ComicDossierSidebar />
 */
export function ComicDossierSidebar({ className = "" }: ComicDossierSidebarProps) {
  return (
    <aside
      aria-label="Evidências do Dossiê"
      className={`flex flex-col justify-between gap-2 sm:gap-2.5 ${className}`}
    >
      {/* Foto estilo Polaroid Expandida com Fita Adesiva + Informações do Sujeito */}
      <div className="relative border-3 sm:border-4 border-black bg-white p-2 shadow-[5px_5px_0_0_#000]">
        {/* Fita Adesiva no Topo */}
        <div
          aria-hidden="true"
          className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 h-4 w-20 border border-black/40 bg-amber-200/90 shadow-xs -rotate-2"
        />

        <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-black bg-black">
          <Image
            src="/Setup_v2.png"
            alt="Workspace de desenvolvimento do herói"
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover"
            priority
          />
          <div className="absolute right-1.5 bottom-1.5">
            <span className="inline-flex items-center gap-1 border border-black bg-comic-yellow px-1.5 py-0.5 font-bangers text-[10px] sm:text-xs text-black shadow-comic-sm">
              <Sparkles size={12} className="text-comic-red" />
              {aboutData.hqBadge}
            </span>
          </div>
        </div>

        {/* Informações da Identidade Alocadas Abaixo da Foto */}
        <div className="mt-2 flex flex-col items-center justify-center border-t-2 border-black/15 pt-1.5 text-center">
          <h2 className="font-bangers text-base sm:text-lg text-black leading-none tracking-bangers-wide">
            {aboutData.subject}
          </h2>

          <div className="mt-1 flex flex-wrap items-center justify-center gap-1.5">
            <span className="border border-black bg-comic-red px-1.5 py-0.5 font-bangers text-[10px] sm:text-xs text-white shadow-comic-sm">
              FULL-STACK DEVELOPER
            </span>
            <span className="border border-black bg-comic-yellow px-1.5 py-0.5 font-bangers text-[10px] sm:text-xs text-black shadow-comic-sm">
              {aboutData.status}
            </span>
          </div>

          <span className="mt-1 font-mono text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-widest">
            {aboutData.dossierCode} {"//"} EVIDÊNCIA #01
          </span>
        </div>
      </div>

      {/* Bloco Encapsulador de Estatísticas em Coluna Ocupando o Espaço Restante */}
      <div className="flex flex-1 flex-col items-center justify-center text-center border-3 border-black bg-white p-2.5 shadow-[4px_4px_0_0_#000]">
        <p className="mb-2 w-full text-center font-bangers text-xs sm:text-sm text-zinc-900 tracking-bangers-wide">
          ESTATÍSTICAS CONFIRMADAS:
        </p>
        <HeroPowerMeter compact direction="column" className="flex-1 w-full justify-center items-center gap-2 sm:gap-2.5" />
      </div>

      {/* Citação do Herói em Fundo Bege */}
      <div className="relative border-3 border-black bg-comic-bege p-2 sm:p-2.5 shadow-[4px_4px_0_0_#000]">
        <p className="font-mouse text-xs sm:text-sm lg:text-base xl:text-lg leading-snug text-zinc-900 font-normal">
          &ldquo;{aboutData.quote}&rdquo;
        </p>
        <p className="mt-0.5 text-right font-bangers text-xs text-comic-red tracking-bangers-wide">
          — {aboutData.author}
        </p>
      </div>
    </aside>
  );
}
