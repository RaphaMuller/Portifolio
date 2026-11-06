"use client";

import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { heroStats } from "@/app/constants/aboutData";

interface HeroPowerMeterProps {
  className?: string;
}

/**
 * @example
 * <HeroPowerMeter />
 */
export function HeroPowerMeter({ className = "" }: HeroPowerMeterProps) {
  return (
    <div className={`grid grid-cols-2 gap-2 sm:gap-2.5 w-full ${className}`}>
      {heroStats.map((stat) => (
        <ActionBadge
          key={stat.label}
          theme="yellow"
          noPadding
          className="w-full flex-1 flex items-center justify-center"
        >
          <div className="flex w-full flex-col items-center justify-center py-2 sm:py-2.5 px-2 text-center">
            <span className="text-h3 font-bangers leading-none text-black">
              {stat.value}
            </span>
            <span className="text-stat-label font-bangers tracking-bangers-wide text-comic-ink">
              {stat.label}
            </span>
          </div>
        </ActionBadge>
      ))}
    </div>
  );
}
