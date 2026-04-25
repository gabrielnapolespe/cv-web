import { useState, useEffect } from "react";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  fork: boolean;
  visibility: string;
}

// Language colors (same as GitHub)
const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  "C#": "#178600",
  "C++": "#f34b7d",
  C: "#555555",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Shell: "#89e051",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  Elixir: "#6e4a7e",
  Haskell: "#5e5086",
  Lua: "#000080",
  R: "#198CE7",
};

export function useGitHubRepos(username: string, perPage = 6) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}&type=owner`
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`Usuario "${username}" no encontrado en GitHub`);
          }
          if (response.status === 403) {
            throw new Error("Límite de requests alcanzado. Intenta más tarde.");
          }
          throw new Error(`Error ${response.status}: No se pudieron obtener los repos`);
        }

        const data: GitHubRepo[] = await response.json();
        
        // Filter out forks and sort by stars
        const filteredRepos = data
          .filter((repo) => !repo.fork)
          .slice(0, perPage);

        setRepos(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }

    if (username) {
      fetchRepos();
    }
  }, [username, perPage]);

  return { repos, loading, error };
}

// Helper to get language color
export function getLanguageColor(language: string | null): string {
  if (!language) return "#8b949e";
  return languageColors[language] || "#8b949e";
}

// Helper to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "hoy";
  if (diffDays === 1) return "ayer";
  if (diffDays < 7) return `hace ${diffDays} días`;
  if (diffDays < 30) return `hace ${Math.floor(diffDays / 7)} semanas`;
  if (diffDays < 365) return `hace ${Math.floor(diffDays / 30)} meses`;
  return `hace ${Math.floor(diffDays / 365)} años`;
}
