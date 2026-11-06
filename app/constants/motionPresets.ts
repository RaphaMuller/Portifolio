import type { HTMLMotionProps } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;
const premiumEase = [0.16, 1, 0.3, 1] as const;

export const motionPresets = {
  headerSlide: {
    initial: { x: -20, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { amount: 0.25, once: true },
    transition: { duration: 0.45, ease: premiumEase },
  },

  blockSlideUp: {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { amount: 0.25, once: true },
    transition: { duration: 0.5, ease: premiumEase },
  },

  stampBadge: {
    initial: { y: -10, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { amount: 0.25, once: true },
    transition: { duration: 0.4, delay: 0.15, ease: premiumEase },
  },

  slideInRight: {
    initial: { x: 24, y: 20, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { amount: 0.25 },
    transition: { duration: 0.55, ease: smoothEase },
  },

  slideInLeft: {
    initial: { x: -24, y: 20, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { amount: 0.25 },
    transition: { duration: 0.55, ease: smoothEase },
  },

  blockAssemble: {
    initial: { opacity: 0, y: 24, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { amount: 0.25 },
    transition: { duration: 0.5, ease: smoothEase },
  },
} as const satisfies Record<string, HTMLMotionProps<"div">>;
