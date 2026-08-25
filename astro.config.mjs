// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import tina from '@tinacms/astro/integration';
import { tinaAdminDevRedirect } from '@tinacms/astro/vite';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://izabelazaborniak-smartdrug.pl',
    integrations: [tina(), mdx(), sitemap(), react()],
    vite: {
        plugins: [tailwindcss(), tinaAdminDevRedirect()],
    },
});
