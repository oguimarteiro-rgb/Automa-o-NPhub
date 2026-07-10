// Reproducible cssEntry builder for the NP Hub design system.
// Compiles Tailwind (globals.css → tokens + utilities + custom classes),
// inlines /noise.svg as a data URI (so paper-texture works with no host),
// and defines the brand font CSS vars that next/font sets at runtime.
// Run before the converter; output → .design-sync/.cache/compiled.css (cfg.cssEntry).
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE = resolve(HERE, '..');
const CACHE = join(HERE, '.cache');
mkdirSync(CACHE, { recursive: true });

const twOut = join(CACHE, 'tw.css');
execFileSync(process.execPath, [
  join(SITE, 'node_modules/tailwindcss/lib/cli.js'),
  '-c', join(HERE, 'tailwind.ds.cjs'),
  '-i', join(SITE, 'app/globals.css'),
  '-o', twOut, '--minify',
], { cwd: SITE, stdio: 'inherit' });

let css = readFileSync(twOut, 'utf8');

// Inline noise.svg as a data URI so .paper-texture needs no host root.
const svg = readFileSync(join(SITE, 'public/noise.svg'), 'utf8').trim();
const dataUri = `data:image/svg+xml,${encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22')}`;
css = css.replace(/url\((['"]?)\/noise\.svg\1\)/g, `url("${dataUri}")`);

// Define the brand font families next/font injected as CSS vars at runtime.
css += `\n:root{--font-inter:"Inter",system-ui,-apple-system,sans-serif;--font-playfair:"Playfair Display",Georgia,serif}\n`;

const out = join(CACHE, 'compiled.css');
writeFileSync(out, css);
console.error(`✓ compiled.css written (${css.length} bytes)`);
