import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/basics-101/",
  plugins: [react(), vanillaExtractPlugin(), svgr()],
});
