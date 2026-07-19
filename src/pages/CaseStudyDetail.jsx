import { Link, useParams, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = caseStudies.find((c) => c.slug === slug)

  if (!study) return <Navigate to="/case-studies" replace />

  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-32">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <Link to="/case-studies" className="text-sm text-ink3 hover:text-ink2">← All case studies</Link>
          <div className="mt-6"><Eyebrow>{study.category}</Eyebrow></div>
          <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-5xl">{study.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-ink2">{study.summary}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-line bg-surface/60 p-6 sm:grid-cols-4">
          {study.stats.map(([v, l]) => (
            <div key={l} className="text-center">
              <p className="font-display text-2xl font-semibold text-gradient">{v}</p>
              <p className="mt-1 text-xs text-ink3">{l}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-14 space-y-10">
          {[
            ['The Challenge', study.challenge],
            ['The Approach', study.approach],
            ['The Results', study.results],
          ].map(([h, body], i) => (
            <Reveal key={h} delay={i * 0.08}>
              <h2 className="font-display text-xl font-semibold text-ink">{h}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink2">{body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 rounded-2xl border border-echo/30 bg-echo/[0.06] p-8 text-center">
          <h3 className="font-display text-xl font-semibold text-ink">Want results like {study.brand}?</h3>
          <Link
            to="/book-demo"
            className="mt-5 inline-flex rounded-full bg-echo px-6 py-3 text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.03]"
          >
            Book a Demo
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
