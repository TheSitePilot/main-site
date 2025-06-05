import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://thesitepilot.com", // 🔁 Replace with your actual domain (optional but recommended)
  integrations: [tailwind()],
  output: 'static'
});
