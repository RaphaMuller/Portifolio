"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { ActionBadge } from "../ActionBadge/ActionBadge";
import BeltPouch from "./BeltPouch";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { beltItems } from "@/app/constants/itemsCarousel";
import { motionPresets } from "@/app/constants/motionPresets";

export default function ComicCarrousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <ActionBadge
      className="w-full max-w-7xl rounded-4xl bg-comic-shadow"
      theme="batmanArmor"
      noPadding
      {...motionPresets.slideInLeft}
    >
      {/* Header */}
      <div className="flex justify-center py-4 sm:py-6">
        <ActionBadge
          theme="yellow"
          className="mb-2 flex justify-center text-title md:text-h4 lg:text-h3"
        >
          <h2>🦇 CINTO DE UTILIDADES</h2>
        </ActionBadge>
      </div>

      {/* Structure */}
      <div className="relative">
        <div className="relative h-6 border-y-4 border-black bg-comic-gradient-belt shadow-[0_2px_0_rgba(0,0,0,0.5)]">
          {/* Stitching */}
          <div className="relative top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-comic-stitching" />
        </div>

        <div className="absolute top-[9px] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <ActionBadge
            theme="yellow"
            className="bg-gradient-to-br from-gold to-bronze px-4 font-bangers text-xl tracking-bangers-tight sm:text-2xl"
          >
            🦇
          </ActionBadge>
        </div>

        {/* Carousel */}
        <div className="relative border-x-4 border-black bg-comic-section-gradient px-2 py-2 sm:px-4 md:px-12 lg:px-16">
          <PrevArrow onClick={scrollPrev} />
          <NextArrow onClick={scrollNext} />
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {beltItems.map((item) => (
                <div 
                  key={item.tech} 
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]"
                >
                  <BeltPouch item={item} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots */}
          <div className="mt-4 mb-2 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 w-2 cursor-pointer rounded-full border border-gold transition-colors sm:h-3 sm:w-3 ${
                  index === selectedIndex ? "bg-gold" : "bg-gold/40 hover:bg-gold/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Strap */}
        <div className="relative h-6 border-y-4 border-black bg-comic-gradient-belt shadow-[0_-2px_0_rgba(0,0,0,0.5)]">
          <div className="relative top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-comic-stitching" />
        </div>
      </div>

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center py-2"
      >
        <span className="px-4 text-center text-stat-label text-gold/60">
          &ldquo;Eu sou o programador que Gotham merece... e que os bugs
          temem.&ldquo;
        </span>
      </motion.div>
    </ActionBadge>
  );
}
