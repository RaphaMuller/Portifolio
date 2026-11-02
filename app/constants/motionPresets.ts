import { HTMLMotionProps } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export const motionPresets = {
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

  stamp: {
    initial: { scale: 1.3, y: 15, opacity: 0 },
    whileInView: { scale: 1, y: 0, opacity: 1 },
    viewport: { amount: 0.25 },
    transition: { type: "spring", stiffness: 280, damping: 18 },
  },

  projectCard: {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { amount: 0.25 },
    transition: { duration: 0.5, ease: smoothEase },
  },

  blockAssemble: {
    initial: { opacity: 0, y: 24, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { amount: 0.25 },
    transition: { duration: 0.5, ease: smoothEase },
  },
} as const satisfies Record<string, HTMLMotionProps<"div">>;
