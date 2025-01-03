import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

const app_name = import.meta.env.VITE_APP_NAME || 'Laravel Inertia React';

createInertiaApp({
    title: title => `${title ? `${title} - `:''}${app_name}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.tsx');
        return pages[`./Pages/${name}.tsx`]();
    },
    setup({el, App, props}) {
        createRoot(el).render(<App {...props} />);
    },
}).then(r => console.log(r));
