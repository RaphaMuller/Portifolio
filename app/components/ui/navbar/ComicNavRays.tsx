import { generateNavRays } from "@/app/lib/generateNavRays";

interface ComicNavRaysProps {
  seed: number;
}

/**
 * @example
 * <ComicNavRays seed={2} />
 */
export function ComicNavRays({ seed }: ComicNavRaysProps) {
  const rays = generateNavRays(seed);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 -z-10 h-full w-full fill-black opacity-25 motion-safe:transition-all group-hover:scale-110 group-hover:opacity-85 group-focus-visible:opacity-85"
    >
      {rays.map((points) => (
        <polygon key={points} points={points} />
      ))}
    </svg>
  );
}
