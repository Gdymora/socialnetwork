import "./bootstrap";
import "../css/app.css";
import "../css/galery.css";
import "../css/profile.css";
import "../css/users.css";
import "../css/workshop.css";
import "../css/audioAndVideo.css";
import "../css/scrollbar.css";
import "../css/style.css";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { BrowserRouter as Router } from "react-router-dom";
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const parts = name.split("/");
        const path = parts.length > 1 ? `${name}` : `${name}/${name}`;
        return resolvePageComponent(
            `./Pages/${path}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        );
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <Router>
                <App {...props} />
            </Router>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
