import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const PANELS = [
  {
    tag: 'Kids · The Confidence Breakthrough',
    image: '/images/bronx-kids.png',
    alt: 'A young Dominican girl singing with her eyes closed in a repurposed Bronx church basement, other kids watching from the shadows',
    quote:
      "Maya's abuela said she used to hide behind the sofa when company came. After CAPAS musical theatre, Maya sang at her cousin's quinceañera—into the microphone, not away from it. She's 11. She wants to be a lawyer and a Broadway understudy. We're not choosing for her.",
    place: 'Tremont',
  },
  {
    tag: 'Adults · The Creative Reset',
    image: '/images/bronx-adults.png',
    alt: 'An Ecuadorian MTA cleaner laughing at an improv class on his phone on the 2 train, an elderly Caribbean woman smiling across from him',
    quote:
      'Carlos cleans the 2 train overnight. At 6am he takes CAPAS improv—no sleep, no excuses. Last month he pitched his first idea at the MTA union meeting. Standing up. Looking people in the eye. They listened. He said it felt like the stage.',
    place: 'Fordham',
  },
  {
    tag: 'Seniors · The Hands & Mind Reunion',
    image: '/images/bronx-seniors.png',
    alt: 'A 78-year-old Jamaican woman playing an electronic keyboard in a Co-op City senior room, her adult daughter watching with a hand on her shoulder',
    quote:
      'Mrs. Sinclair forgot her grocery list. She remembered every hymn her mother taught her. CAPAS gave her a keyboard, not a diagnosis. Now her daughter visits on Saturdays—to listen, not to check on her.',
    place: 'Co-op City',
  },
]

export function Transformations() {
  return (
    <section id="transformations" className="relative bg-forest-black py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-label text-[0.7rem] text-gold md:text-xs">
            From the Bronx, for the Bronx
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Three ages. One borough. The same door swinging open.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory-dim">
            Every face here is a neighbor—not a stock photo. Working-class dignity, immigrant
            hustle, and the quiet certainty that talent was never the thing anyone was missing.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PANELS.map((panel, i) => (
            <Reveal
              key={panel.tag}
              delay={i * 140}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={panel.image || '/placeholder.svg'}
                  alt={panel.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="font-label absolute left-4 top-4 rounded-full bg-forest-black/70 px-3 py-1 text-[0.6rem] text-gold backdrop-blur">
                  {panel.place}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-semibold text-ivory">{panel.tag}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ivory-dim">
                  &ldquo;{panel.quote}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 border-l-2 border-gold/50 pl-6">
          <p className="max-w-2xl text-pretty font-display text-xl italic leading-relaxed text-ivory sm:text-2xl">
            All three walk onto the same rooftop at sunset and perform for their neighbors on
            folding chairs. That is the whole plan.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
