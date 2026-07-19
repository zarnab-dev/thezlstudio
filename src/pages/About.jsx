import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

const values = [
  ['Automation with judgment', 'AI agents handle execution — but every campaign keeps a human in the loop for approval and strategy.'],
  ['Audience over vanity metrics', 'We optimize for real audience fit and recall, not follower counts or raw impressions.'],
  ['Transparency by default', 'Every dashboard, rate, and report is visible to the brand in real time — no black boxes.'],
]

const timeline = [
  ['2023', 'Founded to fix the manual, spreadsheet-driven state of influencer marketing.'],
  ['2024', 'Launched Discover Online with the first version of the 400M+ creator database.'],
  ['2025', 'Introduced autonomous AI agents for outreach, content review, and analytics.'],
  ['2026', 'TheZLStudio Chamber method launched — proprietary creator-sequencing for message recall.'],
]

export default function About() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-32">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="flex justify-center"><Eyebrow>About TheZLStudio</Eyebrow></div>
          <h1 className="mt-4 font-display text-3xl font-semibold text-gradient sm:text-5xl">
            Building the operating system for influencer marketing.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink2">
            TheZLStudio exists to replace guesswork and manual spreadsheets with AI-native discovery, automation, and measurement — so brands can run creator campaigns like a real, scalable channel.
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-20 max-w-5xl">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">What we believe</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-line bg-surface/60 p-6">
                <p className="font-display text-lg font-semibold text-ink">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink2">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-2xl">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">Our timeline</h2>
        </Reveal>
        <div className="mt-10 space-y-0">
          {timeline.map(([year, desc], i) => (
            <Reveal key={year} delay={i * 0.08}>
              <div className="flex gap-6 border-l border-line pb-10 pl-6 last:pb-0">
                <div className="relative -ml-[31px] mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-echo/15">
                  <span className="h-2 w-2 rounded-full bg-echo" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-echo-soft">{year}</p>
                  <p className="mt-1 text-sm text-ink2">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
