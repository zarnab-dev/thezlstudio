import Reveal from './Reveal'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-echo/20"
            style={{ animation: 'ripple 4.5s cubic-bezier(0.2,0.6,0.3,1) infinite', animationDelay: `${i * 1.2}s` }}
          />
        ))}
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold leading-tight text-gradient sm:text-5xl">
            Ready to launch your next campaign in 24 hours?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-ink2">
            Talk to the team, see the platform live, and get a tailored plan for your brand.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/book-demo"
              className="w-full rounded-full bg-echo px-8 py-3.5 text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
            >
              Book a Demo
            </Link>
            <Link
              to="/#creators"
              className="w-full rounded-full border border-line px-8 py-3.5 text-sm font-medium text-ink2 transition-colors hover:border-echo/50 hover:text-ink sm:w-auto"
            >
              Apply as a Creator
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
