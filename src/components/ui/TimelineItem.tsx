import type { Experience } from "../../data/content";

export function TimelineItem({ role, company, location, period, description }: Experience) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:hidden" />
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3.5px] rounded-full bg-text-muted ring-4 ring-bg-primary" />

      <div>
        <h3 className="text-xl font-semibold text-text-primary mb-1">{company}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
          <span className="text-text-secondary text-sm">{role}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
          <p className="text-text-muted text-sm font-mono">{period}</p>
          <span className="text-text-muted text-xs">{location}</span>
        </div>
        <ul className="space-y-2">
          {description.map((item, i) => (
            <li key={i} className="text-text-secondary text-sm leading-relaxed flex gap-2">
              <span className="text-text-muted mt-1 shrink-0">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
