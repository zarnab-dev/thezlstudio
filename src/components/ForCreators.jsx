import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import { Link } from 'react-router-dom'
import { HiOutlineCurrencyDollar, HiOutlineLightningBolt, HiOutlineShieldCheck } from 'react-icons/hi'

const perks = [
  { icon: HiOutlineLightningBolt, title: 'Get discovered faster', desc: 'Get matched to brand campaigns that fit your niche and audience — no cold pitching required.' },
  { icon: HiOutlineCurrencyDollar, title: 'Fair, transparent rates', desc: 'Negotiated rates and on-time payments, tracked in one place from acceptance to payout.' },
  { icon: HiOutlineShieldCheck, title: 'Clear briefs, always', desc: 'Every campaign comes with a complete brief, timeline, and content guidelines — no guesswork.' },
]

export default function ForCreators() {
  return (
    <section id="creators" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>For Creators</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Join the network brands actually pay to reach.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink2">
              TheZLStudio connects vetted creators with brand campaigns matched to their audience — with fair rates, fast payments, and briefs that make sense.
            </p>
            <Link
              to="/book-demo"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-echo/50"
            >
              Apply as a creator →
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="grid gap-4">
            {perks.map((p) => (
              <div key={p.title} className="flex items-start gap-4 rounded-xl border border-line bg-surface/60 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-echo/10 text-echo">
                  <p.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{p.title}</p>
                  <p className="mt-1 text-sm text-ink2">{p.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
