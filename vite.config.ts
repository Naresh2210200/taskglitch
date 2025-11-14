import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

function resolveSrcAlias(): string {
  const url = new URL('./src', import.meta.url);
  const pathname = url.pathname;
  // Windows file URLs start with /C:/...; strip leading slash for drive letters
  return pathname.replace(/^\/([A-Za-z]:)/, '$1');
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolveSrcAlias(),
    },
  },
});

