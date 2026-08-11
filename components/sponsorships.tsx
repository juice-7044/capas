import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

const TIERS = [
  {
    name: 'Spotlight',
    price: '$5,000',
    line: 'One pop-up performance in your lobby',
    perks: ['Branded photo & 60-sec video package', 'LinkedIn co-post', '1,000+ community minutes funded'],
    featured: false,
  },
  {
    name: 'Curtain Raiser',
    price: '$25,000',
    line: 'A named semester of classes',
    perks: ['Logo on all class materials', 'Quarterly impact report with your team', '1,000+ student-hours funded', 'Two board observer seats'],
    featured: true,
  },
  {
    name: "Producer's Circle",
    price: '$100,000',
    line: 'A named studio wing',
    perks: ['Dedication plaque & annual gala table', 'Free classes for your employees', 'White-label impact dashboard', '5,000+ annual student-hours'],
    featured: false,
  },
]

export function Sponsorships() {
  return (
    <section id="partnerships" className="relative bg-forest-black py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="font-label text-[0.7rem] text-gold md:text-xs">Corporate partnerships</p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Adopt a stage, not a line item.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory-dim">
            This isn&apos;t CSR. Picture your logo projected onto PS 83 or the Andrew Freedman
            Home—then the building fills with light, music, and neighbors. The only sponsorship that
            comes home for dinner.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-gold/20 bg-plum-deep/40 p-6">
            <p className="text-pretty text-[15px] leading-relaxed text-ivory">
              CAPAS students live in{' '}
              <span className="font-semibold text-gold">10467, 10469, 10466, 10475</span>—zip codes
              with zero free performing arts access.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-2xl border border-gold/20 bg-plum-deep/40 p-6">
            <p className="text-pretty text-[15px] leading-relaxed text-ivory">
              Your employees&apos; children attend PS 83, Bronx Mathematics Prep, St. Nicholas of
              Tolentine. <span className="font-semibold text-gold">So do ours.</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 120}
              className={cn(
                'flex flex-col rounded-2xl border p-8',
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
                  'font-display text-2xl font-semibold',
                  tier.featured ? 'text-primary-foreground' : 'text-foreground',
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  'mt-4 font-display text-4xl font-semibold',
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
                href="#community"
                className={cn(
                  'mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]',
                  tier.featured
                    ? 'bg-primary-foreground text-primary'
                    : 'bg-primary text-primary-foreground',
                )}
              >
                Schedule a 12-min salon
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mx-auto mt-14 max-w-3xl text-center">
          <blockquote className="font-display text-xl leading-relaxed text-balance text-foreground sm:text-2xl">
            &ldquo;We thought we were writing a check. CAPAS made us feel like we
            built a bridge.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground">
            — Partner, regional technology firm
          </p>
        </Reveal>
      </div>
    </section>
  )
}
