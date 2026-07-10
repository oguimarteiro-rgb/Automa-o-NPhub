"use client";

import { motion } from "framer-motion";
import { EditorialHeader } from "../EditorialHeader";

const items = [
  "a sua empresa já investe em marketing mas sente que o retorno não é claro.",
  "você tem produto bom mas comunicação fraca.",
  "você valoriza parceria de longo prazo, não fornecedor pontual.",
  "você quer resultado mensurável, não promessa bonita.",
];

export function ForWho() {
  return (
    <section
      id="para-quem"
      className="relative w-full bg-cream px-6 py-28 sm:px-10 md:px-14 md:py-36 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <EditorialHeader
          edition="ED. 04 · NP HUB · PARA QUEM"
          index="04 / 06"
        />
        <div className="section-divider mb-14" />

        <motion.h2
          className="mb-16 max-w-3xl text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.02] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          A NP Hub é{" "}
          <span className="serif-italic font-normal">para você</span> se{" "}
          <span className="text-olive">—</span>
        </motion.h2>

        <ul className="flex flex-col">
          {items.map((text, i) => (
            <motion.li
              key={text}
              className="group flex items-start gap-5 border-t border-graphite/12 py-8 text-[clamp(1.15rem,2vw,1.7rem)] leading-[1.35] tracking-[-0.01em] last:border-b md:gap-7"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                aria-hidden
                className="mt-[0.4em] inline-block text-olive transition-transform duration-500 ease-premium group-hover:translate-x-[6px]"
              >
                →
              </span>
              <span className="text-graphite">{text}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[clamp(1.6rem,3.4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            Se for você,{" "}
            <a
              href="#convite"
              className="relative inline-block text-olive transition-colors duration-500 ease-premium hover:text-olive-soft"
            >
              vamos conversar.
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left scale-x-100 bg-olive"
              />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
