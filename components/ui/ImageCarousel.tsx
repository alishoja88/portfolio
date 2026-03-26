"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: readonly string[];
  alt?: string;
  /** object-position for the Image, default "top center" */
  objectPosition?: string;
  /** auto-advance interval in ms, 0 = disabled, default 3500 */
  interval?: number;
  sizes?: string;
  className?: string;
}

export function ImageCarousel({
  images,
  alt = "Project screenshot",
  objectPosition = "top center",
  interval = 3500,
  sizes = "100vw",
  className = "",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const count = images.length;

  const go = useCallback(
    (idx: number, dir: 1 | -1) => {
      setDirection(dir);
      setCurrent((((idx % count) + count) % count));
    },
    [count]
  );

  const next = useCallback(() => go(current + 1, 1), [current, go]);
  const prev = useCallback(() => go(current - 1, -1), [current, go]);

  /* auto-advance */
  useEffect(() => {
    if (!interval || paused || count < 2) return;
    timerRef.current = setTimeout(next, interval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, interval, count, next]);

  if (count === 0) return null;
  if (count === 1) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition }}
          sizes={sizes}
          priority
        />
      </div>
    );
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden group/carousel ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${alt} ${current + 1}`}
            fill
            className="object-cover"
            style={{ objectPosition }}
            sizes={sizes}
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next arrows — show on hover */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 hover:bg-black/60 transition-all duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft size={15} strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 hover:bg-black/60 transition-all duration-200"
        aria-label="Next image"
      >
        <ChevronRight size={15} strokeWidth={2} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => { e.stopPropagation(); go(i, i > current ? 1 : -1); }}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-4 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {interval > 0 && !paused && (
        <motion.div
          key={`progress-${current}`}
          className="absolute bottom-0 left-0 h-[2px] bg-white/30 z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: interval / 1000, ease: "linear" }}
        />
      )}
    </div>
  );
}
