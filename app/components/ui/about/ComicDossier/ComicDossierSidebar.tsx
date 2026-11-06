"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { HeroPowerMeter } from "@/app/components/ui/about/HeroPowerMeter/HeroPowerMeter";
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
      aria-label={aboutData.sidebarAriaLabel}
      className={`flex min-h-0 flex-col items-center justify-between gap-2.5 border-b-4 border-black bg-comic-projects-bg bg-comic-projects-gradient p-3.5 text-center text-white sm:gap-3 sm:p-4 md:border-r-4 md:border-b-0 ${className}`}
    >
      {/* Full setup photo with centered top adhesive tape */}
      <figure className="flex min-h-0 w-full flex-1 flex-col items-center justify-center pt-2.5 sm:pt-3">
        <div className="relative mx-auto flex min-h-0 max-h-full w-auto max-w-full flex-1 aspect-2/3 flex-col">
          <span
            aria-hidden="true"
            className="comic-tape sm:-top-3 sm:h-6 sm:w-24"
          />

          <div className="relative flex min-h-0 w-full flex-1 overflow-hidden border-3 border-black bg-white shadow-comic">
            <Image
              src="/setup.jpg"
              alt={aboutData.setupImageAlt}
              fill
              unoptimized
              quality={100}
              preload
              decoding="sync"
              sizes="(max-width: 1024px) 45vw, 360px"
              className="object-fill"
            />
            <figcaption className="comic-stamp-pill absolute right-2 bottom-2 z-10 inline-flex items-center gap-1 bg-comic-yellow text-black">
              <Sparkles className="size-3.5 text-black" aria-hidden="true" />
              <span>{aboutData.hqBadge}</span>
            </figcaption>
          </div>
        </div>
      </figure>

      {/* Side-by-side confirmed stats */}
      <div className="w-full shrink-0 border-y-2 border-dashed border-white/25 py-2">
        <span className="mb-1.5 block text-center font-bangers text-stat-label text-comic-yellow uppercase">
          {aboutData.statsHeading}
        </span>
        <HeroPowerMeter />
      </div>

      {/* Centered classic comic quote */}
      <blockquote className="w-full shrink-0 border-2 border-black bg-white px-2.5 py-2 text-center text-black shadow-comic-sm">
        <p className="font-comic text-caption font-bold text-comic-ink">
          &ldquo;{aboutData.quote}&rdquo;
        </p>
        <footer className="mt-0.5 font-bangers text-stat-label text-comic-muted uppercase">
          — {aboutData.author}
        </footer>
      </blockquote>
    </aside>
  );
}
