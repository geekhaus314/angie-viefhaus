const SOCIALS = ['Instagram', 'Facebook', 'Pinterest']

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <p className="font-serif text-2xl text-bone">
          Angie Viefhaus<span className="text-blood">.</span>
        </p>
        <div className="flex gap-8">
          {SOCIALS.map((s) => (
            <a
              key={s}
              href="#"
              className="text-[10px] uppercase tracking-[0.25em] text-bone/40 transition-colors hover:text-bone"
            >
              {s}
            </a>
          ))}
        </div>
        <p className="max-w-md text-xs leading-relaxed text-bone/30">
          © 2026 Angie Viefhaus. All moments photographed were already happening without me.
        </p>
      </div>
    </footer>
  )
}
