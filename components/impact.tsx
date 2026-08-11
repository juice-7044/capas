import { Reveal } from '@/components/reveal'
import { ShieldCheck, FileText, HeartHandshake } from 'lucide-react'

const METRICS = [
  { value: '$1.24M', label: 'raised from small gifts', sub: '89% at $50 or less' },
  { value: '312,000', label: 'minutes of instruction unlocked', sub: 'and counting, in real time' },
  { value: '1,480', label: 'students served', sub: 'ages 4 to 88' },
]

export function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden bg-secondary py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
            The impact framework
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-secondary-foreground sm:text-5xl">
            See your dollar become a downbeat.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary-foreground/70">
            We don&apos;t guess where your money goes. We show you — in real
            time, forever. Every dollar is one minute a student spends learning.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-primary/15 bg-primary/10 sm:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 120}
              className="bg-secondary p-8 sm:p-10"
            >
              <p className="font-display text-4xl font-semibold text-primary sm:text-5xl">
                {m.value}
              </p>
              <p className="mt-3 text-base font-medium text-secondary-foreground">
                {m.label}
              </p>
              <p className="mt-1 text-sm text-secondary-foreground/60">{m.sub}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-10 flex flex-col gap-6 rounded-2xl border border-primary/15 bg-secondary/60 p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-secondary-foreground/70">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Charity Navigator verified
            </span>
            <span className="inline-flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-primary" /> GuideStar Platinum
            </span>
            <span className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" /> 990 &amp; audit public
            </span>
          </div>
          <a
            href="#community"
            className="inline-flex shrink-0 items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Download impact report
          </a>
        </Reveal>
      </div>
    </section>
  )
}
