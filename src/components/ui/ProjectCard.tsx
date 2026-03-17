import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "../../data/content";

interface ProjectCardProps extends Project {
  index: number;
}

export function ProjectCard({ title, description, tags, live, index }: ProjectCardProps) {
  return (
    <div className="group py-8 border-b border-border">
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
        <span className="text-text-muted font-mono text-sm shrink-0">
          _{String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-text-primary mb-2 group-hover:text-accent-hover transition-colors">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="text-text-muted text-xs uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <a
          href={live}
          className="text-text-primary text-sm flex items-center gap-1 shrink-0 self-start whitespace-nowrap hover:text-accent-hover transition-colors"
        >
          View Project <FiArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
