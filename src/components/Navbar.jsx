import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX, HiOutlineSearch, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { useSearch } from '../context/SearchContext'

const links = [
  { label: 'Solutions', to: '/#platform' },
  { label: 'Resources', to: '/#agents' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'For Creators', to: '/#creators' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const { setOpen: setSearchOpen } = useSearch()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className={`flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${scrolled ? 'glass shadow-card' : ''}`}>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-echo/15">
              <span className="absolute h-full w-full animate-ripple rounded-full border border-echo/60" />
              <span className="font-display text-xs font-bold text-echo">Z</span>
            </span>
            TheZLStudio
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <Link key={l.label} to={l.to} className="text-sm text-ink2 transition-colors hover:text-ink">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex items-center gap-2 rounded-full border border-line px-3 py-2 text-ink3 transition-colors hover:border-echo/40 hover:text-ink2"
            >
              <HiOutlineSearch size={16} />
              <kbd className="font-mono text-[10px]">⌘K</kbd>
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink3 transition-colors hover:border-echo/40 hover:text-ink2"
            >
              {theme === 'dark' ? <HiOutlineSun size={17} /> : <HiOutlineMoon size={17} />}
            </button>

            <div className="mx-1 h-5 w-px bg-line" />

            {user ? (
              <>
                <Link to="/dashboard" className="px-2 text-sm text-ink2 transition-colors hover:text-ink">Dashboard</Link>
                <button
                  onClick={() => { logout(); navigate('/') }}
                  className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink2 transition-colors hover:border-echo/50 hover:text-ink"
                >
                  Log out
                </button>
              </>
            ) : (
              <Link to="/login" className="px-2 text-sm text-ink2 transition-colors hover:text-ink">Log in</Link>
            )}
            <Link
              to="/book-demo"
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-void transition-transform duration-300 hover:scale-[1.03]"
            >
              Book a Demo
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button onClick={() => setSearchOpen(true)} aria-label="Search" className="p-2 text-ink3">
              <HiOutlineSearch size={20} />
            </button>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 text-ink3">
              {theme === 'dark' ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
            </button>
            <button aria-label="Toggle menu" className="p-2 text-ink" onClick={() => setOpen((o) => !o)}>
              {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-6 mt-2 overflow-hidden rounded-2xl glass lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {links.map((l) => (
                <Link key={l.label} to={l.to} className="rounded-lg px-3 py-2.5 text-sm text-ink2 hover:bg-white/5 hover:text-ink">
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-line pt-3">
                {user ? (
                  <>
                    <Link to="/dashboard" className="px-3 py-2 text-sm text-ink2">Dashboard</Link>
                    <button onClick={() => { logout(); navigate('/') }} className="px-3 py-2 text-left text-sm text-ink2">Log out</button>
                  </>
                ) : (
                  <Link to="/login" className="px-3 py-2 text-sm text-ink2">Log in</Link>
                )}
                <Link to="/book-demo" className="rounded-full bg-ink px-4 py-2.5 text-center text-sm font-medium text-void">
                  Book a Demo →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
