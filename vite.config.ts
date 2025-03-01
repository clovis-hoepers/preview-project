import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true, // Permite que o servidor escute em todas as interfaces de rede
    port: 8080,
    cors: true, // Habilita CORS
    allowedHosts: ["aesthetics-plataform-881311265832.us-south1.run.app"], // Adiciona o host permitido
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
