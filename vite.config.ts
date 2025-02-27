import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
// import tailwindcss from "@taildwindcss/"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
