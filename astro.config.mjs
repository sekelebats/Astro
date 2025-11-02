import { defineConfig } from 'astro/config';
import deno from '@astrojs/deno';

export default defineConfig({
  site: 'https://your-site.deno.dev',
  output: 'server', // Ubah dari 'static' jadi 'server'
  adapter: deno(),
});
