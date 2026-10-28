export type WorkflowTool = {
  name: string;
  detail: string;
  mark: string;
};

export const workflowToolGroups = [
  {
    id: "ai-tools",
    label: "AI Tools",
    tools: [
      { name: "Gemini", detail: "Explore a new idea", mark: "G" },
      { name: "Perplexity", detail: "Check reliable sources", mark: "P" },
      { name: "Cursor", detail: "Try code in an editor", mark: "C" },
      { name: "Claude Code", detail: "Review and improve code", mark: "A" },
      { name: "Codex", detail: "Practice building a solution", mark: "X" },
    ],
  },
  {
    id: "coding",
    label: "Coding",
    tools: [
      { name: "Visual Studio Code", detail: "Write and debug code", mark: "VS" },
      { name: "GitHub", detail: "Share code and work in teams", mark: "GH" },
      { name: "Git", detail: "Track every change in your project", mark: "G" },
      { name: "Node.js", detail: "Run JavaScript on the server", mark: "N" },
      { name: "Postman", detail: "Test and debug APIs", mark: "P" },
      { name: "Chrome DevTools", detail: "Inspect and fix pages in the browser", mark: "CD" },
      { name: "Figma", detail: "Design screens before coding", mark: "F" },
      { name: "Vercel", detail: "Publish your project online", mark: "V" },
    ],
  },
  {
    id: "seo-marketing",
    label: "SEO and Marketing",
    tools: [
      { name: "Google Search Console", detail: "See how your site appears in search", mark: "GSC" },
      { name: "Google Analytics", detail: "Understand your visitors", mark: "GA" },
      { name: "Google Keyword Planner", detail: "Find what people search for", mark: "KP" },
      { name: "Semrush", detail: "Research keywords and competitors", mark: "S" },
      { name: "Ahrefs", detail: "Study backlinks and rankings", mark: "A" },
      { name: "Screaming Frog", detail: "Audit a website for SEO issues", mark: "SF" },
      { name: "PageSpeed Insights", detail: "Measure and improve page speed", mark: "PSI" },
      { name: "Canva", detail: "Create social media graphics", mark: "C" },
    ],
  },
] satisfies { id: string; label: string; tools: WorkflowTool[] }[];
