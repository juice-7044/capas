import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'
import { Reveal } from '@/components/reveal'
import { Mail, MapPin, Clock } from 'lucide-react'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | Lola Louis\u2019 Creative & Performing Arts',
  description:
    'Questions about classes, donations, partnerships, or the reopening? Reach the founder and team directly. No \u201cDear Supporter\u201d — a real person replies.',
}

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Say hello"
        title="A real person reads every note."
        description="Whether you're a family waiting for classes, a would-be partner, or a neighbor with a question — write to us. We don't do auto-replies or \u201cDear Supporter.\u201d"
      />

      <section className="bg-off-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-8">
            <Reveal className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 inline-block text-sm text-primary underline-offset-4 hover:underline"
                >
                  {SITE.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={80} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-foreground">Where we work</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  The Northeast Bronx — Wakefield, Fordham, Co-op City, and beyond. We&apos;re
                  pre-launch and pop up in borrowed rooms until our permanent space opens.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-foreground">Response time</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  We aim to reply within two business days. For press or partnerships, mention it
                  and we&apos;ll prioritize.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <LeadForm
              formName="general-contact"
              submitLabel="Send message"
              successMessage="Thank you for writing. A real person will get back to you within two business days."
              fields={[
                { name: 'name', label: 'Your name', type: 'text', required: true },
                { name: 'email', label: 'Email', type: 'email', required: true },
                {
                  name: 'topic',
                  label: 'What\u2019s this about?',
                  type: 'select',
                  required: true,
                  options: [
                    'Classes & enrollment',
                    'Donations',
                    'Corporate partnership',
                    'Teaching / volunteering',
                    'Press',
                    'Something else',
                  ],
                },
                { name: 'message', label: 'Your message', type: 'textarea', required: true },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </SiteShell>
  )
}
