import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    imagetools(),
    tanstackStart({ server: { entry: "server" } }),
    nitro(process.env["VERCEL"] ? {} : { preset: "cloudflare_module" }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
