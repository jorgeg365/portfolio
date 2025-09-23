"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";

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
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${darkMode ? "dark" : "light"}`}
      >
        <nav className="w-full flex justify-center gap-8 py-6 text-lg font-semibold bg-transparent">
          <button
            onClick={() => setDarkMode((d) => !d)}
            className="px-4 py-2 rounded bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 transition-colors"
            style={{ position: "absolute", right: 24 }}
            aria-label="Toggle dark/light mode"
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>
        {children}
      </body>
    </html>
  );
}
