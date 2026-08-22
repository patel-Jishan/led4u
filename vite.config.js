import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const port = Number(process.env.PORT ?? 5173);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${process.env.PORT}"`);
}

const basePath = process.env.BASE_PATH ?? '/';

export default defineConfig({
  base: basePath,

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, 'attached_assets'),

      'use-sync-external-store/shim/with-selector': path.resolve(
        import.meta.dirname,
        'src',
        'shims',
        'use-sync-external-store-with-selector.js',
      ),

      'use-sync-external-store/shim/with-selector.js': path.resolve(
        import.meta.dirname,
        'src',
        'shims',
        'use-sync-external-store-with-selector.js',
      ),

      'stats.js': path.resolve(
        import.meta.dirname,
        'node_modules',
        'three',
        'examples',
        'jsm',
        'libs',
        'stats.module.js',
      ),

      'stats.js/build/stats.min.js': path.resolve(
        import.meta.dirname,
        'node_modules',
        'three',
        'examples',
        'jsm',
        'libs',
        'stats.module.js',
      ),
    },

    dedupe: ['react', 'react-dom'],
  },

  root: path.resolve(import.meta.dirname),

  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
  },

  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },

  optimizeDeps: {
    exclude: ['@react-three/drei'],
  },

  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
