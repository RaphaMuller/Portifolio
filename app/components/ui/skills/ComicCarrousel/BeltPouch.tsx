"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { BeltItem } from "@/app/constants/itemsCarousel";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";

interface BeltPouchProps {
  item: BeltItem;
  className?: string;
}

/**
 * @example
 * <BeltPouch item={beltItems[0]} />
 */
export default function BeltPouch({ item, className = "" }: BeltPouchProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flex justify-center px-1 py-2 sm:px-2 ${className}`}>
      <motion.div
        className="relative w-full max-w-xs cursor-pointer perspective-1000"
        onClick={() => setFlipped(!flipped)}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative flex h-96 w-full flex-col transform-style-3d"
        >
          {/* PouchFront */}
          <ActionBadge
            theme="yellow"
            noPadding
            className="absolute inset-0 flex flex-col overflow-hidden bg-transparent bg-comic-gradient-pouch-front shadow-comic-sm ring-1 ring-gold/15 backface-hidden"
          >
            {/* Flap */}
            <div className="flex items-center justify-between border-b-4 border-black bg-gradient-to-r from-bronze via-gold to-bronze px-3 py-2">
              <span className="text-stat-label text-black">{item.category}</span>
              <span className="text-base leading-none">🦇</span>
            </div>

            {/* Body */}
            <div className="flex-1 px-4 py-3 text-center sm:py-4">
              <div className="mb-1 text-3xl sm:text-4xl">
                {item.gadgetEmoji}
              </div>
              <p className="mb-1 font-bangers text-sm tracking-bangers-wide text-gold sm:text-base">
                {item.gadget}
              </p>
              <p className="text-caption text-gray-400 line-clamp-1 sm:line-clamp-2">
                {item.gadgetDesc}
              </p>

              <div className="my-2 border-t border-dashed border-gold/40" />

              <div className="mb-1 flex justify-center">
                <item.Icon
                  size={36}
                  color={item.iconColor}
                  className="sm:size-10"
                />
              </div>
              <p className="text-h4 text-white">
                {item.tech}
              </p>

              <div className="mt-1 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm leading-none ${i < item.level ? "text-gold" : "text-neutral-700"}`}
                  >
                    🦇
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom rivets */}
            <div className="flex justify-between px-3 pb-2">
              <div className="size-2 rounded-full border border-neutral-500 bg-neutral-600 sm:size-3" />
              <div className="size-2 rounded-full border border-neutral-500 bg-neutral-600 sm:size-3" />
            </div>
          </ActionBadge>

          {/* PouchBack */}
          <ActionBadge
            theme="yellow"
            noPadding
            className="absolute inset-0 flex rotate-y-180 flex-col overflow-hidden bg-transparent bg-comic-gradient-pouch-back shadow-comic-sm backface-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-4 border-black bg-gradient-to-r from-white via-neutral-600 px-3 py-2">
              <span className="text-stat-label text-black">🦇 FICHA TÉCNICA</span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-3 py-3 text-center sm:gap-3 sm:px-4 sm:py-4">
              <item.Icon
                size={44}
                color={item.iconColor}
                className="sm:size-12"
              />
              <p className="text-h3 text-white">
                {item.tech}
              </p>

              <div className="w-full border-2 border-gold/50 bg-black/60 p-2 sm:p-3">
                <p className="text-caption text-gray-300">{item.tip}</p>
              </div>
            </div>

            {/* Rivets */}
            <div className="flex justify-between px-3 pb-2">
              <div className="size-2 rounded-full border border-black bg-neutral-900 sm:size-3" />
              <div className="size-2 rounded-full border border-black bg-neutral-900 sm:size-3" />
            </div>
          </ActionBadge>
        </motion.div>
      </motion.div>
    </div>
  );
}
