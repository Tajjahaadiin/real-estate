import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    prerender: {
      handleHttpError: ({ path, referrer, message, type }) => {
        // Ignore missing internal pages that are intentionally linked from
        // the footer (privacy/terms) and any other 404s during prerender.
        // For a static demo project we'd rather warn than fail the build.
        console.warn(`[prerender] ${type} ${path}${referrer ? ` (linked from ${referrer})` : ''}: ${message}`);
      },
      handleMissingId: 'warn'
    }
  }
};

export default config;
