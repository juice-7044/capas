import { Reveal } from '@/components/reveal'

const PHASES = [
  {
    phase: 'Now',
    trigger: '$250K',
    title: 'Pop-up classes in borrowed spaces',
    body: 'Churches, YMCAs, and corporate lobbies host our teaching artists. Your gift funds one class.',
  },
  {
    phase: 'Soon',
    trigger: '$1M',
    title: 'A leased Bronx studio',
    body: 'Four rooms, full evening and weekend schedule. Your gift funds a room of your own.',
  },
  {
    phase: 'Forever',
    trigger: '$10M',
    title: 'The permanent CAPAS Center',
    body: 'A theatre, a recording studio, and a community gallery. Your gift names the building.',
  },
]

export function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-secondary py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-label text-[0.7rem] text-gold md:text-xs">
            What we&apos;re building while you read this
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-secondary-foreground sm:text-5xl">
            We don&apos;t have a studio yet. That&apos;s why we need you.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-8 md:grid-cols-3">
          {PHASES.map((p, i) => (
            <Reveal
              as="li"
              key={p.phase}
              delay={i * 140}
              className="relative rounded-2xl border border-primary/15 bg-secondary/50 p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl font-semibold text-primary">
                  {p.phase}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {p.trigger}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-secondary-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-secondary-foreground/70">
                {p.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
