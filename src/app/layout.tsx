import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

// Font setup
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

// Metadata
export const metadata: Metadata = {
  title: "Info Event Lumajang",
  description:
    "Temukan event, budaya, dan kolaborasi komunitas terbaik di Lumajang. Platform berbagi kegiatan lokal dan eksplorasi budaya.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/android-chrome-192x192.png", type: "image/png" },
      { url: "/android-chrome-512x512.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Info Event Lumajang",
    description:
      "Kolaborasi budaya dan komunitas dalam satu platform. Jelajahi event lokal Lumajang!",
    url: "https://infoeventlumajang.vercel.app",
    siteName: "Info Event Lumajang",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Info Event Lumajang Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans antialiased selection:bg-[#A13232]/20 text-gray-800 bg-gradient-to-b from-[#EAEAEA] to-[#1C4C57]/10`}
      >
        {children}
      </body>
    </html>
  );
}
