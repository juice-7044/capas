'use client'

import { useMemo, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { zeffyDonate } from '@/lib/site'
import { Search } from 'lucide-react'

const AMOUNTS = [1, 5, 25, 100]

const DONORS = [
  { name: 'The Reyes Family', city: 'Tremont · 10457', amount: 1 },
  { name: 'Marcus', city: 'Wakefield · 10466', amount: 25 },
  { name: 'The Okafor Family', city: 'Fordham · 10458', amount: 100 },
  { name: 'Yaritza', city: 'Pelham Parkway · 10462', amount: 5 },
  { name: 'Mr. Persaud', city: 'Co-op City · 10475', amount: 1 },
  { name: 'Priya', city: 'Norwood · 10467', amount: 50 },
  { name: 'Sam & Jo', city: 'Bedford Park · 10468', amount: 10 },
  { name: 'Rosa', city: 'Mott Haven · 10454', amount: 1 },
  { name: 'The Lin Family', city: 'Morris Park · 10461', amount: 250 },
  { name: 'Elijah', city: 'Soundview · 10473', amount: 1 },
  { name: 'Besnik', city: 'Belmont · 10458', amount: 20 },
  { name: 'Anonymous', city: 'Highbridge · 10452', amount: 5 },
]

type Filter = 'all' | 'founders' | 'grand'

export function Community() {
  const [amount, setAmount] = useState<number>(1)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  const visible = useMemo(() => {
    return DONORS.filter((d) => {
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q || d.name.toLowerCase().includes(q) || d.city.toLowerCase().includes(q)
      const matchesFilter =
        filter === 'all' ||
        (filter === 'founders' && d.amount <= 5) ||
        (filter === 'grand' && d.amount >= 100)
      return matchesQuery && matchesFilter
    })
  }, [query, filter])

  return (
    <section id="community" className="relative bg-off-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-label text-[0.7rem] text-primary md:text-xs">The founding audience</p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            Take the first seat. Fund the first chair.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We reopen when the room fills. Every gift, from $1 up, is a name on the founding wall and
            a minute of instruction waiting for a Bronx student the day the doors open.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start">
          {/* Donation card */}
          <Reveal className="rounded-2xl border border-primary/25 bg-card p-8">
            <h3 className="font-display text-2xl font-semibold text-foreground">Fund a chair</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              $1 = one minute of free arts education, held for opening day.
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

            <a
              href={zeffyDonate(amount)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green mt-5 flex w-full items-center justify-center rounded-full py-3.5 text-base font-semibold transition-transform hover:scale-[1.02]"
            >
              Give ${amount} &amp; fund a chair
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              501(c)(3) · tax-deductible · secure checkout via Zeffy
            </p>
          </Reveal>

          {/* Donor wall */}
          <Reveal delay={120}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-foreground">
                The founding wall
              </h3>
              <span className="font-label text-[0.6rem] text-muted-foreground">
                Updates live · pulses on each new gift
              </span>
            </div>

            {/* Search + filter */}
            <div className="mb-4 flex flex-col gap-3 sm:flex-row">
              <label className="flex flex-1 items-center gap-2 rounded-full border border-border bg-card px-4 focus-within:border-primary">
                <Search className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Search founding donors</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name or neighborhood"
                  className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </label>
              <div className="flex gap-2">
                {(
                  [
                    ['all', 'All'],
                    ['founders', '$1–$5'],
                    ['grand', '$100+'],
                  ] as [Filter, string][]
                ).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFilter(key)}
                    className={cn(
                      'rounded-full border px-4 py-2 text-xs font-semibold transition-colors',
                      filter === key
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border text-muted-foreground hover:border-primary/50',
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {visible.length === 0 ? (
              <p className="rounded-xl border border-border bg-card px-4 py-8 text-center text-sm text-muted-foreground">
                No founding donors match that yet. Be the first from your block.
              </p>
            ) : (
              <ul className="grid gap-3 sm:grid-cols-2">
                {visible.map((d, i) => (
                  <li
                    key={`${d.name}-${i}`}
                    className="animate-rise flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
                      {d.name.charAt(0)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">{d.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{d.city}</p>
                    </div>
                    <span className="font-display text-sm font-semibold text-primary">
                      ${d.amount}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
