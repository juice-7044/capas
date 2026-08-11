'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const AMOUNTS = [1, 5, 25, 100]

const DONORS = [
  { name: 'Aisha', city: 'Bronx, NY', amount: 1 },
  { name: 'Marcus', city: 'Queens, NY', amount: 25 },
  { name: 'The Okafor Family', city: 'Newark, NJ', amount: 100 },
  { name: 'Lena', city: 'Bronx, NY', amount: 5 },
  { name: 'David', city: 'Yonkers, NY', amount: 1 },
  { name: 'Priya', city: 'Jersey City, NJ', amount: 50 },
  { name: 'Sam & Jo', city: 'Bronx, NY', amount: 10 },
  { name: 'Rosa', city: 'Harlem, NY', amount: 1 },
  { name: 'The Lin Family', city: 'Flushing, NY', amount: 250 },
  { name: 'Elijah', city: 'Bronx, NY', amount: 1 },
  { name: 'Grace', city: 'Brooklyn, NY', amount: 20 },
  { name: 'Anonymous', city: 'Bronx, NY', amount: 5 },
]

export function Community() {
  const [amount, setAmount] = useState<number>(1)
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="community" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
            The invisible audience
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            100,000 people. $1 each. One revolution.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Take your seat. Every donation lights an empty chair in real time
            and funds a minute of instruction for a student who&apos;s waiting.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start">
          {/* Donation card */}
          <Reveal className="rounded-2xl border border-primary/25 bg-card p-8">
            {submitted ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <span className="inline-flex h-14 w-14 animate-chair-pulse items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  ♪
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  Your chair is lit.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Thank you for funding{' '}
                  <span className="font-semibold text-primary">{amount} minute{amount === 1 ? '' : 's'}</span>{' '}
                  of instruction. A student is one step closer to the stage.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-foreground underline underline-offset-4"
                >
                  Light another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Light a chair
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  $1 = one minute of free arts education.
                </p>

                <div className="mt-6 grid grid-cols-4 gap-2">
                  {AMOUNTS.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setAmount(a)}
                      className={cn(
                        'rounded-lg border py-2.5 text-sm font-semibold transition-colors',
                        amount === a
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border text-foreground hover:border-primary/50',
                      )}
                    >
                      ${a}
                    </button>
                  ))}
                </div>

                <label className="mt-4 block text-sm">
                  <span className="sr-only">Custom amount</span>
                  <div className="flex items-center gap-2 rounded-lg border border-border px-3 focus-within:border-primary">
                    <span className="text-muted-foreground">$</span>
                    <input
                      type="number"
                      min={1}
                      value={amount}
                      onChange={(e) => setAmount(Math.max(1, Number(e.target.value) || 1))}
                      className="w-full bg-transparent py-2.5 text-foreground outline-none"
                      aria-label="Donation amount in dollars"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  className="mt-5 w-full rounded-full bg-primary py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Give ${amount} &amp; light a chair
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  501(c)(3) · tax-deductible · secured checkout
                </p>
              </form>
            )}
          </Reveal>

          {/* Donor wall */}
          <Reveal delay={120}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Recently took their seat
              </h3>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Live donor wall
              </span>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {DONORS.map((d, i) => (
                <li
                  key={`${d.name}-${i}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
                    {d.name.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">
                      {d.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {d.city}
                    </p>
                  </div>
                  <span className="font-display text-sm font-semibold text-primary">
                    ${d.amount}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
