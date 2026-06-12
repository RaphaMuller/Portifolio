import { motionPresets } from "@/app/constants/motionPresets";
import { ActionBadge } from "@/app/components/ui/ActionBadge/ActionBadge";
import { ComicProjectsGrid } from "@/app/components/ui/ComicProjects/comic-projects";

export default function ComicProjects() {
  return (
    <section id="projects" className="comic-section flex-col bg-comic-skills">
      <div className="relative flex w-full max-w-7xl flex-col px-4">
        {/* ChapterBadge */}
        <ActionBadge
          theme="blue"
          {...motionPresets.slideInRight}
          className="mb-8 self-center py-2 text-center text-title sm:px-6 md:self-start md:text-h2 lg:text-h1"
        >
          <h1>CAPÍTULO 3: AS MISSÕES</h1>
        </ActionBadge>

        {/* ProjectsGrid */}
        <ComicProjectsGrid />
      </div>
    </section>
  );
}
