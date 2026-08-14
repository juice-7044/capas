import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { DonateWidget } from '@/components/donate-widget'
import { Reveal } from '@/components/reveal'
import { ShieldCheck, HeartHandshake, FileText, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donate — Fund a Chair | Lola Louis\u2019 Creative & Performing Arts',
  description:
    'We reopen when the room fills. Fund a chair from $1 and put your name on the founding wall. 501(c)(3) — every gift is tax-deductible.',
}

const USES = [
  {
    icon: Building2,
    title: 'A room with a lease',
    body: 'The single largest need: a permanent, insured space in the Northeast Bronx where classes can run year-round.',
  },
  {
    icon: HeartHandshake,
    title: 'Teaching artists, paid fairly',
    body: 'Working Bronx artists earning a real wage to teach piano, ballet, hip-hop, drums, and theatre.',
  },
  {
    icon: FileText,
    title: 'Instruments & sprung floors',
    body: 'A working piano, mirrors, barres, and dance-safe floors — the plain hardware that makes a stage.',
  },
]

export default function DonatePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Fund a chair"
        title="We reopen when the room fills."
        description="No classes are running yet — we're honest about that. Every dollar goes to the building, the floors, and the teachers who turn an empty room into a stage. Give what you can; a dollar counts."
      />

      <section className="bg-off-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <DonateWidget />
          </div>

          <div className="space-y-8">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                Where your gift goes
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We&apos;re pre-launch and fully transparent. Here&apos;s the unglamorous, honest list
                of what we&apos;re building with your gift.
              </p>
            </Reveal>

            <div className="space-y-4">
              {USES.map((u, i) => (
                <Reveal
                  key={u.title}
                  delay={i * 100}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <u.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{u.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-border bg-muted p-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> 501(c)(3) nonprofit
              </span>
              <span className="inline-flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-primary" /> Tax-deductible
              </span>
              <span className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Financials on request
              </span>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
