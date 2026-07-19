import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const cols = [
  { title: 'Platform', links: [['Discovery', '/#platform'], ['Autonomous Agents', '/#agents'], ['Pricing', '/pricing'], ['Case Studies', '/case-studies']] },
  { title: 'Company', links: [['About', '/about'], ['Blog', '/blog'], ['Contact', '/contact']] },
  { title: 'Resources', links: [['For Creators', '/#creators'], ['Book a Demo', '/book-demo'], ['Log in', '/login']] },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-line/60 bg-surface/40 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-echo/15">
                <span className="font-display text-xs font-bold text-echo">Z</span>
              </span>
              TheZLStudio
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink2">
              The AI-native operating system for influencer marketing — discovery, outreach, content, and analytics, fully automated.
            </p>
            <div className="mt-6 flex items-center gap-4 text-ink3">
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-ink"><FaLinkedin size={18} /></a>
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-ink"><FaInstagram size={18} /></a>
              <a href="#" aria-label="X" className="transition-colors hover:text-ink"><FaXTwitter size={18} /></a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-xs uppercase tracking-wider text-ink3">{c.title}</p>
              <ul className="mt-4 space-y-3">
                {c.links.map(([label, to]) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-ink2 transition-colors hover:text-ink">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line/60 py-8 text-xs text-ink3 sm:flex-row">
          <p>© {new Date().getFullYear()} TheZLStudio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink2">Privacy Policy</a>
            <a href="#" className="hover:text-ink2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
