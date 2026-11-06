"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { heroCopy } from "@/app/constants/heroCopy";

interface ComicAvatarProps {
  realImageSrc?: string;
  cartoonImageSrc?: string;
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
  autoSwitchDelay = 2600,
  className = "",
}: ComicAvatarProps) {
  const [isCartoon, setIsCartoon] = useState(false);

  // Automatically switches from real photo to cartoon illustration after initial reveal.
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
      <button
        type="button"
        onClick={() => setIsCartoon((prev) => !prev)}
        title={heroCopy.avatarToggleTitle}
        aria-label={heroCopy.avatarToggleAriaLabel}
        aria-pressed={isCartoon}
        className="group relative size-35 sm:size-40 lg:size-47.5 xl:size-57.5 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-comic-yellow rounded-full"
      >
        <motion.span
          key={isCartoon ? "badge-toon" : "badge-real"}
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: isCartoon ? 12 : -12 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className={`absolute -top-2 -right-2 z-30 border-2 border-black px-2 py-0.5 font-bangers text-xs lg:text-sm tracking-bangers-wide uppercase shadow-comic-sm ${
            isCartoon ? "bg-comic-red text-white" : "bg-comic-yellow text-black"
          }`}
        >
          {isCartoon ? heroCopy.avatarToonBadge : heroCopy.avatarRealBadge}
        </motion.span>

        <span className="shadow-avatar-lunar relative block h-full w-full overflow-hidden rounded-full border-4 sm:border-5 border-white ring-4 ring-black bg-white transition-transform duration-300 group-hover:scale-105 active:scale-95">
          <AnimatePresence mode="wait">
            {isCartoon ? (
              <motion.span
                key="cartoon-view"
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                className="relative block h-full w-full"
              >
                <Image
                  src={cartoonImageSrc}
                  alt={heroCopy.avatarCartoonAlt}
                  fill
                  preload
                  quality={100}
                  sizes="(max-width: 640px) 140px, (max-width: 1024px) 190px, 230px"
                  className="object-cover"
                />
              </motion.span>
            ) : (
              <motion.span
                key="real-view"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                className="relative block h-full w-full"
              >
                <Image
                  src={realImageSrc}
                  alt={heroCopy.avatarRealAlt}
                  fill
                  preload
                  quality={100}
                  sizes="(max-width: 640px) 140px, (max-width: 1024px) 190px, 230px"
                  className="object-cover"
                />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </button>
    </motion.div>
  );
}
