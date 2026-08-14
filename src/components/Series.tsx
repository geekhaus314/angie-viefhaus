import Reveal from './Reveal'

const SERIES = [
  {
    img: '/img/series-winter.svg',
    title: 'One Forest, One Winter',
    meta: '12 frames — coming soon',
    text: 'Ninety-two days. One mile of woods. Every animal in that mile agreed to be photographed, and none of them were consulted.',
  },
  {
    img: '/img/series-kill.svg',
    title: 'The Unvarnished',
    meta: '7 frames — coming soon',
    text: 'What you eat is a choice. What she eats is Tuesday. A quiet series about the meals no one posts in the group chat.',
  },
  {
    img: '/img/series-nest.svg',
    title: 'Nest Logic',
    meta: '21 frames — coming soon',
    text: 'Birds are the least sentimental creatures I know, and they raise the most sentimental arguments for staying alive.',
  },
]

export default function Series() {
  return (
    <section id="series" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <Reveal>
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blood">Long-form</p>
        <h2 className="font-serif text-4xl font-light text-bone sm:text-5xl">Series</h2>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {SERIES.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <article className="group">
              <div className="overflow-hidden border border-bone/5 bg-ink">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover opacity-80 transition duration-500 group-hover:opacity-100"
                />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-bone">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone/50">{s.text}</p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-bone/30">{s.meta}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
