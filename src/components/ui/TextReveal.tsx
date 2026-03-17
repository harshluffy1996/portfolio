import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  variant?: "word" | "letter";
  stagger?: number;
  delay?: number;
}

export function TextReveal({
  text,
  as: Tag = "h2",
  className = "",
  variant = "word",
  stagger,
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll(".reveal-item");
      gsap.from(items, {
        y: "100%",
        opacity: 0,
        stagger: stagger ?? (variant === "letter" ? 0.03 : 0.05),
        duration: variant === "letter" ? 0.6 : 0.8,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [text, variant, stagger, delay]);

  const units = variant === "letter" ? text.split("") : text.split(" ");

  return (
    <Tag className={className} ref={containerRef as never}>
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="reveal-item inline-block">
            {unit === " " ? "\u00A0" : unit}
          </span>
          {variant === "word" && i < units.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
