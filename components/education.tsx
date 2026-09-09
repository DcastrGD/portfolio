"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education, certifications } from "@/data/education";

const typeIcons = {
  degree: GraduationCap,
  course: BookOpen,
  certification: Award,
};

export function Education() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" as const },
          transition: { duration: 0.5, delay },
        };

  return (
    <section id="educacion" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Educación"
          subtitle="Mi formación académica y certificaciones"
        />

        <div className="mx-auto max-w-4xl space-y-12">
          {/* Formal education */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <GraduationCap className="size-5 text-primary" />
              Estudios
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => {
                const Icon = typeIcons[item.type];
                return (
                  <motion.div
                    key={`${item.title}-${item.period}`}
                    {...fadeUp(index * 0.1)}
                    className="rounded-xl border border-border/50 bg-card p-5 transition-colors hover:border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <h4 className="text-sm font-semibold">
                            {item.title}
                          </h4>
                          <span className="text-xs text-muted-foreground">
                            {item.period}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm text-primary/80">
                          {item.institution}
                        </p>
                        {item.description && (
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications & Courses */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <Award className="size-5 text-primary" />
              Cursos y certificaciones
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((item, index) => {
                const Icon = typeIcons[item.type];
                return (
                  <motion.div
                    key={`${item.title}-${item.period}`}
                    {...fadeUp(index * 0.1)}
                    className="rounded-xl border border-border/50 bg-card p-5 transition-colors hover:border-border"
                  >
                    <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="mt-0.5 text-xs text-primary/80">
                      {item.institution}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {item.period}
                    </p>
                    {item.description && (
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

