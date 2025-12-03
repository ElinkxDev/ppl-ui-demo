import { resolve } from "path";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  server: {
    open: true,
    port: 5175,
    fs: {
      allow: [".", resolve(__dirname, "../ppl-ui")],
    },
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
