import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig(({command})=>({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/css/style.css",
                "resources/css/galery.css",
                "resources/css/profile.css",
                "resources/css/users.css",
                "resources/css/workshop.css",
                "resources/js/app.tsx",
            ],
            ssr: "resources/js/ssr.tsx",
            refresh: true,
            buildDirectory: 'build'
        }),
        react()
    ],
    server: {
        host: "0.0.0.0",
        hmr: {
            host: "localhost",
        },
        watch: {
            usePolling: true,
        },
        port: 5174,
    },
    build: {
        chunkSizeWarningLimit: 1600,
        rollupOptions: {
            output: {
                manualChunks:
                    command === "build" && !process.env.SSR
                        ? {
                              // Розділяємо тільки великі third-party бібліотеки
                              redux: ["@reduxjs/toolkit", "react-redux"],
                              router: ["react-router-dom"],
                              utils: [
                                  "moment",
                                  "howler",
                                  "music-metadata-browser",
                              ],
                              ui: [
                                  "react-toastify",
                                  "@headlessui/react",
                                  "@heroicons/react",
                              ],
                          }
                        : undefined,
            },
        },
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.tsx',
        },
        assetsDir: '',
    },
    optimizeDeps: {
        include: ["@inertiajs/inertia", "@inertiajs/inertia-react"],
    },
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
}));
