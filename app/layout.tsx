import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bananihotelarena.com"),
  title: "Banani Hotel Arena | Best Residential Hotel in Banani, Dhaka",
  description:
    "Looking for the best residential hotel in Banani, Dhaka? Banani Hotel Arena offers clean, private AC single, couple & family rooms with modern amenities on Road 27.",
  keywords: [
    "hotel in Banani",
    "residential hotel Dhaka",
    "budget hotel Banani Dhaka",
    "AC couple room Banani",
    "Banani Hotel Arena",
    "hotel in Banani Dhaka",
    "hotel near Road 27 Banani",
    "family room Banani",
    "luxury budget hotel Dhaka",
    "Banani hotel booking",
    "single AC room Banani",
  ],
  authors: [{ name: "Banani Hotel Arena" }],
  creator: "Banani Hotel Arena",
  publisher: "Banani Hotel Arena",
  applicationName: "Banani Hotel Arena",
  alternates: {
    canonical: "https://bananihotelarena.com",
  },
  openGraph: {
    title: "Banani Hotel Arena | Best Residential Hotel in Banani, Dhaka",
    description:
      "Looking for a comfortable and convenient residential hotel in Banani, Dhaka? Banani Hotel Arena offers comfortable AC rooms, free Wi-Fi, and 24/7 hospitality.",
    url: "https://bananihotelarena.com",
    siteName: "Banani Hotel Arena",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/Family-Room-scaled-1.webp",
        width: 1200,
        height: 800,
        alt: "Banani Hotel Arena - Premium Residential Hotel in Banani, Dhaka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banani Hotel Arena | Best Residential Hotel in Banani, Dhaka",
    description:
      "Comfort, privacy, and convenience in Banani, Dhaka. Clean AC rooms, hot & cold water, and room service.",
    images: ["/images/Family-Room-scaled-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg" },
    ],
  },
  verification: {
    google: "google81466049bda2cc27",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans bg-cream-100 text-charcoal antialiased selection:bg-gold selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
