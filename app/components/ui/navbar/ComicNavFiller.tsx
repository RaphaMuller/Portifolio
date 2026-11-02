import { ComicNavPanel } from "@/app/components/ui/navbar/ComicNavPanel";

// Enough cells for ultra-wide screens; extra cells wrap to a clipped row.
const FILLER_CELLS = Array.from({ length: 16 }, (_, index) => index);

/**
 * Fills the free horizontal space with whole blank panels only.
 * @example
 * <ComicNavFiller />
 */
export function ComicNavFiller() {
  return (
    <div aria-hidden="true" className="hq-filler-grid pointer-events-none h-full min-w-0 flex-1 select-none">
      {FILLER_CELLS.map((cell) => (
        <ComicNavPanel key={cell} kind="blank" className="h-full pointer-events-none" />
      ))}
    </div>
  );
}
