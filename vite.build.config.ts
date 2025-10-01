import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-call-to-action",
            entry: "ilw-call-to-action.ts",
            fileName: "ilw-call-to-action",
            formats: ["es"],
        },
    },
    server: {
        hmr: false,
    },
});
