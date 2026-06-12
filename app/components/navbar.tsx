"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/app/constants/navLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-comic-dots fixed top-0 right-0 left-0 z-50 border-b-8 border-black bg-comic-bege">
      <div className="flex h-16 items-center justify-between px-6 lg:justify-around">
        {/* Logo */}
        <div
          className="cursor-pointer font-bangers text-2xl tracking-bangers-wide text-black uppercase md:text-3xl"
          onClick={() =>
            document
              .querySelector("#hero")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>{`<Hero.Dev>`}</span>
        </div>

        {/* DesktopNav */}
        <div className="hidden items-center space-x-4 lg:flex">
          {navLinks.map((link) => (
            <DesktopLink key={link.label} link={link} />
          ))}
        </div>

        {/* MobileButton */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="z-50 border-4 border-black bg-white p-2 shadow-[3px_3px_0_0_#000] active:translate-x-1 active:shadow-none lg:hidden"
        >
          <div className="space-y-1">
            <span
              className={`block h-1 w-6 bg-black transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-1 w-6 bg-black ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-1 w-6 bg-black transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* MobileNav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col gap-4 px-6 pt-2 pb-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <MobileLink
                key={link.label}
                link={link}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function DesktopLink({ link }: { link: (typeof navLinks)[number] }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex justify-center text-black">
      <a
        href={link.href}
        onClick={handleClick}
        className="relative z-10 border-2 border-black bg-white px-4 py-2 font-bangers text-xl tracking-bangers-wide tracking-wider shadow-[2px_2px_0_0_#000] transition-all hover:bg-comic-red hover:text-white"
      >
        {link.label}
      </a>
    </div>
  );
}

function MobileLink({
  link,
  onClick,
}: {
  link: (typeof navLinks)[number];
  onClick: () => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={link.href}
      onClick={handleClick}
      className="block w-full border-4 border-black bg-white px-4 py-3 text-center font-bangers text-xl tracking-bangers-wide tracking-wider text-black uppercase shadow-[4px_4px_0_0_#000] transition-all hover:bg-comic-red hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none"
    >
      {link.label}
    </a>
  );
}
