import { Link, useParams, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { posts } from '../data/posts'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-32">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-glow" />

      <article className="relative mx-auto max-w-2xl">
        <Reveal>
          <Link to="/blog" className="text-sm text-ink3 hover:text-ink2">← Back to blog</Link>
          <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-echo-soft">
            <span>{post.category}</span>
            <span className="text-ink3">·</span>
            <span className="text-ink3">{post.date}</span>
            <span className="text-ink3">·</span>
            <span className="text-ink3">{post.readTime}</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">{post.title}</h1>
        </Reveal>

        <div className="prose-none mt-10 space-y-6">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-base leading-relaxed text-ink2">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 rounded-2xl border border-echo/30 bg-echo/[0.06] p-8 text-center">
          <h3 className="font-display text-xl font-semibold text-ink">See these ideas in action</h3>
          <Link
            to="/book-demo"
            className="mt-5 inline-flex rounded-full bg-echo px-6 py-3 text-sm font-semibold text-void shadow-glow transition-transform duration-300 hover:scale-[1.03]"
          >
            Book a Demo
          </Link>
        </Reveal>
      </article>
    </section>
  )
}
