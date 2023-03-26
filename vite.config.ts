import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@tailwindConfig": resolve(__dirname, "tailwind.config.cjs"),
        },
    },
    optimizeDeps: {
        include: ["@tailwindConfig"],
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
