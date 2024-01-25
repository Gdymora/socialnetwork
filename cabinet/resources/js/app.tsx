import './bootstrap';
import '../css/app.css';
import '../css/style.css';
import '../css/galery.css';
import '../css/profile.css';
import '../css/users.css';
import '../css/workshop.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        console.log(name)//Auth/Login Dashboard
        const parts = name.split('/');
        const path = parts.length > 1 ?  `${name}`: `${name}/${name}`;
        console.log(path)//Auth/Login Dashb
        return resolvePageComponent(`./Pages/${path}.tsx`, import.meta.glob('./Pages/**/*.tsx'));
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});