// ============================================
// DATOS DE PRUEBA - CV Gabriel Napoles
// ============================================

export const cvData = {
  personal: {
    name: "Gabriel Napoles Perera",
    title: "FullStack Developer",
    subtitle: "header.subtitle",
    location: "Reus, España",
    email: "gabriel.napoles.pe@gmail.com",
    phone: "+34 655 45 79 03",
    linkedin: "linkedin.com/in/gabriel-napoles-3a6746225",
    github: "github.com/gabrielnapolespe",
    website: "gabrielnapoles.dev",
    avatar: "https://avatars.githubusercontent.com/u/71468797?v=4",
  },

  about: "section.about.content",

  experience: [
    {
      
      id: 1,
      role: "section.experience.first.title",
      company: "Omikron S.L",
      location: "section.experience.first.location",
      period: "section.experience.first.date",
      achievements: [
        "section.experience.first.skill.one",
        "section.experience.first.skill.two"
      ],
    },
    {
      id: 2,
      role: "section.experience.second.title",
      company: "Omikron S.L",
      location: "section.experience.second.location",
      period: "section.experience.second.date",
      achievements: [
        "section.experience.second.skill.one",
        "section.experience.second.skill.two"
      ],
    },
    {
      id: 3,
      role: "section.experience.third.title",
      company: "LiteSolutions",
      location: "section.experience.third.location",
      period: "section.experience.third.date",
      achievements: [
        "section.experience.third.skill.one",
        "section.experience.third.skill.two",
        "section.experience.third.skill.three"
      ],
    },
    {
      id: 4,
      role: "section.experience.forth.title",
      company: "LiteSolutions",
      location: "section.experience.forth.location",
      period: "section.experience.forth.date",
      achievements: [
        "section.experience.forth.skill.one",
        "section.experience.forth.skill.two",
        "section.experience.forth.skill.three",
        "section.experience.forth.skill.four",
        "section.experience.forth.skill.five",
        "section.experience.forth.skill.six",
        "section.experience.forth.skill.seven"
      ],
    }
  ],

  education: [
    {
      id: 1,
      degree: "section.education.first.title",
      institution: "Institut Baix Camp",
      period: "2022 - 2024",
      grade: null,
    },
    {
      id: 2,
      degree: "section.education.second.title",
      institution: "Col·legi Maria Rosa Molas",
      period: "2020 - 2022",
      grade: null,
    },
    {
      id: 3,
      degree: "section.education.third.title",
      institution: "Institut Joan Guinjoan",
      period: "2016 - 2020",
      grade: null,
    },
  ],

  certifications: [
    {
      id: 1,
      name: "section.certifications.first.title",
      issuer: "CodeAcademy",
      year: "2024",
      credentialUrl: "https://www.codecademy.com/profiles/giga1607382650/certificates/e2b09fcfe6f5a5edad64f6556de7946e",
    },
    {
      id: 2,
      name: "section.certifications.second.title",
      issuer: "CodeAcademy",
      year: "2024",
      credentialUrl: "https://www.codecademy.com/profiles/giga1607382650/certificates/af00e5032d0a68cc84879983f5d8333b",
    },
    {
      id: 3,
      name: "section.certifications.third.title",
      issuer: "BIG School",
      year: "2026",
      credentialUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQHkyE3sae4WFQ/profile-treasury-image-shrink_480_480/B4EZ0u46UGHAAM-/0/1774608166142?e=1776362400&v=beta&t=dYDB989PN2OQ35lpxJn9yIfqRBBy9YmUFcW96K_AMgc",
    },
  ],

  languages: [
    { id: 1, language: "language.es", level: "language.level.native", langcode: "ES" },
    { id: 2, language: "language.en", level: "language.level.b2", langcode: "EN" },
    { id: 3, language: "language.ca", level: "language.level.veryHigh", langcode: "CA" },
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
    "softSkill.one",
    "softSkill.two",
    "softSkill.three",
    "softSkill.four",
    "softSkill.five",
    "softSkill.six",
    "softSkill.seven",
    "softSkill.eight",
    "softSkill.nine",
  ],

  interests: [
    "interests.one", 
    "interests.two", 
    "interests.three"
  ],
};

// Tipos para TypeScript
export type CVData = typeof cvData;
export type ExperienceData = (typeof cvData.experience)[number];
export type EducationData = (typeof cvData.education)[number];
export type CertificationData = (typeof cvData.certifications)[number];
export type LanguageData = (typeof cvData.languages)[number];
export type SkillData = { name: string; level: number };
