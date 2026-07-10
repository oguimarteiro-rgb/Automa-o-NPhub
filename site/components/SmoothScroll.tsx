"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let lenis: { destroy: () => void } | null = null;
    let rafId: number | null = null;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    (async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;
      const instance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      });

      lenis = instance;

      const raf = (time: number) => {
        instance.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };

      rafId = window.requestAnimationFrame(raf);
    })();

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
