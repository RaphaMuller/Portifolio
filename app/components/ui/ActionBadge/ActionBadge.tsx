import { motion } from "framer-motion";
import { Themes, ThemePreset, interactiveClasses } from "./actionBadgeTheme";
import { BehaviorPresets, BehaviorPreset } from "./actionBadgeBehavior";

interface ActionBadgeProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  theme?: ThemePreset;
  behavior?: BehaviorPreset;
}

export const ActionBadge = ({
  children,
  className,
  noPadding = false,
  theme = "white",
  behavior = "default",
}: ActionBadgeProps) => {
  const selectedBehavior = BehaviorPresets[behavior] || BehaviorPresets["default"];

  const { rotation, positionType, interactive, transition } = selectedBehavior;

  const isAbsolute = positionType === "absolute";
  const finalRotation = positionType === "static" ? 0 : rotation;

  return (
    <motion.div
      initial={{ rotate: finalRotation, scale: 0 }}
      animate={{ rotate: finalRotation, scale: 1 }}
      transition={transition}
      className={`${isAbsolute ? "absolute z-10" : "relative"} ${className}`}
    >
      <div
        className={`font-bangers tracking-wider uppercase ${Themes[theme]} ${noPadding ? "p-0" : "px-4 py-2"} ${interactive ? interactiveClasses : ""}`}
      >
        {children}
      </div>
    </motion.div>
  );
};
