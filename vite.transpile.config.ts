import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-call-to-action",
            entry: "ilw-call-to-action.ts",
            fileName: "ilw-call-to-action",
            formats: ["es"],
        },
        rollupOptions: {
            external: [/^@?lit/, /^@illinois-toolkit/],
        },
    },
    server: {
        hmr: false,
    },
    plugins: [dts()],
});
