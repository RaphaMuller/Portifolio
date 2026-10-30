import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";

interface MangaPanelHeroContentProps {
  pageNumber: number;
  action: string;
  title: string;
  subtitle: string;
}

const formatPageNumber = (value: number) => String(value).padStart(2, "0");

/**
 * @example
 * <MangaPanelHeroContent pageNumber={1} action="KA-CHING!" title="Super Shop" subtitle="E-commerce Heroico" />
 */
export function MangaPanelHeroContent({
  pageNumber,
  action,
  title,
  subtitle,
}: MangaPanelHeroContentProps) {
  return (
    <div className="manga-panel-hero pointer-events-none flex flex-col justify-between p-2 sm:p-3 md:p-4">
      {/* Top Bar: Number badge and Comic Action onomatopoeia */}
      <div className="flex items-start justify-between">
        <span className="pointer-events-auto border sm:border-2 border-black bg-comic-green px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-stat-label text-white shadow-comic-sm">
          #{formatPageNumber(pageNumber)}
        </span>

        <ActionBadge
          theme="red"
          className="pointer-events-auto px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-stat-label shadow-comic-sm"
        >
          {action}
        </ActionBadge>
      </div>

      {/* Bottom Bar: Project Title Banner */}
      <div className="flex items-end justify-start">
        <div className="pointer-events-auto border-2 border-black bg-white px-2 py-1 sm:px-3 sm:py-1.5 shadow-comic-sm">
          <h3 className="text-sm sm:text-h3 lg:text-h2 text-black leading-none font-bangers tracking-tight">
            {title}
          </h3>
          <p className="text-[9px] sm:text-caption font-bold uppercase text-black/75">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
