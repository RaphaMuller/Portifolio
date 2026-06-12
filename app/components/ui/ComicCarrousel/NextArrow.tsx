"use client";
import { ActionBadge } from "../ActionBadge/ActionBadge";

export default function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <ActionBadge
      className="absolute top-1/2 right-0 z-20 hidden h-12 w-12 translate-x-5 -translate-y-1/2 cursor-pointer items-center justify-center text-2xl transition-all duration-200 ease-out hover:scale-110 hover:-rotate-6 active:scale-95 lg:flex"
      theme="yellow"
      onClick={onClick}
    >
      ▶
    </ActionBadge>
  );
}
