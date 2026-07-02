"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { REGION_OPTIONS } from "@/lib/constants";

const MONTH_OPTIONS = [
  { value: "", label: "Any Date" },
  { value: "2026-07", label: "Jul 2026" },
  { value: "2026-08", label: "Aug 2026" },
  { value: "2026-09", label: "Sep 2026" },
  { value: "2026-10", label: "Oct 2026" },
  { value: "2026-11", label: "Nov 2026" },
  { value: "2026-12", label: "Dec 2026" },
  { value: "2027-01", label: "Jan 2027" },
  { value: "2027-02", label: "Feb 2027" },
  { value: "2027-03", label: "Mar 2027" },
  { value: "2027-04", label: "Apr 2027" },
  { value: "2027-05", label: "May 2027" },
];

const selectClasses =
  "w-full rounded-lg border border-stone-200 px-4 py-3 bg-white text-stone-800 outline-none transition-all duration-200 focus:border-brand focus:ring-2 focus:ring-brand/20 appearance-none cursor-pointer";

export function HeroSection() {
  const router = useRouter();
  const [region, setRegion] = useState("");
  const [departure, setDeparture] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/tours");
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
      {/* ---- Background Layers ---- */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.15)_0%,transparent_70%)]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.10)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
      </div>

      {/* ---- Texture / Pattern Overlay ---- */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ---- Decorative Geometric Lines ---- */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-16 left-10 w-px h-40 bg-gradient-to-b from-brand/0 via-brand/20 to-brand/0 rotate-12" />
        <div className="absolute top-1/3 right-16 w-px h-56 bg-gradient-to-b from-brand/0 via-brand/15 to-brand/0 -rotate-6" />
        <div className="absolute top-24 left-0 right-0 mx-auto w-[1px] h-32 bg-gradient-to-b from-brand/0 via-brand/10 to-brand/0" />
        <div className="absolute top-20 right-1/4 w-48 h-48 rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-48 left-1/3 w-24 h-24 rounded-full border border-brand/10" />
      </div>

      {/* ---- Mountain Silhouette ---- */}
      <div className="absolute bottom-0 left-0 right-0 h-[28vh] pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            clipPath:
              "polygon(0% 100%, 3% 65%, 8% 72%, 14% 40%, 20% 58%, 26% 25%, 33% 48%, 40% 32%, 47% 55%, 53% 18%, 60% 42%, 67% 28%, 74% 50%, 80% 22%, 87% 45%, 93% 30%, 100% 20%, 100% 100%)",
            backgroundColor: "rgba(255,255,255,0.03)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            clipPath:
              "polygon(0% 100%, 6% 78%, 12% 82%, 19% 58%, 27% 72%, 34% 48%, 41% 62%, 49% 52%, 56% 68%, 63% 42%, 71% 58%, 78% 48%, 85% 62%, 92% 52%, 100% 40%, 100% 100%)",
            backgroundColor: "rgba(255,255,255,0.02)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            clipPath:
              "polygon(0% 100%, 10% 85%, 18% 88%, 25% 72%, 35% 80%, 42% 65%, 50% 75%, 60% 62%, 68% 74%, 76% 60%, 85% 72%, 92% 60%, 100% 55%, 100% 100%)",
            backgroundColor: "rgba(255,255,255,0.015)",
          }}
        />
      </div>

      {/* ---- Main Content ---- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-6xl mx-auto py-24 md:py-32">
        {/* Divider line */}
        <div className="w-16 h-1 bg-brand rounded-full mb-8" />

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Road Trips &amp;
          <br />
          Motorcycle Adventures
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-brand/90 mb-12 max-w-2xl">
          Royal Enfield journeys across the Himalayas
        </p>

        {/* ---- Search Form ---- */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Destination */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="hero-region"
                className="text-xs font-semibold uppercase tracking-wider text-stone-500"
              >
                Destination
              </label>
              <select
                id="hero-region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className={selectClasses}
              >
                <option value="">All Destinations</option>
                {REGION_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Departure */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="hero-departure"
                className="text-xs font-semibold uppercase tracking-wider text-stone-500"
              >
                Departure
              </label>
              <select
                id="hero-departure"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className={selectClasses}
              >
                {MONTH_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full rounded-lg bg-brand hover:bg-brand/80 text-white font-semibold px-6 py-3 transition-all duration-200 shadow-lg shadow-brand/25 hover:shadow-brand/40 active:scale-[0.98] cursor-pointer"
              >
                Search Tours
              </button>
            </div>
          </div>
        </form>

        {/* Browse all link */}
        <Link
          href="/tours"
          className="mt-6 inline-flex items-center gap-2 text-brand hover:text-brand/70 transition-colors duration-200 font-medium"
        >
          Or browse all departures
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      {/* ---- Scroll Indicator ---- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white/40"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
