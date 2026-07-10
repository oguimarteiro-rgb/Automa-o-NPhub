"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BrandSymbol } from "../BrandSymbol";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const symbolY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const symbolOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex min-h-[100svh] w-full flex-col px-6 pt-10 sm:px-10 md:px-14 lg:px-20"
    >
      {/* Top editorial bar */}
      <div className="relative z-10 flex items-center justify-between gap-4">
        <span className="editorial-credit">NP HUB · DESDE 2026</span>
        <nav className="hidden items-center gap-7 sm:flex">
          {[
            { href: "#manifesto", label: "Manifesto" },
            { href: "#capacidades", label: "Capacidades" },
            { href: "#metodo", label: "Método" },
            { href: "#convite", label: "Contato" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="editorial-credit transition-colors duration-500 ease-premium hover:text-olive"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="section-divider mt-6" />

      <div className="relative grid flex-1 grid-cols-1 items-center gap-10 pb-16 pt-12 sm:pt-20 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* Headline */}
        <div className="relative z-10 flex flex-col gap-10">
          <h1 className="font-sans text-graphite">
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[clamp(2.6rem,7vw,6.8rem)] font-medium leading-[1.02] tracking-[-0.02em]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Pensamos o problema.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[clamp(2.6rem,7vw,6.8rem)] font-medium leading-[1.02] tracking-[-0.02em]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.28,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Criamos o{" "}
                <span className="serif-italic font-normal text-olive">
                  caminho.
                </span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="max-w-xl text-[clamp(1rem,1.45vw,1.35rem)] text-graphite-soft"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="serif-italic">
              Conteúdo humano, tecnologia inteligente e resultado real.
            </span>
          </motion.p>
        </div>

        {/* Brand symbol */}
        <motion.div
          className="relative z-0 flex justify-center lg:justify-end"
          style={{ y: symbolY, opacity: symbolOpacity }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <BrandSymbol
            size={420}
            className="h-[min(60vw,420px)] w-[min(60vw,420px)] drop-shadow-[0_30px_60px_rgba(31,31,31,0.08)]"
          />
        </motion.div>
      </div>

      {/* Bottom bar with scroll indicator */}
      <div className="relative z-10 flex items-end justify-between pb-8">
        <span className="editorial-credit hidden sm:inline">
          ED. NP HUB · MANIFESTO
        </span>
        <motion.a
          href="#manifesto"
          className="group flex items-center gap-3 text-graphite-soft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="editorial-credit">role para começar</span>
          <span className="relative flex h-12 w-3 items-start justify-center">
            <motion.span
              className="mt-1 block h-2 w-2 rounded-full bg-olive"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
