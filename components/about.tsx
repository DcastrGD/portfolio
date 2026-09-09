"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Briefcase, Layers, Coffee } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

const stats = [
  {
    icon: Code2,
    value: `${siteConfig.stats.yearsExperience}+`,
    label: "Años programando",
  },
  {
    icon: Layers,
    value: `${siteConfig.stats.projectsCompleted}+`,
    label: "Proyectos realizados",
  },
  {
    icon: Briefcase,
    value: `${siteConfig.stats.technologiesUsed}+`,
    label: "Tecnologías",
  },
  {
    icon: Coffee,
    value: siteConfig.stats.coffeeConsumed,
    label: "Cafés tomados",
  },
];

export function About() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" as const },
        transition: { duration: 0.5 },
      };

  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Sobre mí"
          subtitle="Conóceme un poco más"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeUp} className="space-y-5">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {siteConfig.about.paragraph1}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {siteConfig.about.paragraph2}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {siteConfig.about.goals}
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-xl border border-border/50 bg-card p-5 text-center transition-colors hover:border-border"
              >
                <stat.icon className="mx-auto mb-3 size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
