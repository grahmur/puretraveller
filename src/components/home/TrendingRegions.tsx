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

export function TrendingRegions() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let intervalId: ReturnType<typeof setInterval>;
    let interactionTimeoutId: ReturnType<typeof setTimeout>;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (window.innerWidth >= 768 || isInteracting) return;

        const firstChild = container.firstElementChild as HTMLElement | null;
        if (!firstChild) return;

        const cardWidth = firstChild.offsetWidth;
        const gap = 20; // Matches gap-5 (5 * 4px = 20px)
        const scrollAmount = cardWidth + gap;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        // If we are at or near the end, smooth scroll back to the start
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 4000); // 4-second delay
    };

    startAutoScroll();

    const handleInteractionStart = () => {
      setIsInteracting(true);
      if (interactionTimeoutId) clearTimeout(interactionTimeoutId);
    };

    const handleInteractionEnd = () => {
      // Wait 3 seconds of inactivity before resuming auto-scroll
      interactionTimeoutId = setTimeout(() => {
        setIsInteracting(false);
      }, 3000);
    };

    container.addEventListener("touchstart", handleInteractionStart, { passive: true });
    container.addEventListener("touchend", handleInteractionEnd, { passive: true });
    container.addEventListener("mousedown", handleInteractionStart);
    container.addEventListener("mouseup", handleInteractionEnd);

    return () => {
      clearInterval(intervalId);
      if (interactionTimeoutId) clearTimeout(interactionTimeoutId);
      container.removeEventListener("touchstart", handleInteractionStart);
      container.removeEventListener("touchend", handleInteractionEnd);
      container.removeEventListener("mousedown", handleInteractionStart);
      container.removeEventListener("mouseup", handleInteractionEnd);
    };
  }, [isInteracting]);

  return (
    <section className="pt-12 pb-10 bg-stone-50 overflow-hidden border-b border-stone-200">
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
        {/* Desktop Grid & Mobile Horizontal Scroll */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto justify-start sm:justify-center md:grid md:grid-cols-5 gap-4 md:gap-5 pb-6 md:pb-0 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {REGIONS.map((region) => (
            <Link
              key={region.id}
              href={region.href}
              className="flex-shrink-0 w-[30%] sm:w-[18%] md:w-auto snap-start group relative rounded-[20px] md:rounded-[40px] overflow-hidden aspect-[3/4.5] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-stone-200"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${region.image})` }}
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
