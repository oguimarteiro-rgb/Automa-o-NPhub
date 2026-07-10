"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type BrandSymbolProps = {
  size?: number;
  animateRotation?: boolean;
  rotationDuration?: number;
  pulseDot?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * NP Hub mark — graphite circle, white paisley cutout, olive dot.
 * Decoupled from the raw SVG so we can independently animate
 * the rotation of the circle and the pulse of the dot.
 */
export function BrandSymbol({
  size = 240,
  animateRotation = true,
  rotationDuration = 60,
  pulseDot = true,
  className,
  ariaLabel = "Símbolo NP Hub",
}: BrandSymbolProps) {
  const rotationTransition = useMemo(
    () => ({
      repeat: Infinity,
      ease: "linear" as const,
      duration: rotationDuration,
    }),
    [rotationDuration],
  );

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1080 1080"
      width={size}
      height={size}
      role="img"
      aria-label={ariaLabel}
      className={className}
      style={{ transformOrigin: "50% 50%" }}
      animate={animateRotation ? { rotate: 360 } : undefined}
      transition={animateRotation ? rotationTransition : undefined}
    >
      <circle cx="540" cy="540" r="377" fill="#1f1f1f" />
      <path
        fill="#f5f1e8"
        d="M678.64,737.5c5.48-6.34,4.54-15.98-2.03-21.19-24.83-19.7-88.1-71.39-85.5-84.38,3.23-16.15,50.31-4.61,98.76-52.26,46.07-45.3,68.78-90.33,35.53-176.86-46.13-120.06-190.83-118.14-190.83-118.14,0,0-65.61-2.85-128.47,49.07-6.69,5.52-7.1,15.65-.96,21.78l77.12,77.12c.36.36.72.69,1.11,1,2.74,2.23,15.05,13.83-15.02,20.62-33.26,7.51-88.04,36.94-114,95.74-.16.37-.34.73-.53,1.08-3.58,6.42-42.3,80.81,32.56,172.91,0,0,81.99,109.59,229.94,57.17.69-.25,1.37-.54,2.02-.89,6.53-3.45,43.63-23.51,60.29-42.78Z"
      />
      <motion.circle
        cx="540"
        cy="540"
        r="60.81"
        fill="#6b7a3f"
        style={{ transformOrigin: "540px 540px" }}
        animate={
          pulseDot
            ? { opacity: [1, 0.7, 1], scale: [1, 1.06, 1] }
            : undefined
        }
        transition={
          pulseDot
            ? { repeat: Infinity, duration: 3, ease: "easeInOut" }
            : undefined
        }
      />
    </motion.svg>
  );
}

/**
 * Building variant used by the initial loader. Each part animates
 * in sequence: circle → paisley cutout → olive dot pulses once.
 */
export function BrandSymbolBuild({
  size = 180,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1080 1080"
      width={size}
      height={size}
      role="img"
      aria-label="NP Hub"
      className={className}
    >
      <motion.circle
        cx="540"
        cy="540"
        r="377"
        fill="#1f1f1f"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "540px 540px" }}
      />
      <motion.path
        fill="#f5f1e8"
        d="M678.64,737.5c5.48-6.34,4.54-15.98-2.03-21.19-24.83-19.7-88.1-71.39-85.5-84.38,3.23-16.15,50.31-4.61,98.76-52.26,46.07-45.3,68.78-90.33,35.53-176.86-46.13-120.06-190.83-118.14-190.83-118.14,0,0-65.61-2.85-128.47,49.07-6.69,5.52-7.1,15.65-.96,21.78l77.12,77.12c.36.36.72.69,1.11,1,2.74,2.23,15.05,13.83-15.02,20.62-33.26,7.51-88.04,36.94-114,95.74-.16.37-.34.73-.53,1.08-3.58,6.42-42.3,80.81,32.56,172.91,0,0,81.99,109.59,229.94,57.17.69-.25,1.37-.54,2.02-.89,6.53-3.45,43.63-23.51,60.29-42.78Z"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "540px 540px" }}
      />
      <motion.circle
        cx="540"
        cy="540"
        r="60.81"
        fill="#6b7a3f"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.25, 1], opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 1.05,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 0.6, 1],
        }}
        style={{ transformOrigin: "540px 540px" }}
      />
    </motion.svg>
  );
}
