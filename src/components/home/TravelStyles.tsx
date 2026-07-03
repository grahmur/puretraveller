"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

interface Category {
  icon: string;
  title: string;
  description: string;
  accent: string;
  href: string;
}

const categories: Category[] = [
  {
    icon: "🌄",
    title: "Discovery",
    description: "Immersive journeys blending scenic rides with cultural experiences.",
    accent: "bg-brand/10 text-brand border-brand/20",
    href: "/tours?style=discovery",
  },
  {
    icon: "🎒",
    title: "Backpacking Trips",
    description: "Explore remote trails, vibrant cultures, and budget-friendly circuits.",
    accent: "bg-navy/10 text-navy border-navy/20",
    href: "/tours?style=discovery",
  },
  {
    icon: "🚗",
    title: "Weekend Getaways",
    description: "Quick 2-3 day escapes to recharge your soul in mountain heights.",
    accent: "bg-brand/10 text-brand border-brand/20",
    href: "/tours?style=discovery",
  },
  {
    icon: "⛰️",
    title: "Adventure Treks",
    description: "Push your limits hiking across rugged mountain passes and glaciers.",
    accent: "bg-navy/10 text-navy border-navy/20",
    href: "/tours?style=discovery",
  },
  {
    icon: "⚡",
    title: "Raid Adventures",
    description: "Extreme routes, high passes, and challenging Himalayan terrains.",
    accent: "bg-brand/10 text-brand border-brand/20",
    href: "/tours?style=raid",
  },
  {
    icon: "🔧",
    title: "Bike Tour Training",
    description: "Learn off-roading, bike handling, and mountain riding skills from the pros.",
    accent: "bg-navy/10 text-navy border-navy/20",
    href: "/tours?style=training",
  },
];

const doubled = [...categories, ...categories];

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

      const cardWidth = cardEl.offsetWidth + 20;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 1, behavior: "instant" });
        requestAnimationFrame(() => {
          el.scrollBy({ left: cardWidth, behavior: "smooth" });
        });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 4000);
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
    }, 5000);
  };

  const handleScroll = () => {
    tempPauseAutoPlay();

    const el = scrollRef.current;
    if (!el) return;

    const cardEl = el.firstElementChild as HTMLElement | null;
    if (!cardEl) return;

    const cardWidth = cardEl.offsetWidth + 20;
    const maxScroll = el.scrollWidth - el.clientWidth;

    // If scrolled past the last card of the first set, loop back
    if (el.scrollLeft >= maxScroll - 1) {
      el.scrollTo({ left: 1, behavior: "instant" });
    }
    // If user scrolls left past the start, jump to the duplicate set's start
    else if (el.scrollLeft <= 0) {
      const midPoint = cardWidth * categories.length;
      el.scrollTo({ left: midPoint, behavior: "instant" });
    }
  };

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cardEl = el.firstElementChild as HTMLElement | null;
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 20;
    if (el.scrollLeft <= 10) {
      const midPoint = cardWidth * categories.length;
      el.scrollTo({ left: midPoint, behavior: "instant" });
      requestAnimationFrame(() => {
        el.scrollBy({ left: -cardWidth, behavior: "smooth" });
      });
    } else {
      el.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
    tempPauseAutoPlay();
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cardEl = el.firstElementChild as HTMLElement | null;
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 20;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= maxScroll - 10) {
      el.scrollTo({ left: 1, behavior: "instant" });
      requestAnimationFrame(() => {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      });
    } else {
      el.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
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
    <section className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header with Navigation Arrows */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="w-12 h-1 bg-brand rounded-full mb-3" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-none">
              Travel Categories
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
            onMouseEnter={() => { isPausedRef.current = true; }}
            onMouseLeave={() => { isPausedRef.current = false; }}
            className="flex gap-5 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {doubled.map((cat, i) => (
              <Link
                key={`${cat.title}-${i}`}
                href={cat.href}
                className="flex-shrink-0 w-[230px] sm:w-[260px] lg:w-[290px] snap-start bg-white border border-stone-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl border mb-6 transition-all duration-300 group-hover:scale-110 ${cat.accent}`}>
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
