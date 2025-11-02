import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://modernblog.com',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
