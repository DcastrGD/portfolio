"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.filter((p) => p.featured);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section id="proyectos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Proyectos"
          subtitle="Algunos de mis trabajos más destacados"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {!showAll && projects.length > featuredProjects.length && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
            >
              Ver todos los proyectos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

