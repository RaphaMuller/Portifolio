import { ActionBadge } from "../components/ui/ActionBadge/ActionBadge";
import ComicCarrousel from "../components/ui/ComicCarrousel/ComicCarrousel";
import BuildingSkyline from "../components/ui/ComicSkyline/buildingSkyline";
import { motionPresets } from "../constants/motionPresets";
import Image from "next/image";

export default function ComicSkills() {
  return (
    <section
      className="comic-section flex-col comic-section-gradient px-4 sm:px-12"
      id="skills"
    >
      <div className="max-w-7xl w-full mx-auto mb-10 z-10 relative">
        <ActionBadge
          theme="dark"
          {...motionPresets.slideInRight}
          className="inline-block px-4 sm:px-6 py-2 text-2xl sm:text-3xl md:text-5xl mb-8 md:mb-12"
        >
          CAPÍTULO 2: O ARSENAL TECNOLÓGICO
        </ActionBadge>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center mb-8 opacity-90">
        <ComicCarrousel />
      </div>
    </section>
  );
}
