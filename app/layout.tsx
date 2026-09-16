import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/layout/UtilityBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.visioncoretech.com"),
  title: {
    default: "VisionCore Technologies | Digital Transformation & Technology Solutions",
    template: "%s | VisionCore Technologies",
  },
  description:
    "VisionCore Technologies is a unified technology partner delivering branding, web, software, cloud infrastructure and digital growth solutions under one roof.",
  openGraph: {
    title: "VisionCore Technologies | Digital Transformation & Technology Solutions",
    description:
      "One technology partner. Five digital capabilities: Creative, Web, Software, Cloud and Growth.",
    siteName: "VisionCore Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisionCore Technologies",
    description: "Build. Digitize. Grow.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
          <UtilityBar />
          <Navbar />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
