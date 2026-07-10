// One-shot: filter Google Fonts CSS to latin + latin-ext, download those woff2
// locally, rewrite url()s to relative paths, and prepend the brand font vars.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(HERE, 'gf.css'), 'utf8');

// Split into (comment, block) pairs. Google emits `/* subset */\n@font-face{…}`.
const KEEP = new Set(['latin', 'latin-ext']);
const re = /\/\*\s*([a-z-]+)\s*\*\/\s*(@font-face\s*\{[^}]*\})/g;
let m, kept = [];
const downloads = [];
while ((m = re.exec(raw))) {
  const subset = m[1];
  if (!KEEP.has(subset)) continue;
  let block = m[2];
  const fam = /font-family:\s*'([^']+)'/.exec(block)?.[1] ?? 'font';
  const wght = /font-weight:\s*(\d+)/.exec(block)?.[1] ?? '400';
  const style = /font-style:\s*([a-z]+)/.exec(block)?.[1] ?? 'normal';
  const url = /url\((https:[^)]+\.woff2)\)/.exec(block)?.[1];
  if (!url) continue;
  const fname = `${fam.replace(/\s+/g, '')}-${wght}-${style}-${subset}.woff2`;
  block = block.replace(url, `./${fname}`);
  kept.push(block);
  downloads.push({ url, fname });
}

// Download each woff2.
for (const { url, fname } of downloads) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 Chrome/120.0' } });
  if (!res.ok) throw new Error(`fetch ${url} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(join(HERE, fname), buf);
  console.error(`  ↓ ${fname} (${buf.length} bytes)`);
}

const header =
  `/* NP Hub brand fonts — self-hosted Inter + Playfair Display (OFL), latin + latin-ext. */\n` +
  `:root {\n  --font-inter: "Inter", system-ui, -apple-system, sans-serif;\n` +
  `  --font-playfair: "Playfair Display", Georgia, serif;\n}\n\n`;

writeFileSync(join(HERE, 'brand-fonts.css'), header + kept.join('\n') + '\n');
console.error(`\n✓ brand-fonts.css: ${kept.length} @font-face rules, ${downloads.length} files`);
