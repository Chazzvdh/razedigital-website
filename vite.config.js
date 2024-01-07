// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist', // De uitvoermap voor het gebouwde project
        emptyOutDir: true, // Leeg de uitvoermap voor het bouwen
    },
});
