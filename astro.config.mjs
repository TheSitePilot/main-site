import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Custom domain: https://thesitepilot.com (served from root, no base path)
  site: "https://thesitepilot.com",
  integrations: [tailwind()],
  output: 'static'
});
