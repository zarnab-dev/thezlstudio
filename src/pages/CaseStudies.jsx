import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-32">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="flex justify-center"><Eyebrow>Case Studies</Eyebrow></div>
          <h1 className="mt-4 font-display text-3xl font-semibold text-gradient sm:text-5xl">
            Real campaigns. Real numbers.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink2">
            A look inside how brands use TheZLStudio\u2019s AI agents to launch, run, and scale influencer campaigns.
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
        {caseStudies.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.1}>
            <Link
              to={`/case-studies/${c.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-7 transition-colors duration-300 hover:border-echo/40"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-echo-soft">{c.category}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink2">{c.summary}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5">
                {c.stats.slice(0, 2).map(([v, l]) => (
                  <div key={l}>
                    <p className="font-display text-lg font-semibold text-ink">{v}</p>
                    <p className="text-[11px] text-ink3">{l}</p>
                  </div>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-echo-soft">
                Read case study
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
