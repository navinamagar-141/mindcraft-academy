"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  LockKeyhole,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import ConsultationButton from "@/components/ConsultationButton";
import { practiceQuestions } from "@/data/selfCorrectionQuestions";
import { workflowToolGroups } from "@/data/workflowTools";

const workflowSteps = [
  { id: "initial", number: "1", title: "Initial Attempt" },
  { id: "analyze", number: "2", title: "Analyzing Error" },
  { id: "retry", number: "3", title: "Retry with Fix" },
] as const;

type Feedback =
  | { kind: "correct"; message: string }
  | { kind: "incorrect"; message: string };

const initialQuestionIndices: [number, number, number] = [0, 0, 0];
const initialCompleted: [boolean, boolean, boolean] = [false, false, false];

export default function AIWorkflow() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeToolGroup, setActiveToolGroup] = useState(0);
  const [questionIndices, setQuestionIndices] = useState<[number, number, number]>(initialQuestionIndices);
  const [completed, setCompleted] = useState<[boolean, boolean, boolean]>(initialCompleted);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [attempts, setAttempts] = useState(0);
  const questionPool = practiceQuestions[activeStage];
  const question = questionPool[questionIndices[activeStage]];
  const completedCount = completed.filter(Boolean).length;
  const exerciseComplete = completed.every(Boolean);
  const selectedToolGroup = workflowToolGroups[activeToolGroup];

  function restartExercise() {
    setActiveStage(0);
    setQuestionIndices([0, 0, 0]);
    setCompleted([false, false, false]);
    setSelectedAnswer(null);
    setFeedback(null);
    setAttempts(0);
  }

  function selectStage(index: number) {
    if (index > 0 && !completed[index - 1]) return;
    setActiveStage(index);
    setSelectedAnswer(null);
    setFeedback(null);
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = Math.min(index + 1, workflowSteps.length - 1);
    else if (event.key === "ArrowLeft") nextIndex = Math.max(index - 1, 0);
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = workflowSteps.length - 1;
    else return;

    while (nextIndex > 0 && !completed[nextIndex - 1]) {
      nextIndex -= 1;
    }
    event.preventDefault();
    document.getElementById(`workflow-tab-${workflowSteps[nextIndex].id}`)?.focus();
    selectStage(nextIndex);
  }

  function loadNextQuestion() {
    setQuestionIndices((current) => {
      const next: [number, number, number] = [...current];
      next[activeStage] = (next[activeStage] + 1) % practiceQuestions[activeStage].length;
      return next;
    });
    setSelectedAnswer(null);
    setFeedback(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (feedback?.kind === "incorrect") {
      loadNextQuestion();
      return;
    }
    if (selectedAnswer === null || completed[activeStage]) return;

    setAttempts((count) => count + 1);
    if (Number(selectedAnswer) === question.answer) {
      setCompleted((current) => [
        activeStage === 0 || current[0],
        activeStage === 1 || current[1],
        activeStage === 2 || current[2],
      ]);
      setFeedback({ kind: "correct", message: question.explanation });
      return;
    }
    setFeedback({ kind: "incorrect", message: question.hint });
  }

  function goToNextStage() {
    if (activeStage >= workflowSteps.length - 1) return;
    setActiveStage((stage) => stage + 1);
    setSelectedAnswer(null);
    setFeedback(null);
  }

  function handleToolTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % workflowToolGroups.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + workflowToolGroups.length) % workflowToolGroups.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = workflowToolGroups.length - 1;
    else return;

    event.preventDefault();
    setActiveToolGroup(nextIndex);
    document.getElementById(`tool-group-tab-${workflowToolGroups[nextIndex].id}`)?.focus();
  }

  return (
    <section className="relative isolate overflow-hidden border-y border-line bg-ink py-20 sm:py-24">
      <div className="hero-grid absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-secondary">PRACTICAL AI WORKFLOW</p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">Practice the steps, one question at a time.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-secondary">Try a few short questions about the tools and decisions used in everyday development work.</p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-5 sm:p-8 lg:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Code2 size={17} className="text-secondary" aria-hidden="true" />
                Self Correction Loop
              </div>
              <button
                type="button"
                onClick={restartExercise}
                className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-3 py-2 text-xs font-semibold text-secondary transition hover:bg-panel hover:text-white"
              >
                <RotateCcw size={14} aria-hidden="true" /> Restart exercise
              </button>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-3" role="tablist" aria-label="Practice exercise stages">
              {workflowSteps.map((step, index) => {
                const isLocked = index > 0 && !completed[index - 1];
                return (
                  <button
                    key={step.id}
                    id={`workflow-tab-${step.id}`}
                    type="button"
                    role="tab"
                    tabIndex={activeStage === index ? 0 : -1}
                    aria-selected={activeStage === index}
                    aria-controls="workflow-step-panel"
                    disabled={isLocked}
                    onClick={() => selectStage(index)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    className={`focus-ring flex min-h-11 items-center gap-2 rounded-lg border px-3 py-3 text-left text-xs font-semibold transition ${
                      activeStage === index
                        ? "border-white/50 bg-panel text-white"
                        : "border-line text-secondary hover:border-white/30 hover:text-secondary"
                    } disabled:cursor-not-allowed disabled:opacity-50`}
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-current font-mono text-[10px]">
                      {completed[index] ? <Check size={12} aria-label="Complete" /> : isLocked ? <LockKeyhole size={10} aria-label="Locked" /> : step.number}
                    </span>
                    {step.title}
                  </button>
                );
              })}
            </div>

            <div className="mt-4" aria-label="Exercise progress">
              <div className="flex items-center justify-between text-xs text-secondary">
                <span>{completedCount} of 3 stages complete</span>
                <span>Attempts: {attempts}</span>
              </div>
              <div
                className="mt-2 h-2 overflow-hidden rounded-full bg-panel"
                role="progressbar"
                aria-label="Exercise stages completed"
                aria-valuemin={0}
                aria-valuemax={3}
                aria-valuenow={completedCount}
              >
                <div className="h-full rounded-full bg-white transition-all" style={{ width: `${(completedCount / 3) * 100}%` }} />
              </div>
            </div>

            <div id="workflow-step-panel" role="tabpanel" aria-labelledby={`workflow-tab-${workflowSteps[activeStage].id}`} className="mt-5 overflow-hidden rounded-xl border border-line bg-panel">
              {activeStage === 2 && exerciseComplete ? (
                <div className="p-5 sm:p-6" aria-live="polite">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-white"><Check size={20} aria-hidden="true" /></span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">You made it through all three stages.</h3>
                  <p className="mt-2 text-sm leading-6 text-secondary">Nice work. You answered the challenge in {attempts} {attempts === 1 ? "attempt" : "attempts"}. Keep practising and put your skills to work on a project.</p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link href="/programs" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200">
                      Explore programs <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                    <ConsultationButton className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/5">
                      Book consultation <ArrowUpRight size={16} aria-hidden="true" />
                    </ConsultationButton>
                  </div>
                </div>
              ) : completed[activeStage] ? (
                <div className="p-5 sm:p-6" aria-live="polite">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-secondary">Stage complete</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">That is the right approach.</h3>
                  <p className="mt-2 text-sm leading-6 text-secondary">{question.explanation}</p>
                  <button type="button" onClick={goToNextStage} className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200">
                    Next <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-secondary">Exercise</p>
                      <h3 className="mt-2 font-display text-base font-bold leading-6 text-white sm:text-lg">{question.question}</h3>
                    </div>
                    <span className="rounded-full border border-line px-3 py-1 text-[10px] font-semibold text-secondary">
                      Question {questionIndices[activeStage] + 1} of {questionPool.length}
                    </span>
                  </div>

                  <fieldset className="mt-5 space-y-2">
                    <legend className="sr-only">Choose one answer</legend>
                    {question.options.map((option, index) => (
                      <label key={`${questionIndices[activeStage]}-${option}`} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border border-line px-3 py-3 text-sm leading-5 text-secondary transition hover:bg-surface has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-white">
                        <input
                          type="radio"
                          name={`practice-answer-${activeStage}`}
                          value={index}
                          checked={selectedAnswer === String(index)}
                          onChange={(event) => setSelectedAnswer(event.target.value)}
                          required
                          className="h-4 w-4 shrink-0 accent-white"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </fieldset>

                  {feedback && (
                    <p
                      className={`mt-4 rounded-lg border border-line px-4 py-3 text-sm leading-6 ${feedback.kind === "correct" ? "bg-surface text-white" : "bg-surface text-secondary"}`}
                      role="status"
                      aria-live="polite"
                    >
                      <span className="font-bold">{feedback.kind === "correct" ? "Correct. " : "Not quite. "}</span>
                      {feedback.message}
                    </p>
                  )}

                  {feedback?.kind === "correct" ? (
                    <button type="button" onClick={goToNextStage} className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200">
                      Next <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  ) : (
                    <button type="submit" disabled={selectedAnswer === null} className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-50">
                      {feedback?.kind === "incorrect" ? "Try another question" : "Submit Answer"}
                      {feedback?.kind === "incorrect" ? <ArrowRight size={16} aria-hidden="true" /> : null}
                    </button>
                  )}
                </form>
              )}
            </div>
          </div>

          <aside className="border-t border-line bg-surface p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Sparkles size={17} className="text-secondary" aria-hidden="true" />
              Tools you will use while learning
            </div>
            <p className="mt-2 text-xs leading-5 text-secondary">Explore the tools our mentors use in real development and digital marketing work.</p>
            <div className="mt-4 grid grid-cols-3 gap-1.5" role="tablist" aria-label="Tool categories">
              {workflowToolGroups.map((group, index) => (
                <button
                  key={group.id}
                  id={`tool-group-tab-${group.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeToolGroup === index}
                  aria-controls="tool-group-panel"
                  tabIndex={activeToolGroup === index ? 0 : -1}
                  onClick={() => setActiveToolGroup(index)}
                  onKeyDown={(event) => handleToolTabKeyDown(event, index)}
                  className={`focus-ring flex min-h-10 items-center justify-center rounded-md border px-2 py-2 text-center text-[10px] font-semibold leading-4 transition sm:text-xs ${
                    activeToolGroup === index
                      ? "border-white/50 bg-panel text-white"
                      : "border-line text-secondary hover:border-white/30 hover:text-white"
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>
            <ul
              id="tool-group-panel"
              role="tabpanel"
              aria-labelledby={`tool-group-tab-${selectedToolGroup.id}`}
              className="mt-3 h-[280px] divide-y divide-line overflow-y-auto overscroll-contain rounded-xl border border-line bg-surface sm:h-[320px] lg:h-[360px]"
            >
              {selectedToolGroup.tools.map((tool) => (
                <li key={tool.name} className="flex items-center gap-3 px-4 py-3.5 transition hover:bg-white/[0.03]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel font-display text-xs font-bold text-secondary">{tool.mark}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-secondary">{tool.name}</p>
                    <p className="mt-0.5 text-[11px] text-secondary">{tool.detail}</p>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/35" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[10px] leading-5 text-secondary">Tool names are examples. Availability and access may vary.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
