import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 5175,
    fs: {
      allow: [
        ".",
        resolve(__dirname, "../ppl-ui"),
      ],
    },
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});