"use client";

import type { ReactNode } from "react";
import { type HTMLMotionProps, motion } from "framer-motion";
import {
  interactiveClasses,
  Themes,
} from "@/app/components/ui/global/ActionBadge/actionBadgeTheme";
import type { ThemePreset } from "@/app/types/theme";

interface ActionBadgeSharedProps {
  children?: ReactNode;
  className?: string;
  noPadding?: boolean;
  interactive?: boolean;
  theme?: ThemePreset;
}

type ActionBadgeDivProps = ActionBadgeSharedProps &
  HTMLMotionProps<"div"> & {
    as?: "div";
  };

type ActionBadgeButtonProps = ActionBadgeSharedProps &
  HTMLMotionProps<"button"> & {
    as: "button";
  };

export type ActionBadgeProps = ActionBadgeDivProps | ActionBadgeButtonProps;

/**
 * @example
 * <ActionBadge theme="yellow">ORIGEM</ActionBadge>
 */
export function ActionBadge(props: ActionBadgeProps) {
  const {
    children,
    noPadding = false,
    theme = "white",
    interactive = false,
    className,
  } = props;

  const composedClasses = `font-bangers tracking-bangers-wide ${Themes[theme]} ${noPadding ? "p-0" : "px-4 py-2"} ${interactive ? interactiveClasses : ""} ${className ?? ""}`;

  if (props.as === "button") {
    const {
      as: _as,
      noPadding: _noPadding,
      theme: _theme,
      interactive: _interactive,
      className: _className,
      children: _children,
      ...buttonProps
    } = props;
    void _as;
    void _noPadding;
    void _theme;
    void _interactive;
    void _className;
    void _children;

    return (
      <motion.button
        type="button"
        className={composedClasses}
        {...buttonProps}
      >
        {children}
      </motion.button>
    );
  }

  const {
    as: _as,
    noPadding: _noPadding,
    theme: _theme,
    interactive: _interactive,
    className: _className,
    children: _children,
    ...divProps
  } = props;
  void _as;
  void _noPadding;
  void _theme;
  void _interactive;
  void _className;
  void _children;

  return (
    <motion.div className={composedClasses} {...divProps}>
      {children}
    </motion.div>
  );
}
