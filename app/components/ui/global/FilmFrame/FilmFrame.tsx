"use client";

import React from "react";

interface FilmFrameProps {
  children?: React.ReactNode;
  isButton?: boolean;
  onClick?: () => void;
  isSpecial?: boolean;
}

function SprocketBar() {
  return (
    <svg
      width="144"
      height="12"
      viewBox="0 0 144 12"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-3 w-[144px] shrink-0"
      aria-hidden="true"
    >
      <rect width="144" height="12" fill="#000000" />
      <rect x="8" y="2" width="16" height="8" rx="2" fill="#ffffff" />
      <rect x="32" y="2" width="16" height="8" rx="2" fill="#ffffff" />
      <rect x="56" y="2" width="16" height="8" rx="2" fill="#ffffff" />
      <rect x="80" y="2" width="16" height="8" rx="2" fill="#ffffff" />
      <rect x="104" y="2" width="16" height="8" rx="2" fill="#ffffff" />
      <rect x="128" y="2" width="16" height="8" rx="2" fill="#ffffff" />
    </svg>
  );
}

/**
 * @example
 * <FilmFrame isButton onClick={handleClick}>INÍCIO</FilmFrame>
 */
export function FilmFrame({
  children,
  isButton = false,
  onClick,
  isSpecial = false,
}: FilmFrameProps) {
  return (
    <div className="flex w-[144px] shrink-0 flex-col bg-black">
      <SprocketBar />
      <div className="flex h-12 w-[144px] shrink-0 items-stretch bg-black">
        <div className="w-[8px] shrink-0 bg-black" />
        {isButton ? (
          <button
            type="button"
            onClick={onClick}
            className={`flex w-[136px] shrink-0 items-center justify-center px-2 font-bangers text-base lg:text-lg xl:text-xl tracking-bangers-wide transition-colors ${
              isSpecial
                ? "bg-comic-red text-white hover:bg-comic-yellow hover:text-black"
                : "bg-white text-black shadow-[inset_0_0_8px_rgba(0,0,0,0.12)] hover:bg-comic-yellow hover:text-black active:bg-comic-red active:text-white"
            }`}
          >
            {children}
          </button>
        ) : (
          <div className="w-[136px] shrink-0 bg-white shadow-[inset_0_0_8px_rgba(0,0,0,0.12)]" />
        )}
      </div>
      <SprocketBar />
    </div>
  );
}
