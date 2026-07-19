import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-echo/20"
            style={{ animation: 'ripple 4.5s cubic-bezier(0.2,0.6,0.3,1) infinite', animationDelay: `${i * 1.2}s` }}
          />
        ))}
      </div>
      <Reveal className="relative text-center">
        <p className="font-display text-7xl font-semibold text-gradient sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink">This voice didn't echo back.</h1>
        <p className="mt-3 text-sm text-ink2">The page you're looking for doesn't exist or has moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-echo px-6 py-3 text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.03]"
        >
          Back to home
        </Link>
      </Reveal>
    </section>
  )
}
