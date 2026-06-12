import { ActionBadge } from "@/app/components/ui/ActionBadge/ActionBadge";
import ComicCarrousel from "@/app/components/ui/ComicCarrousel/ComicCarrousel";
import { motionPresets } from "@/app/constants/motionPresets";

export default function ComicSkills() {
  return (
    <section
      className="comic-section flex-col bg-comic-section-gradient px-4"
      id="skills"
    >
      <div className="relative z-10 flex w-full max-w-7xl flex-col">
        {/* ChapterBadge */}
        <ActionBadge
          theme="batmanArmor"
          {...motionPresets.slideInRight}
          className="mb-8 self-center py-2 text-center text-title sm:px-6 md:text-h2 lg:text-h1"
        >
          <h1>CAPÍTULO 2: O ARSENAL TECNOLÓGICO</h1>
        </ActionBadge>

        {/* Carousel */}
        <ComicCarrousel />
      </div>
    </section>
  );
}
