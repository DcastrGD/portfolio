export interface Education {
  title: string;
  institution: string;
  period: string;
  description?: string;
  type: "degree" | "course" | "certification";
}

export const education: Education[] = [
  {
    title: "[Ciclo Formativo (Grado Superior) / Administración de Sistemas Informáticos en Red]",
    institution: "[La Caruña / IES Fernando Wirtz Suarez]",
    period: "2024 — 2026",
    description:
      "Formación en administración de sistemas informáticos en red, incluyendo instalación, configuración y mantenimiento de hardware y software.",
    type: "degree",
  },
  {
    title: "[Ciclo Formativo (Grado Medio) / Sistemas Microinformáticos y Redes]",
    institution: "[Baio / IES Maximino Romero de Lema]",
    period: "2021 — 2024",
    description:
      "Formación en sistemas microinformáticos y redes, incluyendo instalación, configuración y mantenimiento de hardware y software.",
    type: "degree",
  },
];

export const certifications: Education[] = [
  {
    title: "[Certificación Introducción a Cisco Packet Tracer]",
    institution: "[Plataforma de formación]",
    period: "2025",
    description: "Certificación que valida conocimientos en el uso de Cisco Packet Tracer para simulación de redes y resolución de problemas de conectividad.",
    type: "certification",
  },
  // {
  //   title: "[Curso de React Avanzado]",
  //   institution: "[Plataforma de formación]",
  //   period: "2023",
  //   description: "Patrones avanzados de React, rendimiento y testing.",
  //   type: "course",
  // },
  // {
  //   title: "[Curso de TypeScript]",
  //   institution: "[Plataforma de formación]",
  //   period: "2023",
  //   type: "course",
  // },
];

