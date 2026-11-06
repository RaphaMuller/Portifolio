"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navbarCopy, navLinks } from "@/app/constants/navLinks";
import { ComicNavPanel } from "@/app/components/ui/navbar/ComicNavPanel";
import { ComicNavFiller } from "@/app/components/ui/navbar/ComicNavFiller";
import { ComicNavMobileMenu } from "@/app/components/ui/navbar/ComicNavMobileMenu";

const MOBILE_MENU_ID = "comic-mobile-menu";
const NAV_BLOCK_WIDTH = "w-16 sm:w-24 md:w-24 lg:w-28 xl:w-32 shrink-0";

/**
 * @example
 * <Navbar />
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (href: string) => {
    const targetId = href.replace(/^#/, "");
    const targetElement = document.getElementById(targetId);

    const scrollToTarget = () => {
      if (!targetElement) return;
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    };

    if (isOpen) {
      setIsOpen(false);
      setTimeout(scrollToTarget, 150);
      return;
    }

    scrollToTarget();
  };

  return (
    <motion.header
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="safe-top-nav fixed top-0 right-0 left-0 z-50 border-y-4 border-black bg-black shadow-comic select-none"
    >
      <div className="flex h-14 items-stretch">
        <ComicNavPanel
          kind="link"
          href="#hero"
          edge="start"
          seed={10}
          ariaLabel={navbarCopy.homeAriaLabel}
          onNavigate={handleNav}
          className={NAV_BLOCK_WIDTH}
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-md border-0 sm:border-2 border-black shadow-none sm:shadow-comic-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-comic sm:h-10 sm:w-10">
            <Image
              src="/logo-r.jpg"
              alt={navbarCopy.logoAlt}
              fill
              preload
              sizes="(max-width: 640px) 36px, 40px"
              className="object-cover opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </div>
        </ComicNavPanel>

        <ComicNavFiller />

        <nav aria-label={navbarCopy.desktopNavAriaLabel} className="hidden items-stretch md:flex">
          {navLinks.map((link, index) => (
            <ComicNavPanel
              key={link.href}
              kind="link"
              href={link.href}
              edge={index === navLinks.length - 1 ? "end" : undefined}
              seed={index}
              onNavigate={handleNav}
              className={NAV_BLOCK_WIDTH}
            >
              {link.label}
            </ComicNavPanel>
          ))}
        </nav>

        <ComicNavPanel
          kind="toggle"
          edge="end"
          isOpen={isOpen}
          seed={20}
          controls={MOBILE_MENU_ID}
          onToggle={() => setIsOpen((open) => !open)}
          className={`${NAV_BLOCK_WIDTH} md:hidden`}
        />
      </div>

      <ComicNavMobileMenu id={MOBILE_MENU_ID} isOpen={isOpen} onNavigate={handleNav} />
    </motion.header>
  );
}
