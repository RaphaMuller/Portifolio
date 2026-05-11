import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "INÍCIO", href: "#hero" },
  { label: "SOBRE", href: "#about" },
  { label: "HABILIDADES", href: "#skills" },
  { label: "PROJETOS", href: "#projects" },
  { label: "CONTATO", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b-8 border-black bg-comic-yellow backdrop-blur-sm">
      <div className="flex h-16 items-center lg:justify-around sm:justify-between px-6 ">

      {/* Title - Sempre visível à esquerda */}
        <div className="text-2xl font-black tracking-tighter uppercase text-black">
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
          <motion.div className="lg:hidden flex flex-col">
            {navLinks.map((link) => (
              <MobileLink key={link.label} link={link} onClick={() => setIsOpen(false)} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Link com animação da Aranha (Desktop)
function DesktopLink({ link }: { link: typeof navLinks[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className="relative flex justify-center text-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 40, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className="absolute z-0"
          >
            <div className="flex flex-col items-center">
              <div className="h-8 w-[2px] bg-white " />
              <Image src="/Aranha.png" alt="Aranha" width={30} height={30} className="rotate-180" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Link href={link.href} className="relative z-10 border-2 border-black bg-white px-4 py-2 shadow-[2px_2px_0_0_#000] hover:bg-comic-red hover:text-white transition-all">
        {link.label}
      </Link>
    </div>
  );
}

// Link Simples para o Menu Dropdown (Mobile)
function MobileLink({ link, onClick }: { link: typeof navLinks[0]; onClick: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onClick}
      className="w-full px-4 border-2 border-t-4 border-black bg-white py-3 text-black shadow-[4px_4px_0_0_#000] active:translate-x-1 uppercase
      hover:brightness-90"
    >
      {link.label}
    </Link>
  );
}

