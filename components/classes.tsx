'use client'

import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { Piano, Music2, Mic2, Guitar, Drama, Drum, type LucideIcon } from 'lucide-react'

type Status = 'LIVE' | 'WAITLIST'

const CLASSES: {
  name: string
  ages: string
  texture: string
  status: Status
  progress?: number
  needed?: string
  Icon: LucideIcon
  /* CSS background evoking a Bronx architectural surface */
  surface: string
}[] = [
  {
    name: 'Piano',
    ages: '4–18 · Adult · Senior',
    texture: 'Burnished fire-escape steel',
    status: 'LIVE',
    Icon: Piano,
    surface:
      'repeating-linear-gradient(90deg,#1a2620 0 6px,#22322a 6px 8px),repeating-linear-gradient(0deg,#141e18 0 22px,#1c2a22 22px 24px)',
  },
  {
    name: 'Ballet',
    ages: '4–18 · Adult',
    texture: 'Pre-war marble lobby',
    status: 'WAITLIST',
    progress: 62,
    needed: '200 more neighbors',
    Icon: Music2,
    surface:
      'radial-gradient(circle at 30% 20%,rgba(201,162,39,0.10),transparent 40%),linear-gradient(135deg,#2a2036,#1c1526)',
  },
  {
    name: 'Hip-Hop & Tap',
    ages: '6–18',
    texture: 'Hand-painted bodega sign',
    status: 'LIVE',
    Icon: Mic2,
    surface: 'linear-gradient(160deg,#3a2a10,#1f1608)',
  },
  {
    name: 'Guitar',
    ages: '10–18 · Adult',
    texture: 'Bronx River driftwood',
    status: 'WAITLIST',
    progress: 48,
    needed: '150 more neighbors',
    Icon: Guitar,
    surface: 'repeating-linear-gradient(85deg,#241a10 0 10px,#2c2013 10px 13px)',
  },
  {
    name: 'Violin',
    ages: '8–18 · Adult',
    texture: 'Subway tile mosaic',
    status: 'WAITLIST',
    progress: 74,
    needed: '100 more neighbors',
    Icon: Drum,
    surface:
      'repeating-linear-gradient(0deg,#0d1a24 0 18px,#12222e 18px 20px),repeating-linear-gradient(90deg,#0d1a24 0 18px,#12222e 18px 20px)',
  },
  {
    name: 'Drama',
    ages: '8–18 · Adult',
    texture: 'Paradise Theater velvet',
    status: 'LIVE',
    Icon: Drama,
    surface: 'linear-gradient(160deg,#3a1420,#210a12)',
  },
]

function Door({
  c,
  delay,
}: {
  c: (typeof CLASSES)[number]
  delay: number
}) {
  return (
    <Reveal delay={delay} className="[perspective:1200px]">
      <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card">
        {/* Light + sound leaking from the crack behind the door */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(201,162,39,0.55),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* The door panel: hinged on the left, swings open on hover */}
        <div
          className="relative z-10 flex h-full origin-left flex-col justify-between p-7 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(-42deg)]"
          style={{ backgroundImage: c.surface }}
        >
          <div className="flex items-start justify-between">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-black/50 text-gold ring-1 ring-gold/30">
              <c.Icon className="h-6 w-6" />
            </span>
            <span
              className={cn(
                'font-label rounded-full px-3 py-1 text-[0.6rem]',
                c.status === 'LIVE'
                  ? 'bg-gold/15 text-gold'
                  : 'bg-ivory/10 text-ivory-dim',
              )}
            >
              {c.status === 'LIVE' ? 'Open now' : 'Waitlist'}
            </span>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-2xl font-semibold text-ivory">{c.name}</h3>
            <p className="mt-1 text-sm text-ivory-dim">Ages {c.ages}</p>
            <p className="font-label mt-3 text-[0.55rem] text-gold/70">{c.texture}</p>

            {c.status === 'WAITLIST' && typeof c.progress === 'number' ? (
              <div className="mt-5">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-forest-black/60">
                  <div className="h-full rounded-full bg-gold" style={{ width: `${c.progress}%` }} />
                </div>
                <p className="mt-2 text-xs text-ivory-dim">
                  {c.progress}% funded · {c.needed} to open the door
                </p>
              </div>
            ) : (
              <p className="mt-5 text-sm font-medium text-gold">Pull the handle · reserve a spot</p>
            )}
          </div>
        </div>

        {/* CTA revealed as the door swings */}
        <a
          href="#community"
          className="absolute inset-x-0 bottom-0 z-20 block bg-forest-deep/90 px-7 py-4 text-sm font-semibold text-gold backdrop-blur transition-colors hover:text-ivory"
        >
          {c.status === 'LIVE' ? 'Reserve my spot →' : 'Pledge $1 to unlock →'}
        </a>
      </div>
    </Reveal>
  )
}

export function Classes() {
  return (
    <section id="classes" className="relative bg-forest-black py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-label text-[0.7rem] text-gold md:text-xs">
            What&apos;s waiting to be unlocked
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            No auditions. No recitals required. Just show up.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory-dim">
            Hover a door and it swings open—light spills out. Live classes run now in pop-up
            locations. Waitlisted classes unlock collectively: pledge $1 and your name moves the
            whole room forward.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CLASSES.map((c, i) => (
            <Door key={c.name} c={c} delay={(i % 3) * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
