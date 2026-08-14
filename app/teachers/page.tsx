import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Teach With Us | Lola Louis\u2019 Creative & Performing Arts',
  description:
    'We\u2019re building a roster of working Bronx teaching artists for our reopening — piano, ballet, hip-hop, drums, violin, and theatre. Paid fairly. Apply to teach.',
}

const ROLES = [
  { discipline: 'Piano & Keys', ages: 'Kids, Adults, Seniors', type: 'Part-time, paid' },
  { discipline: 'Ballet & Modern', ages: 'Ages 5\u201318', type: 'Part-time, paid' },
  { discipline: 'Hip-Hop & Tap', ages: 'Ages 6\u201318', type: 'Part-time, paid' },
  { discipline: 'Drums & Percussion', ages: 'Ages 8\u201318', type: 'Part-time, paid' },
  { discipline: 'Violin & Strings', ages: 'Ages 5\u201316', type: 'Part-time, paid' },
  { discipline: 'Drama & Musical Theatre', ages: 'Ages 8\u2013Adult', type: 'Part-time, paid' },
]

export default function TeachersPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Teaching artists"
        title="Teach the block you grew up on."
        description="When we reopen, every class is led by a working Bronx artist earning a real wage — not a volunteer, not an intern. We're building the roster now, before the doors open."
      />

      <section className="bg-off-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Roles we&apos;re building toward
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              These open as funding and space come online. Apply now and you&apos;re first in the
              room when we schedule auditions and demo lessons.
            </p>
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            {ROLES.map((r, i) => (
              <Reveal
                key={r.discipline}
                delay={i * 60}
                className={`flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 ${
                  i % 2 === 0 ? 'bg-card' : 'bg-muted'
                }`}
              >
                <span className="font-display text-lg font-semibold text-foreground">
                  {r.discipline}
                </span>
                <span className="text-sm text-muted-foreground sm:w-48">{r.ages}</span>
                <span className="font-label text-[0.6rem] text-primary">{r.type}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-label text-[0.7rem] text-primary md:text-xs">Apply to teach</p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Tell us what you teach.
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A short application to start. We&apos;ll follow up about auditions and demo lessons as
              spaces are confirmed.
            </p>
            <div className="mt-6">
              <LeadForm
                formName="teaching-artist"
                submitLabel="Submit application"
                successMessage="Thank you for applying. We'll be in touch as we schedule auditions and demo lessons for your discipline."
                fields={[
                  { name: 'name', label: 'Full name', type: 'text', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'phone', label: 'Phone', type: 'tel' },
                  {
                    name: 'discipline',
                    label: 'Discipline you teach',
                    type: 'select',
                    required: true,
                    options: [
                      'Piano & Keys',
                      'Ballet & Modern',
                      'Hip-Hop & Tap',
                      'Drums & Percussion',
                      'Violin & Strings',
                      'Drama & Musical Theatre',
                      'Other',
                    ],
                  },
                  {
                    name: 'experience',
                    label: 'Tell us about your teaching & performing experience',
                    type: 'textarea',
                    required: true,
                  },
                  { name: 'portfolio', label: 'Portfolio, reel, or website (optional)', type: 'text' },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  )
}
