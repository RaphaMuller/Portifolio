"use client";

import { ChevronRight } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";
import { skillsCopy } from "@/app/constants/itemsCarousel";

interface NextArrowProps {
  onClick?: () => void;
}

/**
 * @example
 * <NextArrow onClick={scrollNext} />
 */
export function NextArrow({ onClick }: NextArrowProps) {
  return (
    <ActionBadge
      as="button"
      noPadding
      theme="yellow"
      onClick={onClick}
      aria-label={skillsCopy.nextSlideAriaLabel}
      className="comic-carousel-arrow right-0 translate-x-1/2 -translate-y-1/2 hover:scale-110 hover:-rotate-6 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
    >
      <ChevronRight
        className="size-9 shrink-0 text-black"
        strokeWidth={3}
        aria-hidden="true"
      />
    </ActionBadge>
  );
}
