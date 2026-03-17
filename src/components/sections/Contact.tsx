import { siteConfig } from "../../data/content";
import { AnimatedSection } from "../ui/AnimatedSection";
import { TextReveal } from "../ui/TextReveal";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <AnimatedSection>
          <TextReveal
            text="HAVE A PROJECT IN MIND?"
            as="h2"
            className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary"
            variant="word"
            stagger={0.06}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-text-secondary text-lg mt-8 mb-12 max-w-xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="link-underline text-text-primary text-xl md:text-2xl font-light tracking-wide"
          >
            {siteConfig.email}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
