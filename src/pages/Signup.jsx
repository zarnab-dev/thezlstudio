import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlineOfficeBuilding, HiOutlineExclamationCircle } from 'react-icons/hi'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../components/Toast'

export default function Signup() {
  const [form, setForm] = useState({ name: '', company: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [authError, setAuthError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()
  const toast = useToast()
  const navigate = useNavigate()

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Enter your full name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (form.password.length < 6) e.password = 'Password must be at least 6 characters'
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
        signup(form)
        toast('Account created — welcome to TheZLStudio.', 'success')
        navigate('/dashboard')
      } catch (err) {
        setAuthError(err.message)
      } finally {
        setLoading(false)
      }
    }, 600)
  }

  const fields = [
    { key: 'name', label: 'Full name', type: 'text', placeholder: 'Ayesha Khan', icon: HiOutlineUser },
    { key: 'company', label: 'Company (optional)', type: 'text', placeholder: 'Your brand or agency', icon: HiOutlineOfficeBuilding, optional: true },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', icon: HiOutlineMail },
    { key: 'password', label: 'Password', type: 'password', placeholder: '••••••••', icon: HiOutlineLockClosed },
  ]

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

        <h1 className="font-display text-2xl font-semibold text-ink">Create your account</h1>
        <p className="mt-2 text-sm text-ink2">Start running AI-powered influencer campaigns today.</p>

        {authError && (
          <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-400">
            <HiOutlineExclamationCircle className="mt-0.5 shrink-0" size={18} />
            {authError}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate>
          {fields.map((f) => (
            <div key={f.key}>
              <label htmlFor={f.key} className="mb-1.5 block text-xs font-medium text-ink2">{f.label}</label>
              <div className="relative">
                <f.icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink3" size={18} />
                <input
                  id={f.key}
                  type={f.type}
                  value={form[f.key]}
                  onChange={update(f.key)}
                  placeholder={f.placeholder}
                  className={`w-full rounded-lg border bg-surface2 py-2.5 pl-10 pr-3 text-sm text-ink outline-none transition-colors placeholder:text-ink3 focus:border-echo/50 ${errors[f.key] ? 'border-red-400/50' : 'border-line'}`}
                />
              </div>
              {errors[f.key] && <p className="mt-1.5 text-xs text-red-400">{errors[f.key]}</p>}
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-full bg-echo px-6 py-3 text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60"
          >
            {loading ? 'Creating account…' : 'Create account'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink2">
          Already have an account?{' '}
          <Link to="/login" className="text-echo-soft hover:underline">Log in</Link>
        </p>
      </motion.div>
    </section>
  )
}
