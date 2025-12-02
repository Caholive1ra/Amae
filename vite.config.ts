import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const getGithubPagesBase = () => {
  // Prioridade 1: Variável de ambiente explícita
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH;
  }
  
  // Prioridade 2: Detectar do GitHub Actions
  const repository = process.env.GITHUB_REPOSITORY;
  if (repository) {
    const [, repo] = repository.split("/");
    if (repo) return `/${repo}/`;
  }
  
  return null;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const githubPagesBase = getGithubPagesBase();
  const basePath =
    githubPagesBase ||
    env.VITE_BASE_PATH ||
    (mode === "development" ? "/" : "/Amae/");

  return {
    base: basePath,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
