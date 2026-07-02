"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { tours } from "@/lib/data/tours";
import { REGION_LABELS, TOUR_TYPE_LABELS } from "@/lib/constants";

const featuredTours = tours.filter((t) => t.featured).slice(0, 4);

export function HeroCarousel() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTour = featuredTours[activeIndex];
  const [searchQuery, setSearchQuery] = useState("");

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % featuredTours.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/tours?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col justify-end overflow-hidden bg-zinc-950 pt-28 pb-12 md:pt-36 md:pb-16">
      {/* Background Images */}
      {featuredTours.map((tour, index) => (
        <div
          key={tour.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ backgroundImage: `url(${tour.images[0]})` }}
          aria-hidden={index !== activeIndex}
        />
      ))}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-stone-950/30 lg:bg-gradient-to-r lg:from-stone-950/75 lg:via-stone-950/20 lg:to-transparent"
        aria-hidden="true"
      />

      {/* Main Content (Centered horizontally, positioned slightly down vertically) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex justify-center pt-24 md:pt-28">
        <div className="max-w-2xl text-center w-full mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white mb-3 bg-brand/15 backdrop-blur-md px-3 py-1 rounded-full border border-brand/20">
            <span>{activeTour && TOUR_TYPE_LABELS[activeTour.type]}</span>
            <span className="text-white/30">&bull;</span>
            <span>{activeTour && REGION_LABELS[activeTour.region]}</span>
          </span>

          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3 tracking-tight">
            {activeTour?.name}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-stone-300 mb-6 max-w-xl leading-relaxed mx-auto">
            {activeTour?.subtitle}
          </p>

          {/* Simple Search Input Bar (Centered below description) */}
          <form onSubmit={handleSearchSubmit} className="w-[85%] sm:w-full max-w-lg relative mx-auto">
            <input
              type="text"
              placeholder="Pick Best Suitable Packages, Destinations & More..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full pl-5 pr-12 py-3 sm:pl-6 sm:pr-14 sm:py-3.5 bg-white border border-stone-200 text-stone-900 placeholder-stone-500 text-xs sm:text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 shadow-lg transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-1.5 sm:right-2.5 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-brand text-white hover:bg-brand/90 transition-all duration-300 cursor-pointer"
              aria-label="Search"
            >
              <svg className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute top-1/2 right-6 md:right-10 -translate-y-1/2 z-20 flex flex-col gap-3">
        {featuredTours.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-brand scale-125 w-3 h-3 ring-4 ring-brand/30"
                : "bg-white/40 hover:bg-white/70 w-2 h-2"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
