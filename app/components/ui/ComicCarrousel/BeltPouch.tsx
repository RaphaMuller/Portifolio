"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { beltItems } from "@/app/constants/itemsCarousel";
import { ActionBadge } from "../ActionBadge/ActionBadge";

export default function BeltPouch({
  item,
}: {
  item: (typeof beltItems)[number];
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex justify-center px-1 py-4 sm:px-2">
      <motion.div
        className="relative w-full max-w-[300px] cursor-pointer [perspective:1000px]"
        onClick={() => setFlipped(!flipped)}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative flex h-[380px] sm:h-[400px] lg:h-[420px] w-full flex-col [transform-style:preserve-3d]"
        >
          {/* PouchFront */}
          <ActionBadge
            theme="yellow"
            noPadding
            className="absolute inset-0 flex flex-col overflow-hidden bg-transparent bg-comic-gradient-pouch-front shadow-[4px_4px_0_0_#000] ring-1 ring-gold/15 [backface-visibility:hidden]"
          >
            {/* Flap */}
            <div className="flex items-center justify-between border-b-4 border-black bg-gradient-to-r from-bronze via-gold to-bronze px-3 py-2">
              <span className="text-sm font-bold">{item.category}</span>
              <span className="text-base leading-none">🦇</span>
            </div>

            {/* Body */}
            <div className="flex-1 px-4 py-4 text-center sm:py-5">
              <div className="mb-2 text-3xl sm:text-4xl">
                {item.gadgetEmoji}
              </div>
              <p className="mb-1 font-bangers text-sm tracking-bangers-wide text-gold sm:text-base">
                {item.gadget}
              </p>
              <p className="font-comic text-xs leading-tight text-gray-400">
                {item.gadgetDesc}
              </p>

              <div className="my-3 border-t border-dashed border-gold/40" />

              <div className="mb-2 flex justify-center">
                <item.Icon
                  size={36}
                  color={item.iconColor}
                  className="sm:size-10"
                />
              </div>
              <p className="font-bangers text-base tracking-bangers-tight text-white sm:text-lg">
                {item.tech}
              </p>

              <div className="mt-2 flex justify-center gap-1">
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
              <div className="h-2 w-2 rounded-full border border-neutral-500 bg-neutral-600 sm:h-3 sm:w-3" />
              <div className="h-2 w-2 rounded-full border border-neutral-500 bg-neutral-600 sm:h-3 sm:w-3" />
            </div>
          </ActionBadge>

          {/* PouchBack */}
          <ActionBadge
            theme="yellow"
            noPadding
            className="absolute inset-0 flex [transform:rotateY(180deg)] flex-col overflow-hidden bg-transparent bg-comic-gradient-pouch-back shadow-[4px_4px_0_0_#000] [backface-visibility:hidden]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-4 border-black bg-gradient-to-r from-white via-neutral-600 px-3 py-2">
              <span className="text-sm font-bold">🦇 FICHA TÉCNICA</span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-3 py-3 text-center sm:gap-3 sm:px-4 sm:py-4">
              <item.Icon
                size={48}
                color={item.iconColor}
                className="sm:size-[56px]"
              />
              <p className="font-bangers text-lg tracking-bangers-tight text-white sm:text-2xl">
                {item.tech}
              </p>

              <div className="w-full border-2 border-gold/50 bg-black/60 p-2 sm:p-3">
                <p className="text-xs text-gray-300">{item.tip}</p>
              </div>
            </div>

            {/* Rivets */}
            <div className="flex justify-between px-3 pb-2">
              <div className="h-2 w-2 rounded-full border border-black bg-neutral-900 sm:h-3 sm:w-3" />
              <div className="h-2 w-2 rounded-full border border-black bg-neutral-900 sm:h-3 sm:w-3" />
            </div>
          </ActionBadge>
        </motion.div>
      </motion.div>
    </div>
  );
}
