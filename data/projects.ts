export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Discord-Bot-project",
    description:
      "Un bot de Discord desarrollado en JavaScript, utilizando la API de Discord.js para interactuar con los servidores y usuarios de Discord.",
    image: "/projects/discord.png",
    tags: ["NodeJS", "JavaScript", "Discord.jsV12"],
    github: "https://github.com/DcastrGD/Discord-Bot-project",
    // demo: "https://fitness-app-demo.vercel.app",
    featured: true,
  },
  // {
  //   title: "Task Manager API",
  //   description:
  //     "API REST robusta para gestión de tareas con autenticación JWT, roles de usuario y documentación OpenAPI. Arquitectura limpia con tests unitarios e integración.",
  //   image: "/projects/task-manager.webp",
  //   tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
  //   github: "https://github.com/tu-usuario/task-manager",
  //   featured: true,
  // },
  // {
  //   title: "E-Commerce Dashboard",
  //   description:
  //     "Dashboard administrativo para e-commerce con visualización de datos en tiempo real, gestión de inventario y reportes automatizados.",
  //   image: "/projects/ecommerce-dashboard.webp",
  //   tags: ["React", "TypeScript", "Tailwind CSS", "Go"],
  //   github: "https://github.com/tu-usuario/ecommerce-dashboard",
  //   demo: "https://ecommerce-dashboard-demo.vercel.app",
  //   featured: true,
  // },
  // {
  //   title: "CLI Tool",
  //   description:
  //     "Herramienta de línea de comandos para automatizar tareas de desarrollo: scaffolding de proyectos, generación de código y gestión de configuración.",
  //   image: "/projects/cli-tool.webp",
  //   tags: ["Go", "Linux", "Docker"],
  //   github: "https://github.com/tu-usuario/cli-tool",
  //   featured: false,
  // },
  // {
  //   title: "Blog Personal",
  //   description:
  //     "Blog estático con MDX, syntax highlighting, sistema de tags y optimización SEO. Rendimiento perfecto en Lighthouse.",
  //   image: "/projects/blog.webp",
  //   tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
  //   github: "https://github.com/tu-usuario/blog",
  //   demo: "https://blog-demo.vercel.app",
  //   featured: false,
  // },
  // {
  //   title: "Weather App",
  //   description:
  //     "Aplicación del tiempo con geolocalización, pronóstico extendido y visualización de datos meteorológicos con gráficos interactivos.",
  //   image: "/projects/weather-app.webp",
  //   tags: ["React", "TypeScript", "APIs REST", "Tailwind CSS"],
  //   github: "https://github.com/tu-usuario/weather-app",
  //   demo: "https://weather-app-demo.vercel.app",
  //   featured: false,
  // },
];

