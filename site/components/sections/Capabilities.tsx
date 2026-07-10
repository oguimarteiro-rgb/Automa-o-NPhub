"use client";

import { motion } from "framer-motion";
import { EditorialHeader } from "../EditorialHeader";

type Capability = {
  number: string;
  title: string;
  tagline: string;
  items: [string, string, string];
};

const capabilities: Capability[] = [
  {
    number: "01",
    title: "Conteúdo & Audiovisual",
    tagline: "pessoas reais conversando com pessoas reais",
    items: [
      "Vídeo, drone e captação de imóveis",
      "Reels e conteúdo humanizado",
      "Direção criativa audiovisual",
    ],
  },
  {
    number: "02",
    title: "Estratégia & Narrativa",
    tagline: "estratégia vem antes de estética",
    items: [
      "Posicionamento e narrativa de marca",
      "Calendário editorial estratégico",
      "Direção criativa integrada",
    ],
  },
  {
    number: "03",
    title: "Automação & Tecnologia",
    tagline: "tecnologia trabalhando enquanto você dorme",
    items: [
      "Fluxos de WhatsApp e CRM",
      "IA aplicada ao comercial",
      "Organização inteligente de leads",
    ],
  },
  {
    number: "04",
    title: "Performance & Resultado",
    tagline: "porque achismo não paga conta",
    items: [
      "Relatórios analíticos mensais",
      "Leitura e otimização contínua",
      "Dashboards customizados",
    ],
  },
];

export function Capabilities() {
  return (
    <section
      id="capacidades"
      className="relative w-full bg-cream px-6 py-28 sm:px-10 md:px-14 md:py-36 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <EditorialHeader
          edition="ED. 02 · NP HUB · CAPACIDADES"
          index="02 / 06"
        />
        <div className="section-divider mb-14" />

        <motion.h2
          className="mb-16 text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.02] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          O que fazemos{" "}
          <span className="serif-italic font-normal text-graphite-soft">
            por aqui
          </span>{" "}
          <span className="text-olive">—</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8 lg:gap-10">
          {capabilities.map((cap, i) => (
            <CapabilityCard key={cap.number} cap={cap} index={i} />
          ))}
        </div>

        <motion.p
          className="mt-20 text-right text-[clamp(1rem,1.25vw,1.4rem)] text-graphite-soft"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="serif-italic">
            as quatro frentes trabalham juntas. essa é a diferença.
          </span>
        </motion.p>
      </div>
    </section>
  );
}

function CapabilityCard({ cap, index }: { cap: Capability; index: number }) {
  return (
    <motion.article
      className="group relative isolate flex flex-col gap-6 overflow-hidden border border-graphite/12 bg-cream p-8 transition-[transform,background-color,box-shadow,border-color] duration-500 ease-premium hover:-translate-y-1 hover:border-olive/35 hover:bg-cream-dark hover:shadow-[0_24px_60px_-30px_rgba(31,31,31,0.35)] sm:p-10"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="flex items-start justify-between gap-6">
        <span
          aria-hidden
          className="font-sans text-[clamp(3.5rem,7vw,6rem)] font-black leading-none tracking-tight text-transparent transition-colors duration-500 ease-premium group-hover:text-olive"
          style={{
            WebkitTextStroke: "1.5px var(--olive)",
          }}
        >
          {cap.number}
        </span>
        <span className="editorial-credit pt-3 text-right text-graphite-soft">
          frente / {cap.number}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-[clamp(1.45rem,2.1vw,2rem)] font-bold leading-[1.15] tracking-[-0.01em]">
          {cap.title}
        </h3>
        <p className="text-[clamp(0.95rem,1.15vw,1.05rem)] text-graphite-soft">
          <span className="serif-italic">{cap.tagline}</span>
        </p>
      </div>

      <ul className="mt-auto space-y-2 border-t border-graphite/10 pt-6 text-sm leading-relaxed text-graphite">
        {cap.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[0.95rem] text-graphite-soft"
          >
            <span aria-hidden className="mt-[0.45rem] block h-px w-4 bg-olive" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
