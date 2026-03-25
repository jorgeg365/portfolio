"use client";

import { useEffect, useRef, useState } from "react";

const TRACK_SRC = "/zelda-mario-lofi-rifti-beats.mp3";

export default function GlobalAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showStartOverlay, setShowStartOverlay] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const attemptPlayback = async () => {
      try {
        await audio.play();
        setShowStartOverlay(false);
      } catch {
        setShowStartOverlay(true);
      }
    };

    const resumePlayback = () => {
      void attemptPlayback();
    };

    void attemptPlayback();

    window.addEventListener("touchstart", resumePlayback, { passive: true });
    window.addEventListener("pointerdown", resumePlayback, { passive: true });
    window.addEventListener("click", resumePlayback);
    window.addEventListener("keydown", resumePlayback);
    document.addEventListener("visibilitychange", resumePlayback);

    return () => {
      window.removeEventListener("touchstart", resumePlayback);
      window.removeEventListener("pointerdown", resumePlayback);
      window.removeEventListener("click", resumePlayback);
      window.removeEventListener("keydown", resumePlayback);
      document.removeEventListener("visibilitychange", resumePlayback);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={TRACK_SRC}
        autoPlay
        loop
        preload="auto"
        playsInline
        aria-hidden="true"
        className="hidden"
      />
      {showStartOverlay ? (
        <button
          type="button"
          onClick={() => {
            const audio = audioRef.current;

            if (!audio) {
              return;
            }

            void audio.play().then(() => {
              setShowStartOverlay(false);
            });
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 px-6 text-center text-white backdrop-blur-sm"
        >
          <span className="rounded-full border border-white/30 bg-white/10 px-6 py-4 text-base font-semibold tracking-[0.2em] uppercase">
            Tap To Enter
          </span>
        </button>
      ) : null}
    </>
  );
}
