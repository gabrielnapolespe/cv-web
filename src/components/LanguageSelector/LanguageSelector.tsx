import { useState, useRef, useEffect } from "react";
import { useTranslation, Language } from "../../i18n";

interface LanguageOption {
  code: Language;
  flag: string;
  label: string;
}

const languages: LanguageOption[] = [
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇬🇧", label: "English" },
];

export function LanguageSelector() {
  const { language, setLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-200 rounded-lg transition-all duration-200 border border-slate-600/50 hover:border-slate-500"
        aria-label={t("language.select")}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-lg" aria-hidden="true">
          {currentLang.flag}
        </span>
        <span className="text-sm font-medium hidden sm:inline">{currentLang.label}</span>
        {/* Chevron */}
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-1 z-50 animate-fadeIn"
          role="listbox"
          aria-label={t("language.select")}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-150 ${
                lang.code === language
                  ? "bg-blue-500/20 text-blue-400"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
              role="option"
              aria-selected={lang.code === language}
            >
              <span className="text-lg" aria-hidden="true">
                {lang.flag}
              </span>
              <span className="text-sm font-medium">{lang.label}</span>
              {/* Check si es el idioma activo */}
              {lang.code === language && (
                <svg
                  className="w-4 h-4 ml-auto text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}