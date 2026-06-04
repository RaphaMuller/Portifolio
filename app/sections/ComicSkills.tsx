import { ActionBadge } from "@/app/components/ui/ActionBadge/ActionBadge";
import ComicCarrousel from "@/app/components/ui/ComicCarrousel/ComicCarrousel";
import { motionPresets } from "@/app/constants/motionPresets";

export default function ComicSkills() {
  return (
    <section
      className="comic-section flex-col bg-comic-section-gradient px-4 "
      id="skills"
    >
      <div className="relative z-10 flex w-full max-w-7xl flex-col">
        {/* ChapterBadge */}
        <ActionBadge
          theme="batmanArmor"
          {...motionPresets.slideInRight}
          className="text-md mb-8 py-2 text-center self-center sm:px-6 sm:text-2xl md:text-4xl md:self-start lg:text-5xl"
        >
          CAPÍTULO 2: O ARSENAL TECNOLÓGICO
        </ActionBadge>

        {/* Carousel */}
        <ComicCarrousel />
      </div>
    </section>
  );
}
