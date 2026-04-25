import { useTranslation } from "../../i18n";
import { cvData, EducationData } from "../../data/mockData";

function EducationCard({ edu }: { edu: EducationData }) {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-800/30 rounded-lg p-5 hover:bg-slate-800/50 transition-colors duration-300 border border-slate-700/30 hover:border-emerald-500/30">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{t(edu.degree)}</h3>
          <p className="text-emerald-400 font-medium">{edu.institution}</p>
          
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <span className="flex items-center gap-1.5 text-slate-400 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {edu.period}
            </span>
            {edu.grade && (
              <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-sm rounded-full font-medium">
                {edu.grade}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Education() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        </span>
        {t("section.education")}
      </h2>
      
      <div className="space-y-4">
        {cvData.education.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </div>
    </section>
  );
}
