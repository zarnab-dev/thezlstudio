import { caseStudies } from './caseStudies'
import { posts } from './posts'

const pages = [
  { title: 'Home', type: 'Page', path: '/', desc: 'AI-native operating system for influencer marketing.' },
  { title: 'Pricing', type: 'Page', path: '/pricing', desc: 'Starter, Growth, and Enterprise plans.' },
  { title: 'Book a Demo', type: 'Page', path: '/book-demo', desc: 'Schedule a walkthrough of the platform.' },
  { title: 'Case Studies', type: 'Page', path: '/case-studies', desc: 'Real campaigns, real numbers.' },
  { title: 'Blog', type: 'Page', path: '/blog', desc: 'Ideas on AI-native marketing.' },
  { title: 'About', type: 'Page', path: '/about', desc: 'Our mission, values, and timeline.' },
  { title: 'Contact', type: 'Page', path: '/contact', desc: 'Get in touch with the team.' },
  { title: 'Log in', type: 'Page', path: '/login', desc: 'Access your campaign dashboard.' },
]

const caseStudyItems = caseStudies.map((c) => ({
  title: c.title,
  type: 'Case Study',
  path: `/case-studies/${c.slug}`,
  desc: c.summary,
}))

const postItems = posts.map((p) => ({
  title: p.title,
  type: 'Blog Post',
  path: `/blog/${p.slug}`,
  desc: p.excerpt,
}))

export const searchIndex = [...pages, ...caseStudyItems, ...postItems]
