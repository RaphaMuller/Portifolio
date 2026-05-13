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
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  
  slideInLeft: {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
} satisfies Record<string, HTMLMotionProps<"div">>;