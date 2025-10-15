/// <reference types="vite/client" />
import path from 'path';
import { defineConfig } from 'vite';
// @ts-ignore - VS Code TypeScript resolution issue
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false,
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['node_modules', 'dist'],
    }),
    stylelint({
      cache: false,
      include: ['src/**/*.{css,scss,sass}'],
      exclude: ['node_modules', 'dist'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/variables" as *; @use "@/scss/mixins" as *;`,
      },
    },
  },
});
