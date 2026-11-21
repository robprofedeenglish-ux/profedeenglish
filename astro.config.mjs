import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeMidCta from './src/lib/rehype-mid-cta.mjs';

export default defineConfig({
  site: 'https://profedeenglish.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/aviso-legal') && !page.includes('/raffle'),
    }),
  ],
  markdown: {
    // Sin resaltado de código: los bloques ``` se usan para prompts que el lector copia, con el estilo de la plantilla.
    syntaxHighlight: false,
    rehypePlugins: [rehypeMidCta],
  },
});
