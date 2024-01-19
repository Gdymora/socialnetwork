import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                ' <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />',
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
        }),
        react(),
    ],
});
