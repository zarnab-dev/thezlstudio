import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineCheckCircle, HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import { useToast } from '../components/Toast'
import { sendEmail, isEmailConfigured } from '../lib/sendEmail'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Enter your full name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    sendEmail({
      form_type: 'Contact',
      name: form.name,
      email: form.email,
      message: form.message,
    })
      .then(() => {
        setSubmitted(true)
        toast(
          isEmailConfigured ? 'Message sent — we\u2019ll reply soon.' : 'Message received (email not yet configured — see README).',
          'success'
        )
      })
      .catch(() => {
        toast('Something went wrong sending your message. Please try again.', 'error')
      })
      .finally(() => setLoading(false))
  }

  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-32">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto grid max-w-5xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-4 font-display text-3xl font-semibold text-gradient sm:text-4xl">
              Let's talk.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink2">
              Questions about the platform, partnerships, or press — reach out and a real person will get back to you.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-9 space-y-4">
            {[
              [HiOutlineMail, 'hello@thezlstudio.com'],
              [HiOutlinePhone, '+971 4 000 0000'],
              [HiOutlineLocationMarker, 'Dubai, UAE · Lahore, Pakistan'],
            ].map(([Icon, text]) => (
              <div key={text} className="flex items-center gap-3 text-sm text-ink2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface3 text-echo-soft">
                  <Icon size={18} />
                </span>
                {text}
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="glass rounded-2xl p-7 shadow-card sm:p-9">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <HiOutlineCheckCircle size={32} />
                </span>
                <h2 className="mt-6 font-display text-xl font-semibold text-ink">Message sent</h2>
                <p className="mt-3 max-w-sm text-sm text-ink2">Thanks, {form.name.split(' ')[0] || 'there'} — we'll get back to you at {form.email} shortly.</p>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink2">Full name</label>
                  <input
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className={`w-full rounded-lg border bg-surface2 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink3 focus:border-echo/50 ${errors.name ? 'border-red-400/50' : 'border-line'}`}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink2">Email</label>
                  <input
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                    className={`w-full rounded-lg border bg-surface2 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink3 focus:border-echo/50 ${errors.email ? 'border-red-400/50' : 'border-line'}`}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={update('message')}
                    rows={5}
                    placeholder="How can we help?"
                    className={`w-full resize-none rounded-lg border bg-surface2 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink3 focus:border-echo/50 ${errors.message ? 'border-red-400/50' : 'border-line'}`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-full bg-echo px-6 py-3 text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Send message'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
