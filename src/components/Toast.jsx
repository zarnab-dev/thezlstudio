import { createContext, useCallback, useContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineCheckCircle, HiOutlineXCircle, HiOutlineInformationCircle } from 'react-icons/hi'

const ToastContext = createContext(null)

const icons = {
  success: HiOutlineCheckCircle,
  error: HiOutlineXCircle,
  info: HiOutlineInformationCircle,
}

const colors = {
  success: 'text-teal border-teal/30 bg-teal/10',
  error: 'text-red-400 border-red-400/30 bg-red-400/10',
  info: 'text-echo-soft border-echo/30 bg-echo/10',
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const push = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random()
    setToasts((t) => [...t, { id, message, type }])
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id))
    }, 4000)
  }, [])

  return (
    <ToastContext.Provider value={push}>
      {children}
      <div className="pointer-events-none fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((t) => {
            const Icon = icons[t.type]
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40 }}
                className={`glass pointer-events-auto flex items-center gap-3 rounded-xl border px-4 py-3 shadow-card ${colors[t.type]}`}
              >
                <Icon size={20} />
                <span className="text-sm text-ink">{t.message}</span>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
