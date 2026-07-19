import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const steps = [
  { label: 'Brief received from client', ai: false, done: true },
  { label: 'AI creator matching', ai: true, done: true },
  { label: 'Automated outreach (39 creators)', ai: true, done: true },
  { label: 'Content review & approval', ai: false, done: false },
  { label: 'Go live across all platforms', ai: false, done: false },
  { label: 'White-label report generated', ai: true, done: false },
]

export default function AutomationFlow() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <div className="flex justify-center"><Eyebrow>End-to-End Automation</Eyebrow></div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            Brief in. Results out. AI handles the middle.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink2">
            From creator matching and automated outreach to content review, posting, and white-label reporting — TheZLStudio's AI agents manage every step of the campaign workflow under human supervision. You focus on strategy. The platform handles execution.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <div className="glass rounded-2xl p-7 shadow-card sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-ink">Nestlé Nido — Active Campaign</p>
                <p className="text-xs text-ink3">In Progress</p>
              </div>
              <span className="font-mono text-sm text-echo-soft">60%</span>
            </div>

            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-surface3">
              <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-echo-dim to-echo" />
            </div>

            <ol className="mt-8 space-y-1">
              {steps.map((s, i) => (
                <li key={s.label} className="flex items-center gap-4 border-b border-line/60 py-3.5 last:border-none">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs ${
                      s.done ? 'bg-teal/15 text-teal' : 'bg-surface3 text-ink3'
                    }`}
                  >
                    {s.done ? '✓' : i + 1}
                  </span>
                  <span className={`flex-1 text-sm ${s.done ? 'text-ink' : 'text-ink2'}`}>{s.label}</span>
                  {s.ai && (
                    <span className="rounded-full bg-echo/10 px-2 py-0.5 font-mono text-[10px] font-medium text-echo-soft">AI</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
