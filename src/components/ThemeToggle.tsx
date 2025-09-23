"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((d) => !d)}
      className="px-4 py-2 rounded bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 transition-colors"
      style={{ position: "absolute", right: 24 }}
      aria-label="Toggle dark/light mode"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
