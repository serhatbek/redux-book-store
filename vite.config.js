import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/redux-book-store/',
  plugins: [react()],
  build: {
    // outDir: 'dist',
    assetsDir: './assets',
  },
});
