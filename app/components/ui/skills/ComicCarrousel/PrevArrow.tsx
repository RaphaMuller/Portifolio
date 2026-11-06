"use client";

import { ChevronLeft } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { skillsCopy } from "@/app/constants/itemsCarousel";

interface PrevArrowProps {
  onClick?: () => void;
}

/**
 * @example
 * <PrevArrow onClick={scrollPrev} />
 */
export function PrevArrow({ onClick }: PrevArrowProps) {
  return (
    <ActionBadge
      as="button"
      noPadding
      theme="yellow"
      onClick={onClick}
      aria-label={skillsCopy.prevSlideAriaLabel}
      className="comic-carousel-arrow left-0 -translate-x-1/2 -translate-y-1/2 hover:scale-110 hover:rotate-6 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
    >
      <ChevronLeft
        className="size-9 shrink-0 text-black"
        strokeWidth={3}
        aria-hidden="true"
      />
    </ActionBadge>
  );
}
