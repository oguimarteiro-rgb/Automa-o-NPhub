"use client";

import { motion } from "framer-motion";
import { Fragment, ReactNode } from "react";
import { clsx } from "clsx";

type WordRevealProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  highlights?: Record<string, string>;
};

const sanitize = (word: string) => word.replace(/[^a-zA-ZÀ-ſ]+/g, "").toLowerCase();

export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.08,
  as: Tag = "span",
  highlights = {},
}: WordRevealProps) {
  const words = text.split(/(\s+)/);

  const content: ReactNode = words.map((token, i) => {
    if (/^\s+$/.test(token)) return <Fragment key={`s-${i}`}>{token}</Fragment>;
    const clean = sanitize(token);
    const extra = highlights[clean];
    return (
      <span key={`w-${i}`} className="inline-block overflow-hidden align-baseline">
        <motion.span
          className={clsx("inline-block", wordClassName, extra)}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + (i / 2) * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {token}
        </motion.span>
      </span>
    );
  });

  return <Tag className={className}>{content}</Tag>;
}
