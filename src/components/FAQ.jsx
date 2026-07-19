import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import { HiOutlineChevronDown } from 'react-icons/hi'

const faqs = [
  { q: 'How is TheZLStudio different from a traditional influencer agency?', a: 'TheZLStudio replaces manual, human-led campaign management with autonomous AI agents that handle discovery, outreach, content review, and analytics — cutting campaign launch time from weeks to under 24 hours.' },
  { q: 'How large is the creator database?', a: 'TheZLStudio indexes over 400 million creator profiles across Instagram, TikTok, and YouTube, plus a vetted network of 5,560 pre-qualified creators ready for fast activation.' },
  { q: 'What is the TheZLStudio Chamber method?', a: 'It is TheZLStudio\u2019s proprietary approach to creator sequencing — deploying entertainment, education, lifestyle, and community voices around the same core message to build cognitive fluency with an audience, resulting in up to 4x recall lift.' },
  { q: 'Can I still review content before it goes live?', a: 'Yes. The Content Agent runs every piece of creator content through automated brief-compliance and brand-safety checks, but final human approval remains part of the workflow before anything posts.' },
  { q: 'Do you support creators outside Pakistan and the UAE?', a: 'Yes — Discover Online searches the global creator base across all platforms, while the TheZLStudio Network is currently strongest in Pakistan and UAE with continued global expansion.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <div className="flex justify-center"><Eyebrow>FAQ</Eyebrow></div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-line rounded-2xl border border-line bg-surface/60">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-sm font-medium text-ink sm:text-base">{f.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-ink3"
                >
                  <HiOutlineChevronDown size={18} />
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink2">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
