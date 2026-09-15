import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'gzip', deleteOriginFile: false }),
    compression({ algorithm: 'brotliCompress', deleteOriginFile: false }),
    {
      name: 'chrome-devtools-well-known',
      configureServer(server) {
        server.middlewares.use('/.well-known/appspecific/com.chrome.devtools.json', (_req, res) => {
          res.setHeader('Content-Type', 'application/json');
          res.end('{}');
        });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'lucide': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
