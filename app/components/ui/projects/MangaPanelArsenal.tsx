import { projectsCopy } from "@/app/constants/projectsData";

interface MangaPanelArsenalProps {
  tags: readonly string[];
}

/**
 * @example
 * <MangaPanelArsenal tags={["React", "Node.js", "PostgreSQL"]} />
 */
export function MangaPanelArsenal({ tags }: MangaPanelArsenalProps) {
  return (
    <div className="manga-panel-arsenal flex flex-col items-center justify-between gap-1 sm:gap-2 p-1.5 sm:p-2.5 md:p-3.5 pb-2 sm:pb-3 md:pb-4 text-center">
      <span className="border sm:border-2 border-black bg-comic-yellow px-1.5 sm:px-2.5 py-0.5 text-[9px] sm:text-[11px] md:text-stat-label text-black shadow-comic-sm leading-tight">
        {projectsCopy.arsenalHeading}
      </span>

      <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5">
        {tags.map((tag) => (
          <li
            key={tag}
            className="border sm:border-2 border-black bg-comic-red px-1 sm:px-2 py-0.5 text-[8px] sm:text-[10px] md:text-stat-label text-white shadow-comic-sm leading-none"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
