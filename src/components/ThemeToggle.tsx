"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Initialize from system preference or saved preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light") {
        setDarkMode(false);
      } else if (saved === "dark") {
        setDarkMode(true);
      } else {
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
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
      try { localStorage.setItem("theme", "dark"); } catch {}
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      try { localStorage.setItem("theme", "light"); } catch {}
    }
  }, [darkMode, mounted]);

  const toggle = () => setDarkMode((d) => !d);

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={darkMode}
      aria-label="Toggle dark/light mode"
      className="relative inline-flex items-center h-9 w-16 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-gray-200/80 dark:bg-gray-700/70 backdrop-blur"
      style={{ position: "absolute", right: 24 }}
    >
      {/* Icons */}
      <span className="pointer-events-none absolute left-1 text-yellow-500">☀️</span>
      <span className="pointer-events-none absolute right-1 text-blue-200">🌙</span>
      {/* Thumb */}
      <span
        className={`inline-block h-7 w-7 rounded-full bg-white dark:bg-gray-900 shadow transition-transform duration-300 ${darkMode ? "translate-x-8" : "translate-x-1"}`}
      />
    </button>
  );
}
