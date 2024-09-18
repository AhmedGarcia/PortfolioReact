import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Vite plugin for React

//vite configuration
export default defineConfig({
    plugins: [react()], //Add react plugin for vite
    server: {
        port: 5173, //development server port 
        open: true, //Automatically open the app in the browser
        historyApiFallback: true, // This is critical for client-side routing

    },
    build: {
        outDir: 'dist', //the output directory for the production build
    },
    //handle client-side routing for React Router
    resolve:{
        alias: {
            '@': '/src',  // Alias for the src directory
        },
    },
    base: '/',  //Base URL for the app
});