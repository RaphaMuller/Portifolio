"use client";

import { useEffect, useRef } from "react";

const SECTION_IDS = ["hero", "about", "skills", "projects", "contact"];
const COOLDOWN_MS = 750;
const WHEEL_THRESHOLD = 25;

const DESKTOP_BREAKPOINT = 1024;

/**
 * Controlador de Rolagem Suave entre Seções.
 * Ativo em desktop (>= 1024px) para transição de quadros de HQ.
 * Desativado em telas menores (< 1024px) para rolagem tátil 100% nativa.
 * @example
 * <ComicPageScroller />
 */
export function ComicPageScroller() {
  const isNavigating = useRef(false);

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= DESKTOP_BREAKPOINT;

    const getCurrentIndex = (): number => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const viewportCenter = scrollY + viewportHeight / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      SECTION_IDS.forEach((id, index) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop;
        const mid = top + el.offsetHeight / 2;
        const dist = Math.abs(viewportCenter - mid);
        if (dist < minDistance) {
          minDistance = dist;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    const scrollToSection = (targetIndex: number) => {
      const targetId = SECTION_IDS[targetIndex];
      const targetEl = targetId ? document.getElementById(targetId) : null;
      if (!targetEl) return;

      isNavigating.current = true;
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

      window.history.replaceState(null, "", `#${targetId}`);

      setTimeout(() => {
        isNavigating.current = false;
      }, COOLDOWN_MS);
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isDesktop()) return;
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;

      event.preventDefault();
      if (isNavigating.current) return;

      const currentIndex = getCurrentIndex();
      if (event.deltaY > 0 && currentIndex < SECTION_IDS.length - 1) {
        scrollToSection(currentIndex + 1);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        scrollToSection(currentIndex - 1);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isDesktop()) return;
      if (isNavigating.current) return;

      const currentIndex = getCurrentIndex();
      if ((event.key === "ArrowDown" || event.key === "PageDown") && currentIndex < SECTION_IDS.length - 1) {
        event.preventDefault();
        scrollToSection(currentIndex + 1);
      } else if ((event.key === "ArrowUp" || event.key === "PageUp") && currentIndex > 0) {
        event.preventDefault();
        scrollToSection(currentIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
