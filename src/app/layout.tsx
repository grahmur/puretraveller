import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_DESCRIPTION.split(".")[0]}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "bike tours India",
    "motorcycle tours Ladakh",
    "Himachal bike trips",
    "mountain trekking",
    "adventure travel",
    "North India tours",
    "Leh Ladakh bike tour",
    "Spiti Valley ride",
    "Pure Traveller",
    "motorcycle tours India",
    "Royal Enfield tours",
    "bike rental Himachal",
    "trekking Uttarakhand",
    "Ladakh bike trip",
    "mountain adventures India",
    "adventure travel agency",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/og-default.webp",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/og-default.webp"],
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Pure Traveller",
  url: "https://puretraveller.in",
  logo: "https://puretraveller.in/images/logo-light.webp",
  description:
    "Motorcycle and adventure tour operator in North India — Himachal, Ladakh, Uttarakhand, Kashmir and beyond.",
  telephone: "+91 96547 23856",
  email: "hello@puretraveller.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manali",
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://instagram.com/puretraveller",
    "https://facebook.com/puretraveller",
    "https://youtube.com/@puretraveller",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
