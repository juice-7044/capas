import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { StoryTimeline, type Milestone } from '@/components/story-timeline'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Our Story · 30 Years in the Northeast Bronx | CAPAS',
  description:
    'Three decades of free performing arts education in the Northeast Bronx — from a borrowed church basement to a movement raising the curtain again.',
}

const MILESTONES: Milestone[] = [
  {
    year: '1994',
    title: 'A borrowed basement, a full room',
    body: 'Lola Louis started with a keyboard, a boombox, and twelve neighborhood kids in a church basement on Boston Road. Word traveled block to block. Within a season the room was full.',
  },
  {
    year: '1999',
    title: 'The first recital',
    body: 'Fifty students took a real stage for the first time — piano, ballet, and spoken word. Parents who had never been to a theatre watched their children take a bow.',
  },
  {
    year: '2004',
    title: 'A decade of doors',
    body: 'Ten years in, more than 600 young people had passed through free classes. Graduates began returning as teaching artists, keeping tuition at zero.',
  },
  {
    year: '2011',
    title: 'The Children\u2019s Legacy',
    body: 'Our signature intergenerational production brought seniors and students onto one stage, blending griot storytelling, movement, and music into a piece the borough still talks about.',
  },
  {
    year: '2018',
    title: 'Two thousand alumni',
    body: 'From four-year-olds at the barre to eighty-eight-year-olds at the mic, CAPAS had taught over 2,000 Bronx residents — never once charging tuition.',
  },
  {
    year: '2021',
    title: 'We lost the space',
    body: 'Rising rents and a shifting lease left us without a home. Classes paused. The chairs went into storage. The mission did not.',
  },
  {
    year: 'Now',
    title: 'Raising the curtain again',
    body: 'We are a pre-launch nonprofit fundraising for a permanent Bronx studio. No active classes yet — every dollar funds the reopening of free performing arts for the neighborhood that built us.',
  },
]

const STATS = [
  { value: '30+', label: 'years of free teaching' },
  { value: '2,000+', label: 'students taught, tuition-free' },
  { value: '4\u201388', label: 'ages we\u2019ve welcomed' },
]

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our story"
        title="Thirty years of raising the curtain for the Northeast Bronx."
        intro="Before the empty chairs, there were thirty years of full ones. This is how a church-basement keyboard became a borough institution — and why we're building it back."
      />

      {/* Stats band */}
      <section className="border-b border-border bg-secondary py-16 text-secondary-foreground">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 sm:grid-cols-3">
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
              From a keyboard in a basement to a movement.
            </h2>
          </Reveal>
          <StoryTimeline milestones={MILESTONES} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-24">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
            The next milestone is a signed lease.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Help us write the next line of this story. Every gift funds the reopening of free
            classes for the Bronx.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/donate"
              className="btn-green inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
            >
              Fund a Chair · $1
            </Link>
            <Link
              href="/founder"
              className="inline-flex items-center justify-center rounded-full border border-primary/50 px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Meet Lola Louis
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  )
}
