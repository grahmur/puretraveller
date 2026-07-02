"use client";

import Link from "next/link";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
  SOCIAL_LINKS,
} from "@/lib/constants";

const destinations = [
  { label: "Himachal Pradesh", href: "/tours?region=himachal" },
  { label: "Ladakh", href: "/tours?region=ladakh" },
  { label: "Uttarakhand", href: "/tours?region=uttarakhand" },
  { label: "Kashmir", href: "/tours?region=kashmir" },
  { label: "Punjab", href: "/tours?region=punjab" },
];

const travelStyles = [
  { label: "Raid Adventure", href: "/tours?style=raid" },
  { label: "Discovery", href: "/tours?style=discovery" },
  { label: "Liberty", href: "/tours?style=liberty" },
  { label: "Training", href: "/tours?style=training" },
];

export function Footer() {
  return (
    <footer className="bg-brand text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        {/* Newsletter */}
        <div className="mb-16 border-b border-white/10 pb-12 text-center">
          <h3 className="mb-2 text-2xl font-bold text-white">
            Join the Pure Traveller Community
          </h3>
          <p className="mb-6 text-white/60">
            Subscribe to receive our latest tours, travel inspiration, and
            exclusive offers.
          </p>
          <form
            className="mx-auto flex flex-col sm:flex-row max-w-md gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/20 focus:ring-brand"
            />
            <button
              type="submit"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-brand"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">{SITE_NAME}</h3>
            <p className="mb-2 text-sm font-semibold text-white">
              {SITE_TAGLINE}
            </p>
            <p className="text-sm leading-relaxed">{SITE_DESCRIPTION}</p>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Destinations
            </h3>
            <ul className="space-y-2">
              {destinations.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Styles */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Travel Styles
            </h3>
            <ul className="space-y-2">
              {travelStyles.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mb-6 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-white/50">{CONTACT_ADDRESS}</li>
            </ul>

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h3>
            <div className="flex gap-4 text-xs">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Facebook
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                YouTube
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-sm text-white/40">
          &copy; 2026 {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
