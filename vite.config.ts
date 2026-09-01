import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/WorkAdda/', // Essential for GitHub Pages sub-path routing
});