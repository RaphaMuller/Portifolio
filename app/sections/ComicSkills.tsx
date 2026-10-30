import { ComicSectionContainer } from "@/app/components/ui/global/ComicSection/ComicSectionContainer";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import ComicCarrousel from "@/app/components/ui/skills/ComicCarrousel/ComicCarrousel";
import { motionPresets } from "@/app/constants/motionPresets";

export default function ComicSkills() {
  return (
    <ComicSectionContainer
      id="skills"
      variant="skills"
      ariaLabel="Capítulo 2: O Arsenal"
      className="items-center justify-center"
    >
      <div className="relative z-10 flex w-full max-w-7xl flex-col">
        {/* ChapterBadge */}
        <ActionBadge
          theme="batmanArmor"
          {...motionPresets.slideInRight}
          className="mb-8 self-center py-2 text-center text-h2 sm:px-6 md:self-start lg:text-h1"
        >
          <h1>CAPÍTULO 2: O ARSENAL</h1>
        </ActionBadge>

        {/* Carousel */}
        <ComicCarrousel />
      </div>
    </ComicSectionContainer>
  );
}
