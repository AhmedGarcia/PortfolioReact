import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
    
    export default defineConfig({
      plugins: [react()],
      server: {
        port: 5173,
        open: true,                  // Automatically opens the app in the browser
        historyApiFallback: true,     // Important for React Router to work properly
      },
      build: {
        outDir: 'dist',              // Output directory for the production build
      },
      resolve: {
        alias: {
          '@': '/src',               // Alias for the src directory
        },
      },
      base: '/',                     // Base URL for the app (adjust if deploying to a subdirectory)
    });
    
