"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/app/constants/navLinks";
import { FilmFrame } from "@/app/components/ui/global/FilmFrame/FilmFrame";

const BLANK_FRAMES_LEFT = Array.from({ length: 8 });
const BLANK_FRAMES_RIGHT = Array.from({ length: 8 });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 select-none">
      {/* Moldura de Borda Simétrica 4px no Topo e Base */}
      <div className="relative border-y-4 border-black bg-black">
        {/* Trilho de Filme Desktop com Motion de Rolo Deslizando */}
        <div className="hidden w-full justify-center overflow-hidden bg-black lg:flex">
          <motion.div
            initial={{ x: -288 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 14,
              mass: 1.2,
            }}
            className="flex shrink-0 items-stretch"
          >
            {BLANK_FRAMES_LEFT.map((_, i) => (
              <FilmFrame key={`left-${i}`} />
            ))}

            <nav aria-label="Navegação Principal" className="flex shrink-0 items-stretch">
              {navLinks.map((link) => (
                <FilmFrame
                  key={link.label}
                  isButton
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </FilmFrame>
              ))}

              <FilmFrame isButton isSpecial onClick={() => handleNav("#contact")}>
                MISSION!
              </FilmFrame>
            </nav>

            {BLANK_FRAMES_RIGHT.map((_, i) => (
              <FilmFrame key={`right-${i}`} />
            ))}

            <div className="w-[8px] shrink-0 bg-black" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Visão Mobile com Fita Sólida */}
        <div className="flex h-14 w-full items-stretch justify-between bg-black px-2 lg:hidden">
          <div className="my-1.5 flex items-center border-2 border-black bg-white px-3 font-bangers text-sm tracking-bangers-wide text-black shadow-[inset_0_0_4px_rgba(0,0,0,0.15)]">
            FILME 35MM
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="my-1.5 flex h-10 w-10 items-center justify-center border-2 border-black bg-white font-bangers text-xl text-black shadow-[2px_2px_0_0_#000] transition-colors hover:bg-comic-yellow active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu Mobile: Rolinho Vertical */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b-4 border-black bg-black lg:hidden"
          >
            <div className="flex flex-col border-t-2 border-black">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="flex h-12 items-center justify-between border-b-4 border-black bg-white px-6 font-bangers text-xl tracking-bangers-wide text-black shadow-[inset_0_0_6px_rgba(0,0,0,0.1)] transition-colors hover:bg-comic-yellow hover:text-black active:bg-comic-red active:text-white"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-zinc-400">►</span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNav("#contact")}
                className="flex h-12 items-center justify-between border-b-2 border-black bg-comic-red px-6 font-bangers text-xl tracking-bangers-wide text-white transition-colors hover:bg-comic-yellow hover:text-black"
              >
                <span>MISSION!</span>
                <span className="font-mono text-xs text-white/80">★</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
