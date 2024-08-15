import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-call-to-action",
            entry: "ilw-call-to-action.js",
            fileName: "ilw-call-to-action",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-call-to-action.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
