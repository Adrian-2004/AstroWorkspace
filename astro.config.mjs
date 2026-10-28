// @ts-check

import { defineConfig } from 'astro/config';



import tailwindcss from '@tailwindcss/vite';



import react from '@astrojs/react';



import mdx from '@astrojs/mdx';

import node from '@astrojs/node'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      'metadata-compile-sites-table.trycloudflare.com'
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx()],
 
  adapter: node({mode: 'standalone'}),
});