import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import { HiOutlineGlobeAlt, HiOutlineUserGroup } from 'react-icons/hi'

const modes = [
  {
    icon: HiOutlineGlobeAlt,
    tag: 'Discover Online',
    title: '400M+ profiles. Every platform.',
    desc: 'Live search across the full global creator database. Instagram, TikTok, YouTube. Filter by any combination of demographics, performance, location, or audience attributes. Results update in real time.',
    stats: [
      ['400M+', 'Creator profiles'],
      ['180+', 'Search filters'],
      ['Real-time', 'Data freshness'],
    ],
    points: [
      'Instagram, TikTok, YouTube, and more',
      '50+ demographic and performance filters',
      'Audience overlap detection',
      'Fake follower scoring on every profile',
      'Lookalike discovery from existing creators',
    ],
  },
  {
    icon: HiOutlineUserGroup,
    tag: 'TheZLStudio Network',
    title: '5,560 vetted creators. Pre-qualified.',
    desc: 'A curated network of creators TheZLStudio has worked with, vetted, and relationship-managed. Known delivery track record, pre-negotiated rates, fast brief turnaround. Skip the search — go straight to activation.',
    stats: [
      ['5,560', 'Vetted creators'],
      ['48h', 'Brief turnaround'],
      ['Known', 'Delivery track record'],
    ],
    points: [
      'Pre-vetted audience quality — no fakes',
      'Known engagement benchmarks from past work',
      'Established relationship — no cold outreach',
      'Preferred rates for repeat activations',
      'Pakistan & UAE coverage across all niches',
    ],
  },
]

export default function DiscoveryModes() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center"><Eyebrow>Two Discovery Modes</Eyebrow></div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            Search the world. Or tap our network directly.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {modes.map((m, i) => (
            <Reveal key={m.tag} delay={i * 0.12}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-8 transition-colors duration-300 hover:border-echo/40">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-echo/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-echo/10 text-echo">
                  <m.icon size={22} />
                </div>
                <p className="mt-6 font-mono text-xs uppercase tracking-wider text-echo-soft">{m.tag}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{m.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink2">{m.desc}</p>

                <div className="mt-8 grid grid-cols-3 gap-3 border-y border-line py-6">
                  {m.stats.map(([v, l]) => (
                    <div key={l}>
                      <p className="font-display text-xl font-semibold text-ink">{v}</p>
                      <p className="mt-1 text-[11px] leading-tight text-ink3">{l}</p>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-3">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-ink2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
