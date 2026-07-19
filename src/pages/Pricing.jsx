import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiCheck } from 'react-icons/hi'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

const plans = [
  {
    name: 'Starter',
    tagline: 'For brands running their first AI-powered campaign',
    monthly: 499,
    yearly: 399,
    features: ['Up to 3 active campaigns', 'Discover Online — 400M+ profiles', '10 automated outreach sequences/mo', 'Standard analytics dashboard', 'Email support'],
    cta: 'Start with Starter',
  },
  {
    name: 'Growth',
    tagline: 'For teams scaling creator programs across markets',
    monthly: 1499,
    yearly: 1199,
    features: ['Unlimited active campaigns', 'Discover Online + TheZLStudio Network access', 'Unlimited automated outreach', 'TheZLStudio Chamber campaign sequencing', 'Content Agent review & approval', 'Dedicated account manager'],
    highlighted: true,
    cta: 'Start with Growth',
  },
  {
    name: 'Enterprise',
    tagline: 'For agencies and global brands with custom needs',
    monthly: null,
    yearly: null,
    features: ['Everything in Growth', 'Custom AI agent workflows', 'White-label reporting & API access', 'Multi-brand / multi-market management', 'SLA-backed support & onboarding'],
    cta: 'Talk to Sales',
  },
]

const faqs = [
  ['Can I switch plans later?', 'Yes, you can upgrade or downgrade at any time — changes apply at the start of your next billing cycle.'],
  ['Is there a free trial?', 'We offer a guided demo instead of a self-serve trial, since campaign setup benefits from a short onboarding call.'],
  ['What counts as an "active campaign"?', 'Any campaign currently in discovery, outreach, content, or live-tracking status counts as one active campaign.'],
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-32">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="flex justify-center"><Eyebrow>Pricing</Eyebrow></div>
          <h1 className="mt-4 font-display text-3xl font-semibold text-gradient sm:text-5xl">
            Simple pricing. Serious results.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink2">
            Every plan includes AI-native discovery, autonomous agents, and real-time analytics — pick the scale that matches your campaign volume.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 inline-flex items-center gap-3 rounded-full border border-line bg-surface/60 p-1.5">
          <button
            onClick={() => setYearly(false)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${!yearly ? 'bg-echo text-void' : 'text-ink2'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${yearly ? 'bg-echo text-void' : 'text-ink2'}`}
          >
            Yearly <span className="opacity-70">— save 20%</span>
          </button>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <div
              className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                p.highlighted ? 'border-echo/50 bg-echo/[0.06] shadow-glow' : 'border-line bg-surface/60'
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-echo px-3 py-1 text-xs font-semibold text-void">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-ink">{p.name}</h3>
              <p className="mt-2 text-sm text-ink2">{p.tagline}</p>

              <div className="mt-6">
                {p.monthly ? (
                  <>
                    <span className="font-display text-4xl font-semibold text-ink">${yearly ? p.yearly : p.monthly}</span>
                    <span className="text-sm text-ink3"> /month</span>
                  </>
                ) : (
                  <span className="font-display text-4xl font-semibold text-ink">Custom</span>
                )}
              </div>

              <ul className="mt-7 flex-1 space-y-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink2">
                    <HiCheck className="mt-0.5 shrink-0 text-teal" size={16} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/book-demo"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform duration-300 hover:scale-[1.02] ${
                  p.highlighted ? 'bg-echo text-void shadow-glow' : 'border border-line text-ink hover:border-echo/50'
                }`}
              >
                {p.cta}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="relative mx-auto mt-28 max-w-2xl">
        <h2 className="text-center font-display text-2xl font-semibold text-ink">Pricing questions</h2>
        <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-surface/60">
          {faqs.map(([q, a]) => (
            <div key={q} className="p-6">
              <p className="text-sm font-medium text-ink">{q}</p>
              <p className="mt-2 text-sm text-ink2">{a}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
