'use client'

import { useState } from 'react'

// Main-site webhook endpoint (Action URL).
const WEBHOOK_URL = 'https://lolalouiscapas.org/api/webhook'

export function NewsletterForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!firstName.trim() || !email.trim()) return
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName.trim(),
          email: email.trim(),
        }),
      })
    } catch {
      // Non-blocking: still confirm receipt in the UI.
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="text-pretty text-sm leading-relaxed text-cream">
        Thanks, {firstName.trim()}. You&apos;re on the list&mdash;we&apos;ll only write when it
        matters.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5">
      <label htmlFor="nl-first" className="sr-only">
        First name
      </label>
      <input
        id="nl-first"
        type="text"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
        className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
      <div className="flex gap-2">
        <label htmlFor="nl-email" className="sr-only">
          Email address
        </label>
        <input
          id="nl-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
        <button
          type="submit"
          className="btn-gold shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
        >
          Join
        </button>
      </div>
    </form>
  )
}
