'use client'

import { useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { Piano, Music2, Mic2, Guitar, Drama, Drum, Lock, X, type LucideIcon } from 'lucide-react'

type ClassItem = {
  name: string
  ages: string
  blurb: string
  Icon: LucideIcon
}

const CLASSES: ClassItem[] = [
  {
    name: 'Piano',
    ages: '4\u201318 · Adult · Senior',
    blurb:
      'Weekly one-on-one and small-group lessons on real acoustic uprights, beginner to advanced.',
    Icon: Piano,
  },
  {
    name: 'Ballet',
    ages: '4\u201318 · Adult',
    blurb:
      'Classical technique on a sprung, insured floor\u2014barre, center, and a spring recital for anyone who wants one.',
    Icon: Music2,
  },
  {
    name: 'Hip-Hop & Tap',
    ages: '6\u201318',
    blurb:
      'Foundations, choreography, and freestyle from Bronx-born teaching artists. The borough that invented it, teaching it.',
    Icon: Mic2,
  },
  {
    name: 'Guitar',
    ages: '10\u201318 · Adult',
    blurb:
      'Acoustic and electric, from first chords to full songs. Instruments provided\u2014no gear required to start.',
    Icon: Guitar,
  },
  {
    name: 'Violin',
    ages: '8\u201318 · Adult',
    blurb: 'Suzuki-informed strings for every age, building toward a neighborhood chamber ensemble.',
    Icon: Drum,
  },
  {
    name: 'Drama',
    ages: '8\u201318 · Adult',
    blurb:
      'Improv, scene study, and stagecraft\u2014ending in a real production on a real stage.',
    Icon: Drama,
  },
]

function Door({ c, delay, onOpen }: { c: ClassItem; delay: number; onOpen: () => void }) {
  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={onOpen}
        className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 text-left transition-shadow hover:shadow-xl hover:shadow-primary/10 hover:[animation:door-shake_0.5s_ease-in-out]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green to-purple opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="flex items-start justify-between">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
            <c.Icon className="h-6 w-6" />
          </span>
          <span className="font-label inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[0.6rem] text-muted-foreground">
            <Lock className="h-3 w-3" /> Locked
          </span>
        </div>
        <div className="mt-10">
          <h3 className="font-display text-2xl font-semibold text-foreground">{c.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">Ages {c.ages}</p>
          <p className="mt-5 text-sm font-medium text-primary">
            Opens at $250K &middot; join the waitlist &rarr;
          </p>
        </div>
      </button>
    </Reveal>
  )
}

function Modal({ c, onClose }: { c: ClassItem; onClose: () => void }) {
  const [joined, setJoined] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${c.name} class details`}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
      />
      <div className="animate-rise relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card">
        <div className="p-8 sm:p-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
            <c.Icon className="h-7 w-7" />
          </span>
          <h3 className="mt-6 font-display text-3xl font-semibold text-foreground">{c.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">Ages {c.ages}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{c.blurb}</p>

          <div className="mt-7 rounded-xl border border-border bg-muted p-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">This class is locked.</span> It opens the
            day we hit $250K and sign a lease. Join the waitlist and we&apos;ll hold your spot the
            moment the doors open&mdash;no tuition, ever.
          </div>

          {joined ? (
            <p className="mt-6 rounded-full bg-primary/10 px-6 py-3 text-center text-sm font-semibold text-primary">
              You&apos;re on the list. We&apos;ll be in touch the day the doors open.
            </p>
          ) : (
            <button
              type="button"
              onClick={() => setJoined(true)}
              className="btn-green mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
            >
              Join the {c.name} waitlist
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export function Classes() {
  const [active, setActive] = useState<ClassItem | null>(null)

  return (
    <section id="classes" className="relative bg-muted py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-label text-[0.7rem] text-primary md:text-xs">Behind these doors</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Every door is locked. Together we hold the key.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            No classes are running yet. Each door below opens the day we reach $250K and sign a
            lease. Tap one to see what&apos;s inside&mdash;and hold your free spot on the waitlist.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CLASSES.map((c, i) => (
            <Door key={c.name} c={c} delay={(i % 3) * 120} onOpen={() => setActive(c)} />
          ))}
        </div>
      </div>

      {active && <Modal c={active} onClose={() => setActive(null)} />}
    </section>
  )
}
