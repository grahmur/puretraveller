"use client";

import { useState, useRef, useEffect } from "react";
import { testimonials } from "@/lib/data/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const doubled = [...testimonials, ...testimonials];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  };

  const scrollOne = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el || isTransitioning.current) return;
    const cardW = Math.min(el.clientWidth / 2.5, 524); // Card width + gap
    isTransitioning.current = true;
    el.scrollBy({
      left: dir === "left" ? -cardW : cardW,
      behavior: "smooth",
    });
    setTimeout(() => {
      isTransitioning.current = false;
      checkScroll();
    }, 600);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (isTransitioning.current) return;

      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScrollLeft - 10) {
        isTransitioning.current = true;
        el.scrollTo({ left: 0, behavior: "auto" });
        setTimeout(() => {
          isTransitioning.current = false;
          checkScroll();
        }, 50);
      } else {
        const cardW = Math.min(el.clientWidth / 2.5, 524); // Card width + gap
        isTransitioning.current = true;
        el.scrollBy({ left: cardW, behavior: "smooth" });
        setTimeout(() => {
          isTransitioning.current = false;
          checkScroll();
        }, 600);
      }
    }, 4000); // 4-second delay

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-10 pb-12 bg-stone-50 border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-12 h-1 bg-brand rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            What Our Riders Say
          </h2>
          <p className="mt-2 text-stone-500 text-base md:text-lg max-w-xl">
            Real stories from adventurers who rode with us across high mountain passes
          </p>
        </div>

        {/* Horizontal Slider Area */}
        <div className="relative group/arrows">
          
          {/* Left Navigation Arrow */}
          {!atStart && (
            <button
              onClick={() => scrollOne("left")}
              className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-stone-200/80 flex items-center justify-center text-stone-600 hover:text-brand hover:scale-105 active:scale-95 transition-all cursor-pointer opacity-0 group-hover/arrows:opacity-100 hidden md:flex"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar snap-x snap-mandatory px-[7.5vw] sm:px-0"
          >
            {doubled.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="flex-shrink-0 w-[85vw] sm:w-[500px] lg:w-[560px] snap-center sm:snap-start"
              >
                <TestimonialCard testimonial={t} className="h-full" />
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          {!atEnd && (
            <button
              onClick={() => scrollOne("right")}
              className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-stone-200/80 flex items-center justify-center text-stone-600 hover:text-brand hover:scale-105 active:scale-95 transition-all cursor-pointer opacity-0 group-hover/arrows:opacity-100 hidden md:flex"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
