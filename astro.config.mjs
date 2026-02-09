import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // For GitHub Pages project site: https://thesitepilot.github.io/main-site/
  site: "https://thesitepilot.github.io",
  base: "/main-site",
  integrations: [tailwind()],
  output: 'static'
});
