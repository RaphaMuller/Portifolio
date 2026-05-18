import { HTMLMotionProps } from "framer-motion";

export const motionPresets = {
  cardEntry: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "tween", stiffness: 260, damping: 20 },
  },
  flipFace: {
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  hoverLift: {
    whileHover: { y: -6 },
    transition: { type: "spring", stiffness: 300 },
  },
  slideInRight: {
    initial: { x: 50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  
  slideInLeft: {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },

  stamp: {
    initial: { scale: 2.5, opacity: 0, rotate: -15 },
    whileInView: { scale: 1, opacity: 1, rotate: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
} satisfies Record<string, HTMLMotionProps<"div">>;