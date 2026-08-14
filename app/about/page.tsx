import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { StoryTimeline, type Milestone } from '@/components/story-timeline'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Our Story · 30 Years in the Northeast Bronx | CAPAS',
  description:
    'Three decades of performing arts education in the Northeast Bronx — from a South Bronx church to a living-room classroom to a movement raising the curtain again, free for all.',
}

const MILESTONES: Milestone[] = [
  {
    year: '1994',
    title: 'A church in the South Bronx',
    body: 'Lola Louis started with a keyboard and twelve neighborhood kids in a South Bronx church. She kept tuition low on purpose and waived it whenever a family couldn\u2019t manage. Word traveled block to block, and within a season the room was full.',
  },
  {
    year: '1999',
    title: 'The first recital',
    body: 'Fifty students took a real stage for the first time — piano, ballet, and spoken word. Parents who had never been to a theatre watched their children take a bow.',
  },
  {
    year: '2006',
    title: 'The Children\u2019s Legacy',
    body: 'Lola\u2019s signature intergenerational production brought seniors and students onto one stage, blending griot storytelling, movement, and music into a piece the borough still talks about.',
  },
  {
    year: '2011',
    title: 'Hurricane Irene takes the space',
    body: 'Flooding during Hurricane Irene left the program without a home. Undeterred, Lola moved classes into her own apartment living room so the work would not stop.',
  },
  {
    year: '2018',
    title: 'Two thousand alumni',
    body: 'From four-year-olds at the barre to eighty-eight-year-olds at the mic, more than 2,000 Bronx residents had passed through the program — kept affordable, with no child ever turned away for inability to pay.',
  },
  {
    year: '2023',
    title: 'Losing Lola',
    body: 'Lola Louis passed away in October 2023. Her apartment — the last classroom — had to be given up. The chairs went into storage. The mission did not.',
  },
  {
    year: 'Now',
    title: 'Raising the curtain again',
    body: 'We are a pre-launch nonprofit fundraising for a permanent Bronx studio. No active classes yet — every dollar funds the reopening, this time free for all, carrying Lola\u2019s work forward.',
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
        intro="Before the empty chairs, there were thirty years of full ones. This is how a keyboard in a South Bronx church became a borough institution — and why we're building it back."
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
              From a keyboard in a South Bronx church to a movement.
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
