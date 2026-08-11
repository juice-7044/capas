'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const HeroScene = dynamic(() => import('./hero-scene').then((m) => m.HeroScene), {
  ssr: false,
})

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef(0)
  const [use3d, setUse3d] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Detect WebGL support before mounting the canvas.
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
    setUse3d(!prefersReduced && hasWebGL)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0
      scrollRef.current = progress
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="top" ref={containerRef} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* 3D stage or static fallback */}
        <div className="absolute inset-0">
          {use3d ? (
            <HeroScene scrollRef={scrollRef} />
          ) : (
            <div className="relative h-full w-full bg-forest-black bg-[radial-gradient(circle_at_50%_120%,rgba(201,162,39,0.22),transparent_55%)]">
              <div className="absolute left-1/2 top-[62%] h-16 w-14 -translate-x-1/2 animate-chair-pulse rounded-sm bg-gold" />
            </div>
          )}
        </div>

        {/* Vignette + legibility scrim */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forest-black/70 via-transparent to-forest-black" />

        {/* Overlay copy */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="font-label mb-6 text-[0.7rem] text-gold/90 md:text-xs">
            Lola Louis&apos; Creative &amp; Performing Arts · The Bronx
          </p>

          <h1 className="max-w-4xl text-balance font-display text-4xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            <span className="block font-light italic text-ivory/85">The Bronx built us.</span>
            <span className="block font-black text-gradient-gold">
              Now we build the stage back.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-ivory-dim md:text-lg">
            Free piano, ballet, hip-hop, acting, and more—for every age, every background, every
            dream that couldn&apos;t afford tuition.{' '}
            <span className="italic text-ivory">El escenario es de todos.</span>
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#community"
              className="metallic-gold inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
            >
              Light a Chair · $1
            </a>
            <a
              href="#classes"
              className="inline-flex items-center justify-center rounded-full border border-gold/60 px-7 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-gold/10"
            >
              See Who&apos;s Waiting
            </a>
            <a
              href="#partnerships"
              className="inline-flex items-center justify-center rounded-full bg-plum-deep px-7 py-3 text-sm font-semibold text-gold transition-colors hover:bg-plum-darker"
            >
              Corporate Partnerships
            </a>
          </div>

          <p className="font-label absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.6rem] text-ivory-dim/70">
            Scroll · the house is filling
          </p>
        </div>
      </div>
    </section>
  )
}
