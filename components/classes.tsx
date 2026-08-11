import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import {
  Piano,
  Music2,
  Mic2,
  Guitar,
  Drama,
  Drum,
  type LucideIcon,
} from 'lucide-react'

type Status = 'LIVE' | 'WAITLIST' | 'COMING SOON'

const CLASSES: {
  name: string
  ages: string
  status: Status
  progress?: number
  needed?: string
  Icon: LucideIcon
}[] = [
  { name: 'Piano', ages: '4–18, Adult, Senior', status: 'LIVE', Icon: Piano },
  { name: 'Hip-Hop & Tap', ages: '6–18', status: 'LIVE', Icon: Mic2 },
  { name: 'Drama & Musical Theatre', ages: '8–18, Adult', status: 'LIVE', Icon: Drama },
  { name: 'Ballet', ages: '4–18, Adult', status: 'WAITLIST', progress: 62, needed: '200 more donors', Icon: Music2 },
  { name: 'Guitar', ages: '10–18, Adult', status: 'WAITLIST', progress: 48, needed: '150 more donors', Icon: Guitar },
  { name: 'Drums', ages: '8–18', status: 'WAITLIST', progress: 74, needed: '100 more donors', Icon: Drum },
]

const statusStyles: Record<Status, string> = {
  LIVE: 'bg-primary/15 text-primary',
  WAITLIST: 'bg-accent/15 text-accent',
  'COMING SOON': 'bg-muted text-muted-foreground',
}

export function Classes() {
  return (
    <section id="classes" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
            What&apos;s waiting to be unlocked
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            No auditions. No recitals required. Just show up.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Live classes run now in pop-up locations. Waitlisted classes unlock
            collectively — pledge $1 and your name moves the whole room forward.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CLASSES.map((c, i) => (
            <Reveal
              key={c.name}
              delay={(i % 3) * 120}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary">
                  <c.Icon className="h-6 w-6" />
                </span>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
                    statusStyles[c.status],
                  )}
                >
                  {c.status}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {c.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">Ages {c.ages}</p>

              {c.status === 'WAITLIST' && typeof c.progress === 'number' ? (
                <div className="mt-6">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {c.progress}% funded · {c.needed} to open
                  </p>
                </div>
              ) : (
                <p className="mt-6 text-sm font-medium text-primary">
                  Open now · reserve your spot
                </p>
              )}

              <div className="flex flex-1 items-end pt-6">
                <a
                  href="#community"
                  className="text-sm font-semibold text-foreground underline-offset-4 transition-colors group-hover:text-primary group-hover:underline"
                >
                  {c.status === 'LIVE'
                    ? 'Reserve my spot →'
                    : 'Pledge $1 to unlock →'}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
