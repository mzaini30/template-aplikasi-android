import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import pages from "vite-plugin-pages-svelte";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    pages(),
    legacy({
      renderModernChunks: false,
    }),
  ],
});
