import "./bootstrap";
import "../css/app.css";
import "../css/galery.css";
import "../css/profile.css";
import "../css/users.css";
import "../css/workshop.css";
import "../css/audioAndVideo.css";
import "../css/scrollbar.css";
import "../css/style.css";
import "../css/mobileLayout.css";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./store";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

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
            <Provider store={store}>
                <Router>
                    <StrictMode>
                        <App {...props} />
                    </StrictMode>
                </Router>
            </Provider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
