import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thermal: resolve(__dirname, 'thermal.html'),
        mechanical: resolve(__dirname, 'mechanical.html'),
        materials: resolve(__dirname, 'materials.html'),
      },
    },
  },
});
