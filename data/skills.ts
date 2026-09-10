export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js" },
      { name: "Python" },
    ],
  },
  {
    title: "Bases de datos",
    icon: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQL Server" },
    ],
  },
  {
    title: "Herramientas",
    icon: "Wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Linux" },
      { name: "AI" },
      { name: "Neovim" },
    ],
  },
];

