"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";

interface UseComicCarouselOptions {
  autoplayDelay?: number;
  loop?: boolean;
  containScroll?: "trimSnaps" | false;
  watchKey?: unknown;
}

/**
 * @example
 * const { emblaRef, selectedIndex, scrollSnaps, scrollPrev, scrollNext, scrollTo } = useComicCarousel({ autoplayDelay: 3000, loop: true });
 */
export function useComicCarousel({
  autoplayDelay,
  loop = false,
  containScroll = "trimSnaps",
  watchKey,
}: UseComicCarouselOptions = {}) {
  const plugins = autoplayDelay
    ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align: "start", containScroll: loop ? false : containScroll },
    plugins,
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const syncState = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("init", syncState).on("reInit", syncState).on("select", syncState);
    queueMicrotask(() => syncState(emblaApi));

    return () => {
      emblaApi.off("init", syncState).off("reInit", syncState).off("select", syncState);
    };
  }, [emblaApi, syncState, watchKey]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return {
    emblaRef,
    selectedIndex,
    scrollSnaps,
    canScrollPrev,
    canScrollNext,
    isOverflowing: canScrollPrev || canScrollNext,
    scrollPrev,
    scrollNext,
    scrollTo,
  };
}
