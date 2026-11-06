"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { HeroPowerMeter } from "@/app/components/ui/about/HeroPowerMeter/HeroPowerMeter";
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
    <div className="flex h-full min-h-0 flex-1 w-full flex-col justify-between gap-2.5 p-3.5 sm:p-4 text-center md:hidden">
      {/* 1. Full setup photo with centered top adhesive tape */}
      <figure className="flex min-h-60 sm:min-h-72 w-full flex-1 flex-col items-center justify-center pt-2.5">
        <div className="relative mx-auto flex min-h-0 max-h-full w-auto max-w-full flex-1 aspect-2/3 flex-col">
          <span aria-hidden="true" className="comic-tape" />

          <div className="relative flex min-h-0 w-full flex-1 overflow-hidden border-3 border-black bg-white shadow-comic-sm">
            <Image
              src="/setup.jpg"
              alt={aboutData.setupImageAlt}
              fill
              unoptimized
              quality={100}
              preload
              decoding="sync"
              sizes="(max-width: 768px) 75vw, 320px"
              className="object-fill"
            />
            <figcaption className="comic-stamp-pill absolute right-2 bottom-2 z-10 inline-flex items-center gap-1 bg-comic-yellow text-black">
              <Sparkles className="size-3 text-black" aria-hidden="true" />
              <span>{aboutData.hqBadge}</span>
            </figcaption>
          </div>
        </div>
      </figure>

      {/* 2. Core stack badges */}
      <div className="shrink-0 flex flex-wrap items-center justify-center gap-1.5">
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

      {/* 3. Editorial narrator summary box */}
      <div className="shrink-0 relative border-2 border-black bg-white px-3 py-2 text-left shadow-comic-sm">
        <span className="absolute -top-2.5 left-2 border border-black bg-comic-yellow px-2 py-0.5 font-bangers text-xs tracking-wider text-black uppercase leading-none">
          {aboutData.missionDirectiveBadge}
        </span>
        <p className="mt-0.5 font-comic text-caption text-comic-ink leading-tight">
          {aboutData.bioSummary}
        </p>
      </div>

      {/* 4. Side-by-side confirmed stats */}
      <div className="shrink-0 w-full">
        <HeroPowerMeter />
      </div>

      {/* 5. High-impact button to open full dossier modal */}
      <button
        type="button"
        onClick={onOpenDossier}
        aria-label={aboutData.openDossierAriaLabel}
        className="shrink-0 cursor-pointer border-3 border-black bg-comic-yellow px-4 py-2 font-bangers text-h4 text-black uppercase shadow-comic transition-transform hover:-translate-y-0.5 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        {aboutData.openDossierLabel}
      </button>
    </div>
  );
}
