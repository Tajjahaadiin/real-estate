import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
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
