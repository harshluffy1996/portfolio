import { useState } from "react";
import { FiSend, FiPlus, FiTrash2, FiClock } from "react-icons/fi";
import { DemoLayout } from "./DemoLayout";
import { JsonHighlighter } from "./api-explorer/JsonHighlighter";

interface Header {
  key: string;
  value: string;
}

interface HistoryEntry {
  method: string;
  url: string;
  status: number;
  time: string;
}

const METHODS = ["GET", "POST", "PUT", "DELETE"] as const;
const METHOD_COLORS: Record<string, string> = {
  GET: "bg-emerald-500/20 text-emerald-400",
  POST: "bg-cyan-500/20 text-cyan-400",
  PUT: "bg-amber-500/20 text-amber-400",
  DELETE: "bg-rose-500/20 text-rose-400",
};

function ApiExplorer() {
  const [method, setMethod] = useState<string>("GET");
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts/1");
  const [headers, setHeaders] = useState<Header[]>([{ key: "Content-Type", value: "application/json" }]);
  const [body, setBody] = useState('{\n  "title": "foo",\n  "body": "bar",\n  "userId": 1\n}');
  const [response, setResponse] = useState<{ status: number; statusText: string; body: string; headers: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [activeTab, setActiveTab] = useState<"headers" | "body">("headers");

  const sendRequest = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const reqHeaders: Record<string, string> = {};
      headers.forEach((h) => {
        if (h.key.trim()) reqHeaders[h.key] = h.value;
      });

      const options: RequestInit = { method, headers: reqHeaders };
      if (method === "POST" || method === "PUT") {
        options.body = body;
      }

      const res = await fetch(url, options);
      const text = await res.text();

      let formatted = text;
      try {
        formatted = JSON.stringify(JSON.parse(text), null, 2);
      } catch {
        // Not JSON, use raw text
      }

      const resHeaders = Array.from(res.headers.entries())
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");

      setResponse({
        status: res.status,
        statusText: res.statusText,
        body: formatted,
        headers: resHeaders,
      });

      setHistory((prev) => [
        { method, url, status: res.status, time: new Date().toLocaleTimeString() },
        ...prev.slice(0, 9),
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
    } finally {
      setLoading(false);
    }
  };

  const addHeader = () => setHeaders([...headers, { key: "", value: "" }]);
  const removeHeader = (i: number) => setHeaders(headers.filter((_, idx) => idx !== i));
  const updateHeader = (i: number, field: "key" | "value", val: string) => {
    const updated = [...headers];
    updated[i][field] = val;
    setHeaders(updated);
  };

  const statusColor = (s: number) =>
    s >= 200 && s < 300 ? "bg-emerald-500/20 text-emerald-400" :
    s >= 400 ? "bg-rose-500/20 text-rose-400" :
    "bg-amber-500/20 text-amber-400";

  return (
    <DemoLayout title="REST API Explorer">
      <div className="grid lg:grid-cols-[1fr_280px] gap-6">
        <div className="space-y-4">
          {/* URL Bar */}
          <div className="flex gap-2">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="px-3 py-2.5 rounded-lg bg-bg-secondary border border-border text-text-primary font-mono text-sm focus:border-accent focus:outline-none"
            >
              {METHODS.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter request URL"
              className="flex-1 px-4 py-2.5 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm focus:border-accent focus:outline-none font-mono"
            />
            <button
              onClick={sendRequest}
              disabled={loading}
              className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium text-sm transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <FiSend size={14} />
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-border">
            <button
              onClick={() => setActiveTab("headers")}
              className={`px-4 py-2 text-sm transition-colors ${activeTab === "headers" ? "text-accent border-b-2 border-accent" : "text-text-muted hover:text-text-secondary"}`}
            >
              Headers
            </button>
            <button
              onClick={() => setActiveTab("body")}
              className={`px-4 py-2 text-sm transition-colors ${activeTab === "body" ? "text-accent border-b-2 border-accent" : "text-text-muted hover:text-text-secondary"}`}
            >
              Body
            </button>
          </div>

          {/* Headers Tab */}
          {activeTab === "headers" && (
            <div className="space-y-2">
              {headers.map((h, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    type="text"
                    value={h.key}
                    onChange={(e) => updateHeader(i, "key", e.target.value)}
                    placeholder="Key"
                    className="flex-1 px-3 py-2 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm focus:border-accent focus:outline-none"
                  />
                  <input
                    type="text"
                    value={h.value}
                    onChange={(e) => updateHeader(i, "value", e.target.value)}
                    placeholder="Value"
                    className="flex-1 px-3 py-2 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm focus:border-accent focus:outline-none"
                  />
                  <button onClick={() => removeHeader(i)} className="text-text-muted hover:text-rose-400 transition-colors px-2">
                    <FiTrash2 size={14} />
                  </button>
                </div>
              ))}
              <button onClick={addHeader} className="flex items-center gap-1 text-accent text-sm hover:text-accent-hover transition-colors">
                <FiPlus size={14} /> Add Header
              </button>
            </div>
          )}

          {/* Body Tab */}
          {activeTab === "body" && (
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm font-mono focus:border-accent focus:outline-none resize-none"
              placeholder="Request body (JSON)"
            />
          )}

          {/* Response */}
          {error && (
            <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
              {error}
            </div>
          )}

          {response && (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${statusColor(response.status)}`}>
                  {response.status} {response.statusText}
                </span>
              </div>
              <details className="group">
                <summary className="text-text-muted text-xs cursor-pointer hover:text-text-secondary">
                  Response Headers
                </summary>
                <pre className="mt-2 text-xs text-text-muted font-mono p-3 bg-bg-secondary rounded-lg border border-border">
                  {response.headers}
                </pre>
              </details>
              <JsonHighlighter json={response.body} />
            </div>
          )}
        </div>

        {/* History Sidebar */}
        <div className="bg-bg-secondary rounded-xl border border-border p-4 h-fit">
          <h3 className="text-sm font-medium text-text-primary mb-3 flex items-center gap-2">
            <FiClock size={14} /> History
          </h3>
          {history.length === 0 ? (
            <p className="text-text-muted text-xs">No requests yet</p>
          ) : (
            <div className="space-y-2">
              {history.map((entry, i) => (
                <button
                  key={i}
                  onClick={() => { setMethod(entry.method); setUrl(entry.url); }}
                  className="w-full text-left p-2 rounded-lg hover:bg-bg-tertiary transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${METHOD_COLORS[entry.method]}`}>
                      {entry.method}
                    </span>
                    <span className={`text-[10px] ${statusColor(entry.status)} px-1.5 py-0.5 rounded`}>
                      {entry.status}
                    </span>
                  </div>
                  <p className="text-text-muted text-[11px] font-mono truncate">{entry.url}</p>
                  <p className="text-text-muted text-[10px] mt-0.5">{entry.time}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </DemoLayout>
  );
}

export default ApiExplorer;
