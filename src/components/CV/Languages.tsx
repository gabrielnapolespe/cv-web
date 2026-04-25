import { cvData, LanguageData } from "../../data/mockData";
import * as FlagIcons from "country-flag-icons/string/3x2";

// Mapping de códigos de idioma a códigos de país (ISO 639-1 -> ISO 3166-1)
const langCodeToCountryCode: Record<string, string> = {
  ES: "ES", // Español -> España
  EN: "GB", // Inglés -> Reino Unido
  CA: "ES", // Catalán -> España (no existe flag ISO para Cataluña)
  GL: "ES", // Gallego -> España
  EU: "ES", // Euskera -> España
  FR: "FR",
  DE: "DE",
  IT: "IT",
  PT: "PT",
  CN: "CN",
  JP: "JP",
  KR: "KR",
  RU: "RU",
  NL: "NL",
  AR: "AR",
  US: "US",
};

// Función para obtener el SVG del flag usando el langcode
function getFlagSvg(langcode: string): string | null {
  const countryCode = langCodeToCountryCode[langcode.toUpperCase()];
  if (!countryCode) return null;
  
  // Construir la URL del SVG desde el CDN
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`;
}

function LanguageCard({ lang }: { lang: LanguageData }) {
  const levelColors: Record<string, string> = {
    "Nativo": "bg-green-500/20 text-green-400 border-green-500/30",
    "Muy Alto": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    "Alto": "bg-teal-500/20 text-teal-400 border-teal-500/30",
    "Intermedio": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "Básico": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  };

  // Determine color based on level
  const getColorClass = (level: string) => {
    if (level.includes("Nativo")) return levelColors["Nativo"];
    if (level.includes("Muy Alto") || level.includes("B2")) return levelColors["Muy Alto"];
    if (level.includes("Alto") || level.includes("B1")) return levelColors["Alto"];
    return levelColors["Intermedio"];
  };

  const flagSvgUrl = getFlagSvg(lang.langcode);

  return (
    <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors duration-300 border border-slate-700/30 hover:border-rose-500/30">
      {flagSvgUrl ? (
        <img 
          src={flagSvgUrl} 
          alt={lang.language}
          className="w-8 h-6 object-cover rounded-sm"
        />
      ) : (
        <span className="w-8 h-6 bg-slate-700 rounded-sm flex items-center justify-center text-xs text-slate-500">
          {lang.langcode}
        </span>
      )}
      
      <div className="flex-1">
        <h3 className="text-white font-semibold">{lang.language}</h3>
        <p className="text-slate-400 text-sm">{lang.level}</p>
      </div>
      
      {/*<span className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClass(lang.level)}`}>
        {lang.level.split(" ")[0]}
      </span>*/}
    </div>
  );
}

export function Languages() {
  return (
    <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:border-rose-500/30 transition-all duration-300">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </span>
        Idiomas
      </h2>
      
      <div className="space-y-3">
        {cvData.languages.map((lang) => (
          <LanguageCard key={lang.id} lang={lang} />
        ))}
      </div>
    </section>
  );
}