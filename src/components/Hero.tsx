export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      <img
        src="/img/hero.svg"
        alt="A coyote in fog at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-32 pt-40">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-bone/60">
          Wildlife photography — no bait, no staging, no apologies
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-light leading-[1.1] text-bone sm:text-6xl md:text-7xl">
          The beauty in the <em className="text-blood italic">disturbia</em> of the undisturbed.
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-bone/70 sm:text-base">
          I wait in the quiet until the quiet forgets I'm there. Then I press the button, and
          the truth keeps its appointment.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="bg-bone px-7 py-3 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-blood hover:text-bone"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="border border-bone/30 px-7 py-3 text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:border-blood hover:text-blood"
          >
            Start a conversation
          </a>
        </div>
      </div>

      <a
        href="#manifesto"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-bone/40 transition-colors hover:text-bone"
      >
        scroll, if you must ↓
      </a>
    </section>
  )
}
