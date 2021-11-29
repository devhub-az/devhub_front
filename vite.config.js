const path = require("path");
import {defineConfig} from 'vite'
import {createVuePlugin as vue} from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [vue()],
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
