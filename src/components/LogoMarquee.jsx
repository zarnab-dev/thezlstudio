const row1 = ['Nike', 'Honda', 'Spotify', 'KFC', 'Pepsi', 'Shell', 'Chery', 'HER Beauty', 'Nescafé', 'IGI Life']
const row2 = ['Yango', 'Cerelac', 'OMODA', 'Engro', 'Moyuum', 'Nestlé', 'Fasset', 'Maxob', 'Nido', 'JAECOO', 'Rose Petal']

function Row({ items, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 gap-10 pr-10 ${reverse ? 'animate-marquee2' : 'animate-marquee'}`}>
        {doubled.map((name, i) => (
          <span
            key={name + i}
            className="whitespace-nowrap font-display text-lg font-medium text-ink3/70 transition-colors hover:text-ink2"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function LogoMarquee() {
  return (
    <section className="relative border-y border-line/60 bg-surface/40 py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-ink3">
        Trusted by ambitious brands, worldwide
      </p>
      <div className="flex flex-col gap-5">
        <Row items={row1} />
        <Row items={row2} reverse />
      </div>
    </section>
  )
}
