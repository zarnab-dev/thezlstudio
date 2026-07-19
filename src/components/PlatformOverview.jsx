import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const stats = [
  { label: 'Total Followers', value: '4.04M' },
  { label: 'Total Avg Views', value: '3.45M' },
  { label: 'Avg Engagement', value: '3.19%' },
  { label: 'Total Avg Likes', value: '118.6K' },
]

const tiers = [
  { label: 'Nano', value: 3, color: 'bg-echo/70' },
  { label: 'Micro', value: 18, color: 'bg-echo' },
  { label: 'Macro', value: 76, color: 'bg-teal' },
  { label: 'Mega', value: 0, color: 'bg-echo/40' },
  { label: 'Celeb', value: 3, color: 'bg-ink3' },
]

const creators = [
  { initials: 'RS', name: 'Rida Shahid', handle: '@rida.shahid', tag: 'Proposed · In Outreach', followers: '309.3K', eng: '0.89%', likes: '2.7K', views: '121.8K', audience: 'F 72% · Pakistan 87%' },
  { initials: 'NH', name: 'Nadine Hedayah', handle: '@nadinehedayah', tag: 'Proposed · In Outreach', followers: '30.1K', eng: '1.08%', likes: '324', views: '16.2K', audience: 'F 94% · UAE 32%' },
  { initials: 'Mk', name: 'Maria kimeh', handle: '@maria.m', tag: 'Proposed · In Outreach', followers: '204.4K', eng: '0.39%', likes: '806', views: '80.1K', audience: 'M 81% · UAE 21%' },
]

export default function PlatformOverview() {
  return (
    <section id="platform" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>The Platform</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Discover. Automate. Scale.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink2">
              Discover and run data-backed, fully automated influencer campaigns with 400M+ creators on Instagram, YouTube and TikTok.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-line bg-surface/60 p-4">
                  <p className="font-display text-xl font-semibold text-ink sm:text-2xl">{s.value}</p>
                  <p className="mt-1 text-xs text-ink3">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-line bg-surface/60 p-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-wide text-ink3">Creator Tiers</p>
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-surface3">
                {tiers.map((t) => (
                  <div key={t.label} className={t.color} style={{ width: `${Math.max(t.value, 4)}%` }} />
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink3">
                {tiers.map((t) => (
                  <span key={t.label} className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${t.color}`} /> {t.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass overflow-hidden rounded-2xl shadow-card">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <span className="text-xs font-medium text-ink2">Sample shortlist — illustrative data</span>
                <span className="rounded-full bg-surface3 px-2.5 py-1 font-mono text-[10px] text-ink3">Active · 17</span>
              </div>
              <div className="divide-y divide-line/60">
                {creators.map((c) => (
                  <div key={c.handle} className="flex items-center gap-4 px-5 py-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface3 font-mono text-xs text-ink2">
                      {c.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-ink">{c.name}</p>
                      <p className="truncate text-xs text-ink3">{c.handle} · {c.tag}</p>
                    </div>
                    <div className="hidden shrink-0 text-right font-mono text-xs text-ink2 sm:block">
                      <p>{c.followers} · {c.eng} ER</p>
                      <p className="text-ink3">{c.audience}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-px bg-line/60">
                {[['Male', '47.5%'], ['Female', '47.3%'], ['Pakistan', '53.5%']].map(([k, v]) => (
                  <div key={k} className="bg-surface2 px-4 py-3 text-center">
                    <p className="font-display text-lg text-ink">{v}</p>
                    <p className="text-[10px] uppercase tracking-wide text-ink3">{k}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
