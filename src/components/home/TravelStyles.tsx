"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

interface Category {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  href: string;
}

const categories: Category[] = [
  {
    icon: "🎒",
    title: "Backpacking Trips",
    description: "Explore remote trails, vibrant cultures, and budget-friendly circuits.",
    gradient: "from-orange-500/10 to-orange-500/5 text-orange-600 border-orange-500/20",
    href: "/tours?style=discovery",
  },
  {
    icon: "🚗",
    title: "Weekend Getaways",
    description: "Quick 2-3 day escapes to recharge your soul in mountain heights.",
    gradient: "from-blue-500/10 to-blue-500/5 text-blue-600 border-blue-500/20",
    href: "/tours?style=discovery",
  },
  {
    icon: "✈️",
    title: "International Trips",
    description: "Cross borders to discover exotic cultures and scenic overland routes.",
    gradient: "from-purple-500/10 to-purple-500/5 text-purple-600 border-purple-500/20",
    href: "/tours?style=discovery",
  },
  {
    icon: "⛰️",
    title: "Adventure Treks",
    description: "Push your limits hiking across rugged mountain passes and glaciers.",
    gradient: "from-emerald-500/10 to-emerald-500/5 text-emerald-600 border-emerald-500/20",
    href: "/tours?style=discovery",
  },
  {
    icon: "💖",
    title: "Honeymoon Trips",
    description: "Romantic mountain getaways, boutique stays, and memorable journeys.",
    gradient: "from-rose-500/10 to-rose-500/5 text-rose-600 border-rose-500/20",
    href: "/tours?style=discovery",
  },
  {
    icon: "👔",
    title: "Corporate Trips",
    description: "Customized outdoor retreats, team bonding sessions, and workations.",
    gradient: "from-cyan-500/10 to-cyan-500/5 text-cyan-600 border-cyan-500/20",
    href: "/tours?style=discovery",
  },
];

export function TravelStyles() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoPlayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPausedRef = useRef(false);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayIntervalRef.current = setInterval(() => {
      if (isPausedRef.current || !scrollRef.current) return;

      const el = scrollRef.current;
      const cardEl = el.firstElementChild as HTMLElement | null;
      if (!cardEl) return;

      const cardWidth = cardEl.offsetWidth + 20; // card width + gap
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 10) {
        // Smoothly loop back to start
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 4000); // Scroll every 4 seconds
  };

  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  };

  const tempPauseAutoPlay = () => {
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 5000); // Resume auto-play after 5 seconds of inactivity
  };

  const handleScroll = () => {
    // If user scrolls manually, trigger a temporary pause
    tempPauseAutoPlay();
  };

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cardEl = el.firstElementChild as HTMLElement | null;
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 20;
    el.scrollBy({ left: -cardWidth, behavior: "smooth" });
    tempPauseAutoPlay();
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cardEl = el.firstElementChild as HTMLElement | null;
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 20;
    el.scrollBy({ left: cardWidth, behavior: "smooth" });
    tempPauseAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      stopAutoPlay();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <section className="py-16 bg-white border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="w-12 h-1 bg-brand rounded-full mb-3" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight leading-none">
              Explore Categories
            </h2>
            <p className="text-stone-500 text-sm md:text-base mt-2">
              Choose your travel style and find your next dream adventure.
            </p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition-all hover:bg-stone-50 hover:border-stone-300 active:scale-95 cursor-pointer shadow-sm"
              aria-label="Previous categories"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition-all hover:bg-stone-50 hover:border-stone-300 active:scale-95 cursor-pointer shadow-sm"
              aria-label="Next categories"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
            className="flex gap-5 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="flex-shrink-0 w-[230px] sm:w-[260px] lg:w-[290px] snap-start bg-white border border-stone-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Circle Icon Container */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl border mb-6 transition-all duration-300 group-hover:scale-110 ${cat.gradient}`}>
                    <span role="img" aria-label={cat.title}>
                      {cat.icon}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 group-hover:text-brand transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed pr-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs sm:text-sm font-bold text-brand group-hover:gap-2 transition-all">
                  <span>Explore Tours</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
