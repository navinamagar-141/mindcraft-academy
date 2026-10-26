"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, Check, Circle, Code2, LoaderCircle, Play, Sparkles, Terminal } from "lucide-react";

const workflowSteps = [
  {
    id: "initial",
    number: "1",
    title: "Initial Attempt",
    status: "Needs review",
    description: "A first pass runs, but the result still needs context and validation.",
    code: [
      { text: "const", tone: "text-white" },
      { text: " answer = await model.generate(prompt);" },
      { text: "\nreturn answer;", tone: "text-white/65" },
      { text: "\n// verify before shipping", tone: "text-white/35" },
    ],
  },
  {
    id: "analyze",
    number: "2",
    title: "Analyzing Error",
    status: "Context check",
    description: "Review the failure, confirm the context window, and check the output against expectations.",
    code: [
      { text: "if", tone: "text-white" },
      { text: " (!valid(answer)) {" },
      { text: "\n  inspect(contextWindow);", tone: "text-white/75" },
      { text: "\n  compare(expected, answer);", tone: "text-white/75" },
      { text: "\n}", tone: "text-white" },
    ],
  },
  {
    id: "retry",
    number: "3",
    title: "Retry with Fix",
    status: "Ready to validate",
    description: "Gather a targeted reference, revise the approach, then check the result again.",
    code: [
      { text: "const", tone: "text-white" },
      { text: " reference = await " },
      { text: "pplx.search", tone: "text-white font-bold" },
      { text: '("targeted query");', tone: "text-white/80" },
      { text: "\nconst fixed = await revise(answer, reference);", tone: "text-white/75" },
      { text: "\nvalidate(fixed);", tone: "text-white" },
    ],
  },
];

const aiTools = [
  { name: "Gemini", detail: "Explore and reason", mark: "G" },
  { name: "Perplexity", detail: "Research with sources", mark: "P" },
  { name: "Cursor", detail: "Build in your editor", mark: "C" },
  { name: "Claude Code", detail: "Work through code", mark: "A" },
  { name: "Codex", detail: "Assist with development", mark: "X" },
];

export default function AIWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [validation, setValidation] = useState<"idle" | "validating" | "complete">("idle");
  const currentStep = workflowSteps[activeStep];

  useEffect(() => {
    if (validation !== "validating") return;
    const timeout = window.setTimeout(() => setValidation("complete"), 1100);
    return () => window.clearTimeout(timeout);
  }, [validation]);

  return (
    <section className="border-y border-white/10 bg-[#121212] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-white/65">{"//"} PRACTICAL AI WORKFLOW</p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">Self-correction is part of the build.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/55">Treat AI output as a first draft. Inspect the result, improve the context, and validate before you ship.</p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-[#2e2e33] bg-[#1a1a1e] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-5 sm:p-8 lg:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2e2e33] pb-5">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Code2 size={17} className="text-white/70" aria-hidden="true" />
                Self-Correction Loop
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2e2e33] bg-[#121212] px-3 py-1.5 font-mono text-[10px] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-white/65" /> WORKFLOW PREVIEW
              </span>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-3" role="tablist" aria-label="Self-correction workflow steps">
              {workflowSteps.map((step, index) => (
                <button
                  key={step.id}
                  id={`workflow-tab-${step.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeStep === index}
                  aria-controls="workflow-step-panel"
                  onClick={() => {
                    setActiveStep(index);
                    setValidation("idle");
                  }}
                  className={`focus-ring flex items-center gap-2 rounded-lg border px-3 py-3 text-left text-xs font-semibold transition ${
                    activeStep === index
                      ? "border-white/50 bg-[#222226] text-white"
                      : "border-[#2e2e33] text-white/50 hover:border-white/30 hover:text-white/80"
                  }`}
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-current font-mono text-[10px]">{step.number}</span>
                  {step.title}
                </button>
              ))}
            </div>

            <div id="workflow-step-panel" role="tabpanel" aria-labelledby={`workflow-tab-${currentStep.id}`} className="mt-5 overflow-hidden rounded-xl border border-[#2e2e33] bg-[#0d0d0e]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2e2e33] px-4 py-3">
                <div className="flex items-center gap-2 font-mono text-[11px] text-white/50">
                  <Terminal size={14} aria-hidden="true" />
                  workflow.ts
                </div>
                {activeStep === 1 ? (
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/80">
                    <AlertTriangle size={12} aria-hidden="true" /> CONTEXT / VALIDATION CHECK
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-white/55">
                    {activeStep === 2 && validation === "complete" ? <Check size={12} aria-hidden="true" /> : <Circle size={9} aria-hidden="true" />}
                    {activeStep === 2 ? validation === "complete" ? "VALIDATED" : validation === "validating" ? "VALIDATING" : currentStep.status.toUpperCase() : currentStep.status.toUpperCase()}
                  </span>
                )}
              </div>
              <pre className="min-h-32 overflow-x-auto p-5 font-mono text-xs leading-7 text-white/80 sm:p-6" aria-label={`${currentStep.title} code preview`}><code>{currentStep.code.map((part, index) => <span key={index} className={part.tone}>{part.text}</span>)}</code></pre>
              <div className="flex flex-col justify-between gap-4 border-t border-[#2e2e33] px-4 py-4 sm:flex-row sm:items-center sm:px-5">
                <p className="text-xs leading-5 text-white/50">{currentStep.description}</p>
                {activeStep === 2 && (
                  <button
                    type="button"
                    disabled={validation === "validating"}
                    onClick={() => setValidation("validating")}
                    className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-xs font-bold text-black transition hover:bg-neutral-200 disabled:cursor-wait disabled:opacity-70"
                  >
                    {validation === "validating" ? <LoaderCircle size={14} className="animate-spin" aria-hidden="true" /> : validation === "complete" ? <Check size={14} aria-hidden="true" /> : <Play size={13} fill="currentColor" aria-hidden="true" />}
                    {validation === "validating" ? "Validating…" : validation === "complete" ? "Preview complete" : "Run validation preview"}
                  </button>
                )}
              </div>
            </div>
          </div>

          <aside className="border-t border-[#2e2e33] bg-[#1a1a1e] p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Sparkles size={17} className="text-white/70" aria-hidden="true" />
              Tools in the workflow
            </div>
            <p className="mt-2 text-xs leading-5 text-white/50">Choose the right tool for the task. Keep your judgment in the loop.</p>
            <ul className="mt-5 divide-y divide-[#2e2e33] overflow-hidden rounded-xl border border-[#2e2e33] bg-[#1a1a1e]">
              {aiTools.map((tool) => (
                <li key={tool.name} className="flex items-center gap-3 px-4 py-3.5 transition hover:bg-white/[0.03]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#2e2e33] bg-[#222226] font-display text-xs font-bold text-white/75">{tool.mark}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white/90">{tool.name}</p>
                    <p className="mt-0.5 text-[11px] text-white/45">{tool.detail}</p>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/35" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[10px] leading-5 text-white/35">Tool names are shown as examples; availability and access may vary.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
