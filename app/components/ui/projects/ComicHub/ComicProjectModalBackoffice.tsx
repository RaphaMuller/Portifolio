import { projectsCopy } from "@/app/constants/projectsData";
import type { ProjectDecision } from "@/app/types/project";

interface ComicProjectModalBackofficeProps {
  decisions: readonly ProjectDecision[];
}

/**
 * @example
 * <ComicProjectModalBackoffice decisions={project.technicalDecisions} />
 */
export function ComicProjectModalBackoffice({
  decisions,
}: ComicProjectModalBackofficeProps) {
  return (
    <div>
      <span className="mb-2.5 block text-center font-bangers text-stat-label text-comic-subtle uppercase">
        {projectsCopy.modalBehindScenesLabel}
      </span>
      <ul
        aria-label={projectsCopy.decisionsListAriaLabel}
        className="grid grid-cols-1 divide-y-3 divide-black border-3 border-black bg-white shadow-comic-sm sm:grid-cols-2 sm:divide-y-0"
      >
        {decisions.map((item, idx) => (
          <li
            key={item.label}
            className={`flex flex-col items-center justify-start gap-1.5 p-3.5 text-center ${
              idx % 2 === 0 ? "sm:border-r-3 sm:border-black" : ""
            } ${idx < 2 ? "sm:border-b-3 sm:border-black" : ""}`}
          >
            <span className="comic-stamp-pill bg-comic-yellow text-black">
              {item.label}
            </span>
            <p className="text-pillar-detail text-comic-ink-soft">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
