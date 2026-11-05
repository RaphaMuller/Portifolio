"use client";

import React from "react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { heroStats } from "@/app/constants/aboutData";

interface HeroPowerMeterProps {
  className?: string;
  compact?: boolean;
  direction?: "row" | "column";
}

/**
 * @example
 * <HeroPowerMeter compact direction="column" />
 */
export function HeroPowerMeter({
  className = "",
  compact = false,
  direction = "row",
}: HeroPowerMeterProps) {
  const containerLayout =
    direction === "column"
      ? "flex flex-col items-center justify-center gap-2 w-full"
      : "grid grid-cols-2 gap-2 sm:gap-2.5 w-full";

  return (
    <div className={`${containerLayout} ${className}`}>
      {heroStats.map((stat) => (
        <ActionBadge
          key={stat.label}
          theme="yellow"
          noPadding
          className="w-full flex-1 flex items-center justify-center"
        >
          <div
            className={`flex w-full flex-col items-center justify-center text-center ${
              compact ? "py-2 sm:py-2.5 px-2" : "p-2 sm:p-3"
            }`}
          >
            <span
              className={`leading-none text-black ${
                compact
                  ? "text-h3 font-bangers"
                  : "text-h3 md:text-h2"
              }`}
            >
              {stat.value}
            </span>
            <span
              className={`text-zinc-900 ${
                compact
                  ? "text-stat-label font-bangers tracking-bangers-wide"
                  : "mt-1 text-stat-label"
              }`}
            >
              {stat.label}
            </span>
          </div>
        </ActionBadge>
      ))}
    </div>
  );
}
