'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle2 } from 'lucide-react'

const PRESETS = [1, 25, 50, 100, 250, 500]

export function DonateWidget() {
  const [amount, setAmount] = useState(50)
  const [recurring, setRecurring] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const minutes = amount // $1 = 1 minute of instruction

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-8">
        <CheckCircle2 className="h-9 w-9 text-primary" />
        <h3 className="font-display text-2xl font-semibold text-foreground">
          You&apos;re a founding donor.
        </h3>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          Thank you for funding{' '}
          <span className="font-semibold text-primary">
            {minutes.toLocaleString()} minute{minutes === 1 ? '' : 's'}
          </span>{' '}
          of free instruction{recurring ? ', every month' : ''}. Your name joins the founding wall
          the day we open the doors.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-foreground underline underline-offset-4"
        >
          Give again
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        // Front-end scaffold: create Stripe Checkout session server-side later.
        setSubmitted(true)
      }}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="flex gap-2 rounded-full bg-muted p-1">
        <button
          type="button"
          onClick={() => setRecurring(false)}
          className={cn(
            'flex-1 rounded-full py-2 text-sm font-semibold transition-colors',
            !recurring ? 'bg-primary text-primary-foreground' : 'text-muted-foreground',
          )}
        >
          One-time
        </button>
        <button
          type="button"
          onClick={() => setRecurring(true)}
          className={cn(
            'flex-1 rounded-full py-2 text-sm font-semibold transition-colors',
            recurring ? 'bg-primary text-primary-foreground' : 'text-muted-foreground',
          )}
        >
          Monthly
        </button>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {PRESETS.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => setAmount(a)}
            className={cn(
              'rounded-lg border py-3 text-sm font-semibold transition-colors',
              amount === a
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-foreground hover:border-primary/50',
            )}
          >
            ${a}
          </button>
        ))}
      </div>

      <label className="mt-4 block">
        <span className="sr-only">Custom amount</span>
        <div className="flex items-center gap-2 rounded-lg border border-border px-3 focus-within:border-primary">
          <span className="text-muted-foreground">$</span>
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(Math.max(1, Number(e.target.value) || 1))}
            className="w-full bg-transparent py-3 text-foreground outline-none"
            aria-label="Custom donation amount in dollars"
          />
        </div>
      </label>

      {/* Impact tracker */}
      <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-foreground">
          Your gift funds{' '}
          <span className="font-display text-lg font-semibold text-primary">
            {minutes.toLocaleString()}
          </span>{' '}
          minute{minutes === 1 ? '' : 's'} of free arts instruction
          {recurring ? ', every single month' : ''}.
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="First name"
          aria-label="First name"
          className="rounded-lg border border-border bg-off-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
        <input
          type="email"
          required
          placeholder="Email"
          aria-label="Email"
          className="rounded-lg border border-border bg-off-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="btn-green mt-5 w-full rounded-full py-3.5 text-base font-semibold transition-transform hover:scale-[1.01]"
      >
        {recurring ? `Give $${amount}/mo` : `Give $${amount}`} &amp; fund a chair
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        501(c)(3) · tax-deductible · secured checkout via Stripe
      </p>
    </form>
  )
}
