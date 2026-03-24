"use client";
import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5" />
      <path d="M12 19v2.5" />
      <path d="M2.5 12H5" />
      <path d="M19 12h2.5" />
      <path d="m5.64 5.64 1.77 1.77" />
      <path d="m16.59 16.59 1.77 1.77" />
      <path d="m18.36 5.64-1.77 1.77" />
      <path d="m7.41 16.59-1.77 1.77" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 15.5A8.5 8.5 0 0 1 8.5 6a8.7 8.7 0 1 0 9.5 9.5Z" />
      <path d="M15.4 5.3v1.4" />
      <path d="M18.7 8.6h-1.4" />
      <path d="m17.8 6.2-1 1" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light") {
        setDarkMode(false);
      } else if (saved === "dark") {
        setDarkMode(true);
      } else {
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(prefersDark);
      }
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }
  }, [darkMode, mounted]);

  const isLight = !darkMode;

  return (
    <button
      type="button"
      onClick={() => setDarkMode((value) => !value)}
      role="switch"
      aria-checked={darkMode}
      aria-label="Toggle day and night mode"
      className={`absolute right-6 top-1/2 flex h-12 w-[88px] -translate-y-1/2 items-center rounded-full border px-1.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
        isLight
          ? "border-neutral-200 bg-[#f0efec] text-[#111111] shadow-[0_10px_22px_rgba(0,0,0,0.08)]"
          : "border-black bg-black text-white shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
      }`}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
          isLight
            ? "translate-x-0 border-neutral-200 bg-white text-[#111111]"
            : "translate-x-9 border-black bg-white text-black"
        }`}
      >
        {isLight ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
