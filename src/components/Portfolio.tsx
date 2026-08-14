import { useCallback, useState } from 'react'
import { CATEGORIES, WORK, type Category } from '../data/work'
import Lightbox from './Lightbox'
import Reveal from './Reveal'

type Filter = Category | 'all'

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all')
  const [index, setIndex] = useState<number | null>(null)

  const visible = filter === 'all' ? WORK : WORK.filter((w) => w.category === filter)

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + visible.length - 1) % visible.length)),
    [visible.length],
  )
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length],
  )

  return (
    <section id="work" className="border-t border-bone/10 bg-panel/40 py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blood">Selected work</p>
          <h2 className="font-serif text-4xl font-light text-bone sm:text-5xl">The evidence</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-3">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setFilter(c.id)
                  setIndex(null)
                }}
                className={`border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                  filter === c.id
                    ? 'border-blood text-blood'
                    : 'border-bone/15 text-bone/50 hover:border-bone/40 hover:text-bone'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((w, i) => (
            <Reveal key={w.id} delay={(i % 3) * 90}>
              <button
                className="group block w-full text-left"
                onClick={() => setIndex(i)}
                aria-label={`Open ${w.title}`}
              >
                <div className="overflow-hidden border border-bone/5 bg-ink">
                  <img
                    src={w.src}
                    alt={w.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                </div>
                <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-blood/70">
                  {w.location}
                </p>
                <h3 className="mt-1 font-serif text-xl text-bone">{w.title}</h3>
                <p className="mt-1 text-sm italic leading-relaxed text-bone/50">{w.caption}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {index !== null && (
        <Lightbox
          item={visible[index]}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
