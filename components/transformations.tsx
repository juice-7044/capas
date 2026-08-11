'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const PANELS = [
  {
    community: 'Caribbean · Wakefield',
    image: '/images/bronx-kids.png',
    alt: 'A young Dominican girl singing with her eyes closed in a repurposed Bronx church basement, other kids watching from the shadows',
    body: 'a shy eleven-year-old who hides behind the sofa when company comes will step to a microphone and sing. Her grandmother will stop pretending she isn\u2019t crying.',
  },
  {
    community: 'South American · Fordham',
    image: '/images/bronx-adults.png',
    alt: 'An Ecuadorian MTA cleaner watching an improv class on his phone on the 2 train',
    body: 'a man who cleans the 2 train overnight will take a 6am acting class on no sleep\u2014and finally stand up at his union meeting and be heard.',
  },
  {
    community: 'Asian · Co-op City',
    image: '/images/bronx-seniors.png',
    alt: 'An elderly woman playing an electronic keyboard in a Co-op City senior room, her daughter watching',
    body: 'a grandmother who forgets her grocery list will sit at a keyboard and remember every hymn her mother taught her. Her daughter will visit Saturdays just to listen.',
  },
  {
    community: 'European · Belmont',
    image: '/images/bronx-european.png',
    alt: 'An elderly European immigrant man tuning a worn violin in a modest Bronx apartment',
    body: 'a retired man who packed away his violin decades ago will unwrap it, tune it, and teach the block\u2019s kids the old theatre songs he thought had died with his generation.',
  },
]

export function Transformations() {
  return (
    <section id="transformations" className="relative bg-forest-black py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-label text-[0.7rem] text-gold md:text-xs">Who&apos;s waiting</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Four neighbors. One borough. The same door about to open.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory-dim">
            Every face here is a Northeast Bronx neighbor, not a stock photo. These aren&apos;t
            testimonials yet&mdash;we haven&apos;t reopened. They&apos;re the promises your gift
            keeps.
          </p>
        </Reveal>
      </div>

      {/* Horizontal scroll on desktop, stacked on mobile */}
      <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 [scrollbar-width:none] lg:mx-auto lg:max-w-7xl [&::-webkit-scrollbar]:hidden">
        {PANELS.map((panel, i) => (
          <Reveal
            key={panel.community}
            delay={i * 100}
            className="group flex w-[85vw] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-border bg-card sm:w-[420px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={panel.image || '/placeholder.svg'}
                alt={panel.alt}
                fill
                sizes="(max-width: 640px) 85vw, 420px"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <span className="font-label absolute left-4 top-4 rounded-full bg-forest-black/70 px-3 py-1 text-[0.6rem] text-gold backdrop-blur">
                {panel.community}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-lg font-semibold italic text-gold">
                When CAPAS reopens&hellip;
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ivory-dim">{panel.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mt-8 border-l-2 border-gold/50 pl-6">
          <p className="max-w-2xl text-pretty font-display text-xl italic leading-relaxed text-ivory sm:text-2xl">
            One day, all four walk onto the same stage and perform for their neighbors on folding
            chairs. That is the whole plan. Help us build the room.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
