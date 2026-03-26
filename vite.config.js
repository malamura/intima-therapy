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
                help: resolve(__dirname, 'help.html'),
                contact: resolve(__dirname, 'contact.html'),
                terms: resolve(__dirname, 'terms.html'),
                funnel: resolve(__dirname, 'funnel.html'),
            },
        },
    },
    // build: {
    //     // Файли будуть збиратися в папку dist всередині твоєї теми
    //     outDir: 'dist',
    //     rollupOptions: {
    //         input: {
    //             // Вкажи шлях до свого головного JS файлу
    //             // Саме він має містити import './style.css' та ініціалізацію Alpine
    //             bundle: resolve(__dirname, 'src/js/main.js'),
    //         },
    //         output: {
    //             // Фіксуємо назви, щоб WP їх завжди бачив
    //             entryFileNames: `[name].js`,
    //             chunkFileNames: `[name].js`,
    //             assetFileNames: `[name].[ext]`
    //         }
    //     }
    // }
});