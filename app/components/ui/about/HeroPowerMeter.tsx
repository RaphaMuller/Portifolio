"use client";

import React from "react";
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
    <div className={`grid grid-cols-2 gap-2 sm:gap-3 ${className}`}>
      {heroStats.map((stat) => (
        <ActionBadge
          key={stat.label}
          theme="yellow"
          noPadding
          className="w-full"
        >
          <div className="flex flex-col items-center justify-center p-2 text-center sm:p-3">
            <span className="text-h3 leading-none text-black md:text-h2">
              {stat.value}
            </span>
            <span className="mt-1 text-stat-label text-zinc-900">
              {stat.label}
            </span>
          </div>
        </ActionBadge>
      ))}
    </div>
  );
}
