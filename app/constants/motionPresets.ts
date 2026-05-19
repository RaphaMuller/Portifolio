import { HTMLMotionProps } from "framer-motion";

export const motionPresets = {
  cardEntry: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "tween", stiffness: 260, damping: 20 } as const,
  },
  flipFace: {
    transition: { duration: 0.5, ease: "easeInOut" as const },
  },
  hoverLift: {
    whileHover: { y: -6 },
    transition: { type: "spring", stiffness: 300 } as const,
  },
  slideInRight: {
    initial: { x: 20, y: 30, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
  
  slideInLeft: {
    initial: { x: -20, y: 30, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: "easeOut" as const },
  },

  stamp: {
    initial: { scale: 0.9, y: 30, opacity: 0 },
    whileInView: { scale: 1, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" as const },
  },

  projectCard: {
    rest: { y: 0 },
    hover: { y: -6 },
  },

  projectActionBadge: {
    rest: { scale: 0, opacity: 0 },
    hover: { scale: 1, opacity: 1 },
  },
} satisfies Record<string, HTMLMotionProps<"div"> | any>;