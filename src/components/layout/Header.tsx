"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CONTACT_PHONE, CONTACT_WHATSAPP } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

const DESTINATIONS = [
  { label: "Himachal Pradesh", href: "/tours?region=himachal", icon: "🏔️" },
  { label: "Ladakh", href: "/tours?region=ladakh", icon: "🏜️" },
  { label: "Uttarakhand", href: "/tours?region=uttarakhand", icon: "🌲" },
  { label: "Kashmir", href: "/tours?region=kashmir", icon: "🏞️" },
  { label: "Punjab", href: "/tours?region=punjab", icon: "🌾" },
];

const TRAVEL_STYLES = [
  { label: "Raid Adventure", href: "/tours?style=raid", icon: "⚡" },
  { label: "Discovery", href: "/tours?style=discovery", icon: "🌄" },
  { label: "Liberty", href: "/tours?style=liberty", icon: "🦅" },
  { label: "Training", href: "/tours?style=training", icon: "🔧" },
];

function FloatingDropdown({
  label,
  items,
  open,
  onEnter,
  onLeave,
  pathname,
}: {
  label: string;
  items: { label: string; href: string; icon: string }[];
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
  pathname: string;
}) {
  const isActive = items.some((item) => pathname.startsWith(item.href.split("?")[0]));

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className={`group flex items-center gap-1.5 text-[13px] font-bold tracking-wider uppercase transition-colors cursor-pointer ${
          isActive
            ? "text-white underline decoration-2 underline-offset-4"
            : "text-white/90 hover:text-white"
        }`}
      >
        {label}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2">
          <div className="rounded-2xl bg-white border border-stone-200 p-2 shadow-2xl">
            <div className="min-w-[220px]">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-brand text-white font-semibold"
                      : "text-stone-700 hover:bg-stone-50 hover:text-brand hover:pl-5"
                  }`}
                >
                  <span className="text-lg" aria-hidden="true">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(name);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 200);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* HEADER BAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        {/* Top Row: Logo, Call CTAs, Book Button */}
        <div
          className={`transition-all duration-300 border-b ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-stone-200/80 py-2.5"
              : "bg-gradient-to-b from-stone-950/80 to-transparent border-transparent py-4.5"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between">
            {/* Desktop Top Row (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center justify-between w-full">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Logo variant={scrolled ? "dark" : "light"} className="transition-all duration-300" />
              </Link>

              {/* Contact and Booking CTAs */}
              <div className="flex items-center gap-6">
                {/* Call Info */}
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand border border-brand/20 group-hover:scale-105 transition-transform">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left leading-none">
                    <span className="block text-[9px] uppercase tracking-widest text-stone-400 font-bold">Expert Guide</span>
                    <span className={`text-[13px] font-bold ${scrolled ? "text-stone-800" : "text-white"}`}>
                      {CONTACT_PHONE}
                    </span>
                  </div>
                </a>

                <Link
                  href="/contact"
                  className="rounded-full bg-brand hover:bg-brand/90 px-6 py-2.5 text-[12px] font-extrabold tracking-wider uppercase text-white shadow-md active:scale-[0.98] transition-all"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Mobile Header View (Centered logo, hidden on Desktop) */}
            <div className="flex lg:hidden items-center justify-center w-full">
              <Link href="/">
                <Logo variant={scrolled ? "dark" : "light"} className="h-8 transition-all" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row: Horizontal Navigation Bar with signature green background (Hidden on Mobile) */}
        <div className="bg-brand py-3.5 shadow-inner border-b border-brand/10 hidden lg:block">
          <div className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-center">
            <nav className="flex items-center gap-10">
              <FloatingDropdown
                label="Destinations"
                items={DESTINATIONS}
                open={dropdownOpen === "destinations"}
                onEnter={() => handleEnter("destinations")}
                onLeave={handleLeave}
                pathname={pathname}
              />
              <FloatingDropdown
                label="Travel Styles"
                items={TRAVEL_STYLES}
                open={dropdownOpen === "travel-styles"}
                onEnter={() => handleEnter("travel-styles")}
                onLeave={handleLeave}
                pathname={pathname}
              />
              <Link
                href="/about"
                className={`text-[13px] font-bold tracking-wider uppercase transition-colors ${
                  pathname === "/about"
                    ? "text-white underline decoration-2 underline-offset-4"
                    : "text-white/90 hover:text-white"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/tours"
                className={`text-[13px] font-bold tracking-wider uppercase transition-colors ${
                  pathname === "/tours"
                    ? "text-white underline decoration-2 underline-offset-4"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Departures
              </Link>
              <Link
                href="/contact"
                className={`text-[13px] font-bold tracking-wider uppercase transition-colors ${
                  pathname === "/contact"
                    ? "text-white underline decoration-2 underline-offset-4"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* MOBILE MENU DRAWER (Slide-in from right) */}
      <div
        className={`fixed inset-0 z-55 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-stone-950 border-l border-white/10 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
            <Logo variant="light" className="h-7" />
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-stone-400 hover:text-white"
              aria-label="Close menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6 no-scrollbar">
            
            {/* Regions Grid */}
            <div>
              <h4 className="text-[11px] uppercase tracking-wider text-stone-500 font-bold mb-3">Explore Regions</h4>
              <div className="grid grid-cols-2 gap-2">
                {DESTINATIONS.map((dest) => (
                  <Link
                    key={dest.href}
                    href={dest.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-white/5 bg-stone-900/50 hover:bg-brand/20 p-3 transition-all text-center"
                  >
                    <span className="text-2xl" role="img" aria-hidden="true">{dest.icon}</span>
                    <span className="text-xs font-semibold text-stone-200">{dest.label.split(" ")[0]}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Travel Styles Grid */}
            <div>
              <h4 className="text-[11px] uppercase tracking-wider text-stone-500 font-bold mb-3">Travel Styles</h4>
              <div className="grid grid-cols-2 gap-2">
                {TRAVEL_STYLES.map((style) => (
                  <Link
                    key={style.href}
                    href={style.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-white/5 bg-stone-900/50 hover:bg-brand/20 p-3 transition-all text-center"
                  >
                    <span className="text-2xl" role="img" aria-hidden="true">{style.icon}</span>
                    <span className="text-xs font-semibold text-stone-200">{style.label.split(" ")[0]}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Menu Links */}
            <div>
              <h4 className="text-[11px] uppercase tracking-wider text-stone-500 font-bold mb-2">Company</h4>
              <nav className="flex flex-col border-t border-white/5 divide-y divide-white/5">
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-stone-300 hover:text-white font-medium flex items-center justify-between"
                >
                  <span>About Us</span>
                  <span className="text-stone-600">&rarr;</span>
                </Link>
                <Link
                  href="/tours"
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-stone-300 hover:text-white font-medium flex items-center justify-between"
                >
                  <span>Tour Departures</span>
                  <span className="text-stone-600">&rarr;</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-stone-300 hover:text-white font-medium flex items-center justify-between"
                >
                  <span>Contact & Bookings</span>
                  <span className="text-stone-600">&rarr;</span>
                </Link>
              </nav>
            </div>
          </div>

          {/* Drawer Sticky Footer */}
          <div className="p-5 border-t border-white/5 bg-stone-900/40 space-y-3">
            <a
              href={`https://wa.me/${CONTACT_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-sm font-bold text-white transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 py-3 text-sm font-bold text-white transition-colors"
            >
              <svg className="h-4.5 w-4.5 text-stone-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Mountain Guide</span>
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM TAB BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-white/10 px-2 py-2 flex items-center justify-around shadow-2xl">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-1 flex-1 text-center py-1 transition-colors ${
            pathname === "/" ? "text-brand" : "text-stone-400 hover:text-white"
          }`}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </Link>

        <button
          onClick={() => setMobileOpen(true)}
          className={`flex flex-col items-center justify-center gap-1 flex-1 text-center py-1 transition-colors cursor-pointer ${
            mobileOpen ? "text-brand" : "text-stone-400 hover:text-white"
          }`}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Explore</span>
        </button>

        <Link
          href="/tours"
          className={`flex flex-col items-center justify-center gap-1 flex-1 text-center py-1 transition-colors ${
            pathname.startsWith("/tours") ? "text-brand" : "text-stone-400 hover:text-white"
          }`}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Tours</span>
        </Link>

        <a
          href={`https://wa.me/${CONTACT_WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 flex-1 text-center py-1 text-stone-400 hover:text-emerald-500 transition-colors"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Chat</span>
        </a>

        <a
          href={`tel:${CONTACT_PHONE}`}
          className="flex flex-col items-center justify-center gap-1 flex-1 text-center py-1 text-stone-400 hover:text-white transition-colors"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>
      </div>
    </>
  );
}
