const path = require("path");
import {defineConfig} from 'vite'
const { createVuePlugin } = require("vite-plugin-vue2");

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [createVuePlugin()],
        resolve: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        build: {
            outDir: "./dist/",
            sourcemap: true,
            rollupOptions: {
                output: {
                    entryFileNames: `[name].js`,
                    chunkFileNames: `[name].js`,
                    assetFileNames: `[name].[ext]`
                }
            },
        },
    }
})
