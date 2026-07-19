import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const demo = [
  ['18–24', 38],
  ['25–34', 29],
  ['35–44', 18],
  ['45+', 15],
]

const interests = ['Skincare', 'Wellness', 'Fashion', 'Travel', 'Food']

export default function AudienceIntelligence() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <div className="glass rounded-2xl p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface3 font-mono text-xs text-ink2">SA</span>
                  <div>
                    <p className="text-sm font-medium text-ink">Sara Asad</p>
                    <p className="text-xs text-ink3">@saraasad · 83.4K followers · 4.2% ER</p>
                  </div>
                </div>
                <span className="rounded-full bg-teal/10 px-3 py-1 font-mono text-xs font-medium text-teal">89% match</span>
              </div>

              <div className="mt-7">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink3">Audience Demographics</p>
                <div className="space-y-2.5">
                  {demo.map(([label, val]) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="w-14 shrink-0 text-xs text-ink2">{label}</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface3">
                        <div className="h-full rounded-full bg-echo" style={{ width: `${val}%` }} />
                      </div>
                      <span className="w-9 shrink-0 text-right font-mono text-xs text-ink3">{val}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t border-line pt-6">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink3">Audience Interests</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <span key={i} className="rounded-full border border-line bg-surface2 px-3 py-1 text-xs text-ink2">{i}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <Eyebrow>Audience Intelligence</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Match by audience.
              <br /> Not by follower count.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink2">
              Traditional influencer selection ignores the only thing that matters: who is actually watching. TheZLStudio analyses deep audience demographics, interest overlap, and engagement quality — so every creator you activate speaks directly to your target customer, not just their followers.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
