"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
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
