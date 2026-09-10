export const siteConfig = {
  name: "Diego Castro",
  fullName: "Diego Castro",
  title: "Junior Developer",
  description:
    "Desarrollador de software apasionado por crear aplicaciones mordernas.",
  shortBio:
    "Me especializo en construir aplicaciones completas utilizando tecnologías modernas. Desde interfaces intuitivas hasta APIs robustas, disfruto resolviendo problemas complejos con código limpio y eficiente.",
  email: "dcastrgd@gmail.com",
  github: "https://github.com/DcastrGD",
  linkedin: "https://www.linkedin.com/in/diego-kstro-3a58b823a/",
  location: "España",
  available: true,
  stats: {
    yearsExperience: 4,
    projectsCompleted: 1,
    technologiesUsed: 8,
    coffeeConsumed: "∞",
  },
  about: {
    paragraph1:
      "Soy un desarrollador con poca experiencia en la creación de aplicaciones modernas. Me apasiona escribir código limpio, aprender nuevas tecnologías.",
    paragraph2:
      "Trabajo principalmente con Python, JavaScript, SQL, HTML, CSS, Bash, PowerShell, complementando con bases de datos relacionales y herramientas DevOps. Busco siempre la mejor combinación de rendimiento, accesibilidad y experiencia.",
    goals:
      "Mi objetivo es seguir creciendo como desarrollador, contribuir a proyectos open source y crear soluciones tecnológicas que hagan la diferencia.",
  },
} as const;

export type SiteConfig = typeof siteConfig;

