import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { StoryTimeline, type Milestone } from '@/components/story-timeline'
import { InstrumentAccent } from '@/components/instrument-accent'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Our Story · 30 Years in the Northeast Bronx | CAPAS',
  description:
    'Three decades of performing arts education in the Northeast Bronx — from a living-room piano studio on Lowerre Place in 1976, to a 501(c)(3) nonprofit, to a movement raising the curtain again, free for all.',
  alternates: { canonical: '/about' },
}

const MILESTONES: Milestone[] = [
  {
    year: '1976',
    title: 'It started in a living room',
    body: 'Lola Louis began teaching piano out of her own living room at Lowerre Place in the Northeast Bronx. A keyboard, a handful of neighborhood students, and an open door — that was the whole studio.',
  },
  {
    year: '1985',
    title: 'CAPAS is founded',
    body: 'What began with piano grew into a full studio. Lola founded Lola Louis\u2019 Creative & Performing Arts Studio (CAPAS), adding voice, drama, dance, art, and musical theatre for students ages three and up.',
  },
  {
    year: '1994',
    title: 'Officially a nonprofit',
    body: 'CAPAS received its 501(c)(3) nonprofit status. Tuition was kept affordable on purpose, and the majority of students received full or partial scholarships — no child was ever turned away for inability to pay.',
  },
  {
    year: '1990',
    title: 'The Children\u2019s Legacy premieres',
    body: 'Lola\u2019s signature intergenerational production was first written and produced off-off-Broadway to critically acclaimed reviews. Blending griot storytelling, movement, and music, it brought seniors and students onto one stage and went on to be presented at the Apollo, City Hall, and throughout NYC public schools.',
  },
  {
    year: '2006',
    title: 'The Children\u2019s Legacy at the U.N.',
    body: 'The work reached one of its highest stages when The Children\u2019s Legacy was performed at the United Nations — a Bronx production carrying its message to a global audience.',
  },
  {
    year: '2011',
    title: 'Hurricane Irene takes the space',
    body: 'Flooding during Hurricane Irene left the program without a home. Undeterred, Lola moved classes back into her own apartment living room so the work would not stop.',
  },
  {
    year: '2018',
    title: 'Two thousand alumni',
    body: 'From four-year-olds at the barre to eighty-eight-year-olds at the mic, more than 2,000 Bronx residents had passed through the program — many launched into careers on Broadway, in theater, film, and television.',
  },
  {
    year: '2023',
    title: 'Losing Lola',
    body: 'Lola Louis passed away in October 2023. Her apartment — the last classroom — had to be given up. The chairs went into storage. The mission did not.',
  },
  {
    year: 'Now',
    title: 'Raising the curtain again',
    body: 'Led by Executive & Artistic Director Ann Lemond-Hume, we are a pre-launch nonprofit fundraising for a permanent Bronx studio. No active classes yet — every dollar funds the reopening, this time free for all, carrying Lola\u2019s work forward.',
  },
]

const STATS = [
  { value: '30+', label: 'years of teaching' },
  { value: '2,000+', label: 'Bronx students taught' },
  { value: '4\u201388', label: 'ages we\u2019ve welcomed' },
]

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our story"
        title="Thirty years of raising the curtain for the Northeast Bronx."
        intro="Before the empty chairs, there were thirty years of full ones. This is how a keyboard in a Bronx living room became a borough institution — and why we're building it back."
      />

      {/* Stats band */}
      <section className="relative overflow-hidden border-b border-border bg-secondary py-16 text-secondary-foreground">
        <InstrumentAccent
          instrument="violin"
          opacity={0.08}
          rotate={12}
          className="-right-10 top-1/2 h-64 w-64 -translate-y-1/2 [filter:brightness(0)_invert(1)]"
        />
        <div className="relative mx-auto grid max-w-5xl gap-8 px-6 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <p className="font-display text-5xl font-semibold text-cream">{s.value}</p>
              <p className="mt-2 text-sm text-cream/80">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-off-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-16">
            <p className="font-label text-[0.7rem] text-primary md:text-xs">Milestones</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
              From a keyboard in a Bronx living room to a movement.
            </h2>
          </Reveal>
          <StoryTimeline milestones={MILESTONES} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-muted py-24">
        <InstrumentAccent
          instrument="piano"
          opacity={0.05}
          rotate={-6}
          className="-left-16 -bottom-16 h-80 w-80"
        />
        <Reveal className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
            The next milestone is a signed lease.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Help us write the next line of this story. Every gift funds the reopening of free
            classes for the Bronx.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/donate"
              className="btn-green inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
            >
              Fund a Chair · $1
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  )
}
