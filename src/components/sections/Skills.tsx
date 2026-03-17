import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../../data/content";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillBadge } from "../ui/SkillBadge";

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

const categories = [...new Set(skills.map((s) => s.category))];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 md:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading title="TECH STACK" />
        </AnimatedSection>

        <motion.div
          ref={ref}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6"
        >
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-text-muted text-xs font-mono uppercase tracking-wider mb-2 border-b border-border pb-2">
                {category}
              </h3>
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <SkillBadge name={skill.name} icon={skill.icon} />
                  </motion.div>
                ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
