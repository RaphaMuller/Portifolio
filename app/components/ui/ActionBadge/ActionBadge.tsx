"use client";

import { Themes, ThemePreset, interactiveClasses } from "./actionBadgeTheme";
import { HTMLMotionProps, motion } from "framer-motion";

interface ActionBadgeProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  interactive?: boolean;
  theme?: ThemePreset;
}

export const ActionBadge = ({
  children,
  noPadding = false,
  theme = "white",
  interactive,
  className,
  ...props
}: ActionBadgeProps) => {

  return (
    <motion.div
      className={`font-bangers tracking-bangers-wide  ${Themes[theme]} 
      ${noPadding ? "p-0" : "px-4 py-2"} 
      ${interactive ? interactiveClasses : ""} ${className ?? ""}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
