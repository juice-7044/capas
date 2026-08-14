import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'
import { Reveal } from '@/components/reveal'
import { Scale, Megaphone, Wallet, Hammer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Join the Board | Lola Louis\u2019 Creative & Performing Arts',
  description:
    'Help govern a reopening Bronx arts institution. We\u2019re seeking founding board members and committee volunteers in finance, law, fundraising, and real estate.',
}

const SEATS = [
  {
    icon: Wallet,
    title: 'Treasurer / Finance',
    body: 'Nonprofit accounting, budgeting, and grant-readiness. Help us steward every dollar with the transparency we promise donors.',
  },
  {
    icon: Scale,
    title: 'Legal / Governance',
    body: 'Bylaws, contracts, leases, and compliance. Guide a lean organization through the paperwork of reopening.',
  },
  {
    icon: Megaphone,
    title: 'Development / Fundraising',
    body: 'Corporate partnerships, major gifts, and grant relationships. Open doors we can\u2019t reach alone.',
  },
  {
    icon: Hammer,
    title: 'Real Estate / Facilities',
    body: 'Help us find, lease, and build out a permanent, insured space in the Northeast Bronx.',
  },
]

export default function BoardPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Governance & volunteers"
        title="Founding board seats are open."
        description="A thirty-year institution is reopening from an empty room. We're assembling a working board — people who bring a skill, not just a signature — to help decide what gets built."
      />

      <section className="bg-off-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Where we need hands
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              Board and committee roles are unpaid and hands-on. Most members give a few hours a
              month. If you don&apos;t see your skill listed, tell us anyway.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {SEATS.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 100}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-label text-[0.7rem] text-primary md:text-xs">Express interest</p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Bring us a skill.
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Share a little about your background and how you&apos;d like to help. A board member
              will follow up to talk through fit.
            </p>
            <div className="mt-6">
              <LeadForm
                formName="board-interest"
                submitLabel="Express interest"
                successMessage="Thank you. A current board member will reach out to talk through where your skills fit best."
                fields={[
                  { name: 'name', label: 'Full name', type: 'text', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  {
                    name: 'area',
                    label: 'Area of interest',
                    type: 'select',
                    required: true,
                    options: [
                      'Treasurer / Finance',
                      'Legal / Governance',
                      'Development / Fundraising',
                      'Real Estate / Facilities',
                      'General board seat',
                      'Committee volunteer',
                    ],
                  },
                  {
                    name: 'background',
                    label: 'Your professional background',
                    type: 'textarea',
                    required: true,
                  },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  )
}
