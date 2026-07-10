"use client";

import { HTMLMotionProps, motion, useMotionValue, useSpring } from "framer-motion";
import { forwardRef, useRef } from "react";
import { clsx } from "clsx";

type MagneticButtonProps = Omit<HTMLMotionProps<"button">, "ref"> & {
  strength?: number;
  className?: string;
};

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  function MagneticButton(
    { strength = 0.35, className, children, ...rest },
    forwardedRef,
  ) {
    const localRef = useRef<HTMLButtonElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
    const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });

    const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const node = localRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      x.set(relX * strength);
      y.set(relY * strength);
    };

    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.button
        ref={(node) => {
          localRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: springX, y: springY }}
        className={clsx("magnetic-btn", className)}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);
