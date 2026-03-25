"use client";

import { useEffect, useRef } from "react";

const TRACK_SRC = "/zelda-mario-lofi-rifti-beats.mp3";

export default function GlobalAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const attemptPlayback = async () => {
      try {
        await audio.play();
      } catch {
        // Browser autoplay policies may require a user gesture first.
      }
    };

    const resumePlayback = () => {
      void attemptPlayback();
    };

    void attemptPlayback();

    window.addEventListener("pointerdown", resumePlayback, { passive: true });
    window.addEventListener("keydown", resumePlayback);
    document.addEventListener("visibilitychange", resumePlayback);

    return () => {
      window.removeEventListener("pointerdown", resumePlayback);
      window.removeEventListener("keydown", resumePlayback);
      document.removeEventListener("visibilitychange", resumePlayback);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={TRACK_SRC}
      loop
      preload="auto"
      hidden
      aria-hidden="true"
    />
  );
}
