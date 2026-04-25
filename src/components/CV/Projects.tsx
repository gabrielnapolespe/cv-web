import { useTranslation } from "../../i18n";
import { useGitHubRepos, getLanguageColor, formatDate } from "../../hooks/useGitHubRepos";
import { cvData } from "../../data/mockData";

function RepoCard({ repo }: { repo: ReturnType<typeof useGitHubRepos>["repos"][number] }) {
  const { t } = useTranslation();
  
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-slate-800/30 rounded-lg p-5 hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/30 hover:border-orange-500/30 hover:scale-[1.02]"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <h3 className="text-white font-semibold group-hover:text-orange-400 transition-colors truncate">
            {repo.name}
          </h3>
        </div>
        <span className="px-2 py-0.5 bg-slate-700/50 text-slate-400 text-xs rounded-full flex-shrink-0">
          {repo.visibility === "public" ? t("project.public") : t("project.private")}
        </span>
      </div>

      {repo.description && (
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors">
          {repo.description}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 text-sm">
        {repo.language && (
          <span className="flex items-center gap-1.5 text-slate-300">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            />
            {repo.language}
          </span>
        )}

        <span className="flex items-center gap-1 text-slate-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {repo.stargazers_count}
        </span>

        <span className="flex items-center gap-1 text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          {repo.forks_count}
        </span>

        <span className="text-slate-500 ml-auto flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {formatDate(repo.updated_at)}
        </span>
      </div>

      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {repo.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
            >
              {topic}
            </span>
          ))}
          {repo.topics.length > 4 && (
            <span className="px-2 py-0.5 text-slate-500 text-xs">
              +{repo.topics.length - 4}
            </span>
          )}
        </div>
      )}

      <div className="flex items-center gap-1 mt-4 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        {t("project.viewRepo")}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-slate-800/30 rounded-lg p-5 animate-pulse"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 bg-slate-700 rounded" />
            <div className="h-5 bg-slate-700 rounded w-32" />
          </div>
          <div className="h-4 bg-slate-700 rounded w-full mb-2" />
          <div className="h-4 bg-slate-700 rounded w-3/4 mb-4" />
          <div className="flex gap-4">
            <div className="h-4 bg-slate-700 rounded w-16" />
            <div className="h-4 bg-slate-700 rounded w-12" />
            <div className="h-4 bg-slate-700 rounded w-12" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ErrorState({ message, tError, tEmpty }: { message: string; tError: string; tEmpty: string }) {
  return (
    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 text-center">
      <svg
        className="w-12 h-12 mx-auto text-red-400 mb-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <p className="text-red-400 font-medium mb-1">{tError}</p>
      <p className="text-slate-400 text-sm">{message}</p>
    </div>
  );
}

function EmptyState({ tEmpty }: { tEmpty: string }) {
  return (
    <div className="bg-slate-800/30 border border-dashed border-slate-700 rounded-lg p-8 text-center">
      <svg
        className="w-12 h-12 mx-auto text-slate-600 mb-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        />
      </svg>
      <p className="text-slate-400">{tEmpty}</p>
    </div>
  );
}

export function Projects() {
  const { t } = useTranslation();
  const { repos, loading, error } = useGitHubRepos(cvData.personal.github.replace("github.com/", ""), 6);

  return (
    <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </span>
        {t("section.projects")}
        <a
          href={`https://github.com/${cvData.personal.github.replace("github.com/", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-normal text-slate-400 hover:text-white ml-auto flex items-center gap-1"
        >
          @{cvData.personal.github.replace("github.com/", "")}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </h2>

      {loading && <LoadingSkeleton />}

      {error && <ErrorState message={error} tError={t("project.error")} tEmpty={t("project.empty")} />}

      {!loading && !error && repos.length === 0 && <EmptyState tEmpty={t("project.empty")} />}

      {!loading && !error && repos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  );
}
