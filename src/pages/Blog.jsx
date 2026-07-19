import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import { posts } from '../data/posts'

export default function Blog() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-32">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="flex justify-center"><Eyebrow>Blog</Eyebrow></div>
          <h1 className="mt-4 font-display text-3xl font-semibold text-gradient sm:text-5xl">
            Ideas on AI-native marketing.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink2">
            Notes on strategy, product, and analytics from the team building TheZLStudio.
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl divide-y divide-line">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link to={`/blog/${p.slug}`} className="group block py-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-echo-soft">
                <span>{p.category}</span>
                <span className="text-ink3">·</span>
                <span className="text-ink3">{p.date}</span>
                <span className="text-ink3">·</span>
                <span className="text-ink3">{p.readTime}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-echo-soft">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink2">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink3">
                Read article
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
