import { siteConfig } from "../../data/content";

export function SidebarEmail() {
  return (
    <div className="fixed left-8 bottom-0 hidden xl:flex flex-col items-center gap-6 z-40">
      <a
        href={`mailto:${siteConfig.email}`}
        className="text-text-muted hover:text-text-primary text-xs tracking-widest transition-colors"
        style={{ writingMode: "vertical-rl" }}
      >
        {siteConfig.email}
      </a>
      <div className="w-px h-24 bg-border" />
    </div>
  );
}
