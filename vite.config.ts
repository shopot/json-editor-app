import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as nodePath from 'node:path';
import * as nodeUrl from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': resolvePath('./src'),
    },
  },
  server: {
    open: true,
    host: '127.0.0.1'
  },
});

function resolvePath(path: string = '.'): string {
  const __dirname = nodePath.dirname(nodeUrl.fileURLToPath(import.meta.url));

  return nodePath.resolve(__dirname, '.', path);
}
