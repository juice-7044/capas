import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

const TIERS = [
  {
    name: 'Chair Holder',
    price: '$5,000',
    line: 'Fund a section of seats',
    perks: ['Your name on a row of the founding wall', 'Quarterly progress notes', 'First invite to opening night'],
    featured: false,
  },
  {
    name: 'Door Opener',
    price: '$25,000',
    line: 'Unlock a class for a full season',
    perks: ['A named class on the schedule', 'Team visit to a pop-up rehearsal', 'Logo on season materials', 'Impact recap with your staff'],
    featured: true,
  },
  {
    name: 'Stage Builder',
    price: '$100,000',
    line: 'Build a room in the studio',
    perks: ['A named rehearsal or recording room', 'Dedication plaque on opening day', 'Annual studio visit for your team', 'Named seat at the founding gala'],
    featured: false,
  },
  {
    name: 'Legacy Producer',
    price: '$250,000+',
    line: 'Anchor the permanent home',
    perks: ['Founding cornerstone recognition', 'Naming rights on a lasting space', 'Seat at the table as we grow', 'A partnership measured in decades'],
    featured: false,
  },
]

export function Sponsorships() {
  return (
    <section id="partnerships" className="relative overflow-hidden bg-muted py-28 sm:py-36">
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-label text-[0.7rem] text-primary md:text-xs">Corporate partnerships</p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            Build with us, not for us.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We&apos;re a pre-launch nonprofit with a thirty-year track record and no building yet.
            Partner early and your name is drawn into the blueprint&mdash;not stapled on after the
            fact. Every tier is a hand on the same pencil.
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 100}
              className={cn(
                'flex flex-col rounded-2xl border p-7',
                tier.featured
                  ? 'border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/20 lg:-translate-y-3'
                  : 'border-border bg-card',
              )}
            >
              {tier.featured && (
                <span className="mb-4 w-fit rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  Most chosen
                </span>
              )}
              <h3
                className={cn(
                  'font-display text-xl font-semibold',
                  tier.featured ? 'text-primary-foreground' : 'text-foreground',
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  'mt-3 font-display text-3xl font-semibold',
                  tier.featured ? 'text-primary-foreground' : 'text-primary',
                )}
              >
                {tier.price}
              </p>
              <p
                className={cn(
                  'mt-2 text-sm',
                  tier.featured ? 'text-primary-foreground/80' : 'text-muted-foreground',
                )}
              >
                {tier.line}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={cn(
                        'mt-0.5 h-4 w-4 shrink-0',
                        tier.featured ? 'text-primary-foreground' : 'text-primary',
                      )}
                    />
                    <span
                      className={cn(
                        tier.featured ? 'text-primary-foreground/90' : 'text-muted-foreground',
                      )}
                    >
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/partnerships"
                className={cn(
                  'mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]',
                  tier.featured
                    ? 'bg-primary-foreground text-primary'
                    : 'bg-primary text-primary-foreground',
                )}
              >
                Book a call
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mx-auto mt-14 max-w-3xl text-center">
          <blockquote className="font-display text-xl leading-relaxed text-balance text-foreground sm:text-2xl">
            &ldquo;We didn&apos;t want to sponsor a finished thing. We wanted to help build it from
            an empty room.&rdquo;
          </blockquote>
          <p className="font-label mt-4 text-[0.65rem] text-muted-foreground">
            &mdash; An early partner
          </p>
        </Reveal>
      </div>
    </section>
  )
}
