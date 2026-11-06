"use client";

import { type KeyboardEvent, useState } from "react";
import { motion } from "framer-motion";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { skillsCopy } from "@/app/constants/itemsCarousel";
import type { BeltItem } from "@/app/types/skill";

interface BeltPouchProps {
  item: BeltItem;
  className?: string;
}

/**
 * @example
 * <BeltPouch item={beltItems[0]} />
 */
export function BeltPouch({ item, className = "" }: BeltPouchProps) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped((prev) => !prev);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div className={`flex justify-center px-1 py-2 sm:px-2 ${className}`}>
      <motion.div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${item.tech} — ${item.gadget}`}
        className="relative w-full max-w-xs cursor-pointer perspective-1000 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        onClick={toggleFlip}
        onKeyDown={handleKeyDown}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative flex h-96 w-full flex-col transform-style-3d"
        >
          {/* Pouch front face */}
          <ActionBadge
            theme="yellow"
            noPadding
            className="absolute inset-0 flex flex-col overflow-hidden bg-transparent bg-comic-gradient-pouch-front shadow-comic-sm ring-1 ring-gold/15 backface-hidden"
          >
            <div className="flex items-center justify-between border-b-4 border-black bg-linear-to-r from-bronze via-gold to-bronze px-3 py-2">
              <span className="text-stat-label text-black">{item.category}</span>
              <span className="text-base leading-none" aria-hidden="true">
                {skillsCopy.buckleSymbol}
              </span>
            </div>

            <div className="flex-1 px-4 py-3 text-center sm:py-4">
              <div className="mb-1 text-3xl sm:text-4xl" aria-hidden="true">
                {item.gadgetEmoji}
              </div>
              <p className="mb-1 font-bangers text-sm tracking-bangers-wide text-gold sm:text-base">
                {item.gadget}
              </p>
              <p className="line-clamp-1 text-caption text-pouch-muted sm:line-clamp-2">
                {item.gadgetDesc}
              </p>

              <div className="my-2 border-t border-dashed border-gold/40" />

              <div className="mb-1 flex justify-center">
                <item.Icon
                  size={36}
                  color={item.iconColor}
                  className="sm:size-10"
                  aria-hidden="true"
                />
              </div>
              <p className="text-h4 text-white">{item.tech}</p>

              <div className="mt-1 flex justify-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-sm leading-none ${
                      index < item.level ? "text-gold" : "text-pouch-inactive"
                    }`}
                  >
                    {skillsCopy.levelSymbol}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between px-3 pb-2" aria-hidden="true">
              <div className="size-2 rounded-full border border-pouch-rivet-border bg-pouch-rivet-bg sm:size-3" />
              <div className="size-2 rounded-full border border-pouch-rivet-border bg-pouch-rivet-bg sm:size-3" />
            </div>
          </ActionBadge>

          {/* Pouch back face */}
          <ActionBadge
            theme="yellow"
            noPadding
            className="absolute inset-0 flex rotate-y-180 flex-col overflow-hidden bg-transparent bg-comic-gradient-pouch-back shadow-comic-sm backface-hidden"
          >
            <div className="flex items-center justify-between border-b-4 border-black bg-linear-to-r from-white via-pouch-rivet-bg px-3 py-2">
              <span className="text-stat-label text-black">
                {skillsCopy.specSheetHeading}
              </span>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-3 py-3 text-center sm:gap-3 sm:px-4 sm:py-4">
              <item.Icon
                size={44}
                color={item.iconColor}
                className="sm:size-12"
                aria-hidden="true"
              />
              <p className="text-h3 text-white">{item.tech}</p>

              <div className="w-full border-2 border-gold/50 bg-black/60 p-2 sm:p-3">
                <p className="text-caption text-pouch-tip">{item.tip}</p>
              </div>
            </div>

            <div className="flex justify-between px-3 pb-2" aria-hidden="true">
              <div className="size-2 rounded-full border border-black bg-pouch-rivet-dark sm:size-3" />
              <div className="size-2 rounded-full border border-black bg-pouch-rivet-dark sm:size-3" />
            </div>
          </ActionBadge>
        </motion.div>
      </motion.div>
    </div>
  );
}
