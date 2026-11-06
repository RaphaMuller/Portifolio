"use client";

import { PixelCar } from "@/app/components/ui/hero/ComicRoad/PixelCar";

/**
 * @example
 * <ComicTraffic />
 */
export function ComicTraffic() {
  return (
    <div className="pointer-events-none absolute inset-0 grid h-full w-full grid-rows-2">
      <div className="relative flex h-full w-full items-center">
        <PixelCar color="bg-comic-blue" direction="left" duration={9} delay={1.1} width={34} />
        <PixelCar color="bg-comic-yellow" direction="left" duration={9} delay={5.6} width={28} />
      </div>

      <div className="relative flex h-full w-full items-center">
        <PixelCar color="bg-comic-red" direction="right" duration={8} delay={1.25} width={32} />
        <PixelCar color="bg-bat-gold" direction="right" duration={8} delay={5.25} width={36} />
      </div>
    </div>
  );
}
