import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import { HiOutlineSearch, HiOutlineChatAlt2, HiOutlineDocumentText, HiOutlineChartBar } from 'react-icons/hi'

const agents = [
  {
    key: 'discovery',
    icon: HiOutlineSearch,
    name: 'Discovery Agent',
    points: [
      'Reads brand brief and extracts audience signals',
      'Scans 400M+ creator profiles across platforms',
      'Shortlists by engagement rate, audience fit, and cost',
      'Sets campaign KPIs automatically',
    ],
    panel: {
      title: 'Creator Discovery',
      meta: '400M+ scanned',
      metrics: [['CPV', '< $0.004'], ['ER', '> 6%'], ['Fit', '> 80%']],
      rows: [
        ['N', 'Nadia Hassan', 'Beauty · Pakistan', '94%'],
        ['Z', 'Zara Qamar', 'Lifestyle · UAE', '89%'],
        ['S', 'Sara Eman', 'Fashion · KSA', '82%'],
      ],
      footer: 'KPIs set automatically · brief processed in 12s',
    },
  },
  {
    key: 'partnership',
    icon: HiOutlineChatAlt2,
    name: 'Partnership Agent',
    points: [
      'Multi-channel outreach: Instagram, email, WhatsApp',
      'Negotiates rates and shares scope details',
      'Manages 100+ creator conversations at once',
      'Hands off confirmed, briefed creators to campaign',
    ],
    panel: {
      title: 'Partnership Outreach',
      meta: '100+ simultaneous',
      metrics: [['Sent', '24'], ['Replied', '9'], ['Confirmed', '6']],
      rows: [
        ['Nadia Hassan', '2h ago', 'Instagram DM', 'Replied'],
        ['Zara Qamar', '5h ago', 'Email', 'Opened'],
        ['Sara Eman', '8h ago', 'WhatsApp', 'Delivered'],
      ],
      footer: 'Rate negotiation: automated · Avg accepted: $30',
    },
  },
  {
    key: 'content',
    icon: HiOutlineDocumentText,
    name: 'Content Agent',
    points: [
      'Onboards creators with contracts, briefs, timelines',
      'Sends automated reminders and tracks content progress',
      'Reviews every post against the brief before it goes live',
      'Manages feedback loops between brand and creator',
    ],
    panel: {
      title: 'Content Review',
      meta: '4 of 5 approved',
      checklist: [
        'Brief compliance',
        'Brand safety check',
        'Disclosure tag present',
        'Tone and messaging',
        'Posting schedule set',
      ],
      footer: '24 creators approved · 6 awaiting revision',
    },
  },
  {
    key: 'analytics',
    icon: HiOutlineChartBar,
    name: 'Analytics Agent',
    points: [
      'Tracks real-time views, CPV, and engagement rate',
      'Reads comments and runs sentiment analysis',
      'Generates qualitative creator performance reports',
      'Feeds learnings back into the Discovery Agent',
    ],
    panel: {
      title: 'Analytics · Live',
      meta: '30 creators active',
      metrics: [['Views', '2.2M · +18%'], ['CPV', '$0.003 · −12%'], ['ER', '8.7% · +3pts']],
      footer: 'Top performer: Nadia Hassan · 9.1% ER — learnings feeding Discovery Agent',
    },
  },
]

export default function AgentsSection() {
  const [active, setActive] = useState('discovery')
  const agent = agents.find((a) => a.key === active)

  return (
    <section id="agents" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center"><Eyebrow>The System</Eyebrow></div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            Brief in. Agents activate. Campaign runs itself.
          </h2>
          <p className="mt-4 text-ink2">
            Autonomous AI agents replace the work of 10 campaign managers — from discovery to performance report, fully automated.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((a) => (
            <button
              key={a.key}
              onClick={() => setActive(a.key)}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 ${
                active === a.key
                  ? 'border-echo/50 bg-echo/10 text-ink'
                  : 'border-line bg-surface/50 text-ink2 hover:border-line hover:bg-surface2'
              }`}
            >
              <a.icon size={18} className={active === a.key ? 'text-echo' : 'text-ink3'} />
              <span className="text-sm font-medium">{a.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface/60 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={agent.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="font-display text-2xl font-semibold text-ink">{agent.name}</h3>
                <ul className="mt-6 space-y-4">
                  {agent.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-ink2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-echo" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="glass overflow-hidden rounded-2xl p-6 shadow-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={agent.key}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-ink">{agent.panel.title}</span>
                  <span className="rounded-full bg-surface3 px-2.5 py-1 font-mono text-[10px] text-ink3">{agent.panel.meta}</span>
                </div>

                {agent.panel.metrics && (
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {agent.panel.metrics.map(([k, v]) => (
                      <div key={k} className="rounded-lg border border-line bg-surface2 p-3">
                        <p className="font-mono text-sm font-medium text-ink">{v}</p>
                        <p className="text-[10px] uppercase tracking-wide text-ink3">{k}</p>
                      </div>
                    ))}
                  </div>
                )}

                {agent.panel.rows && (
                  <div className="mt-5 space-y-2">
                    {agent.panel.rows.map((r) => (
                      <div key={r[1] || r[0]} className="flex items-center gap-3 rounded-lg border border-line bg-surface2 px-3 py-2.5">
                        {r.length === 4 && r[0].length <= 2 ? (
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface3 font-mono text-[10px] text-ink2">{r[0]}</span>
                        ) : null}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-medium text-ink">{r.length === 4 && r[0].length <= 2 ? r[1] : r[0]}</p>
                          <p className="truncate text-[11px] text-ink3">{r.length === 4 && r[0].length <= 2 ? r[2] : r[1]}</p>
                        </div>
                        <span className="shrink-0 font-mono text-[11px] text-echo-soft">{r[3]}</span>
                      </div>
                    ))}
                  </div>
                )}

                {agent.panel.checklist && (
                  <div className="mt-5 space-y-2.5">
                    {agent.panel.checklist.map((c) => (
                      <div key={c} className="flex items-center gap-2.5 text-xs text-ink2">
                        <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-teal/20 text-teal">✓</span>
                        {c}
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-6 border-t border-line pt-4 text-xs text-ink3">{agent.panel.footer}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
