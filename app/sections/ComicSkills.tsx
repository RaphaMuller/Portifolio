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
          className="text-title md:text-h2 lg:text-h1 py-2 text-center self-center sm:px-6 mb-8"
        >
          <h1 >CAPÍTULO 2: O ARSENAL TECNOLÓGICO</h1>
        </ActionBadge>

        {/* Carousel */}
        <ComicCarrousel />
      </div>
    </section>
  );
}
