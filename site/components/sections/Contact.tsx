"use client";

import { motion } from "framer-motion";
import { EditorialHeader } from "../EditorialHeader";
import { ContactForm } from "../ContactForm";

export function Contact() {
  return (
    <section
      id="convite"
      className="relative w-full overflow-hidden bg-cream-dark px-6 py-28 sm:px-10 md:px-14 md:py-36 lg:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream-dark"
      />
      <div className="relative mx-auto max-w-6xl">
        <EditorialHeader edition="ED. 06 · NP HUB · CONVITE" index="06 / 06" />
        <div className="section-divider mb-14" />

        <motion.p
          className="mx-auto max-w-3xl text-center text-[clamp(1rem,1.4vw,1.35rem)] text-graphite-soft"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="serif-italic">
            se a sua empresa investe em marketing e quer ver isso virar
            resultado —
          </span>
        </motion.p>

        <motion.h2
          className="mx-auto mt-10 max-w-5xl text-center text-[clamp(3.4rem,9.5vw,8rem)] font-black leading-[0.95] tracking-[-0.035em] text-graphite"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          a gente
          <br />
          precisa
          <br />
          <span className="text-olive">conversar.</span>
        </motion.h2>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5% 0px" }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
