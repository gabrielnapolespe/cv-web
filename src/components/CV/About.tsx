import { useTranslation } from "../../i18n";
import { cvData } from "../../data/cvData";

export function About() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
        <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </span>
        {t("section.about")}
      </h2>
      <p className="text-slate-300 leading-relaxed text-lg">
        {t(cvData.about)}
      </p>
    </section>
  );
}
