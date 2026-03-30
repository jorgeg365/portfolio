import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "../components/ThemeToggle";
import FloatingLayer from "../components/FloatingLayer";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
// removed unused Image import
import Chatbot from "../components/Chatbot";
import GlobalAudioPlayer from "../components/GlobalAudioPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jorge Grullon Portfolio",
  description: "Portfolio of Jorge Grullon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function(){
            try {
              var c = document.documentElement.classList;
              if(!c.contains('dark') && !c.contains('light')) { c.add('dark'); }
            } catch (e) {}
          })();
        `}</Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased flex flex-col`}
      >
        <FloatingLayer />
        <GlobalAudioPlayer />
        <nav className="w-full flex items-center justify-center gap-8 py-6 text-lg font-semibold bg-transparent relative z-50">
          <div className="flex items-center gap-8 border-b-4 border-white/10 pb-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <ThemeToggle />
        </nav>
        <main className="flex-1">
          {children}
        </main>
        <footer className="py-4 text-sm opacity-70 text-center relative z-20">
          Built by Jorge - &copy; {new Date().getFullYear()} <span className="font-bold text-white">Jorge Grullon</span>
        </footer>
        <Chatbot />
        <Analytics />
      </body>
    </html>
  );
}
