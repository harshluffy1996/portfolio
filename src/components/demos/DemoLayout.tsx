import type { ReactNode } from "react";
import { FiArrowLeft } from "react-icons/fi";

interface DemoLayoutProps {
  title: string;
  children: ReactNode;
}

export function DemoLayout({ title, children }: DemoLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <header className="sticky top-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-text-primary">{title}</h1>
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            <FiArrowLeft size={16} />
            Back to Portfolio
          </a>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6">{children}</main>
    </div>
  );
}
