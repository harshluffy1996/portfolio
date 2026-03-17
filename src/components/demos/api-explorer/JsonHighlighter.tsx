interface JsonHighlighterProps {
  json: string;
}

export function JsonHighlighter({ json }: JsonHighlighterProps) {
  const highlighted = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"([^"]+)":/g, '<span class="text-cyan-400">"$1"</span>:')
    .replace(/: "(.*?)"/g, ': <span class="text-emerald-400">"$1"</span>')
    .replace(/: (\d+)/g, ': <span class="text-amber-400">$1</span>')
    .replace(/: (true|false)/g, ': <span class="text-rose-400">$1</span>')
    .replace(/: (null)/g, ': <span class="text-text-muted">$1</span>');

  return (
    <pre
      className="text-sm font-mono text-text-secondary overflow-auto p-4 bg-bg-primary rounded-lg border border-border max-h-96"
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  );
}
