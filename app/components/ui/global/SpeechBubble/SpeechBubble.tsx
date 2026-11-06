"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SpeechBubbleProps {
  children: ReactNode;
  delay?: number;
  tailPosition?: "top" | "bottom";
  animateOnScroll?: boolean;
  className?: string;
}

/**
 * @example
 * <SpeechBubble tailPosition="bottom" animateOnScroll><p>Olá!</p></SpeechBubble>
 */
export function SpeechBubble({
  children,
  delay = 0.3,
  tailPosition = "bottom",
  animateOnScroll = false,
  className = "",
}: SpeechBubbleProps) {
  const animationProps = animateOnScroll
    ? {
        initial: { scale: 0.8, opacity: 0 },
        whileInView: { scale: 1, opacity: 1 },
        viewport: { once: true },
      }
    : { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 } };

  return (
    <motion.div
      {...animationProps}
      transition={{ type: "spring", stiffness: 200, delay }}
      className={`relative mb-2 border-4 border-black bg-white p-4 sm:p-6 shadow-comic ${className}`}
    >
      {tailPosition === "bottom" && (
        <>
          <div aria-hidden="true" className="speech-tail-bottom-border absolute -bottom-5 left-10" />
          <div aria-hidden="true" className="speech-tail-bottom-fill absolute -bottom-3 left-11" />
        </>
      )}

      {tailPosition === "top" && (
        <>
          <div aria-hidden="true" className="speech-tail-top-border absolute -top-4 left-5" />
          <div aria-hidden="true" className="speech-tail-top-fill absolute -top-2 left-6" />
        </>
      )}

      <div className="leading-tight font-medium text-black">{children}</div>
    </motion.div>
  );
}
