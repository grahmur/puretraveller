"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { REGION_LABELS } from "@/lib/constants";

const REGIONS = [
  {
    id: "himachal",
    name: REGION_LABELS.himachal,
    image: "/images/tours/spiti-valley-circuit.webp",
    href: "/tours?region=himachal",
    icon: "🏔️",
  },
  {
    id: "ladakh",
    name: REGION_LABELS.ladakh,
    image: "/images/tours/manali-leh-highway.webp",
    href: "/tours?region=ladakh",
    icon: "🏜️",
  },
  {
    id: "uttarakhand",
    name: REGION_LABELS.uttarakhand,
    image: "/images/tours/chopta-tungnath-winter-trek.webp",
    href: "/tours?region=uttarakhand",
    icon: "🌲",
  },
  {
    id: "kashmir",
    name: REGION_LABELS.kashmir,
    image: "/images/tours/kashmir-great-lakes-trek.webp",
    href: "/tours?region=kashmir",
    icon: "🏞️",
  },
  {
    id: "punjab",
    name: REGION_LABELS.punjab,
    image: "/images/tours/amritsar-dharamshala-heritage.webp",
    href: "/tours?region=punjab",
    icon: "🌾",
  },
];

const doubled = [...REGIONS, ...REGIONS];

export function TrendingRegions() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const autoIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoIntervalRef.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container || !isMobile || isInteracting) return;

      const firstChild = container.firstElementChild as HTMLElement | null;
      if (!firstChild) return;

      const cardWidth = firstChild.offsetWidth + 16; // 16 = gap-4
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft - 10) {
        // Snap back to start of first set
        container.scrollTo({ left: 1, behavior: "instant" });
        requestAnimationFrame(() => {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (autoIntervalRef.current) {
      clearInterval(autoIntervalRef.current);
      autoIntervalRef.current = null;
    }
  };

  const handleInteractionStart = () => {
    setIsInteracting(true);
    stopAutoScroll();
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleInteractionEnd = () => {
    pauseTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
      startAutoScroll();
    }, 3000);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth < 768) {
      startAutoScroll();
    }

    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("touchstart", handleInteractionStart, { passive: true });
    container.addEventListener("touchend", handleInteractionEnd, { passive: true });
    container.addEventListener("mousedown", handleInteractionStart);
    container.addEventListener("mouseup", handleInteractionEnd);

    return () => {
      stopAutoScroll();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      container.removeEventListener("touchstart", handleInteractionStart);
      container.removeEventListener("touchend", handleInteractionEnd);
      container.removeEventListener("mousedown", handleInteractionStart);
      container.removeEventListener("mouseup", handleInteractionEnd);
    };
  }, []);

  const displayRegions = isMobile ? doubled : REGIONS;

  return (
    <section className="pt-12 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-1 bg-brand rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Trending Destinations
          </h2>
          <p className="mt-2 text-stone-500 text-base md:text-lg max-w-xl">
            Explore the most sought-after adventure circuits across North India
          </p>
        </div>

        {/* Regions Layout */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto justify-start sm:justify-center md:grid md:grid-cols-5 gap-4 md:gap-5 pb-6 md:pb-0 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {displayRegions.map((region, i) => (
            <Link
              key={`${region.id}-${i}`}
              href={region.href}
              className="flex-shrink-0 w-[45%] sm:w-[18%] md:w-auto snap-start group relative rounded-[20px] md:rounded-[40px] overflow-hidden aspect-[3/4.5] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-stone-200"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${region.image})` }}
                role="img"
                aria-label={region.name}
              />

              {/* Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/10 group-hover:via-stone-950/50 transition-all duration-300" />

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-2.5 md:p-5 text-center">
                <span className="text-xl md:text-4xl mb-1 md:mb-2 filter drop-shadow" role="img" aria-hidden="true">
                  {region.icon}
                </span>

                <h3 className="text-white font-extrabold text-[11px] sm:text-sm md:text-lg tracking-wide uppercase transition-all duration-300 group-hover:text-brand line-clamp-1">
                  {region.name.split(" ")[0]}
                </h3>

                <span className="text-[9px] uppercase font-bold tracking-widest text-stone-300 mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden md:inline">
                  Explore &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
