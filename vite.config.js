import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'compression';

export default defineConfig({
  plugins: [react()],
  cacheDir: 'node_modules/.vite_cache',
  build: {
    brotliSize: true,
  },
  server: {
    middleware: [compression()],
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
});
