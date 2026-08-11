'use client'

import { Reveal } from '@/components/reveal'
import { ShieldCheck, FileText, HeartHandshake } from 'lucide-react'

const METRICS = [
  { value: '30 yrs', label: 'teaching the Bronx', sub: 'before we lost our space' },
  { value: '200', label: 'students we can seat', sub: 'the day the doors reopen' },
  { value: '$1', label: 'funds a minute of instruction', sub: 'every gift buys back time' },
]

export function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden bg-plum-deep py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(201,162,39,0.16),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-label text-[0.7rem] text-gold md:text-xs">What your dollar does</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-ivory sm:text-5xl">
            You&apos;re not funding a program. You&apos;re unlocking a room.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory-dim">
            We&apos;re pre-launch and fully transparent: no classes are running yet. Every dollar
            goes toward a leased space, insured floors, and a working piano—the plain, unglamorous
            things that turn an empty room into a stage.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-gold/20 bg-gold/10 sm:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 120}
              className="bg-plum-darker/80 p-8 backdrop-blur sm:p-10"
            >
              <p className="font-display text-4xl font-semibold text-gold sm:text-5xl">{m.value}</p>
              <p className="mt-3 text-base font-medium text-ivory">{m.label}</p>
              <p className="mt-1 text-sm text-ivory-dim">{m.sub}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-10 flex flex-col gap-6 rounded-2xl border border-gold/20 bg-plum-darker/60 p-8 backdrop-blur sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ivory-dim">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" /> 501(c)(3) nonprofit
            </span>
            <span className="inline-flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-gold" /> Every gift is tax-deductible
            </span>
            <span className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4 text-gold" /> Financials public on request
            </span>
          </div>
          <a
            href="#roadmap"
            className="metallic-gold inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
          >
            See the reopening plan
          </a>
        </Reveal>
      </div>
    </section>
  )
}
