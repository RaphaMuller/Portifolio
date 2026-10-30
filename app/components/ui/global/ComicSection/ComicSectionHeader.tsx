"use client";

import React from "react";

interface ComicSectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

/**
 * @example
 * <ComicSectionHeader tag="CAPÍTULO 1" title="MEUS PROJETOS" subtitle="Missões cumpridas" />
 */
export function ComicSectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
  className = "",
}: ComicSectionHeaderProps) {
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <header className={`relative z-10 mb-8 flex flex-col ${alignClasses} ${className}`}>
      {tag && (
        <span className="inline-block border-2 border-black bg-comic-red px-3 py-1 font-bangers text-xs tracking-bangers-wide text-white uppercase shadow-[2px_2px_0_0_#000]">
          {tag}
        </span>
      )}
      <h2 className="text-h2 mt-2 leading-none text-black drop-shadow-[2px_2px_0_#fff] md:text-h1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body mt-2 max-w-xl font-comic text-black">
          {subtitle}
        </p>
      )}
    </header>
  );
}
