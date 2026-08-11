'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/reveal'

const GOAL = 250000
const RAISED = 96500

const PHASES = [
  {
    phase: 'Now',
    status: 'Fundraising',
    title: 'An empty room and a promise',
    body: 'No space, no classes\u2014just a plan and the neighbors who believe in it. Every dollar goes toward first, last, and a security deposit on a real Bronx studio.',
    active: true,
  },
  {
    phase: 'Soon',
    status: 'At $250K',
    title: 'Doors open · 200 students',
    body: 'A leased space with insured floors, a working piano, and a full evening and weekend schedule. Two hundred neighbors take their first free class.',
    active: false,
  },
  {
    phase: 'Forever',
    status: 'The long game',
    title: 'A permanent conservatory',
    body: 'A theatre, a recording studio, and a community gallery the Bronx owns outright\u2014so no one can take the stage away again.',
    active: false,
  },
]

export function Roadmap() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const pct = Math.round((RAISED / GOAL) * 100)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="roadmap" className="relative overflow-hidden bg-secondary py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-label text-[0.7rem] text-gold md:text-xs">The road to reopening</p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-secondary-foreground sm:text-5xl">
            We don&apos;t have a studio yet. That&apos;s exactly why we need you.
          </h2>
        </Reveal>

        {/* Live progress bar */}
        <div ref={ref} className="mt-12 rounded-2xl border border-gold/20 bg-plum-darker/50 p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-display text-2xl font-semibold text-ivory sm:text-3xl">
              We&apos;re{' '}
              <span className="text-gradient-gold">{inView ? pct : 0}%</span> to opening the doors
            </p>
            <p className="font-label text-[0.65rem] text-ivory-dim">
              ${RAISED.toLocaleString()} of ${GOAL.toLocaleString()}
            </p>
          </div>
          <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-forest-black/60">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#e6c04a] to-[#9c7d1c]"
              initial={{ width: reduce ? `${pct}%` : 0 }}
              animate={{ width: inView ? `${pct}%` : reduce ? `${pct}%` : 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="mt-4 text-sm text-ivory-dim">
            Live total, updated with every gift. When the bar fills, the doors open.
          </p>
        </div>

        {/* Vertical timeline */}
        <ol className="relative mt-16 border-l border-gold/25 pl-8">
          {PHASES.map((p, i) => (
            <Reveal
              as="li"
              key={p.phase}
              delay={i * 140}
              className="relative pb-12 last:pb-0"
            >
              <span
                className={`absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-secondary ${
                  p.active ? 'bg-gold' : 'bg-plum-darker border border-gold/40'
                }`}
              >
                {p.active && <span className="h-2 w-2 animate-ping rounded-full bg-forest-black" />}
              </span>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-semibold text-primary">{p.phase}</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {p.status}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-secondary-foreground">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-secondary-foreground/70">
                {p.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
