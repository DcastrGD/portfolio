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
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js" },
      { name: "Go" },
      { name: "Python" },
      { name: "APIs REST" },
    ],
  },
  {
    title: "Bases de datos",
    icon: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQL Server" },
      { name: "SQLite" },
    ],
  },
  {
    title: "Herramientas",
    icon: "Wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Linux" },
    ],
  },
];

