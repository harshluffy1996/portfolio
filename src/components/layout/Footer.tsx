import { siteConfig } from "../../data/content";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-xs">
          Designed & built by {siteConfig.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-text-muted hover:text-text-primary text-xs uppercase tracking-wider transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-text-muted hover:text-text-primary text-xs uppercase tracking-wider transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="link-underline text-text-muted hover:text-text-primary text-xs uppercase tracking-wider transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
