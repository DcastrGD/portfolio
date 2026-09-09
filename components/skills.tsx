"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Monitor, Server, Database, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Server,
  Database,
  Wrench,
};

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Skills"
          subtitle="Tecnologías con las que trabajo"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={
                  prefersReducedMotion ? {} : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
                className="rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-border"
              >
                <div className="mb-4 flex items-center gap-3">
                  {Icon && (
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                  )}
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
