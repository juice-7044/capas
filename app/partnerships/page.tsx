import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { Sponsorships } from '@/components/sponsorships'
import { LeadForm } from '@/components/lead-form'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Corporate Partnerships | Lola Louis\u2019 Creative & Performing Arts',
  description:
    'Build with us, not for us. Early corporate partners are drawn into the blueprint of a reopening Bronx arts institution. Four tiers, from Chair Holder to Legacy Producer.',
}

export default function PartnershipsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Build with us"
        title="Your name in the blueprint, not stapled on after."
        description="We're a pre-launch nonprofit with a thirty-year track record and no building yet. Partner early and you help decide what gets built — the room, the wing, the whole house."
      />

      <Sponsorships />

      <section className="bg-off-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-label text-[0.7rem] text-primary md:text-xs">Start the conversation</p>
            <h2 className="mt-5 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Book a twelve-minute call.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Tell us a little about your company and what you care about. We&apos;ll send our
              partnership deck and find a time to talk — no pressure, no boilerplate pitch. Every
              partnership here is designed with you, not sold to you.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Named spaces, from a single class to the permanent center
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Employee-family enrollment priority the day we open
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Quarterly impact reports built from real enrollment data
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <LeadForm
              formName="partnership-inquiry"
              submitLabel="Request the partnership deck"
              successMessage="Thank you. Our partnerships lead will reach out within two business days with the deck and a few times to talk."
              fields={[
                { name: 'company', label: 'Company', type: 'text', required: true },
                { name: 'name', label: 'Your name', type: 'text', required: true },
                { name: 'email', label: 'Work email', type: 'email', required: true },
                {
                  name: 'tier',
                  label: 'Tier of interest',
                  type: 'select',
                  options: [
                    'Chair Holder ($5,000)',
                    'Door Opener ($25,000)',
                    'Stage Builder ($100,000)',
                    'Legacy Producer ($500,000+)',
                    'Not sure yet',
                  ],
                },
                {
                  name: 'message',
                  label: 'What does your company care about?',
                  type: 'textarea',
                },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </SiteShell>
  )
}
