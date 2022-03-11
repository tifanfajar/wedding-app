// import React from 'react';
import dynamic from 'next/dynamic'
export const ThemeConf = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/admin/theme',
            Component: dynamic(() => import('./list'))
        },
        {
            path     : '/admin/add-theme',
            Component: dynamic(() => import('./add'))
        },
    ]
};
