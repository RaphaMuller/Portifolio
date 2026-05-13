import { Themes, ThemePreset, interactiveClasses } from "./actionBadgeTheme";
import { HTMLMotionProps, motion } from "framer-motion";

interface ActionBadgeProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
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
  ...props
}: ActionBadgeProps) => {

  return (
    <motion.div
    {...props}
    >
      <div
        className={`font-bebas-neue tracking-wider uppercase ${Themes[theme]} 
        ${noPadding ? "p-0" : "px-4 py-2"} 
        ${interactive ? interactiveClasses : ""}`}
      >
        {children}
      </div>
    </motion.div>
  );
};
