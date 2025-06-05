import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://thesitepilot.github.io/main-site", // ✅ use your actual GitHub Pages URL
  base: "/main-site/", // ✅ matches your repo name
  integrations: [tailwind()],
  output: 'static', // ✅ tells Astro to generate static HTML
});
