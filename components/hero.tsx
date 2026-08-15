'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { InstrumentAccent } from '@/components/instrument-accent'
import { SITE } from '@/lib/site'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative min-h-[92svh] w-full overflow-hidden pt-24"
      style={{
        backgroundColor: '#141a0c',
        backgroundImage:
          'radial-gradient(120% 90% at 85% 0%, rgba(201,162,39,0.18) 0%, rgba(20,26,12,0) 45%), radial-gradient(100% 80% at 10% 100%, rgba(91,107,58,0.28) 0%, rgba(20,26,12,0) 55%)',
      }}
    >
      <InstrumentAccent
        instrument="guitar"
        opacity={0.07}
        rotate={10}
        className="-right-24 -bottom-16 hidden h-[34rem] w-[34rem] [filter:brightness(0)_invert(1)] lg:block"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-14 lg:py-20">
        {/* Copy */}
        <div className="relative z-10">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-label text-[0.7rem] text-[#e6c04a] md:text-xs"
          >
            {SITE.name}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-5 text-balance font-display text-4xl leading-[1.02] tracking-tight text-cream sm:text-6xl lg:text-7xl"
          >
            <span className="block font-light italic text-cream/55">
              Every chair on this stage
            </span>
            <span className="block font-black text-gradient-green-bright">
              is waiting for someone
            </span>
            <span className="block font-light">who can&apos;t afford to sit in it.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-cream/75 md:text-lg"
          >
            For thirty years we taught the Northeast Bronx to sing, dance, and take the stage. Then
            we lost our space. We&apos;re raising the curtain again&mdash;and every seat we fill
            brings us closer to opening the doors.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Link
              href="/donate"
              className="btn-green inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
            >
              Fund a Chair · $1
            </Link>
            <Link
              href="/about"
              className="btn-gold inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
            >
              Our 30-Year Story
            </Link>
            <Link
              href="/partnerships"
              className="btn-purple inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
            >
              Partner With Us
            </Link>
          </motion.div>

          <p className="mt-8 max-w-md text-pretty text-sm leading-relaxed text-cream/55">
            We don&apos;t teach you to perform. We teach you to show up&mdash;for yourself, for your
            future, for your family.
          </p>
        </div>

        {/* Image */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10"
        >
          <Image
            src="/images/hero-stage-dark.png"
            alt="A single warm spotlight falling on an empty theatre stage above rows of darkened, empty seats"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/10 to-transparent mix-blend-multiply" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/25 to-transparent mix-blend-multiply" />
        </motion.div>
      </div>
    </section>
  )
}
