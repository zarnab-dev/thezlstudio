import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { useAuth } from '../context/AuthContext'

const campaigns = [
  { brand: 'Nike', name: 'Air Max Global Drop', status: 'Live', views: '22.4M', cpv: '$0.0021' },
  { brand: 'Honda', name: 'Civic Type R Reveal', status: 'Live', views: '14.1M', cpv: '$0.0018' },
  { brand: 'Pepsi', name: 'Pepsi Global Refresh', status: 'Completed', views: '61.4M', cpv: '$0.0015' },
]

const stats = [
  ['Active Campaigns', '2'],
  ['Total Views (30d)', '38.9M'],
  ['Avg. Engagement', '7.4%'],
  ['Creators Engaged', '3,895'],
]

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-32">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wider text-echo-soft">Dashboard</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Welcome back, {user?.name || 'there'}.
          </h1>
          <p className="mt-2 text-sm text-ink2">Here's a snapshot of your campaigns — demo data shown below.</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(([l, v]) => (
            <div key={l} className="rounded-xl border border-line bg-surface/60 p-5">
              <p className="font-display text-2xl font-semibold text-ink">{v}</p>
              <p className="mt-1 text-xs text-ink3">{l}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface/60">
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <span className="text-sm font-medium text-ink">Your Campaigns</span>
            <Link to="/book-demo" className="text-sm font-medium text-echo-soft hover:underline">+ New campaign</Link>
          </div>
          <div className="divide-y divide-line/60">
            {campaigns.map((c) => (
              <div key={c.name} className="flex flex-wrap items-center justify-between gap-3 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface3 font-display text-xs text-ink2">
                    {c.brand.slice(0, 2)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{c.brand}</p>
                    <p className="text-xs text-ink3">{c.name}</p>
                  </div>
                </div>
                <div className="font-mono text-xs text-ink3">{c.views} views · {c.cpv} CPV</div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${c.status === 'Live' ? 'bg-teal/10 text-teal' : 'bg-surface3 text-ink3'}`}>
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
