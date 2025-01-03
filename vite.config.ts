import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    root: resolve(__dirname, 'resources/js'),
    build: {
        outDir: resolve(__dirname, 'public/dist'),
        rollupOptions: {
            input: resolve(__dirname, 'resources/js/App.tsx'),
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
    },
});
