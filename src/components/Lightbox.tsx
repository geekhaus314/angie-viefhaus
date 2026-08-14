import { useCallback, useEffect } from 'react'
import type { WorkItem } from '../data/work'

interface LightboxProps {
  item: WorkItem
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ item, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  return (
    <div
      className="lightbox-enter fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        className="absolute right-5 top-5 text-3xl text-bone/60 transition-colors hover:text-blood"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 px-4 text-4xl text-bone/40 transition-colors hover:text-bone sm:left-8"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Previous"
      >
        ‹
      </button>

      <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.title} className="max-h-[68vh] w-full object-contain" />
        <figcaption className="mt-6 text-center">
          <p className="font-serif text-2xl text-bone">{item.title}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-bone/40">{item.location}</p>
          <p className="mx-auto mt-3 max-w-md text-sm italic leading-relaxed text-bone/60">
            {item.caption}
          </p>
        </figcaption>
      </figure>

      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 px-4 text-4xl text-bone/40 transition-colors hover:text-bone sm:right-8"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  )
}
