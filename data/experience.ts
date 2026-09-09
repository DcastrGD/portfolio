export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "[Nombre de la empresa]",
    companyUrl: "https://example.com",
    period: "2024 — Presente",
    description:
      "Desarrollo de aplicaciones web completas con React y Node.js. Implementación de APIs REST, integración con bases de datos y despliegue en entornos cloud.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "[Nombre de la empresa]",
    companyUrl: "https://example.com",
    period: "2023 — 2024",
    description:
      "Desarrollo de interfaces de usuario modernas y responsive. Migración de aplicaciones legacy a React con TypeScript. Optimización de rendimiento y accesibilidad.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    title: "Junior Developer",
    company: "[Nombre de la empresa]",
    companyUrl: "https://example.com",
    period: "2022 — 2023",
    description:
      "Primeros pasos en desarrollo profesional. Mantenimiento de aplicaciones web, corrección de bugs y desarrollo de nuevas funcionalidades bajo supervisión.",
    technologies: ["JavaScript", "HTML", "CSS", "MySQL", "Git"],
  },
];

