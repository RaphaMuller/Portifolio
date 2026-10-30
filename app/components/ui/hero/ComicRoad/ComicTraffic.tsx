"use client";

import React from "react";
import { motion } from "framer-motion";

interface PixelCarProps {
  color: string;
  direction: "left" | "right";
  duration: number;
  delay: number;
  width?: number;
}

function PixelCar({
  color,
  direction,
  duration,
  delay,
  width = 32,
}: PixelCarProps) {
  const isRight = direction === "right";

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
      className="pointer-events-none absolute z-10 flex select-none flex-col items-center"
    >
      {/* Carroçaria em Pixel com Contorno Comic */}
      <div
        className={`relative flex h-3 items-center justify-between rounded-xs border-2 border-black ${color} shadow-[1px_1px_0_0_#000]`}
        style={{ width }}
      >
        {/* Para-brisa / Cabine Pixel */}
        <div className="absolute inset-y-0.5 left-1/2 w-2.5 -translate-x-1/2 rounded-xs border border-black/30 bg-black/50" />

        {/* Farol / Lanterna (Lado Esquerdo) */}
        <div
          className={`relative z-10 h-1.5 w-1 ${
            isRight
              ? "rounded-l-xs bg-red-600 shadow-[0_0_3px_#dc2626]"
              : "rounded-l-xs bg-comic-yellow shadow-[0_0_6px_#ffd700]"
          }`}
        />

        {/* Farol / Lanterna (Lado Direito) */}
        <div
          className={`relative z-10 h-1.5 w-1 ${
            isRight
              ? "rounded-r-xs bg-comic-yellow shadow-[0_0_6px_#ffd700]"
              : "rounded-r-xs bg-red-600 shadow-[0_0_3px_#dc2626]"
          }`}
        />
      </div>

      {/* Rodinhas Pixel pretas na base */}
      <div className="flex w-full justify-between px-1" style={{ width }}>
        <div className="h-0.5 w-1.5 bg-black" />
        <div className="h-0.5 w-1.5 bg-black" />
      </div>
    </motion.div>
  );
}

/**
 * @example
 * <ComicTraffic />
 */
export function ComicTraffic() {
  return (
    <div className="pointer-events-none absolute inset-0 grid h-full w-full grid-rows-2">
      {/* Faixa Superior: Sentido Leste -> Oeste (<-) com velocidade uniforme (início t=1.10s) */}
      <div className="relative flex h-full w-full items-center">
        <PixelCar color="bg-comic-blue" direction="left" duration={9} delay={1.1} width={34} />
        <PixelCar color="bg-comic-yellow" direction="left" duration={9} delay={5.6} width={28} />
      </div>

      {/* Faixa Inferior: Sentido Oeste -> Leste (->) com velocidade uniforme (início t=1.25s) */}
      <div className="relative flex h-full w-full items-center">
        <PixelCar color="bg-comic-red" direction="right" duration={8} delay={1.25} width={32} />
        <PixelCar color="bg-bat-gold" direction="right" duration={8} delay={5.25} width={36} />
      </div>
    </div>
  );
}
