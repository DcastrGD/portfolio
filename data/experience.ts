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
  // {
  //   title: "Full Stack Developer",
  //   company: "[Nombre de la empresa]",
  //   companyUrl: "https://example.com",
  //   period: "2024 — Presente",
  //   description:
  //     "Desarrollo de aplicaciones web completas con React y Node.js. Implementación de APIs REST, integración con bases de datos y despliegue en entornos cloud.",
  //   technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
  //   current: true,
  // },
  // {
  //   title: "Frontend Developer",
  //   company: "[Nombre de la empresa]",
  //   companyUrl: "https://example.com",
  //   period: "2023 — 2024",
  //   description:
  //     "Desarrollo de interfaces de usuario modernas y responsive. Migración de aplicaciones legacy a React con TypeScript. Optimización de rendimiento y accesibilidad.",
  //   technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
  // },
  {
    title: "Administrador de sistemas y redes",
    company: "[Anteva Servicios Informáticos SL]",
    companyUrl: "https://anteva.gal/",
    period: "2024 - (4 meses)",
    description:
      "Scripting de software y sistemas, y mantenimiento de sistemas e equipos.",
    technologies: ["Bash", "HTML", "CSS", "PowerShell", "Python", "Windows Batch", "SQL Server", "Linux", "Windows"],
  },
];

