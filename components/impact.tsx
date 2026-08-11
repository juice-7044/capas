'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { ShieldCheck, FileText, HeartHandshake } from 'lucide-react'

const ImpactParticles = dynamic(
  () => import('./impact-particles').then((m) => m.ImpactParticles),
  { ssr: false },
)

const METRICS = [
  { value: '$1.24M', label: 'raised from small gifts', sub: '89% at $50 or less' },
  { value: '312,000', label: 'minutes of instruction unlocked', sub: 'live, and still climbing' },
  { value: '1,480', label: 'Bronx students served', sub: 'ages 4 to 88' },
]

export function Impact() {
  const [show3d, setShow3d] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let hasWebGL = false
    try {
      const canvas = document.createElement('canvas')
      hasWebGL = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      )
    } catch {
      hasWebGL = false
    }
    setShow3d(!prefersReduced && hasWebGL)
  }, [])

  return (
    <section id="impact" className="relative overflow-hidden bg-plum-deep py-28 sm:py-36">
      {/* Particle galaxy behind the copy */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        {show3d ? (
          <ImpactParticles donors={6200} />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_45%,rgba(201,162,39,0.28),transparent_60%)]" />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-plum-deep via-plum-deep/40 to-plum-deep" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-label text-[0.7rem] text-gold md:text-xs">The impact framework</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-ivory sm:text-5xl">
            See your dollar become a downbeat.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory-dim">
            Every gold point is one donor. We don&apos;t guess where your money goes—we show you, in
            real time. One dollar equals one minute a Bronx student spends learning.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-gold/20 bg-gold/10 sm:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 120} className="bg-plum-darker/80 p-8 backdrop-blur sm:p-10">
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
              <ShieldCheck className="h-4 w-4 text-gold" /> Charity Navigator verified
            </span>
            <span className="inline-flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-gold" /> GuideStar Platinum
            </span>
            <span className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4 text-gold" /> 990 &amp; audit public
            </span>
          </div>
          <a
            href="#community"
            className="metallic-gold inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
          >
            Download impact report
          </a>
        </Reveal>
      </div>
    </section>
  )
}
