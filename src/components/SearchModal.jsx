import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineSearch, HiOutlineArrowSmRight } from 'react-icons/hi'
import { useSearch } from '../context/SearchContext'
import { searchIndex } from '../data/searchIndex'

const typeColor = {
  Page: 'text-echo-soft bg-echo/10',
  'Case Study': 'text-teal bg-teal/10',
  'Blog Post': 'text-ink3 bg-surface3',
}

export default function SearchModal() {
  const { open, setOpen } = useSearch()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const navigate = useNavigate()

  const results = useMemo(() => {
    if (!query.trim()) return searchIndex.slice(0, 6)
    const q = query.toLowerCase()
    return searchIndex.filter(
      (item) => item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.type.toLowerCase().includes(q)
    )
  }, [query])

  useEffect(() => {
    if (!open) {
      setQuery('')
      setActive(0)
    }
  }, [open])

  useEffect(() => setActive(0), [query])

  const go = (path) => {
    navigate(path)
    setOpen(false)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter' && results[active]) {
      go(results[active].path)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-start justify-center bg-void/70 px-4 pt-24 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-xl overflow-hidden rounded-2xl shadow-card"
          >
            <div className="flex items-center gap-3 border-b border-line px-5 py-4">
              <HiOutlineSearch className="text-ink3" size={20} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search pages, case studies, articles…"
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink3"
              />
              <kbd className="hidden rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-ink3 sm:block">Esc</kbd>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-ink3">No results for "{query}"</p>
              ) : (
                results.map((r, i) => (
                  <button
                    key={r.path}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(r.path)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left transition-colors ${
                      active === i ? 'bg-echo/10' : ''
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-sm font-medium text-ink">{r.title}</span>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${typeColor[r.type]}`}>{r.type}</span>
                      </div>
                      <p className="truncate text-xs text-ink3">{r.desc}</p>
                    </div>
                    <HiOutlineArrowSmRight className="shrink-0 text-ink3" size={16} />
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
