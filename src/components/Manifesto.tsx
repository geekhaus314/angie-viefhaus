import Reveal from './Reveal'

export default function Manifesto() {
  return (
    <section id="manifesto" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <Reveal>
        <p className="mb-10 text-xs uppercase tracking-[0.3em] text-blood">A short manifesto</p>
        <blockquote className="max-w-3xl font-serif text-3xl font-light italic leading-snug text-bone sm:text-4xl md:text-5xl">
          Every animal is already a philosopher. I just document their thesis.
        </blockquote>
      </Reveal>
      <Reveal delay={120}>
        <div className="mt-14 grid gap-8 text-sm leading-relaxed text-bone/65 sm:text-base md:grid-cols-2">
          <p>
            The owl does not perform for you. The coyote does not pause for your focus ring.
            The vole being eaten is not being rude — it is being <em className="text-bone">voled</em>.
            That is the contract of the wild, and I have signed it in the mud with my own boot.
          </p>
          <p>
            I photograph what happens when no one is looking — which is the only honest way to
            photograph anything. The pretty pictures you get from me are an accident of the
            universe's lighting. The disturbing ones are the universe keeping its word.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
