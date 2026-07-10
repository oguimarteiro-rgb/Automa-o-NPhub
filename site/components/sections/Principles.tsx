"use client";

import { motion } from "framer-motion";
import { EditorialHeader } from "../EditorialHeader";

const principles = [
  "prometemos o que não cabe na realidade.",
  "vendemos pacote pronto que ignora o seu negócio.",
  "somos fornecedor, somos parceiro.",
  "achamos que marketing é só estética.",
];

export function Principles() {
  return (
    <section
      id="principios"
      className="relative w-full bg-cream-dark px-6 py-28 sm:px-10 md:px-14 md:py-36 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <EditorialHeader
          edition="ED. 05 · NP HUB · PRINCÍPIOS"
          index="05 / 06"
        />
        <div className="section-divider mb-14" />

        <motion.h2
          className="mb-20 max-w-3xl text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.02] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          O que a gente{" "}
          <span className="text-olive">NÃO</span>{" "}
          <span className="serif-italic font-normal">faz</span>{" "}
          <span className="text-olive">—</span>
        </motion.h2>

        <ul className="flex flex-col gap-1 md:gap-2">
          {principles.map((text, i) => (
            <motion.li
              key={text}
              className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-navy/15 py-8 last:border-b md:gap-10 md:py-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.span
                className="font-sans text-[clamp(2.3rem,5vw,4.2rem)] font-black leading-none tracking-[-0.02em] text-olive"
                initial={{ scale: 1.08, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.08 + 0.1,
                  ease: [0.7, 0, 0.3, 1],
                }}
              >
                NÃO
              </motion.span>
              <span className="text-[clamp(1.1rem,1.8vw,1.55rem)] leading-[1.35] tracking-[-0.01em] text-graphite">
                {text}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="mt-20 text-right text-[clamp(1rem,1.25vw,1.4rem)] text-graphite-soft"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="serif-italic">dizer não também é fazer marca.</span>
        </motion.p>
      </div>
    </section>
  );
}
