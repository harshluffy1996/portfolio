import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: string;
  label: string;
}

export function StatsCounter({ value, label }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * numericPart);
      setDisplayValue(String(start));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [isInView, numericPart]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-5xl md:text-6xl text-text-primary">
        {displayValue}
        {suffix}
      </span>
      <p className="text-text-muted text-sm mt-2 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
