import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        vue(),
        viteMockServe({
            supportTs: false
        })
    ],
});