import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "./",
  build: {
    outDir: "dist-svelte",
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
