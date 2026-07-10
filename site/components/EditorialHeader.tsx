"use client";

import { motion } from "framer-motion";

type EditorialHeaderProps = {
  edition: string;
  index: string;
};

export function EditorialHeader({ edition, index }: EditorialHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 pb-6">
      <motion.span
        className="editorial-credit"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {edition}
      </motion.span>
      <motion.span
        className="editorial-credit"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {index}
      </motion.span>
    </div>
  );
}
