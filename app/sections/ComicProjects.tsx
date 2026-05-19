import { ComicProjectsGrid } from "../components/ui/ComicProjects/comic-projects";

export default function ComicProjects() {
  return (
    <section
      id="projects"
      className="comic-section flex-col comic-projects-section px-4"
    >
      <ComicProjectsGrid />
    </section>
  );
}
