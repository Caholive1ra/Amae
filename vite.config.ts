import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const getGithubPagesBase = () => {
  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) return null;

  const [, repo] = repository.split("/");
  return repo ? `/${repo}/` : null;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const githubPagesBase = getGithubPagesBase();
  const basePath =
    env.VITE_BASE_PATH ||
    githubPagesBase ||
    (mode === "development" ? "/" : "/");

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
