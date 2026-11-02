"use client";

import { useEffect, useRef } from "react";

const SECTION_IDS = ["hero", "about", "skills", "projects", "contact"];
const COOLDOWN_MS = 750;
const WHEEL_THRESHOLD = 25;
const TOUCH_THRESHOLD = 45;

/**
 * Controlador de Rolagem Suave entre Seções.
 * Unifica o scroll de mouse, teclado e touch para ter exatamente a mesma fluidez
 * da navegação por clique nos botões da navbar (scrollIntoView smooth).
 * @example
 * <ComicPageScroller />
 */
export function ComicPageScroller() {
  const isNavigating = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
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

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isNavigating.current) {
        event.preventDefault();
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (isNavigating.current) return;

      const touchEndY = event.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;
      if (Math.abs(deltaY) < TOUCH_THRESHOLD) return;

      const currentIndex = getCurrentIndex();
      if (deltaY > 0 && currentIndex < SECTION_IDS.length - 1) {
        scrollToSection(currentIndex + 1);
      } else if (deltaY < 0 && currentIndex > 0) {
        scrollToSection(currentIndex - 1);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
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
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
