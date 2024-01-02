import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/festival-greeting-app/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        greeting: resolve(__dirname, "greeting.html"),
      },
    },
  },
});
