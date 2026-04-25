// ============================================
// DATOS DE PRUEBA - CV Gabriel Napoles
// ============================================

export const cvData = {
  personal: {
    name: "Gabriel Napoles Perera",
    title: "FullStack Developer",
    subtitle: "Actualmente aprendiendo arquitectura de software utilizando ecosistemas de agentes de IA y MCP de forma autodidacta.",
    location: "Reus, España",
    email: "gabriel.napoles.pe@gmail.com",
    phone: "+34 655 45 79 03",
    linkedin: "linkedin.com/in/gabriel-napoles-3a6746225",
    github: "github.com/gabrielnapolespe",
    website: "gabrielnapoles.dev",
    avatar: "https://avatars.githubusercontent.com/u/71468797?v=4",
  },

  about: `Arquitecto de software con más de 5 años de conocimiento y más de dos años de experiencia en el sector como programador FullStack Developer. Durante mi recorrido he tenido la oportunidad de desarrollar, tanto en solitario como en grupo, grandes proyectos utilizando diferentes tecnologías y sacándoles el máximo partido.`,

  experience: [
    {
      
      id: 1,
      role: "FP Dual Técnico Informático",
      company: "Omikron S.L",
      location: "Cambrils, España",
      period: "Abril 2021 - Jun 2022",
      achievements: [
        "Mantenimiento y gestión de CMS (Wordpress, Prestashop)",
        "Gestión de servidor local (Windows)"
      ],
    },
    {
      id: 2,
      role: "Técnico Informático Contrato Indefinido",
      company: "Omikron S.L",
      location: "Cambrils, España",
      period: "Jun 2022 - Sep 2022",
      achievements: [
        "Mantenimiento y gestión de CMS (Wordpress, Prestashop)",
        "Gestión de servidor local (Windows)"
      ],
    },
    {
      id: 3,
      role: "FP Dual Backend Developer",
      company: "LiteSolutions",
      location: "Remoto",
      period: "Feb 2023 - Abril 2024",
      achievements: [
        "Mantenimiento y creación de aplicaciones web utilizando CMS (Wordpress, Prestashop, Drupal)",
        "Creación de módulos para Drupal",
        "Gestión de plataformas de autoalojamiento de archivos (NextCloud)",
      ],
    },
    {
      id: 4,
      role: "Junior FullStack Developer",
      company: "LiteSolutions",
      location: "Remoto",
      period: "Sep 2024 - Dic 2025",
      achievements: [
        "Proyectos de pruebas de software en solitario (Selenium, Cypress, PhpUnit)",
        "Mantenimiento y creación de aplicaciones web utilizando CMS (Wordpress, Prestashop, Drupal)",
        "Creación de módulos para Drupal",
        "Creación de software para gestión de empresas (ObjectScript + React)",
        "Creación de sistema de reservas con conectores externos (ObjectScript)",
        "Mantenimiento de librerías para nuevas versiones de Java",
        "Gestión de plataformas de autoalojamiento de archivos (NextCloud)"
      ],
    }
  ],

  education: [
    {
      id: 1,
      degree: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
      institution: "Institut Baix Camp",
      period: "2022 - 2024",
      grade: null,
    },
    {
      id: 2,
      degree: "Grado Medio en Sistemas Microinformáticos y Redes",
      institution: "Col·legi Maria Rosa Molas",
      period: "2020 - 2022",
      grade: null,
    },
    {
      id: 3,
      degree: "Educación Secundaria Obligatoria (ESO)",
      institution: "Institut Joan Guinjoan",
      period: "2016 - 2020",
      grade: null,
    },
  ],

  certifications: [
    {
      id: 1,
      name: "Certificado AngularJS 1x",
      issuer: "CodeAcademy",
      year: "2024",
      credentialUrl: "https://www.codecademy.com/profiles/giga1607382650/certificates/e2b09fcfe6f5a5edad64f6556de7946e",
    },
    {
      id: 2,
      name: "Certificado React",
      issuer: "CodeAcademy",
      year: "2024",
      credentialUrl: "https://www.codecademy.com/profiles/giga1607382650/certificates/af00e5032d0a68cc84879983f5d8333b",
    },
    {
      id: 3,
      name: "Certificado Iniciación al Desarrollo con IA",
      issuer: "BIG School",
      year: "2026",
      credentialUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQHkyE3sae4WFQ/profile-treasury-image-shrink_480_480/B4EZ0u46UGHAAM-/0/1774608166142?e=1776362400&v=beta&t=dYDB989PN2OQ35lpxJn9yIfqRBBy9YmUFcW96K_AMgc",
    },
  ],

  languages: [
    { id: 1, language: "Español", level: "Nativo", langcode: "ES" },
    { id: 2, language: "Inglés", level: "Muy Alto (B2)", langcode: "EN" },
    { id: 3, language: "Catalán", level: "Muy Alto", langcode: "CA" },
  ],

  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 100 },
      { name: "Tailwind CSS", level: 80 },
      { name: "AngularJS", level: 70 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "ObjectScript", level: 80 },
      { name: "PHP", level: 100 },
      { name: "Java", level: 90 },
      { name: "REST APIs", level: 100 },
    ],
    tools: [
      "Git",
      "Docker",
      "VS Code",
      "Selenium",
      "Cypress",
      "PhpUnit",
      "Drupal",
      "Figma",
    ],
  },

  softSkills: [
    "Creatividad",
    "Motivación",
    "Gran trabajador en equipo",
    "Independencia",
    "Constancia",
    "Responsabilidad",
    "Disciplina",
    "Buena toma de decisiones",
    "Determinación",
  ],

  interests: ["Desarrollo Web", "Arquitectura de Software", "Aprendizaje Continuo", "Código Limpio"],
};

// Tipos para TypeScript
export type CVData = typeof cvData;
export type ExperienceData = (typeof cvData.experience)[number];
export type EducationData = (typeof cvData.education)[number];
export type CertificationData = (typeof cvData.certifications)[number];
export type LanguageData = (typeof cvData.languages)[number];
export type SkillData = { name: string; level: number };
