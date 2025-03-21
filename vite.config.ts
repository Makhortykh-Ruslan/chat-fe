import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      // '@core': './src/app',
      '@': path.resolve(__dirname, './src'),
      '@core': path.resolve(__dirname, './src/app/core'),
    },
  },
  build: {
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
});
