import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const voices = [
  { tag: 'ENT', label: 'Entertainment', quote: '"This product actually got me—"', angle: -135 },
  { tag: 'EDU', label: 'Education', quote: '"Here\u2019s the science behind why it works"', angle: -45 },
  { tag: 'LFE', label: 'Lifestyle', quote: '"Added it to my morning routine..."', angle: 45 },
  { tag: 'COM', label: 'Community', quote: '"Honest review after 30 days"', angle: 135 },
]

export default function ChamberSection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>The TheZLStudio Chamber</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Crack the algorithm.
              <br /> Don't just feed it.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink2">
              Every social platform is personalized to each user. TheZLStudio's proprietary Chamber method deploys layered creators — entertainment, education, lifestyle, and community — delivering repeated strategic variations of the same brand message. The result: cognitive fluency that turns familiarity into belief.
            </p>

            <div className="mt-8 flex items-center gap-6 rounded-xl border border-line bg-surface/60 p-5">
              <div>
                <p className="font-display text-3xl font-semibold text-gradient">4×</p>
                <p className="text-xs text-ink3">recall lift</p>
              </div>
              <div className="h-10 w-px bg-line" />
              <div className="text-sm text-ink2">
                <p className="font-medium text-ink">Campaign: Moyuum Baby Bottles</p>
                <p className="text-xs text-ink3">Goal: awareness among new mothers in UAE · sent through 4 creator voices</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center">
              {/* orbit rings */}
              <div className="absolute h-[380px] w-[380px] rounded-full border border-line/70" />
              <div className="absolute h-[260px] w-[260px] rounded-full border border-line/70" />
              <div className="absolute h-[140px] w-[140px] animate-ripple rounded-full border border-echo/30" />

              {/* center audience node */}
              <div className="glass relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full text-center shadow-glow">
                <span className="font-display text-sm font-semibold text-ink">Audience</span>
                <span className="text-[10px] text-ink3">4 touchpoints</span>
              </div>

              {voices.map((v) => {
                const rad = (v.angle * Math.PI) / 180
                const r = 190
                const x = Math.cos(rad) * r
                const y = Math.sin(rad) * r
                return (
                  <div
                    key={v.tag}
                    className="absolute w-40 -translate-x-1/2 -translate-y-1/2 animate-float"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, animationDelay: `${v.angle}ms` }}
                  >
                    <div className="glass rounded-xl p-3 text-left shadow-card">
                      <span className="rounded bg-echo/15 px-1.5 py-0.5 font-mono text-[9px] font-medium text-echo-soft">{v.tag}</span>
                      <p className="mt-1.5 text-[10px] font-medium text-ink2">{v.label}</p>
                      <p className="mt-1 text-[10px] italic leading-snug text-ink3">{v.quote}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
