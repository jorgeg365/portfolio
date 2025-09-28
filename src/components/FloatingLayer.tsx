"use client";
import { useEffect, useRef, useState } from "react";

type CpuSprite = {
  id: number;
  topPercent: number; // 0-100
  durationMs: number; // animation duration
  delayMs: number; // initial delay
  sizePx: number;
  reverse: boolean;
};

function CpuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 10H14V14H10V10Z" fill="currentColor" />
      <path d="M4 9H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 15H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 9H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 15H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 4V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 4V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 4V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 17V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 17V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 17V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function generateSprites(count = 10): CpuSprite[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    topPercent: Math.random() * 90 + 5, // avoid edges
    durationMs: 12000 + Math.round(Math.random() * 8000),
    delayMs: Math.round(Math.random() * 4000),
    sizePx: 20 + Math.round(Math.random() * 24),
    reverse: Math.random() > 0.5,
  }));
}

export default function FloatingLayer() {
  const [enabled] = useState(true);
  const [sprites, setSprites] = useState<CpuSprite[] | null>(null);
  const mouseRef = useRef<HTMLDivElement | null>(null);

  // Generate sprites only after mount to avoid SSR/CSR mismatch
  useEffect(() => {
    setSprites(generateSprites(10));
  }, []);

  // Mouse follower that lags slightly behind cursor
  useEffect(() => {
    const el = mouseRef.current;
    if (!el) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    const speed = 0.15; // follow smoothing

    function onMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;
    }

    let raf = 0;
    function loop() {
      x += (tx - x) * speed;
      y += (ty - y) * speed;
      if (el) {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      {/* CPU sprites: render only after mount */}
      {sprites?.map((s) => (
        <div
          key={s.id}
          className={`absolute text-blue-300/80 dark:text-blue-200/80 animate-fly ${s.reverse ? "reverse" : ""}`}
          style={{
            top: `${s.topPercent}%`,
            animationDuration: `${s.durationMs}ms`,
            animationDelay: `${s.delayMs}ms`,
          }}
        >
          <CpuIcon className="drop-shadow" />
        </div>
      ))}

      {/* Mouse follower */}
      <div
        ref={mouseRef}
        className="pointer-events-none fixed z-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/60 dark:border-blue-200/60"
        style={{ width: 20, height: 20, boxShadow: "0 0 20px rgba(59,130,246,0.35)" }}
      />
    </div>
  );
}
