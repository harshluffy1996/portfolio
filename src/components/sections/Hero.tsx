import { motion } from "framer-motion";
import { siteConfig, stats } from "../../data/content";
import { TextReveal } from "../ui/TextReveal";
import { StatsCounter } from "../ui/StatsCounter";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-text-muted text-sm uppercase tracking-widest mb-6"
        >
          {siteConfig.name}
        </motion.p>

        <TextReveal
          text={siteConfig.title.toUpperCase()}
          as="h1"
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-text-primary leading-none"
          variant="word"
          stagger={0.08}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-text-secondary text-base md:text-lg max-w-2xl mt-8 leading-relaxed"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex gap-12 md:gap-20 mt-16"
        >
          {stats.map((stat) => (
            <StatsCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
