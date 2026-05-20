import { ActionBadge } from "../components/ui/ActionBadge/ActionBadge";
import ComicCarrousel from "../components/ui/ComicCarrousel/ComicCarrousel";
import BuildingSkyline from "../components/ui/ComicSkyline/buildingSkyline";
import { motionPresets } from "../constants/motionPresets";

export default function ComicSkills() {
  return (
    <section
      className="comic-section flex-col px-4 comic-section-gradient"
      id="skills"
    >
      <div className="relative flex w-full max-w-7xl flex-col">
        <ActionBadge
          theme="batmanArmor"
          {...motionPresets.slideInRight}
          className="text-md mb-8 py-2 text-center sm:px-6 sm:text-2xl md:text-4xl lg:text-5xl"
        >
          CAPÍTULO 2: O ARSENAL TECNOLÓGICO
        </ActionBadge>

        <ComicCarrousel />
      </div>
      {/* <div className="">
        <BuildingSkyline
          position="relative"
          theme="noir"
          className="opacity-80"
        />
      </div> */}
    </section>
  );
}
