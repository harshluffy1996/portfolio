import { projects } from "../../data/content";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="SELECTED PROJECTS" />
        </AnimatedSection>

        <div>
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <ProjectCard {...project} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
