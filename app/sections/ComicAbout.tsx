"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { ComicPanel } from "@/app/components/ui/global/ComicPanel/ComicPanel";
import { SpeechBubble } from "@/app/components/ui/global/SpeechBubble/SpeechBubble";
import { HeroPowerMeter } from "@/app/components/ui/about/HeroPowerMeter";
import { aboutData } from "@/app/constants/aboutData";
import { motionPresets } from "@/app/constants/motionPresets";

export default function ComicAbout() {
  return (
    <ComicSectionContainer
      id="about"
      variant="yellow"
      ariaLabel="Capítulo 1: Origem"
      className="items-center justify-center"
    >
      <div className="relative z-10 flex w-full max-w-6xl flex-col">
        {/* ChapterBadge */}
        <ActionBadge
          theme="dark"
          {...motionPresets.slideInRight}
          className="mb-8 self-center py-2 text-center text-h2 sm:px-6 md:self-start lg:text-h1"
        >
          <h1>{aboutData.caption}</h1>
        </ActionBadge>

        {/* Layout: flex-col em mobile e tablet (< 1024px), grid 60/40 no desktop (lg: >= 1024px) */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:gap-6 lg:items-start">
          {/* ── Bloco Esquerda (Desktop: 60% / 3 cols) ── */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            {/* Quadro 1: Setup QG */}
            <ComicPanel
              caption={aboutData.hqTitle}
              captionTheme="blue"
              {...motionPresets.slideInLeft}
            >
              <div className="relative overflow-hidden border-2 border-black bg-black">
                <Image
                  src="/Setup_v2.png"
                  alt="Workspace de desenvolvimento do herói"
                  width={1920}
                  height={1080}
                  className="aspect-video w-full object-cover max-h-80 md:max-h-96"
                  priority
                />
                <div className="absolute right-2 bottom-2 sm:right-3 sm:bottom-3">
                  <span className="inline-flex items-center gap-1.5 border-2 border-black bg-comic-yellow px-2 py-0.5 text-stat-label text-black shadow-comic-sm">
                    <Sparkles size={14} className="text-comic-red" />
                    {aboutData.hqBadge}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-caption text-zinc-700">
                {aboutData.hqCaption}
              </p>
            </ComicPanel>

            {/* Quadro 2: SpeechBubble */}
            <SpeechBubble tailPosition="top" animateOnScroll delay={0.2}>
              <p className="text-description md:text-body leading-snug text-zinc-900">
                &ldquo;{aboutData.quote}&rdquo;
              </p>
              <p className="mt-2 text-right text-stat-label text-comic-red">
                — {aboutData.author}
              </p>
            </SpeechBubble>
          </div>

          {/* ── Bloco Direita (Desktop: 40% / 2 cols) ── */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Quadro 3: Arquivo Confidencial / Lore */}
            <ComicPanel
              caption="ARQUIVO CONFIDENCIAL"
              captionTheme="red"
              className="flex flex-col justify-between"
              {...motionPresets.slideInRight}
            >
              <div>
                <h2 className="mb-2 text-h4 lg:text-h3 text-comic-red">
                  {aboutData.loreTitle}
                </h2>
                <p className="font-mouse text-base md:text-lg lg:text-base xl:text-lg leading-relaxed tracking-wide text-zinc-900">
                  {aboutData.loreText}
                </p>
              </div>
            </ComicPanel>

            {/* Quadro 4: Medidor de Poder */}
            <ComicPanel
              caption={aboutData.meterTitle}
              captionTheme="dark"
              {...motionPresets.slideInRight}
            >
              <HeroPowerMeter />
            </ComicPanel>
          </div>
        </div>
      </div>
    </ComicSectionContainer>
  );
}
