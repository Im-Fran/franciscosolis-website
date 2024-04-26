import '@/js/bootstrap';
import '@/scss/app.scss';
import 'tailwindcss/tailwind.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    title: (title) => `${title} | FranciscoSolis`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup: ({el, App, props}) => createRoot(el).render(<App {...props} />),
    progress: {
        color: '#5271FF',
    },
}).then(r => {});
