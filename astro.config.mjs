// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dirección pública: necesaria para la vista previa de WhatsApp (og:image)
  site: 'https://boda-abimael-y-nohelia-2026.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});