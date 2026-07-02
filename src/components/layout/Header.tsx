"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_PHONE } from "@/lib/constants";
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
        className={`group flex items-center gap-1.5 text-[15px] font-semibold tracking-wide transition-colors ${
          isActive ? "text-brand" : "text-white hover:text-white"
        }`}
      >
        {label}
        <svg
          className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        {!open && (
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
        )}
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2">
          <div className="rounded-2xl bg-white/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/20 ring-1 ring-black/5">
            <div className="min-w-[220px]">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-brand/10 text-brand/80 font-semibold"
                      : "text-stone-700 hover:bg-stone-50 hover:text-brand/80 hover:pl-5"
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

function MobileDropdown({
  label,
  items,
  pathname,
  onClose,
}: {
  label: string;
  items: { label: string; href: string; icon: string }[];
  pathname: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const isActive = items.some((item) => pathname.startsWith(item.href.split("?")[0]));

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg font-semibold text-white hover:text-brand transition-colors"
      >
        {label}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="ml-4 space-y-1 border-l border-white/10 pl-4 pt-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-base text-stone-300 hover:text-brand transition-colors"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const glass = scrolled
    ? "bg-black/70 backdrop-blur-xl"
    : "";

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`transition-all duration-300 ${glass}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-4">
          {/* Logo */}
          <Link href="/" className="text-white">
            <Logo variant="dark" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
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
              className={`text-[15px] font-semibold tracking-wide transition-colors ${
                pathname === "/about" ? "text-brand" : "text-white hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/tours"
              className={`text-[15px] font-semibold tracking-wide transition-colors ${
                pathname === "/tours" ? "text-brand" : "text-white hover:text-white"
              }`}
            >
              Departures
            </Link>
          </nav>

          {/* Desktop right */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="rounded-full p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Call us"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-5 py-2 text-[15px] font-semibold tracking-wide text-white transition-all duration-300 hover:border-brand hover:text-brand hover:shadow-lg hover:shadow-brand/10"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col bg-black/95 backdrop-blur-xl lg:hidden overflow-y-auto pt-20">
          <nav className="flex flex-col gap-1 px-4">
            <MobileDropdown
              label="Destinations"
              items={DESTINATIONS}
              pathname={pathname}
              onClose={() => setMobileOpen(false)}
            />
            <MobileDropdown
              label="Travel Styles"
              items={TRAVEL_STYLES}
              pathname={pathname}
              onClose={() => setMobileOpen(false)}
            />
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-lg font-semibold text-white hover:text-brand transition-colors"
            >
              About
            </Link>
            <Link
              href="/tours"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-lg font-semibold text-white hover:text-brand transition-colors"
            >
              Departures
            </Link>
          </nav>
          <div className="mt-6 flex flex-col gap-3 px-4 pb-8">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 text-lg font-semibold text-white hover:border-brand hover:text-brand transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT_PHONE}
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-brand px-4 py-3 text-center text-lg font-semibold text-black hover:bg-brand/80 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
