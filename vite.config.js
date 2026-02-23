import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                therapists: resolve(__dirname, 'our-therapists.html'),
                // додайте сюди інші сторінки, якщо вони є, наприклад:
                // about: resolve(__dirname, 'about.html'),
            },
        },
    },
});