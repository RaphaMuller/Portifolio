"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/app/constants/navLinks";
import { ComicNavPanel } from "@/app/components/ui/navbar/ComicNavPanel";
import { ComicNavFiller } from "@/app/components/ui/navbar/ComicNavFiller";
import { ComicNavMobileMenu } from "@/app/components/ui/navbar/ComicNavMobileMenu";

const MOBILE_MENU_ID = "comic-mobile-menu";
const NAV_BLOCK_WIDTH = "w-16 sm:w-24 md:w-24 lg:w-28 xl:w-32 shrink-0";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (href: string) => {
    const targetId = href.replace(/^#/, "");
    const targetEl = document.getElementById(targetId);

    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", href);
        }
      }, 150);
    } else {
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", href);
      }
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-y-4 border-black bg-black shadow-comic select-none">
      <div className="flex h-14 items-stretch">
        <ComicNavPanel kind="blank" edge="start" className={NAV_BLOCK_WIDTH} />

        <ComicNavPanel
          kind="link"
          href="#hero"
          seed={10}
          ariaLabel="Voltar ao início"
          onNavigate={handleNav}
          className={NAV_BLOCK_WIDTH}
        >
          <span className="relative h-9 w-9 overflow-hidden rounded-2xl border-2 border-black sm:h-10 sm:w-10">
            <Image
              src="/logo-r.jpg"
              alt=""
              fill
              sizes="(max-width: 640px) 36px, 40px"
              className="object-cover"
              priority
            />
          </span>
        </ComicNavPanel>

        <ComicNavFiller />

        <nav aria-label="Navegação principal" className="hidden items-stretch md:flex">
          {navLinks.map((link, index) => (
            <ComicNavPanel
              key={link.href}
              kind="link"
              href={link.href}
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
          isOpen={isOpen}
          seed={20}
          controls={MOBILE_MENU_ID}
          onToggle={() => setIsOpen((open) => !open)}
          className={`${NAV_BLOCK_WIDTH} md:hidden`}
        />

        <ComicNavPanel kind="blank" edge="end" className={NAV_BLOCK_WIDTH} />
      </div>

      <ComicNavMobileMenu id={MOBILE_MENU_ID} isOpen={isOpen} onNavigate={handleNav} />
    </header>
  );
}
