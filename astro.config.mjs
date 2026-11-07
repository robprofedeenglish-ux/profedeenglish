import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeMidCta from './src/lib/rehype-mid-cta.mjs';

export default defineConfig({
  site: 'https://profedeenglish.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeMidCta],
  },
});
