import { motionPresets } from "../constants/motionPresets";
import { ActionBadge } from "../components/ui/ActionBadge/ActionBadge";
import { ComicProjectsGrid } from "../components/ui/ComicProjects/comic-projects";
import BuildingSkyline from "../components/ui/ComicSkyline/buildingSkyline";

export default function ComicProjects() {
  return (
    <section
      id="projects"
      className="comic-section flex-col bg-comic-skills"
    >
      <div className="flex flex-col max-w-7xl relative w-full px-4">
        <ActionBadge
          theme="blue"
          {...motionPresets.slideInRight}
          className="text-md py-2 text-center sm:px-6 sm:text-2xl md:text-4xl lg:text-5xl mb-8"
        >
          CAPÍTULO 3: AS MISSÕES
        </ActionBadge>

        <ComicProjectsGrid/>
      </div>
  
    </section>
  );
}
