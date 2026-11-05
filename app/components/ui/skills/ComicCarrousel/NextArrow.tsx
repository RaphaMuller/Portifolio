"use client";
import { ChevronRight } from "lucide-react";
import { ActionBadge } from "@/app/components/ui/global/ActionBadge/ActionBadge";

export default function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <ActionBadge
      className="absolute top-1/2 right-0 z-20 hidden size-12 translate-x-5 -translate-y-1/2 cursor-pointer items-center justify-center transition-all duration-200 ease-out hover:scale-110 hover:-rotate-6 active:scale-95 lg:flex"
      theme="yellow"
      onClick={onClick}
      aria-label="Próximo slide"
    >
      <ChevronRight className="size-7 sm:size-8 stroke-[3] text-black" aria-hidden="true" />
    </ActionBadge>
  );
}
