import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "INÍCIO", href: "#hero" },
  { label: "SOBRE", href: "#about" },
  { label: "HABILIDADES", href: "#skills" },
  { label: "PROJETOS", href: "#projects" },
  { label: "CONTATO", href: "#contact" },
];

function NavLink({ link }: { link: (typeof navLinks)[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 40, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className="absolute z-minus"
          >
            <div className="flex flex-col items-center">
              <div className="w-[2px] h-12 bg-black" />
              <motion.div
                initial={{ rotate: 180 }}
                className="flex items-center justify-center"
              >
                <Image
                  src="/Aranha.png"
                  alt="Aranha"
                  width={30}
                  height={30}
                  className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href={link.href}
        className="relative z-10 border-2 border-black px-4 py-2 bg-white
                   hover:bg-[#FF4444] hover:text-white transition-all duration-200
                   shadow-[2px_2px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
      >
        {link.label}
      </Link>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow-300 border-b-8 border-black backdrop-blur-sm">
      <div className="absolute top-0 left-0 pointer-events-none">
        <Image
          src="/teia-de-aranha.png" 
          alt=""
          width={40}
          height={40}
        />
      </div>

      <div className="flex justify-around p-2 h-16">
        <div className="flex items-center">
          <Link href="/" className="text-2xl">
            Dev Hero Portfólio
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
