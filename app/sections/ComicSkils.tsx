import { ActionBadge } from "../components/ui/ActionBadge/ActionBadge";
import ComicCarrousel from "../components/ui/ComicCarrousel/ComicCarrousel";
import BuildingSkyline from "../components/ui/ComicSkyline/buildingSkyline";
import { motionPresets } from "../constants/motionPresets";
import Image from "next/image";

export default function ComicSkills() {
  return (
    <section
      className="section-hero relative flex flex-col comic-section-gradient px-4 sm:px-12 pt-16 pb-0 overflow-hidden"
      id="skills"
    >
      <div className="relative z-10 flex w-full flex-col items-center mb-8">
        <ActionBadge
          theme="batmanArmor"
          {...motionPresets.slideInLeft}
          className="mb-8 px-6 py-2 text-2xl sm:text-3xl md:text-5xl"
        >
          CAPÍTULO 2: O ARSENAL TECNOLOGICO
        </ActionBadge>

        <ComicCarrousel />
      </div>
    </section>
  );
}
