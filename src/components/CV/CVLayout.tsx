import { Header } from "./Header";
import { About } from "./About";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Certifications } from "./Certifications";
import { Languages } from "./Languages";
import { SoftSkills } from "./SoftSkills";
import { Projects } from "./Projects";
import { cvData } from "../../data/mockData";

export function CVLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          {/* About Section */}
          <div className="mb-8">
            <About />
          </div>

          {/* Two Column Layout for Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Projects />
              <Experience />
              <Education />
              <Certifications />
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              <Skills />
              <Languages />
              <SoftSkills />
              
              {/* Interests */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </span>
                  Intereses
                </h2>
                <div className="flex flex-wrap gap-2">
                  {cvData.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 bg-indigo-500/10 text-indigo-300 rounded-lg text-sm border border-indigo-500/20"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download CV Button */}
              <a
                href="/Gabriel_Napoles_CV.pdf"
                download="Gabriel_Napoles_CV.pdf"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV (PDF)
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-8 mt-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-slate-500 text-sm">
              {cvData.personal.name} • {cvData.personal.title}
            </p>
            <p className="text-slate-600 text-xs mt-2">
              © {new Date().getFullYear()} — Hecho con React + TypeScript
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
