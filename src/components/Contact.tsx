import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'

const INTERESTS = [
  'Commissioned shoot',
  'Print purchase',
  'Just vibes',
  'I have seen something in my yard',
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass =
    'w-full border-b border-bone/15 bg-transparent py-3 text-sm text-bone outline-none transition-colors placeholder:text-bone/25 focus:border-blood'

  return (
    <section id="contact" className="border-t border-bone/10 py-28 md:py-40">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blood">Working together</p>
          <h2 className="font-serif text-4xl font-light text-bone sm:text-5xl">
            Let's talk about the quiet
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-bone/60 sm:text-base">
            Commissions, prints, or you just want to ask which bird screams at 3am. The forest
            has room for you.
          </p>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="mt-14 border border-blood/40 bg-blood/5 p-8 text-center">
              <p className="font-serif text-2xl italic text-bone">It has been sent into the dark.</p>
              <p className="mt-3 text-sm text-bone/50">
                Expect a reply when the moon is right. Possibly later. Definitely eventually.
              </p>
            </div>
          ) : (
            <form className="mt-14 space-y-8" onSubmit={handleSubmit}>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-bone/40">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name, or your spirit animal" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-bone/40">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={inputClass} placeholder="you@somewhere.com" />
                </div>
              </div>
              <div>
                <label htmlFor="interest" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-bone/40">
                  What brings you to the woods?
                </label>
                <select id="interest" name="interest" className={`${inputClass} appearance-none`}>
                  {INTERESTS.map((i) => (
                    <option key={i} className="bg-panel">{i}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-bone/40">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={inputClass}
                  placeholder="Dear Angie, ..."
                />
              </div>
              <button
                type="submit"
                className="bg-bone px-8 py-3 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-blood hover:text-bone"
              >
                Send it into the dark
              </button>
            </form>
          )}
        </Reveal>

        <p className="mt-12 text-center text-sm text-bone/40">
          or: <a href="mailto:hello@angieviefhaus.com" className="text-bone underline decoration-blood/60 underline-offset-4 transition-colors hover:text-blood">hello@angieviefhaus.com</a>
        </p>
      </div>
    </section>
  )
}
