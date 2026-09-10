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
    description: "Un bot de Discord desarrollado en JavaScript, utilizando la librería Discord.js para interactuar con los servidores y usuarios de Discord.",
    image: "/projects/discord.png",
    tags: ["NodeJS", "JavaScript", "Discord.jsV12"],
    github: "https://github.com/DcastrGD/Discord-Bot-project",
    // demo: "https://fitness-app-demo.vercel.app",
    featured: true,
  },
  {
    title: "Linux (Arch Linux) - Configuración de entorno de desarrollo",
    description:
      "Entorno de desarrollo personalizado en Arch Linux, optimizado para productividad y eficiencia.",
    image: "/projects/preview_arch.png",
    tags: ["Linux", "Arch Linux", "Bash", "Zsh", "Tmux", "Neovim", "Git"],
    github: "https://github.com/DcastrGD/Dotfiles",
    featured: true,
  },
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
  //   tags: ["React", "TypeScript", "Tailwind CSS"],
  //   github: "https://github.com/tu-usuario/weather-app",
  //   demo: "https://weather-app-demo.vercel.app",
  //   featured: false,
  // },
];
