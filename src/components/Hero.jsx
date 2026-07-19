import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Eyebrow from './Eyebrow'

const campaigns = [
  { brand: 'Nike', name: 'Air Max Global Drop', shortlisted: '10,457', contacted: '6,820', onboarded: '1,240', status: 'Live' },
  { brand: 'Honda', name: 'Civic Type R Reveal', shortlisted: '7,312', contacted: '3,980', onboarded: '845', status: 'Live' },
  { brand: 'Pepsi', name: 'Pepsi Global Refresh', shortlisted: '15,920', contacted: '9,640', onboarded: '2,310', status: 'Live' },
]

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Signature echo rings */}
      <div className="pointer-events-none absolute left-1/2 top-[30%] -z-0 -translate-x-1/2">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-echo/25"
            style={{
              animation: `ripple 4.5s cubic-bezier(0.2,0.6,0.3,1) infinite`,
              animationDelay: `${i * 1.1}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Eyebrow>The AI-Native Operating System For Influencer Marketing</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-gradient sm:text-6xl lg:text-7xl"
        >
          One Message.
          <br />
          A Million Voices.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-balance text-base text-ink2 sm:text-lg"
        >
          Discovery. Outreach. Content. Analytics. Autonomous AI Agents. All in One OS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/book-demo"
            className="group relative w-full overflow-hidden rounded-full bg-echo px-7 py-3.5 text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
          >
            <span className="relative z-10">Book a Demo</span>
          </Link>
          <a
            href="#platform"
            className="w-full rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink2 transition-colors hover:border-echo/50 hover:text-ink sm:w-auto"
          >
            See how it works
          </a>
        </motion.div>
      </div>

      {/* Floating campaign console */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="relative mx-auto mt-16 hidden max-w-4xl px-6 md:block"
      >
        <div className="glass rounded-2xl p-3 shadow-card">
          <div className="flex items-center justify-between border-b border-line px-3 pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-ink3">echo | Campaigns</span>
            <span className="font-mono text-xs text-ink3">All Statuses</span>
          </div>
          <div className="divide-y divide-line/60">
            {campaigns.map((c, i) => (
              <div key={c.brand} className="flex items-center justify-between gap-4 px-3 py-3.5">
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface3 font-display text-xs text-ink2">
                    {c.brand.slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{c.brand}</p>
                    <p className="text-xs text-ink3">{c.name}</p>
                  </div>
                </div>
                <div className="hidden font-mono text-xs text-ink3 md:block">
                  {c.shortlisted} Shortlisted · {c.contacted} Contacted · {c.onboarded} Onboarded
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-1 text-xs font-medium text-teal">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-teal" /> {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
