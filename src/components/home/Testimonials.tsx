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
    const cardW = Math.min(el.clientWidth / 2.5, 400);
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
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el || isTransitioning.current) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        isTransitioning.current = true;
        el.scrollTo({ left: 0, behavior: "auto" });
        setTimeout(() => {
          isTransitioning.current = false;
          checkScroll();
        }, 50);
      } else {
        const cardW = Math.min(el.clientWidth / 2.5, 400);
        isTransitioning.current = true;
        el.scrollBy({ left: cardW, behavior: "smooth" });
        setTimeout(() => {
          isTransitioning.current = false;
          checkScroll();
        }, 600);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-brand rounded-full mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">
            What Our Riders Say
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Real stories from adventurers who rode with us
          </p>
        </div>

        <div className="relative">
          {/* Arrows */}
          {!atStart && (
            <button
              onClick={() => scrollOne("left")}
              className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-stone-100 hidden md:flex items-center justify-center text-stone-600 hover:text-brand transition-colors"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
          >
            {doubled.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="flex-shrink-0 w-[85vw] sm:w-[500px] lg:w-[560px]"
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>

          {!atEnd && (
            <button
              onClick={() => scrollOne("right")}
              className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-stone-100 hidden md:flex items-center justify-center text-stone-600 hover:text-brand transition-colors"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
