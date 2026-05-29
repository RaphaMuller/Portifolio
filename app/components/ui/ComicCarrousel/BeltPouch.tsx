import { useState } from "react";
import { motion } from "framer-motion";
import { beltItems } from "@/app/constants/itemsCarrosel";
import { ActionBadge } from "../ActionBadge/ActionBadge";

export default function BeltPouch({ item }: { item: (typeof beltItems)[0] }) {
  const [flipped, setflipped] = useState(false);

  return (
    <div className="px-1 sm:px-2 py-4 flex justify-center">
      <motion.div
        className="relative cursor-pointer w-full max-w-[300px] [perspective:1000px]"
        onClick={() => setflipped(!flipped)}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative aspect-[300/400] w-full flex flex-col [transform-style:preserve-3d]"
        >
          {/* FRONT SIDE */}
          <ActionBadge
            theme="yellow"
            noPadding
            className="absolute inset-0 flex flex-col overflow-hidden bg-transparent [backface-visibility:hidden] bg-comic-gradient-pouch-front shadow-[4px_4px_0_0_#000] ring-1 ring-[#FFD700]/15"
          >
            {/* Flap */}
            <div
              className="flex items-center justify-between border-b-4 border-black px-3 py-2 bg-gradient-to-r from-[#C8960C] via-[#FFD700] to-[#C8960C]"
            >
              <span className="text-sm font-bold">{item.category}</span>
              <span className="text-base leading-none">🦇</span>
            </div>

            {/* Body */}
            <div className="flex-1 px-4 py-4 text-center sm:py-5">
              <div className="mb-2 text-3xl sm:text-4xl">
                {item.gadgetEmoji}
              </div>
              <p
                className="mb-1 text-sm text-[#FFD700] sm:text-base font-bangers tracking-bangers-wide"
              >
                {item.gadget}
              </p>
              <p
                className="text-xs leading-tight text-gray-400 font-comic"
              >
                {item.gadgetDesc}
              </p>

              <div className="my-3 border-t border-dashed border-[#FFD700]/40" />

              <div className="mb-2 flex justify-center">
                <item.Icon
                  size={36}
                  color={item.iconColor}
                  className="sm:size-10"
                />
              </div>
              <p
                className="text-base text-white sm:text-lg font-bangers tracking-bangers-tight"
              >
                {item.tech}
              </p>

              <div className="mt-2 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-sm leading-none"
                    style={{ color: i < item.level ? "#FFD700" : "#444" }}
                  >
                    🦇
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom rivets */}
            <div className="flex justify-between px-3 pb-2">
              <div className="h-2 w-2 rounded-full border border-[#777] bg-[#555] sm:h-3 sm:w-3" />
              <div className="h-2 w-2 rounded-full border border-[#777] bg-[#555] sm:h-3 sm:w-3" />
            </div> 
          </ActionBadge>

          {/* BACK SIDE */}
          <ActionBadge
            theme="yellow"
            noPadding
            className="absolute inset-0 flex flex-col overflow-hidden bg-transparent [backface-visibility:hidden] [transform:rotateY(180deg)] bg-comic-gradient-pouch-back shadow-[4px_4px_0_0_#000]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-4 border-black px-3 py-2 bg-gradient-to-r from-[#ffffff] via-[#585656] ">
              <span className="text-sm font-bold">🦇 FICHA TÉCNICA</span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-3 py-3 text-center sm:gap-3 sm:px-4 sm:py-4">
              <item.Icon size={48} color={item.iconColor} className="sm:size-[56px]" />
              <p 
                className="text-lg text-white sm:text-2xl font-bangers tracking-bangers-tight"
              >
                {item.tech}
              </p>

              <div className="border-2 border-[#FFD700]/50 bg-black/60 p-2 sm:p-3 w-full">
                <p className="text-[10px] sm:text-xs text-gray-300 " 
               >
                 {item.tip}
                </p>
              </div>

            </div>
            
            {/* Bottom rivets back */}
            <div className="flex justify-between px-3 pb-2">
              <div className="h-2 w-2 rounded-full border border-black bg-[#222] sm:h-3 sm:w-3" />
              <div className="h-2 w-2 rounded-full border border-black bg-[#222] sm:h-3 sm:w-3" />
            </div>
          </ActionBadge>
        </motion.div>
      </motion.div>
    </div>
  );
}
