import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineExclamationCircle } from 'react-icons/hi'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../components/Toast'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [authError, setAuthError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const toast = useToast()
  const navigate = useNavigate()

  const validate = () => {
    const e = {}
    if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Enter a valid email address'
    if (password.length < 6) e.password = 'Password must be at least 6 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    setAuthError('')
    if (!validate()) return
    setLoading(true)
    setTimeout(() => {
      try {
        login({ email, password })
        toast('Welcome back — logged in successfully.', 'success')
        navigate('/dashboard')
      } catch (err) {
        setAuthError(err.message)
      } finally {
        setLoading(false)
      }
    }, 600)
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_50%_50%_at_50%_30%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass relative w-full max-w-md rounded-2xl p-8 shadow-card"
      >
        <Link to="/" className="mb-8 flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-echo/15">
            <span className="font-display text-[10px] font-bold text-echo">Z</span>
          </span>
          TheZLStudio
        </Link>

        <h1 className="font-display text-2xl font-semibold text-ink">Welcome back</h1>
        <p className="mt-2 text-sm text-ink2">Log in to access your campaign dashboard.</p>

        {authError && (
          <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-400">
            <HiOutlineExclamationCircle className="mt-0.5 shrink-0" size={18} />
            {authError}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink2">Email</label>
            <div className="relative">
              <HiOutlineMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink3" size={18} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={`w-full rounded-lg border bg-surface2 py-2.5 pl-10 pr-3 text-sm text-ink outline-none transition-colors placeholder:text-ink3 focus:border-echo/50 ${errors.email ? 'border-red-400/50' : 'border-line'}`}
              />
            </div>
            {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-ink2">Password</label>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink3" size={18} />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full rounded-lg border bg-surface2 py-2.5 pl-10 pr-3 text-sm text-ink outline-none transition-colors placeholder:text-ink3 focus:border-echo/50 ${errors.password ? 'border-red-400/50' : 'border-line'}`}
              />
            </div>
            {errors.password && <p className="mt-1.5 text-xs text-red-400">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-ink2">
              <input type="checkbox" className="rounded border-line bg-surface2 accent-echo" />
              Remember me
            </label>
            <a href="#" className="text-echo-soft hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-full bg-echo px-6 py-3 text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60"
          >
            {loading ? 'Logging in…' : 'Log in'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink2">
          Don't have an account?{' '}
          <Link to="/signup" className="text-echo-soft hover:underline">Sign up</Link>
        </p>
      </motion.div>
    </section>
  )
}
