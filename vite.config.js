import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import reactRefresh from '@vitejs/plugin-react-refresh'
// import path from 'path';
// https://vitejs.dev/config/
//  "proxy": "http://127.0.0.1:8000/api",

export default defineConfig({
  plugins: [react()],
  // root: "/src",
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
});
