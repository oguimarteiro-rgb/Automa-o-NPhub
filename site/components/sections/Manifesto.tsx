"use client";

import { motion } from "framer-motion";
import { EditorialHeader } from "../EditorialHeader";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative w-full bg-cream-dark px-6 py-28 sm:px-10 md:px-14 md:py-36 lg:px-20"
    >
      <div className="paper-texture relative mx-auto max-w-6xl">
        <EditorialHeader edition="ED. 01 · NP HUB · MANIFESTO" index="01 / 06" />
        <div className="section-divider mb-14" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="editorial-credit">o que move a marca</span>
            <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.02em]">
              <span className="serif-italic font-normal text-graphite-soft">
                falar
              </span>{" "}
              <span className="text-olive">certo</span>
              <br />
              não é falar alto.
            </h2>
          </motion.div>

          <motion.div
            className="space-y-7 text-[clamp(1rem,1.2vw,1.18rem)] leading-[1.7] text-graphite"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="drop-cap">
              A maioria das marcas fala alto. A gente prefere falar{" "}
              <span className="text-olive">certo</span>.
            </p>
            <p>
              Empresas perdem dinheiro com marketing ruim. Conteúdo que ninguém
              vê. Agência que promete e some. Solução genérica que ignora a
              realidade do negócio.
            </p>
            <p>
              A NP Hub nasceu para fazer{" "}
              <span className="border-b border-navy/70 pb-[2px]">
                diferente
              </span>
              . Pensamos antes de criar. Entendemos antes de automatizar.
              Resolvemos antes de vender solução.
            </p>
            <p>
              Não somos agência. Não somos produtora. Não somos empresa de
              tecnologia. Somos um{" "}
              <span className="serif-italic font-medium">hub</span> — onde
              conteúdo, estratégia e automação se conectam para transformar
              presença em resultado.
            </p>
          </motion.div>
        </div>

        <motion.p
          className="mt-16 text-right text-[clamp(1rem,1.15vw,1.2rem)] text-graphite-soft"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="serif-italic">— nisso, pensai.</span>
        </motion.p>
      </div>
    </section>
  );
}
