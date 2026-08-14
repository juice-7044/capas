import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { Classes } from '@/components/classes'
import { LeadForm } from '@/components/lead-form'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Programs · Free Classes, Opening Soon | CAPAS',
  description:
    'A preview of the free performing arts classes coming to the Northeast Bronx — piano, ballet, hip-hop, guitar, violin, and drama. Join the waitlist for opening day.',
}

export default function ProgramsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Future programs"
        title="The classes are ready. The room is not — yet."
        intro="Every program below is planned, priced at zero, and waiting on one thing: a signed lease. We're pre-launch, so nothing is running today. Join a waitlist and we'll hold your spot the day the doors open."
      >
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
          <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
          Pre-launch · no active classes · tuition always free
        </div>
      </PageHero>

      <Classes />

      {/* Waitlist */}
      <section className="bg-off-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="font-label text-[0.7rem] text-primary md:text-xs">Join the waitlist</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Be first through the door.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Tell us who&apos;s enrolling and what they want to learn. When we reach our goal and
              sign a lease, waitlist families get first pick of times &mdash; before we open
              registration to anyone else. No tuition, ever.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <LeadForm
              submitLabel="Join the waitlist"
              successTitle="You're on the list."
              successBody="We'll reach out the moment classes open. Thank you for helping us fill the room."
              fields={[
                { name: 'firstName', label: 'First name', required: true },
                { name: 'lastName', label: 'Last name' },
                { name: 'email', label: 'Email', type: 'email', required: true },
                { name: 'zip', label: 'ZIP code', placeholder: '10466' },
                {
                  name: 'student',
                  label: 'Who is this for?',
                  type: 'select',
                  required: true,
                  options: ['My child', 'Myself', 'A senior in my family', 'The whole household'],
                },
                {
                  name: 'interest',
                  label: 'Class of interest',
                  type: 'select',
                  options: ['Piano', 'Ballet', 'Hip-Hop & Tap', 'Guitar', 'Violin', 'Drama', 'Not sure yet'],
                },
                {
                  name: 'notes',
                  label: 'Anything we should know?',
                  type: 'textarea',
                  placeholder: 'Ages, experience, best times to reach you…',
                },
              ]}
              note="We use honor-system eligibility for families earning under $150,000. No paperwork, no proof — just ask."
            />
          </Reveal>
        </div>
      </section>
    </SiteShell>
  )
}
