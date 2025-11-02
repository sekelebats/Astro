import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://modernblog.com', // Ganti dengan domain Anda
  output: 'static',
  build: {
    format: 'directory'
  }
});
