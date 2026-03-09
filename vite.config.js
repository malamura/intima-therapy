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
                profile: resolve(__dirname, 'therapist-profile.html'),
                resources: resolve(__dirname, 'resources.html'),
                post: resolve(__dirname, 'post.html'),
                about: resolve(__dirname, 'about.html'),
                service: resolve(__dirname, 'service.html'),
                condition: resolve(__dirname, 'condition.html'),
            },
        },
    },
});