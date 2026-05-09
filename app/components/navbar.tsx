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
            className="z-minus absolute"
          >
            <div className="flex flex-col items-center">
              <div className="h-12 w-[2px] bg-black" />
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
        className="relative z-10 border-2 border-black bg-white px-4 py-2 text-black shadow-[2px_2px_0_0_#000] transition-all duration-200 hover:bg-[#FF4444] hover:text-white hover:shadow-[3px_3px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      >
        {link.label}
      </Link>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b-8 border-black bg-yellow-300 backdrop-blur-sm">
      <div className="pointer-events-none absolute top-7 right-0 rotate-180">
        <Image src="/teia-de-aranha.png" alt="" width={40} height={40} />
      </div>

      <div className="pointer-events-none absolute -top-1 left-0">
        <Image src="/teia-de-aranha.png" alt="" width={40} height={40} />
      </div>

      <div className="flex h-16 justify-center p-2">
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
