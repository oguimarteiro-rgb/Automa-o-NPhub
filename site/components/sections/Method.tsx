"use client";

import { motion } from "framer-motion";
import { EditorialHeader } from "../EditorialHeader";

const steps = [
  {
    number: "01",
    title: "Ouvir",
    description: "entender o problema antes de propor solução.",
  },
  {
    number: "02",
    title: "Pensar",
    description: "estratégia vem antes de estética.",
  },
  {
    number: "03",
    title: "Criar",
    description: "conteúdo, audiovisual e automação trabalhando juntos.",
  },
  {
    number: "04",
    title: "Medir",
    description: "sem dado, é só achismo.",
  },
];

export function Method() {
  return (
    <section
      id="metodo"
      className="relative w-full bg-cream-dark px-6 py-28 sm:px-10 md:px-14 md:py-36 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <EditorialHeader edition="ED. 03 · NP HUB · MÉTODO" index="03 / 06" />
        <div className="section-divider mb-14" />

        <motion.h2
          className="mb-20 max-w-3xl text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.02] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Como a gente{" "}
          <span className="serif-italic font-normal">pensa</span> um projeto{" "}
          <span className="text-olive">—</span>
        </motion.h2>

        <ol className="flex flex-col">
          {steps.map((step, i) => (
            <motion.li
              key={step.number}
              className="group relative grid grid-cols-[auto_1fr] items-center gap-6 border-t border-navy/20 py-10 md:grid-cols-[120px_1fr_auto] md:gap-10 md:py-14"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="editorial-credit text-graphite-soft md:text-base md:tracking-[0.18em]">
                {step.number}
              </span>
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
                <h3 className="text-[clamp(1.8rem,4.5vw,3.4rem)] font-medium leading-[1] tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-[clamp(0.95rem,1.15vw,1.1rem)] text-graphite-soft">
                  <span className="serif-italic">{step.description}</span>
                </p>
              </div>
              <motion.span
                aria-hidden
                className="hidden text-3xl text-olive md:block"
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.li>
          ))}
          <li className="border-t border-navy/20" aria-hidden />
        </ol>

        <motion.p
          className="mt-16 text-right text-[clamp(1rem,1.25vw,1.4rem)] text-graphite-soft"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="serif-italic">método, não receita.</span>
        </motion.p>
      </div>
    </section>
  );
}
