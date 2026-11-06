"use client";

import { motion } from "framer-motion";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { BeltPouch } from "@/app/components/ui/skills/ComicCarrousel/BeltPouch";
import { NextArrow } from "@/app/components/ui/skills/ComicCarrousel/NextArrow";
import { PrevArrow } from "@/app/components/ui/skills/ComicCarrousel/PrevArrow";
import { beltItems, skillsCopy } from "@/app/constants/itemsCarousel";
import { motionPresets } from "@/app/constants/motionPresets";
import { useComicCarousel } from "@/app/sections/hooks/useComicCarousel";

/**
 * @example
 * <ComicCarrousel />
 */
export function ComicCarrousel() {
  const {
    emblaRef,
    selectedIndex,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
  } = useComicCarousel({ autoplayDelay: 3000, loop: true });

  return (
    <motion.div
      className="relative flex h-full min-h-0 w-full max-w-7xl flex-1 flex-col"
      {...motionPresets.slideInLeft}
    >
      <PrevArrow onClick={scrollPrev} />
      <NextArrow onClick={scrollNext} />

      <ActionBadge
        className="flex h-full min-h-0 w-full flex-1 flex-col justify-between overflow-hidden rounded-4xl"
        theme="batmanArmor"
        noPadding
      >
        {/* Belt masthead */}
        <div className="flex shrink-0 justify-center py-2 sm:py-3.5">
          <ActionBadge
            theme="yellow"
            className="mb-2 flex justify-center text-title md:text-h4 lg:text-h3"
          >
            <h3>{skillsCopy.beltHeading}</h3>
          </ActionBadge>
        </div>

        {/* Belt structure */}
        <div className="relative flex min-h-0 flex-1 flex-col justify-between">
          <div className="comic-belt-strap shrink-0 shadow-sm">
            <div className="relative top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-comic-stitching" />
          </div>

          <div className="absolute top-3 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <ActionBadge
              theme="yellow"
              className="bg-linear-to-br from-gold to-bronze px-4 font-bangers text-xl tracking-bangers-tight sm:text-2xl"
            >
              <span aria-hidden="true">{skillsCopy.buckleSymbol}</span>
            </ActionBadge>
          </div>

          {/* Pouches carousel */}
          <div className="relative flex min-h-0 flex-1 flex-col justify-center border-x-4 border-black bg-comic-section-gradient px-2 py-1.5 sm:px-4 lg:px-14 xl:px-16">
            <div
              className="flex min-h-0 w-full flex-1 items-center overflow-hidden"
              ref={emblaRef}
            >
              <div className="flex w-full touch-pan-y items-center">
                {beltItems.map((item) => (
                  <div
                    key={item.tech}
                    className="min-w-0 flex-none basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <BeltPouch item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots */}
            <div className="mt-2 mb-1 flex shrink-0 justify-center gap-2 sm:mt-3">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`size-2 cursor-pointer rounded-full border border-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:size-3 ${
                    index === selectedIndex
                      ? "bg-gold"
                      : "bg-gold/40 hover:bg-gold/80"
                  }`}
                  aria-label={`${skillsCopy.goToSlidePrefix} ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Lower belt strap */}
          <div className="comic-belt-strap shadow-sm">
            <div className="relative top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-comic-stitching" />
          </div>
        </div>

        {/* Belt caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex shrink-0 items-center justify-center py-1 sm:py-2"
        >
          <span className="px-4 text-center text-stat-label text-gold/60">
            &ldquo;{skillsCopy.quote}&rdquo;
          </span>
        </motion.div>
      </ActionBadge>
    </motion.div>
  );
}
