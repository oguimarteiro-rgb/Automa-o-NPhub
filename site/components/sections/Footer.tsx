"use client";

import { BrandSymbol } from "../BrandSymbol";

export function Footer() {
  return (
    <footer className="relative w-full bg-cream px-6 pb-12 pt-16 sm:px-10 md:px-14 lg:px-20">
      <div className="section-divider" />
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row md:items-end">
        <div className="flex items-center gap-4">
          <BrandSymbol
            size={42}
            animateRotation={false}
            pulseDot={false}
            className="shrink-0"
          />
          <span className="editorial-credit text-graphite">NP HUB</span>
        </div>

        <nav className="flex items-center gap-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="editorial-credit transition-colors duration-500 ease-premium hover:text-olive"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="editorial-credit transition-colors duration-500 ease-premium hover:text-olive"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nphubcontato@gmail.com"
            className="editorial-credit transition-colors duration-500 ease-premium hover:text-olive"
          >
            Email
          </a>
        </nav>

        <p className="text-[clamp(0.95rem,1.05vw,1.05rem)] text-graphite-soft">
          <span className="serif-italic">pense, conecte, resolva.</span>
        </p>
      </div>

      <p className="mt-12 text-center text-xs tracking-[0.18em] text-graphite-soft/70">
        © 2026 NP HUB · TODOS OS DIREITOS RESERVADOS
      </p>
    </footer>
  );
}
