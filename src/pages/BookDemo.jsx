import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import Eyebrow from '../components/Eyebrow'
import { useToast } from '../components/Toast'
import { sendEmail, isEmailConfigured } from '../lib/sendEmail'

const budgets = ['< $5K / month', '$5K – $20K / month', '$20K – $100K / month', '$100K+ / month']
const platforms = ['Instagram', 'TikTok', 'YouTube', 'Multiple platforms']

export default function BookDemo() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: budgets[1], platform: platforms[0], message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Enter your full name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (form.company.trim().length < 2) e.company = 'Enter your company name'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    sendEmail({
      form_type: 'Book a Demo',
      name: form.name,
      email: form.email,
      company: form.company,
      budget: form.budget,
      platform: form.platform,
      message: form.message || '—',
    })
      .then(() => {
        setSubmitted(true)
        toast(
          isEmailConfigured
            ? 'Demo request sent — we\u2019ll be in touch within 24 hours.'
            : 'Demo request received (email not yet configured — see README).',
          'success'
        )
      })
      .catch(() => {
        toast('Something went wrong sending your request. Please try again.', 'error')
      })
      .finally(() => setLoading(false))
  }

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <Eyebrow>Book a Demo</Eyebrow>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-gradient sm:text-5xl">
            See TheZLStudio run your next campaign, live.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink2">
            Tell us a bit about your brand and goals. A member of our team will walk you through creator discovery, autonomous agents, and reporting — tailored to your category and budget.
          </p>

          <div className="mt-9 space-y-5">
            {[
              ['30 min', 'Live walkthrough of the platform'],
              ['24h', 'Average response time'],
              ['No cost', 'No obligation, no pressure'],
            ].map(([k, v]) => (
              <div key={v} className="flex items-center gap-4 rounded-xl border border-line bg-surface/60 p-4">
                <span className="font-display text-lg font-semibold text-echo-soft">{k}</span>
                <span className="text-sm text-ink2">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-7 shadow-card sm:p-9">
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
                <h2 className="mt-6 font-display text-2xl font-semibold text-ink">Request received</h2>
                <p className="mt-3 max-w-sm text-sm text-ink2">
                  Thanks, {form.name.split(' ')[0] || 'there'} — our team will reach out to {form.email} within 24 hours to schedule your walkthrough.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={onSubmit}
                className="space-y-5"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink2">Full name</label>
                    <input
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Ayesha Khan"
                      className={`w-full rounded-lg border bg-surface2 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink3 focus:border-echo/50 ${errors.name ? 'border-red-400/50' : 'border-line'}`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink2">Work email</label>
                    <input
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@company.com"
                      className={`w-full rounded-lg border bg-surface2 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink3 focus:border-echo/50 ${errors.email ? 'border-red-400/50' : 'border-line'}`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink2">Company / Brand</label>
                  <input
                    value={form.company}
                    onChange={update('company')}
                    placeholder="Your company name"
                    className={`w-full rounded-lg border bg-surface2 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink3 focus:border-echo/50 ${errors.company ? 'border-red-400/50' : 'border-line'}`}
                  />
                  {errors.company && <p className="mt-1.5 text-xs text-red-400">{errors.company}</p>}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink2">Monthly budget</label>
                    <select
                      value={form.budget}
                      onChange={update('budget')}
                      className="w-full rounded-lg border border-line bg-surface2 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-echo/50"
                    >
                      {budgets.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-ink2">Primary platform</label>
                    <select
                      value={form.platform}
                      onChange={update('platform')}
                      className="w-full rounded-lg border border-line bg-surface2 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-echo/50"
                    >
                      {platforms.map((p) => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-ink2">What are you hoping to achieve? (optional)</label>
                  <textarea
                    value={form.message}
                    onChange={update('message')}
                    rows={4}
                    placeholder="Tell us about your campaign goals…"
                    className="w-full resize-none rounded-lg border border-line bg-surface2 px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-ink3 focus:border-echo/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-full bg-echo px-6 py-3.5 text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60"
                >
                  {loading ? 'Submitting…' : 'Request demo'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
