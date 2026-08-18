'use client'

import { useState, type FormEvent } from 'react'

// Legacy-site webhook endpoint (Action URL).
const WEBHOOK_URL = 'https://legacy.lolalouiscapas.org/api/webhook'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      formType: 'legacy-waitlist',
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      partySize: String(data.get('partySize') || ''),
      message: String(data.get('message') || ''),
    }

    setStatus('submitting')
    setMessage('')
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Something went wrong.')
      setStatus('success')
      setMessage("You're on the list. We'll be in touch as soon as dates are announced.")
      form.reset()
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-[#c9a227]/30 bg-[#170c2e] p-8 text-center">
        <p className="font-cinzel text-xl text-[#e6c04a]">Thank you!</p>
        <p className="mt-3 text-[#c4bdb0]">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-[#f5f0e8]/85">Full name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-[#c9a227]/25 bg-[#0f0720] px-4 py-3 text-[#f5f0e8] outline-none placeholder:text-[#c4bdb0]/50 focus:border-[#e6c04a]"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm text-[#f5f0e8]/85">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-[#c9a227]/25 bg-[#0f0720] px-4 py-3 text-[#f5f0e8] outline-none placeholder:text-[#c4bdb0]/50 focus:border-[#e6c04a]"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm text-[#f5f0e8]/85">Expected party size</span>
        <input
          name="partySize"
          type="number"
          min={1}
          max={50}
          className="mt-2 w-full rounded-lg border border-[#c9a227]/25 bg-[#0f0720] px-4 py-3 text-[#f5f0e8] outline-none placeholder:text-[#c4bdb0]/50 focus:border-[#e6c04a]"
          placeholder="How many seats?"
        />
      </label>
      <label className="block">
        <span className="text-sm text-[#f5f0e8]/85">Anything we should know? (optional)</span>
        <textarea
          name="message"
          rows={3}
          className="mt-2 w-full rounded-lg border border-[#c9a227]/25 bg-[#0f0720] px-4 py-3 text-[#f5f0e8] outline-none placeholder:text-[#c4bdb0]/50 focus:border-[#e6c04a]"
          placeholder="School group, accessibility needs, preferred dates..."
        />
      </label>

      {status === 'error' && <p className="text-sm text-[#f0a5a5]">{message}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-gold inline-flex w-full items-center justify-center rounded-full px-7 py-3 text-sm font-semibold disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Submitting...' : 'Join the Waitlist'}
      </button>
    </form>
  )
}
