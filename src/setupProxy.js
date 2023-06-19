import { defineConfig } from 'vite';
import { createProxy } from 'vite-plugin-proxy';

export default defineConfig({
  plugins: [
    createProxy({
      '/api': {
        target: 'http://localhost:8080', // Ganti dengan alamat server API Anda
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }),
  ],
});
