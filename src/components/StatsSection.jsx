import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const stats = [
  { value: '61.4M', label: 'Views Delivered' },
  { value: '$0.0015', label: 'Avg. Cost Per View' },
  { value: '7.84%', label: 'Avg. Engagement Rate' },
  { value: '< 24h', label: 'Campaign Launch Time' },
]

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-line/60 bg-surface/40 py-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <div className="flex justify-center"><Eyebrow>Proven at Scale</Eyebrow></div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Numbers that speak louder than pitches.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-3xl font-semibold text-gradient sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-ink3 sm:text-sm">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
