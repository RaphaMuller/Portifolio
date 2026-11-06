"use client";

import { motion } from "framer-motion";
import { ComicCarBurst } from "@/app/components/ui/hero/ComicRoad/ComicCarBurst";
import { heroCopy } from "@/app/constants/heroCopy";

export interface PixelCarProps {
  color: string;
  direction: "left" | "right";
  duration: number;
  delay: number;
  width?: number;
}

/**
 * @example
 * <PixelCar color="bg-comic-red" direction="right" duration={8} delay={1.25} width={32} />
 */
export function PixelCar({
  color,
  direction,
  duration,
  delay,
  width = 32,
}: PixelCarProps) {
  const isRight = direction === "right";
  const taillightClasses = "bg-comic-danger shadow-car-taillight";
  const headlightClasses = "bg-comic-yellow shadow-car-headlight";

  return (
    <motion.div
      initial={{ x: isRight ? "-15vw" : "115vw" }}
      animate={{ x: isRight ? "115vw" : "-15vw" }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="group pointer-events-auto absolute z-10 flex select-none flex-col items-center p-3"
    >
      <div
        className={`shadow-comic-xs relative flex h-3 items-center justify-between rounded-xs border-2 border-black ${color}`}
        style={{ width }}
      >
        <div className="absolute inset-y-0.5 left-1/2 w-2.5 -translate-x-1/2 rounded-xs border border-black/30 bg-black/50" />

        <div
          className={`relative z-10 h-1.5 w-1 rounded-l-xs ${
            isRight ? taillightClasses : headlightClasses
          }`}
        />

        <div
          className={`relative z-10 h-1.5 w-1 rounded-r-xs ${
            isRight ? headlightClasses : taillightClasses
          }`}
        />
      </div>

      <div className="flex w-full justify-between px-1" style={{ width }}>
        <div className="h-0.5 w-1.5 bg-black" />
        <div className="h-0.5 w-1.5 bg-black" />
      </div>

      <ComicCarBurst label={heroCopy.carBurst} />
    </motion.div>
  );
}
