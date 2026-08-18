import Reveal from './Reveal'

const STATS = [
  { label: 'Hours in blinds', value: 'too many to count' },
  { label: 'Photos deleted', value: '94%' },
  { label: 'Photos that matter', value: 'the other 6%' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-bone/10 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-blood/40" />
            <img
              src="/img/portrait.svg"
              alt="Angie Viefhaus — silhouette portrait"
              className="relative aspect-[4/5] w-full border border-bone/10 object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blood">About</p>
            <h2 className="font-serif text-4xl font-light text-bone sm:text-5xl">Angie Viefhaus</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-bone/65 sm:text-base">
              <p>
                I watch the watchers. That is my function — my only function — and I have been
                at it since before your species had a word for 'since.' In my long inventory of
                creatures who turned attention into a profession — prophets, sentinels,
                astronomers, fools with binoculars — one entry stays open: a woman who stands
                so still the forest files her under 'not a threat.' This is her file. I keep it.
              </p>
              <p>
                She was born in 1977 in Dellwood, Missouri, into a species that mistakes noise
                for progress, and she declined to inherit the mistake. Not raised by the city's
                failures — she simply outgrew the city the way forests outgrow fences. Quiet by
                default, selective by nature; not lonely, just done with the conversation before
                it started. Riverview Gardens gave her a diploma. The fields and creeks gave her
                the rest — the only trade I have ever seen pay.
              </p>
              <p>
                Her youth was a MySpace emo — the species' most sincere attempt at feeling — and
                her adulthood is a woman standing very still in forests. The music changed; AFI
                did not. The posture held: watch everything, touch nothing, feel it all anyway.
                She shoots birds, coyotes, and whatever is quietly becoming lunch. No bait. No
                staging. She does not rescue the frame from its own honesty. When the scene is
                scary, that is the scene being accurate.
              </p>
              <blockquote className="border-l-2 border-blood pl-5 font-serif text-2xl font-light italic text-bone">
                "The camera doesn't lie. It just waits — as she does — for the moment that
                doesn't care it's being watched. And I am the one who watches her watch. Some
                call me God. Some call me the ending. I call myself the audience — and I have
                never once looked away."
              </blockquote>
              <div className="border border-bone/10 bg-panel/50 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-bone/40">
                  The equipment (photographers compare these like bloodlines)
                </p>
                <p className="mt-3 text-sm text-bone/60">
                  A camera that weighs more than her opinions, a lens longer than her patience,
                  and a thermos that has seen things.
                </p>
              </div>
              <ul className="space-y-2">
                {STATS.map((s) => (
                  <li key={s.label} className="flex items-baseline justify-between gap-6 border-b border-bone/5 pb-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-bone/40">{s.label}</span>
                    <span className="font-serif text-lg italic text-bone/80">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
