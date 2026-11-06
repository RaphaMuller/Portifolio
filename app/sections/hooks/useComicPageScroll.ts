"use client";

import { useEffect, useRef } from "react";

const SECTION_IDS = ["hero", "about", "skills", "projects", "contact"] as const;
const COOLDOWN_MS = 750;
const WHEEL_THRESHOLD = 25;
const DESKTOP_BREAKPOINT = 1024;

/**
 * @example
 * useComicPageScroll();
 */
export function useComicPageScroll() {
  const isNavigating = useRef(false);

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= DESKTOP_BREAKPOINT;

    const getCurrentIndex = (): number => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      SECTION_IDS.forEach((id, index) => {
        const element = document.getElementById(id);
        if (!element) return;
        const midpoint = element.offsetTop + element.offsetHeight / 2;
        const distance = Math.abs(viewportCenter - midpoint);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    const scrollToSection = (targetIndex: number) => {
      const targetId = SECTION_IDS[targetIndex];
      const targetElement = targetId ? document.getElementById(targetId) : null;
      if (!targetElement) return;

      isNavigating.current = true;
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
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
      if (!isDesktop() || isNavigating.current) return;

      const currentIndex = getCurrentIndex();
      const isNextKey = event.key === "ArrowDown" || event.key === "PageDown";
      const isPrevKey = event.key === "ArrowUp" || event.key === "PageUp";

      if (isNextKey && currentIndex < SECTION_IDS.length - 1) {
        event.preventDefault();
        scrollToSection(currentIndex + 1);
      } else if (isPrevKey && currentIndex > 0) {
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
}
