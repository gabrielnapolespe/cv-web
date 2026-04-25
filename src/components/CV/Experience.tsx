import { useTranslation } from "../../i18n";
import { cvData, ExperienceData } from "../../data/mockData";

function ExperienceCard({ exp }: { exp: ExperienceData }) {
    const { t } = useTranslation();
  return (
    <div className="relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors duration-300 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-slate-800 border-2 border-blue-500" />
      
      <div className="bg-slate-800/30 rounded-lg p-5 hover:bg-slate-800/50 transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-semibold text-white">{t(exp.role)}</h3>
            <p className="text-blue-400 font-medium">{exp.company}</p>
          </div>
          <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
            {t(exp.period)}
          </span>
        </div>
        
        <p className="text-slate-400 text-sm mb-4 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {t(exp.location)}
        </p>

        <ul className="space-y-2">
          {exp.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
              {t(achievement)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>
        {t("section.experience")}
      </h2>
      
      <div className="space-y-0">
        {cvData.experience.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
}
