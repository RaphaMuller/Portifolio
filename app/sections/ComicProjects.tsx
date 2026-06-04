import { motionPresets } from "@/app/constants/motionPresets";
import { ActionBadge } from "@/app/components/ui/ActionBadge/ActionBadge";
import { ComicProjectsGrid } from "@/app/components/ui/ComicProjects/comic-projects";

export default function ComicProjects() {
  return (
    <section
      id="projects"
      className="comic-section flex-col bg-comic-skills"
    >
      <div className="flex flex-col max-w-7xl relative w-full px-4">
        {/* ChapterBadge */}
        <ActionBadge
          theme="blue"
          {...motionPresets.slideInRight}
          className="text-md py-2 text-center self-center sm:px-6 sm:text-2xl md:text-4xl md:self-start lg:text-5xl mb-8"
        >
          CAPÍTULO 3: AS MISSÕES
        </ActionBadge>

        {/* ProjectsGrid */}
        <ComicProjectsGrid/>
      </div>
  
    </section>
  );
}
