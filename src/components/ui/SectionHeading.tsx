import { TextReveal } from "./TextReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <TextReveal
        text={title}
        as="h2"
        className="font-display text-5xl md:text-7xl uppercase text-text-primary"
      />
    </div>
  );
}
