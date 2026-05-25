import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/app/constants/navLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b-8 border-black bg-comic-yellow backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between lg:justify-around px-6">

      {/* Title - Sempre visível à esquerda */}
        <div 
          className="font-bangers tracking-bangers-wide text-2xl md:text-3xl tracking-widest uppercase text-black cursor-pointer"
          onClick={() => document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span>{`<Hero.Dev>`}</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          {navLinks.map((link) => (
          <DesktopLink key={link.label} link={link} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden z-50 p-2 border-4 border-black bg-white shadow-[3px_3px_0_0_#000] active:shadow-none active:translate-x-1"
        >
          <div className="space-y-1">
            <span className={`block h-1 w-6 bg-black transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-1 w-6 bg-black ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-1 w-6 bg-black transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden flex flex-col px-6 pb-6 pt-2 gap-4"
          >
            {navLinks.map((link) => (
              <MobileLink key={link.label} link={link} onClick={() => setIsOpen(false)} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Link (Desktop)
function DesktopLink({ link }: { link: typeof navLinks[0] }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex justify-center text-black">
      <a 
        href={link.href} 
        onClick={handleClick} 
        className="font-bangers tracking-bangers-wide relative z-10 border-2 border-black bg-white px-4 py-2 text-xl tracking-wider shadow-[2px_2px_0_0_#000] hover:bg-comic-red hover:text-white transition-all"
      >
        {link.label}
      </a>
    </div>
  );
}

// Link Simples para o Menu Dropdown (Mobile)
function MobileLink({ link, onClick }: { link: typeof navLinks[0]; onClick: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={link.href}
      onClick={handleClick}
      className="font-bangers tracking-bangers-wide block w-full text-center px-4 border-4 border-black bg-white py-3 text-xl tracking-wider text-black shadow-[4px_4px_0_0_#000] uppercase hover:bg-comic-red hover:text-white transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
    >
      {link.label}
    </a>
  );
}
