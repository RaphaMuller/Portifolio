"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Reveals `text` char by char after `startDelay` seconds.
 * Users with reduced motion get the full text immediately.
 * @example
 * const { visibleText, isDone } = useTypewriter("OLÁ", 1.3);
 */
export function useTypewriter(text: string, startDelay: number, charInterval = 35) {
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount((current) => {
          if (current >= text.length) {
            clearInterval(interval);
            return current;
          }
          return current + 1;
        });
      }, charInterval);
    }, startDelay * 1000);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, startDelay, charInterval, prefersReducedMotion]);

  return {
    visibleText: prefersReducedMotion ? text : text.slice(0, count),
    isDone: Boolean(prefersReducedMotion) || count >= text.length,
  };
}
