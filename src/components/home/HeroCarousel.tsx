"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function HeroCarousel() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/tours?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col justify-end overflow-hidden bg-zinc-950 pt-28 pb-12 md:pt-36 md:pb-16">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://am0p1qvg0oxzzbwb.private.blob.vercel-storage.com/hero.mp4?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfYU0wUDFRVkcwb1haekJXYiIsIm93bmVySWQiOiJ0ZWFtX0R5NXJjZDIxRWI4bFhLOFpvSWFvU3A4RSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgzMDM3MDA4MDg3LCJpYXQiOjE3ODI5OTM4MDgxNTd9.ZCG3T0Bxw4BAld1H99DmDQrOWZep_CNgugWMkqHcqu8&vercel-blob-signature=jsh4ZU5RA7X8HWOKvNj8E_EGZQLCI71fsMP8rlZ0EoE"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Contrast */}
      <div
        className="absolute inset-0 bg-stone-950/60"
        aria-hidden="true"
      />

      {/* Main Content (Centered horizontally, positioned slightly down vertically) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex justify-center pt-24 md:pt-28">
        <div className="max-w-2xl text-center w-full mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white mb-3 bg-brand/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-brand/25">
            ⛰️ Adventure Travel Specialist
          </span>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-3 tracking-tight">
            Explore The Unexplored
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-stone-200 mb-6 max-w-xl leading-relaxed mx-auto">
            Join our premium motorcycle expeditions, trekking circuits, and overland heritage journeys across the Himalayas.
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
    </section>
  );
}
