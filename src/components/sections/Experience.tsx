import { experience } from "../../data/content";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import { TimelineItem } from "../ui/TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="EXPERIENCE" />
        </AnimatedSection>

        {experience.map((exp, i) => (
          <AnimatedSection key={exp.company} delay={i * 0.1}>
            <TimelineItem {...exp} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
