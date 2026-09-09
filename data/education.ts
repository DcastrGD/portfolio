export interface Education {
  title: string;
  institution: string;
  period: string;
  description?: string;
  type: "degree" | "course" | "certification";
}

export const education: Education[] = [
  {
    title: "[Grado / Ingeniería en Informática]",
    institution: "[Universidad / Centro de estudios]",
    period: "2019 — 2023",
    description:
      "Formación en fundamentos de ciencias de la computación, algoritmos, estructuras de datos, ingeniería de software y bases de datos.",
    type: "degree",
  },
  {
    title: "[Ciclo Formativo / Bootcamp]",
    institution: "[Centro de formación]",
    period: "2018 — 2019",
    description:
      "Formación práctica en desarrollo web con tecnologías modernas y metodologías ágiles.",
    type: "degree",
  },
];

export const certifications: Education[] = [
  {
    title: "[Certificación en Cloud Computing]",
    institution: "[Plataforma / Proveedor]",
    period: "2024",
    description: "Certificación profesional en servicios cloud y despliegue de aplicaciones.",
    type: "certification",
  },
  {
    title: "[Curso de React Avanzado]",
    institution: "[Plataforma de formación]",
    period: "2023",
    description: "Patrones avanzados de React, rendimiento y testing.",
    type: "course",
  },
  {
    title: "[Curso de TypeScript]",
    institution: "[Plataforma de formación]",
    period: "2023",
    type: "course",
  },
];

