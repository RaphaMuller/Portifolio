import { Transition } from "framer-motion";

export interface BadgeBehavior {
  rotation?: number;
  positionType?: "absolute" | "static";
  interactive?: boolean;
  transition?: Transition;
}

export const BehaviorPresets: Record<string, BadgeBehavior> = {
  default: {
    rotation: 0,
    positionType: "absolute",
    interactive: false,
    transition: { type: "spring", stiffness: 500, delay: 0.3 }
  },
  heroLeft: {
    rotation: -12,
    positionType: "absolute",
    interactive: false,
    transition: { type: "spring", stiffness: 500, delay: 0.2 }
  },
  heroRight: {
    rotation: 8,
    positionType: "absolute",
    interactive: false,
    transition: { type: "spring", stiffness: 500, delay: 0.4 }
  },
  static: {
    rotation: 0,
    positionType: "static",
    interactive: false,
    transition: { type: "spring", stiffness: 500, delay: 0.6 }
  },
  staticSweet: {
    rotation: 0,
    positionType: "static",
    interactive: false,
    transition: { type: "tween", stiffness: 300, delay: 0.6 }
  },
  staticInteractive: {
    rotation: 0,
    positionType: "static",
    interactive: true,
    transition: { type: "spring", stiffness: 500, delay: 0.6 }
  }
};

export type BehaviorPreset = keyof typeof BehaviorPresets;
