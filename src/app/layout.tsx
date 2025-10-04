import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doozl AI",
  description:
    "This is the official website for Doozl AI, where problems meet AI solutions.",
  icons: {
    icon: "/Doozl_sm.png",
    shortcut: "/Doozl_sm.png",
    apple: "/Doozl_sm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100svh] flex flex-col`}
      >
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 py-8 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
