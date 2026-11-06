"use client";

import type { CSSProperties } from "react";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { BuildingSkyline } from "@/app/components/ui/global/ComicSkyline/BuildingSkyline";
import { ComicAvatar } from "@/app/components/ui/hero/ComicAvatar/ComicAvatar";
import { ComicPalmTree } from "@/app/components/ui/hero/ComicFoliage/ComicPalmTree";
import { ComicHeroCaption } from "@/app/components/ui/hero/ComicHeroIntro/ComicHeroCaption";
import { ComicHeroIdentity } from "@/app/components/ui/hero/ComicHeroIntro/ComicHeroIdentity";
import { ComicHeroSpeech } from "@/app/components/ui/hero/ComicHeroIntro/ComicHeroSpeech";
import { ComicRoad } from "@/app/components/ui/hero/ComicRoad/ComicRoad";
import { heroCopy } from "@/app/constants/heroCopy";

interface PalmPlacement {
  id: string;
  height: number;
  flipped?: boolean;
  swayDelay: number;
  entranceDelay: number;
  wrapperClass: string;
  style?: CSSProperties;
}

const HERO_PALM_TREES: readonly PalmPlacement[] = [
  {
    id: "west-edge",
    height: 65,
    swayDelay: 0,
    entranceDelay: 0.85,
    wrapperClass: "palm-anchor absolute bottom-0",
    style: { "--palm-x": "4%", "--palm-x-sm": "5%" } as CSSProperties,
  },
  {
    id: "west-mid",
    height: 85,
    flipped: true,
    swayDelay: 1.2,
    entranceDelay: 0.92,
    wrapperClass: "palm-anchor absolute bottom-0 hidden md:block",
    style: { "--palm-x": "18%", "--palm-x-sm": "20%" } as CSSProperties,
  },
  {
    id: "center-west",
    height: 75,
    swayDelay: 2.1,
    entranceDelay: 0.98,
    wrapperClass: "palm-anchor absolute bottom-0 hidden sm:block",
    style: { "--palm-x": "33%", "--palm-x-sm": "35%" } as CSSProperties,
  },
  {
    id: "center",
    height: 85,
    flipped: true,
    swayDelay: 0.7,
    entranceDelay: 1.04,
    wrapperClass: "palm-anchor absolute bottom-0",
    style: { "--palm-x": "48%", "--palm-x-sm": "50%" } as CSSProperties,
  },
  {
    id: "center-east",
    height: 75,
    swayDelay: 1.8,
    entranceDelay: 1.1,
    wrapperClass: "palm-anchor absolute bottom-0 hidden sm:block",
    style: { "--palm-x": "64%", "--palm-x-sm": "66%" } as CSSProperties,
  },
  {
    id: "east-mid",
    height: 90,
    flipped: true,
    swayDelay: 2.5,
    entranceDelay: 1.16,
    wrapperClass: "palm-anchor absolute bottom-0 hidden md:block",
    style: { "--palm-x": "80%", "--palm-x-sm": "82%" } as CSSProperties,
  },
  {
    id: "east-edge",
    height: 65,
    swayDelay: 0.4,
    entranceDelay: 1.22,
    wrapperClass: "absolute right-3 bottom-0 sm:right-6",
  },
];

/**
 * @example
 * <ComicHero />
 */
export function ComicHero() {
  return (
    <ComicSectionContainer
      id="hero"
      variant="night"
      mode="fit"
      noPaddingX
      noPaddingBottom
      ariaLabel={heroCopy.sectionAriaLabel}
    >
      <div className="relative z-30 mx-auto my-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-3 px-4 pt-2 pb-28 sm:gap-6 sm:pb-36 md:pb-28 lg:pb-40 xl:pb-44">
        <ComicHeroCaption text={heroCopy.captionOpen} startDelay={1.3} align="start" />

        <ComicHeroIdentity name={heroCopy.name} role={heroCopy.role} />

        <div className="flex flex-col items-center gap-4 select-none md:flex-row md:gap-8 lg:gap-10">
          <ComicAvatar
            realImageSrc="/Profile.jpeg"
            cartoonImageSrc="/Profile-cartoon.jpg"
            autoSwitchDelay={2600}
          />
          <ComicHeroSpeech />
        </div>

        <ComicHeroCaption text={heroCopy.captionClose} startDelay={2.9} align="end" />
      </div>

      <div className="relative z-10 w-full select-none">
        <div className="absolute bottom-12 left-0 right-0 z-10 flex w-full justify-center">
          <BuildingSkyline
            count="full"
            align="center"
            theme="default"
            className="shrink-0 origin-bottom"
          />
        </div>

        <div className="pointer-events-none absolute bottom-12 left-0 z-15 h-0 w-full overflow-visible">
          {HERO_PALM_TREES.map((palm) => (
            <div key={palm.id} className={palm.wrapperClass} style={palm.style}>
              <ComicPalmTree
                height={palm.height}
                flipped={palm.flipped}
                swayDelay={palm.swayDelay}
                entranceDelay={palm.entranceDelay}
              />
            </div>
          ))}
        </div>

        <ComicRoad className="relative z-20 w-full" showCurb height="h-12" />
      </div>
    </ComicSectionContainer>
  );
}
