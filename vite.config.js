import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createHtmlPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: 'robots.txt', // Path to your robots.txt file
          dest: '', // Copy to the root of the dist folder
        },
      ]
    }),
    react()],
  optimizeDeps: {
    include: ['react-scroll', 'recharts'],
  },
})