import { Transition } from "framer-motion";

const TRANSITION_PRESETS: Record<string, Transition> = {
  bouncing: {
    type: "spring",
    stiffness: 600,
    damping: 15,
  },
  smooth: {
    type: "spring",
    stiffness: 100,
    damping: 20,
  },
  snappy: {
    type: "spring",
    stiffness: 1000,
    damping: 30,
  },
  linear: {
    type: "tween",
    duration: 0.3,
    ease: "linear"
  }
};

export type TransitionPreset = keyof typeof TRANSITION_PRESETS;