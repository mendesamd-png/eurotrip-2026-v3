import { defineConfig } from 'astro/config';

// GitHub Pages: https://mendesamd-png.github.io/eurotrip-2026-v3/
export default defineConfig({
  site: 'https://mendesamd-png.github.io',
  base: '/eurotrip-2026-v3',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
