import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const testimonials = [
  {
    quote: 'TheZLStudio took our influencer strategy from guesswork to a real, measurable channel. The AI matching alone saved us weeks of manual vetting.',
    name: 'Marketing Lead',
    role: 'FMCG Brand, MENA',
  },
  {
    quote: 'We launched a 40-creator campaign in under a day. The reporting is the most transparent we\u2019ve seen from any influencer platform.',
    name: 'Growth Manager',
    role: 'D2C Beauty Brand',
  },
  {
    quote: 'The Chamber method changed how we think about creator content — it\u2019s not about reach anymore, it\u2019s about repetition across the right voices.',
    name: 'Brand Director',
    role: 'Automotive, Pakistan',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center"><Eyebrow>What Brands Say</Eyebrow></div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Trusted by teams who need results, not reports.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-7">
                <span className="font-display text-3xl text-echo/50">"</span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink2">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface3 font-mono text-xs text-ink2">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{t.name}</p>
                    <p className="text-xs text-ink3">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
