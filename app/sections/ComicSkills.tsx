"use client";

import { motion } from "framer-motion";
import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ComicSectionBody } from "@/app/components/ui/global/ComicSection/ComicSectionBody";
import { ComicSectionHeader } from "@/app/components/ui/global/ComicSection/ComicSectionHeader";
import ComicCarrousel from "@/app/components/ui/skills/ComicCarrousel/ComicCarrousel";

export default function ComicSkills() {
  return (
    <ComicSectionContainer
      id="skills"
      variant="skills"
      mode="fit"
      ariaLabel="Capítulo 2: O Arsenal"
    >
      <ComicSectionBody>
        <ComicSectionHeader
          chapter="CAPÍTULO 2"
          title="O ARSENAL"
          theme="skills"
        />

        <motion.main
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex flex-1 min-h-0 w-full max-w-6xl flex-col items-center justify-center"
        >
          <ComicCarrousel />
        </motion.main>
      </ComicSectionBody>
    </ComicSectionContainer>
  );
}
