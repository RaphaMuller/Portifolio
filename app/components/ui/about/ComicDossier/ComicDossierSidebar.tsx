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
      className={`flex flex-col items-center justify-between gap-4 border-b-4 border-black bg-comic-projects-bg bg-comic-projects-gradient p-4 text-center text-white lg:border-r-4 lg:border-b-0 sm:p-5 ${className}`}
    >
      {/* Foto do Setup Ampliada em Moldura HQ */}
      <div className="relative min-h-48 w-full flex-1 overflow-hidden border-3 border-black bg-black shadow-comic-sm">
        <Image
          src="/Setup_v2.png"
          alt="Workspace de desenvolvimento do herói"
          fill
          quality={95}
          sizes="(max-width: 1024px) 100vw, 420px"
          className="object-cover"
          priority
        />
        <span className="absolute right-2 bottom-2 inline-flex items-center gap-1 border-2 border-black bg-comic-yellow px-2 py-0.5 font-bangers text-stat-label text-black shadow-comic-sm">
          <Sparkles className="size-3.5 text-black" aria-hidden="true" />
          <span>{aboutData.hqBadge}</span>
        </span>
      </div>

      {/* Estatísticas Confirmadas em Coluna */}
      <div className="w-full border-y-2 border-dashed border-white/25 py-3">
        <span className="mb-2 block text-center font-bangers text-stat-label text-comic-yellow uppercase">
          {aboutData.statsHeading}
        </span>
        <HeroPowerMeter compact direction="column" />
      </div>

      {/* Citação Clássica Centralizada */}
      <blockquote className="w-full border-2 border-black bg-white p-3 text-center text-black shadow-comic-sm">
        <p className="font-comic text-caption font-bold text-zinc-900">
          &ldquo;{aboutData.quote}&rdquo;
        </p>
        <footer className="mt-1 font-bangers text-stat-label text-zinc-700 uppercase">
          — {aboutData.author}
        </footer>
      </blockquote>
    </aside>
  );
}
