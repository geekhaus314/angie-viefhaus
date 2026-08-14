import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#manifesto', label: 'Manifesto' },
  { href: '#work', label: 'Work' },
  { href: '#series', label: 'Series' },
  { href: '#about', label: 'About' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-bone/10 bg-ink/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-2xl tracking-tight text-bone">
          Angie&nbsp;Viefhaus<span className="text-blood">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-bone/60 transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-bone/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:border-blood hover:text-blood"
          >
            Contact
          </a>
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-px w-6 bg-bone transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-bone transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-6 px-6 pb-10 pt-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-xs uppercase tracking-[0.2em] text-blood"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
