import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Idiomas disponibles
export type Language = "es" | "en";

// Tipos
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface LanguageProviderProps {
  children: ReactNode;
}

// Crear contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations registry (se carga dinámicamente)
const translationsRegistry: Record<Language, Record<string, string>> = {
  es: {},
  en: {},
};

/**
 * Registrar traducciones para un idioma específico
 */
export function registerTranslations(lang: Language, translations: Record<string, string>) {
  translationsRegistry[lang] = { ...translationsRegistry[lang], ...translations };
}

/**
 * Componente Provider que envuelve la app
 */
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("es");

  // Cargar idioma guardado en localStorage al iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("cv-language") as Language | null;
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Guardar en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("cv-language", language);
  }, [language]);

  // Función para cambiar idioma
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Función de traducción - busca en el idioma actual, fallback al otro
  const t = (key: string): string => {
    const currentTranslations = translationsRegistry[language];
    const fallbackTranslations = translationsRegistry[language === "es" ? "en" : "es"];

    return (
      currentTranslations[key] ||
      fallbackTranslations[key] ||
      key // Fallback final: retorna la key si no existe traducción
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook para usar traducciones
 */
export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}