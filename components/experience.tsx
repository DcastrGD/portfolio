"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/experience";

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experiencia" className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Experiencia"
          subtitle="Mi trayectoria profesional"
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border sm:left-1/2 sm:block sm:-translate-x-px" />
          <div className="absolute left-4 top-0 block h-full w-px bg-border sm:hidden" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
                className={`relative pl-10 sm:w-1/2 sm:pl-0 ${
                  index % 2 === 0
                    ? "sm:pr-10 sm:text-right"
                    : "sm:ml-auto sm:pl-10"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-1 left-2.5 flex size-3 items-center justify-center sm:left-auto ${
                    index % 2 === 0
                      ? "sm:right-[-6.5px] sm:left-auto"
                      : "sm:left-[-6.5px]"
                  }`}
                >
                  <div
                    className={`size-3 rounded-full border-2 ${
                      exp.current
                        ? "border-primary bg-primary"
                        : "border-border bg-background"
                    }`}
                  />
                </div>

                {/* Content card */}
                <div className="rounded-xl border border-border/50 bg-card p-5 transition-colors hover:border-border">
                  <div
                    className={`mb-1 flex items-center gap-2 text-xs text-muted-foreground ${
                      index % 2 === 0 ? "sm:justify-end" : ""
                    }`}
                  >
                    <Briefcase className="size-3" />
                    <span>{exp.period}</span>
                    {exp.current && (
                      <Badge
                        variant="secondary"
                        className="text-[10px]"
                      >
                        Actual
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-base font-semibold">{exp.title}</h3>
                  <p className="text-sm text-primary/80">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div
                    className={`mt-3 flex flex-wrap gap-1.5 ${
                      index % 2 === 0 ? "sm:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-[10px] font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

