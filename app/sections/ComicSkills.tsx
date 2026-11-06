"use client";

import { motion } from "framer-motion";
import { ComicSectionBody } from "@/app/components/ui/global/ComicSection/ComicSectionBody";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicSectionHeader } from "@/app/components/ui/global/ComicSection/ComicSectionHeader";
import { ComicCarrousel } from "@/app/components/ui/skills/ComicCarrousel/ComicCarrousel";
import { skillsCopy } from "@/app/constants/itemsCarousel";
import { motionPresets } from "@/app/constants/motionPresets";

/**
 * @example
 * <ComicSkills />
 */
export function ComicSkills() {
  return (
    <ComicSectionContainer
      id="skills"
      variant="skills"
      mode="fit"
      ariaLabel={skillsCopy.sectionAriaLabel}
    >
      <ComicSectionBody>
        <ComicSectionHeader
          chapter={skillsCopy.chapter}
          title={skillsCopy.title}
          theme="skills"
        />

        <motion.div
          {...motionPresets.blockAssemble}
          className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col items-center justify-center"
        >
          <ComicCarrousel />
        </motion.div>
      </ComicSectionBody>
    </ComicSectionContainer>
  );
}
