'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Cinematic empty-chair photograph */}
      <Image
        src="/images/hero-empty-chair.png"
        alt="A single empty folding chair lit by one spotlight, rows of chairs fading into darkness in a church basement"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Legibility scrims */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forest-black/80 via-forest-black/30 to-forest-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_20%,rgba(6,14,8,0.55)_75%)]" />

      {/* Overlay copy */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-label mb-6 text-[0.7rem] text-gold/90 md:text-xs"
        >
          Lola Louis&apos; Creative &amp; Performing Arts
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-4xl text-balance font-display text-4xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
        >
          <span className="block font-light italic text-ivory/85">The chairs are empty.</span>
          <span className="block font-black text-gradient-gold">The stage is not.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-ivory-dim md:text-lg"
        >
          For thirty years we taught the Northeast Bronx to sing, dance, and take the stage. Then we
          lost our space. We&apos;re raising the curtain again—and every seat we fill brings us
          closer to opening the doors.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#community"
            className="metallic-gold inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
          >
            Fund a Chair · $1
          </a>
          <a
            href="#roadmap"
            className="inline-flex items-center justify-center rounded-full border border-gold/60 px-7 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-gold/10"
          >
            See the Vision
          </a>
          <a
            href="#partnerships"
            className="inline-flex items-center justify-center rounded-full bg-plum-deep px-7 py-3 text-sm font-semibold text-gold transition-colors hover:bg-plum-darker"
          >
            Partner With Us
          </a>
        </motion.div>

        <p className="font-label absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.6rem] text-ivory-dim/70">
          Scroll · the house is waiting
        </p>
      </div>
    </section>
  )
}
