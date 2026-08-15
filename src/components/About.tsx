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
                I photograph what nature looks like when it is whole: animals mid-thought,
                forests holding their breath, the quiet harmony of things that belong to no one.
                I believe in that harmony the way other people believe in scripture — purely,
                maybe naively. I see what modern human society is doing to it, the noise and
                machinery of a world that no longer remembers it is a guest here, and I refuse
                to accept that disruption as the only way the story ends.
              </p>
              <p>
                Every frame I take is a small act of conservation — a holding-still of a world
                that already knows how to live. The wild moves toward its own nirvana, and each
                road we cut through it pushes that stillness further away. I keep pointing my
                lens at the path. Hoping no one builds a road over it.
              </p>
              <p>
                I was born in 1977 in Dellwood, Missouri — and North County back then was a
                different place entirely. My street was full of kids, mine and everyone else's,
                the whole neighborhood practically a family. Riverview Gardens gave me a
                diploma, and the fields and creeks around town gave me the rest — years spent
                exploring, turning over rocks for crawdads, staying out until the streetlights
                came on. Simple, and I wouldn't trade a second of it.
              </p>
              <p>
                I've always been on the shy side — quiet by default, a little antisocial in the
                gentlest way, not lonely, just selective. I never needed a crowd, which is
                probably how the wild got to know me. But don't mistake the quiet for sadness.
                I'm an optimist. I believe the world can be whole again; I just say it with my
                eyes on the horizon instead of my mouth.
              </p>
              <p>
                Progress is just the termites of a civilization — it hollows out the wood it
                stands on, then insists it is the architecture. Every nation that chases it
                eventually degrades into the very thing it tried to escape: a landfill with a
                flag. I photograph the only system that isn't dying of its own success.
              </p>
              <p>
                I believe the Industrial Revolution was when the world lost its innocence — not
                its own, but the innocence of everything around it. Nature used to be able to
                afford a kind of blissful ignorance: apathetically peaceful, indifferent to the
                humans passing through, never once wondering if it was being measured for a
                coffin. The smokestacks taught the trees to worry. Then warfare finished the
                job — every war is just a rehearsal for the extinction of everything that never
                signed up for it. And a worried forest isn't a forest anymore. It's a victim
                practicing acceptance.
              </p>
              <p>
                Honestly, nothing in the bloodline ever left the garden — an idea did. Around
                the first great philosophies, someone decided the real world was somewhere else,
                that the earth was just a shadow of it and we were its chosen residents. That
                was the fall: not a fruit, not a species — a belief. Once reality lives
                elsewhere, everything here quietly becomes a resource. The fences, the
                factories, the wars — all of it just us
                guarding a door to a place that doesn't exist, while the ground we came from
                waits below, patient and unbothered.
              </p>
              <p>
                Maybe that's why the unseen calls to me the way it does. I still carry the
                innocent curiosity of someone who never accepted that the wild is a backdrop — a
                burning need to stand before the unobserved, the unbothered, the places that
                never got the memo they were scenery. It used to be everyone's inheritance. Now
                you have to search for it, and most people stop looking early. The world
                learned to look past nature; I never could unlearn the looking. Where other
                people hear silence, I hear a conversation I'm late for.
              </p>
              <p>
                I shoot birds, coyotes, and whatever is quietly becoming lunch. I don't bait. I
                don't stage. I don't rescue the frame from its own honesty. If the scene is
                scary, that's the scene being accurate.
              </p>
              <blockquote className="border-l-2 border-blood pl-5 font-serif text-2xl font-light italic text-bone">
                "The camera doesn't lie. It just waits — like I do — for the moment that doesn't
                care it's being watched."
              </blockquote>
              <div className="border border-bone/10 bg-panel/50 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-bone/40">
                  The equipment (photographers compare these like bloodlines)
                </p>
                <p className="mt-3 text-sm text-bone/60">
                  A camera that weighs more than my opinions, a lens longer than my patience,
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
