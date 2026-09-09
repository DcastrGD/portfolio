export const siteConfig = {
  name: "Diego",
  fullName: "Diego [Tu Apellido]",
  title: "Full Stack Developer",
  description:
    "Desarrollador de software apasionado por crear aplicaciones web modernas, escalables y con excelente experiencia de usuario.",
  shortBio:
    "Me especializo en construir aplicaciones web completas utilizando tecnologías modernas. Desde interfaces de usuario intuitivas hasta APIs robustas, disfruto resolviendo problemas complejos con código limpio y eficiente.",
  email: "tu@email.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",
  location: "España",
  available: true,
  stats: {
    yearsExperience: 3,
    projectsCompleted: 15,
    technologiesUsed: 20,
    coffeeConsumed: "∞",
  },
  about: {
    paragraph1:
      "Soy un desarrollador Full Stack con experiencia en la creación de aplicaciones web modernas. Me apasiona escribir código limpio, aprender nuevas tecnologías y construir productos que aporten valor real.",
    paragraph2:
      "Trabajo principalmente con React, Next.js y Node.js en el frontend y backend, complementando con bases de datos relacionales y herramientas DevOps. Busco siempre la mejor combinación de rendimiento, accesibilidad y experiencia de usuario.",
    goals:
      "Mi objetivo es seguir creciendo como desarrollador, contribuir a proyectos open source y crear soluciones tecnológicas que hagan la diferencia.",
  },
} as const;

export type SiteConfig = typeof siteConfig;

