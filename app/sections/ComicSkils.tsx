import { ActionBadge } from "../components/ui/ActionBadge/ActionBadge";
import ComicCarrousel from "../components/ui/ComicCarrousel/ComicCarrousel";
import { motionPresets } from "../constants/motionPresets";
import Image from "next/image";

export default function ComicSkills() {
  return (
    <section
      className="section-hero flex flex-col items-center comic-section-gradient px-4 sm:px-12 py-16"
      id="skills"
    >
      <ActionBadge
        theme="yellow"
        {...motionPresets.slideInLeft}
        className="mb-8 px-6 py-2 text-2xl sm:text-3xl md:text-5xl"
      >
        CAPÍTULO 2: O ARSENAL TECNOLÓGICO
      </ActionBadge>

      <ComicCarrousel />
    </section>
  );
}
