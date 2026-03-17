import { aboutText } from "../../data/content";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="THIS IS ME" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl space-y-6">
            {aboutText.map((paragraph, i) => (
              <p key={i} className="text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
