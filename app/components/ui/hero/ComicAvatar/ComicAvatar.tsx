"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ComicAvatarProps {
  realImageSrc?: string;
  cartoonImageSrc?: string;
  size?: number;
  autoSwitchDelay?: number;
  className?: string;
}

/**
 * @example
 * <ComicAvatar realImageSrc="/Profile.jpeg" cartoonImageSrc="/Profile-cartoon.jpg" />
 */
export function ComicAvatar({
  realImageSrc = "/Profile.jpeg",
  cartoonImageSrc = "/Profile-cartoon.jpg",
  size,
  autoSwitchDelay = 2600,
  className = "",
}: ComicAvatarProps) {
  const [isCartoon, setIsCartoon] = useState(false);

  // Troca automática da foto real para a cartonizada ao carregar a página
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCartoon(true);
    }, autoSwitchDelay);
    return () => clearTimeout(timer);
  }, [autoSwitchDelay]);

  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.25, type: "spring", stiffness: 110, damping: 13, mass: 0.9 }}
      className={`flex flex-col items-center justify-center ${className}`}
    >
      {/* Moldura Circular com Efeito de Troca Responsiva (140px mobile -> 160px tablet -> 190px 1024px -> 230px desktop) */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsCartoon((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsCartoon((prev) => !prev);
          }
        }}
        title="Clique para alternar entre versão real e cartoon"
        className={`group relative cursor-pointer select-none ${
          size
            ? ""
            : "h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] lg:h-[190px] lg:w-[190px] xl:h-[230px] xl:w-[230px]"
        }`}
        style={size ? { width: size, height: size } : undefined}
      >
        {/* Selo indicador Pop-Art Responsivo */}
        <motion.div
          key={isCartoon ? "badge-toon" : "badge-real"}
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: isCartoon ? 12 : -12 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className={`absolute -top-2 -right-2 z-30 border-2 border-black px-2 py-0.5 font-bangers text-xs sm:text-xs lg:text-sm tracking-bangers-wide text-white uppercase shadow-[2px_2px_0_0_#000] ${
            isCartoon ? "bg-comic-red" : "bg-comic-yellow text-black"
          }`}
        >
          {isCartoon ? "TOON!" : "REAL!"}
        </motion.div>

        {/* Container da Imagem Circular com Borda de Quadrinho */}
        <div className="relative h-full w-full overflow-hidden rounded-full border-3 sm:border-4 border-black bg-white shadow-[5px_5px_0_0_#000] sm:shadow-[7px_7px_0_0_#000] transition-transform duration-300 group-hover:scale-105 active:scale-95">
          <AnimatePresence mode="wait">
            {isCartoon ? (
              <motion.div
                key="cartoon-view"
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                className="relative h-full w-full"
              >
                <Image
                  src={cartoonImageSrc}
                  alt="Raphael Muller em versão Cartoon estilo anos 30"
                  fill
                  priority
                  sizes="(max-width: 640px) 140px, (max-width: 1024px) 190px, 230px"
                  className="object-cover"
                />
              </motion.div>
            ) : (
              <motion.div
                key="real-view"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                className="relative h-full w-full"
              >
                <Image
                  src={realImageSrc}
                  alt="Foto de perfil real de Raphael Muller"
                  fill
                  priority
                  sizes="(max-width: 640px) 140px, (max-width: 1024px) 190px, 230px"
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
