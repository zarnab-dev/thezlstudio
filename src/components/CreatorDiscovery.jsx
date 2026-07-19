import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const filters = ['UAE', '10K–100K', 'Lifestyle', 'ER > 3%', 'Female 60%+']
const results = [
  { initials: 'NP', name: 'Nadia Patel', handle: '@nadiap', eng: '4.1% ER' },
  { initials: 'LA', name: 'Lina Abuoud', handle: '@linaabuoud', eng: '3.8% ER' },
  { initials: 'ZQ', name: 'Zara Qureshi', handle: '@zaraqureshi', eng: '5.2% ER' },
]

export default function CreatorDiscovery() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center"><Eyebrow>Creator Discovery</Eyebrow></div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            400 million profiles. 50+ filters. Instant results.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink2">
            The largest micro and nano influencer database in the world — spanning Instagram, TikTok, and YouTube — filtered by location, engagement rate, audience demographics, category, and more. Find the exact creator your brand needs in seconds, not weeks.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div className="glass mx-auto rounded-2xl p-6 text-left shadow-card">
            <p className="text-sm text-ink3">Lifestyle creators, UAE, ER &gt; 3%...</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.map((f) => (
                <span key={f} className="rounded-full border border-echo/30 bg-echo/10 px-3 py-1.5 text-xs font-medium text-echo-soft">
                  {f} ✕
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
              <span className="text-sm font-medium text-ink">847 creators match</span>
              <span className="text-xs text-ink3">Sorted by relevance</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {results.map((r) => (
                <div key={r.handle} className="rounded-xl border border-line bg-surface2 p-4 text-center transition-colors hover:border-echo/40">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface3 font-mono text-sm text-ink2">
                    {r.initials}
                  </span>
                  <p className="mt-3 text-sm font-medium text-ink">{r.name}</p>
                  <p className="text-xs text-ink3">{r.handle}</p>
                  <p className="mt-2 font-mono text-xs text-teal">{r.eng}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
