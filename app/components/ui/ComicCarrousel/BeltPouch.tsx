import { useState } from "react";
import { motion } from "framer-motion";
import { beltItems } from "@/app/constants/itemsCarrosel";
import { ActionBadge } from "../ActionBadge/ActionBadge";

export default function BeltPouch({ item }: { item: (typeof beltItems)[0] }) {
  const [flipped, setflipped] = useState(false);

  // Aumentado a altura para acomodar o conteúdo da Ficha Técnica sem cortar
  const CARD_DIMENSIONS = "w-[160px] h-[310px] sm:w-[180px] sm:h-[350px]";

  return (
    <div className="px-2 py-4">
      <motion.div
        className="relative cursor-pointer"
        onClick={() => setflipped(!flipped)}
        style={{ perspective: "1000px" }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className={`relative ${CARD_DIMENSIONS}`}
        >
          {/* FRONT SIDE */}
          <ActionBadge
            theme="yellow"
            noPadding
            className={`absolute inset-0 flex flex-col overflow-hidden bg-transparent ${CARD_DIMENSIONS}`}
            style={{
              backfaceVisibility: "hidden",
              background: "linear-gradient(160deg, #1c1c1c 0%, #2e2e2e 50%, #1a1a1a 100%)",
              boxShadow: "4px 4px 0 0 #000, inset 0 0 0 1px rgba(255,215,0,0.15)",
            }}
          >
            {/* Flap */}
            <div
              className="flex items-center justify-between border-b-4 border-black px-3 py-2"
              style={{
                background: "linear-gradient(90deg, #C8960C 0%, #FFD700 50%, #C8960C 100%)",
              }}
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
                className="mb-1 text-sm text-[#FFD700] sm:text-base"
                style={{
                  fontFamily: "'Bangers', cursive",
                  letterSpacing: "0.08em",
                }}
              >
                {item.gadget}
              </p>
              <p
                className="text-xs leading-tight text-gray-400"
                style={{ fontFamily: "'Comic Neue', cursive" }}
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
                className="text-base text-white sm:text-lg"
                style={{
                  fontFamily: "'Bangers', cursive",
                  letterSpacing: "0.06em",
                }}
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
            className={`absolute inset-0 flex flex-col overflow-hidden bg-transparent ${CARD_DIMENSIONS}`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "linear-gradient(160deg, #0d0d1a 0%, #1a1a2e 100%)",
              boxShadow: "4px 4px 0 0 #000",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-4 border-black px-3 py-2 bg-black text-[#FFD700]">
              <span className="text-[10px] sm:text-xs font-bold italic">🦇 FICHA TÉCNICA</span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-3 py-3 text-center sm:gap-3 sm:px-4 sm:py-4">
              <item.Icon size={48} color={item.iconColor} className="sm:size-[56px]" />
              <p 
                className="text-lg text-white sm:text-2xl"
                style={{ fontFamily: "'Bangers', cursive" }}
              >
                {item.tech}
              </p>

              <div className="border-2 border-[#FFD700]/50 bg-black/60 p-2 sm:p-3 w-full">
                <p className="text-[10px] sm:text-xs text-gray-300 " 
               >
                  "{item.tip}"
                </p>
              </div>

              {/* Mastery label */}
              {/* <div className="mt-auto">
                <p
                  className="mb-1 text-[10px] text-[#FFD700]/70 sm:text-xs"
                  style={{
                    fontFamily: "'Bangers', cursive",
                    letterSpacing: "0.05em",
                  }}
                >
                  NÍVEL DE DOMÍNIO
                </p>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-sm"
                      style={{ color: i < item.level ? "#FFD700" : "#333" }}
                    >
                      🦇
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
            
            {/* Bottom rivets back */}
            {/* <div className="flex justify-between px-3 pb-2">
              <div className="h-2 w-2 rounded-full border border-black bg-[#222] sm:h-3 sm:w-3" />
              <div className="h-2 w-2 rounded-full border border-black bg-[#222] sm:h-3 sm:w-3" />
            </div> */}
          </ActionBadge>
        </motion.div>
      </motion.div>
    </div>
  );
}
