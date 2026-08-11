import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const PANELS = [
  {
    tag: 'For Kids & Teens',
    title: 'The Confidence Breakthrough',
    image: '/images/transformation-kids.png',
    alt: "A child's hands opening mid-gesture on a dark stage, backlit by a warm spotlight",
    quote:
      "Maya's mom said she hid behind her at the grocery store. After 12 weeks of musical theatre, Maya asked the cashier how her day was. The cashier cried. Maya's 9.",
    stat: '34%',
    statLabel: 'higher classroom participation within one semester',
  },
  {
    tag: 'For Adults',
    title: 'The Creative Reset',
    image: '/images/transformation-adults.png',
    alt: 'An adult caught mid-improv in a warm theatrical spotlight against deep darkness',
    quote:
      "Devon hadn't made anything in 14 years. His job title was 'Senior Analyst.' His CAPAS improv class reminded him he was still alive. He started painting again. Then he started living again.",
    stat: '87%',
    statLabel: "of adult alumni report 'significant or total' creative block resolution",
  },
  {
    tag: 'For Seniors',
    title: 'The Hands & Mind Reunion',
    image: '/images/transformation-seniors.png',
    alt: "An elderly person's hands playing piano keys, lit by a single warm spotlight",
    quote:
      'Mrs. Chen forgot her grandson\u2019s name. She remembered every piano key. CAPAS gave her both back — one note at a time.',
    stat: '28%',
    statLabel: 'better fine motor scores vs. non-participants over 12 months',
  },
]

export function Transformations() {
  return (
    <section id="transformations" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
            From invisible to unstoppable
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            We don&apos;t teach you to perform. We teach you to show up.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            For yourself, for your future, for your family. Three ages, one
            promise — every statistic here is paired with a real, named human.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PANELS.map((panel, i) => (
            <Reveal
              key={panel.title}
              delay={i * 140}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={panel.image || '/placeholder.svg'}
                  alt={panel.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur">
                  {panel.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {panel.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  &ldquo;{panel.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-baseline gap-3 border-t border-border pt-6">
                  <span className="font-display text-3xl font-semibold text-primary">
                    {panel.stat}
                  </span>
                  <span className="text-sm leading-snug text-muted-foreground">
                    {panel.statLabel}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
