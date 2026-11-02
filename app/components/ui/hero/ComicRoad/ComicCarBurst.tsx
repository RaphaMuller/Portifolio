interface ComicCarBurstProps {
  label: string;
}

const BURST_POINTS =
  "0,-25 10,-10 25,-15 15,0 25,15 5,10 -5,25 -15,10 -25,15 -15,0 -25,-15 -10,-10";

/**
 * Onomatopoeia shown beside a car while its parent `group` is hovered.
 * @example
 * <ComicCarBurst label="VRUUM!" />
 */
export function ComicCarBurst({ label }: ComicCarBurstProps) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 -translate-1/2 scale-0 opacity-0 motion-safe:transition-all group-hover:scale-100 group-hover:opacity-100"
    >
      <svg viewBox="-30 -30 60 60" className="h-10 w-10 overflow-visible">
        <polygon
          points={BURST_POINTS}
          className="fill-comic-yellow stroke-black"
          strokeWidth={3}
          strokeLinejoin="round"
        />
        <text
          y="2"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="13"
          className="fill-comic-red font-bangers"
        >
          {label}
        </text>
      </svg>
    </span>
  );
}
