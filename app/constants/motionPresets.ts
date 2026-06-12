import { HTMLMotionProps } from "framer-motion";

export const motionPresets: Record<string, HTMLMotionProps<"div">> = {
  slideInRight: {
    initial: { x: 20, y: 30, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: "easeOut" },
  } as const,

  slideInLeft: {
    initial: { x: -20, y: 30, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: "easeOut" },
  } as const,

  stamp: {
    initial: { scale: 0.9, y: 30, opacity: 0 },
    whileInView: { scale: 1, y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" },
  } as const,

  projectCard: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  } as const,
} satisfies Record<string, HTMLMotionProps<"div">>;
