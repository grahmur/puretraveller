"use client";

import { useRef, useEffect, useState } from "react";
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
    icon: "🌄",
    title: "Discovery",
    description: "Immersive journeys blending scenic rides with cultural experiences.",
    gradient: "from-brand to-brand/60",
    href: "/tours?style=discovery",
  },
  {
    icon: "🎒",
    title: "Backpacking Trip",
    description: "Budget-friendly adventures for the free-spirited explorer.",
    gradient: "from-navy/80 to-brand",
    href: "/tours?style=discovery",
  },
  {
    icon: "⛰️",
    title: "Adventure Treks",
    description: "Push your limits on high-altitude trails and rugged terrain.",
    gradient: "from-navy to-brand/70",
    href: "/tours?style=discovery",
  },
  {
    icon: "⚡",
    title: "Raid Adventures",
    description: "Extreme routes, high passes, and raw Himalayan terrain.",
    gradient: "from-navy to-navy/80",
    href: "/tours?style=raid",
  },
  {
    icon: "🔧",
    title: "Training",
    description: "Learn off-roading and mountain riding from experts.",
    gradient: "from-brand/80 to-brand/40",
    href: "/tours?style=training",
  },
];

const doubled = [...categories, ...categories];

export function TravelStyles() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);
  
  const isHoveredRef = useRef(false);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInteractionStart = () => {
    isInteractingRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const handleInteractionEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 2500); // Resume auto-scroll after 2.5 seconds of inactivity
  };

  // Mouse Drag to Scroll Handlers (Desktop manual scrolling)
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    if (!scrollRef.current) return;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftVal.current = scrollRef.current.scrollLeft;
    handleInteractionStart();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Speed multiplier
    scrollRef.current.scrollLeft = scrollLeftVal.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isMouseDown.current) {
      isMouseDown.current = false;
      handleInteractionEnd();
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      // Calculate delta to keep speed identical regardless of monitor refresh rate
      const delta = (time - lastTime) / 16.666;
      lastTime = time;

      if (!isInteractingRef.current && !isHoveredRef.current && !isMouseDown.current) {
        // Continuous pixel-level scroll (0.6px per frame at 60fps)
        el.scrollLeft += 0.6 * delta;

        // Infinite loop wrap check
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section className="py-12 bg-white border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          
          {/* Left: Heading */}
          <div className="shrink-0 md:w-[240px] lg:w-[280px]">
            <div className="w-12 h-1 bg-brand rounded-full mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight leading-tight mb-2">
              Travel
              <br />
              Categories
            </h2>
            <p className="text-stone-500 text-sm md:text-base">
              From high-octane raids to peaceful escapes — pick the pace, and we'll map the route.
            </p>
          </div>

          {/* Right: Horizontal scrollable cards */}
          <div className="flex-1 min-w-0 select-none">
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={() => {
                isHoveredRef.current = false;
                handleMouseUpOrLeave();
              }}
              onMouseEnter={() => {
                isHoveredRef.current = true;
              }}
              onTouchStart={handleInteractionStart}
              onTouchEnd={handleInteractionEnd}
              className="flex gap-4 overflow-x-auto pb-4 no-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory"
            >
              {doubled.map((cat, i) => (
                <Link
                  key={`${cat.title}-${i}`}
                  href={cat.href}
                  draggable="false"
                  className="flex-shrink-0 w-[165px] sm:w-[190px] lg:w-[215px] snap-start rounded-2xl overflow-hidden p-5 bg-gradient-to-br from-stone-900 to-stone-900/90 border border-white/5 hover:border-brand/40 text-white group cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-md flex flex-col justify-between aspect-[3/4]"
                >
                  <div>
                    <span className="text-2xl sm:text-3xl mb-3 block" role="img" aria-hidden="true">
                      {cat.icon}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold mb-1.5 leading-tight truncate group-hover:text-brand transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-stone-300 leading-relaxed line-clamp-3 mb-3">
                      {cat.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-stone-400 group-hover:text-brand transition-colors">
                    Explore &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
