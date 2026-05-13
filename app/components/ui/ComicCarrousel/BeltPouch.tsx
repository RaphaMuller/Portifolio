import { useState } from "react";
import { motion } from "framer-motion";
import { beltItems } from "@/app/constants/itemsCarrosel";
import { ActionBadge } from "../ActionBadge/ActionBadge";

export default function BeltPouch({ item }: { item: (typeof beltItems)[0] }) {
  const [flipped, setflipped] = useState(false);

  return (
    <div className="px-2 py-4">
      <motion.div
        className="relative cursor-pointer"
        onClick={() => setflipped(!flipped)}
        style={{ perspective: "800px" }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-[160px] h-[280px] sm:w-[180px] sm:h-[320px]"
        >
          {/* FRONT */}
          <ActionBadge
            theme="yellow"
            noPadding
            style={{
              backfaceVisibility: "hidden",
              background:
                "linear-gradient(160deg, #1c1c1c 0%, #2e2e2e 50%, #1a1a1a 100%)",
              boxShadow:
                "4px 4px 0 0 #000, inset 0 0 0 1px rgba(255,215,0,0.15)",
            }}
          >
            {/* Flap */}
            <div
              className="flex items-center justify-between border-b-4 border-black px-3 py-2"
              style={{
                background:
                  "linear-gradient(90deg, #C8960C 0%, #FFD700 50%, #C8960C 100%)",
              }}
            >
              <span>{item.category}</span>
              <span className="text-base leading-none">🦇</span>
            </div>

            {/* Body */}
            <div className="px-4 py-4 text-center sm:py-5">
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
              <div className="h-3 w-3 rounded-full border border-[#777] bg-[#555]" />
              <div className="h-3 w-3 rounded-full border border-[#777] bg-[#555]" />
            </div> 
          </ActionBadge>

          {/* BACK */}
          <ActionBadge
            theme="yellow"
            noPadding
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              inset: 0,
              background: "linear-gradient(160deg, #0d0d1a 0%, #1a1a2e 100%)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-4 border-black px-3 py-2">
              <span>🦇 FICHA TÉCNICA</span>
            </div>

            {/* Body */}
            <div className="flex flex-col items-center gap-3 px-4 py-5 text-center">
              <item.Icon size={56} color={item.iconColor} />
              <p className="text-2xl">{item.tech}</p>

              <div className="border-2 border-[#FFD700]/50 bg-black/40 p-3">
                <p className="text-xs leading-relaxed text-gray-300 italic">
                  {item.tip}
                </p>
              </div>

              {/* Mastery label */}
              <div>
                <p
                  className="mb-1 text-xs text-[#FFD700]/70"
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
              </div>
            </div>
          </ActionBadge>
        </motion.div>
      </motion.div>
    </div>
  );
}
