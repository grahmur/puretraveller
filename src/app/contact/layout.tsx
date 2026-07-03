import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pure Traveller for motorcycle tour bookings, trekking enquiries, custom adventure packages, or any travel-related questions. Call, email, or send us a message — we reply within 24 hours.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Pure Traveller | Book Your Adventure",
    description:
      "Get in touch with Pure Traveller for motorcycle tour bookings, trekking enquiries, custom adventure packages, or any travel-related questions. Call, email, or send us a message — we reply within 24 hours.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://puretraveller.in/contact",
  name: "Contact Pure Traveller",
  description:
    "Get in touch with Pure Traveller for motorcycle tour bookings, trekking enquiries, and custom adventure packages across North India.",
  provider: {
    "@type": "Organization",
    name: "Pure Traveller",
    telephone: "+91 96547 23856",
    email: "hello@puretraveller.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manali",
      addressRegion: "Himachal Pradesh",
      addressCountry: "IN",
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
