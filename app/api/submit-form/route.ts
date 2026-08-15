import { NextResponse } from 'next/server'

type Payload = {
  name?: string
  email?: string
  message?: string
  formName?: string
  // Allow arbitrary extra fields (e.g. student age, interest) to pass through.
  [key: string]: unknown
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: Payload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''

  // Validate required fields.
  const errors: Record<string, string> = {}
  if (!name) errors.name = 'Name is required.'
  if (!email) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 })
  }

  const webhookUrl = process.env.FORM_WEBHOOK_URL
  if (!webhookUrl) {
    // Fail gracefully so the UI can still confirm receipt during setup.
    console.log('[v0] FORM_WEBHOOK_URL is not set; form submission was not forwarded.')
    return NextResponse.json(
      { ok: true, forwarded: false, message: 'Received. (Webhook not configured yet.)' },
      { status: 200 },
    )
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...body,
        name,
        email,
        message,
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!res.ok) {
      console.log('[v0] Webhook responded with status', res.status)
      return NextResponse.json(
        { ok: false, error: 'The submission service returned an error.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true, forwarded: true })
  } catch (err) {
    console.log('[v0] Failed to forward form submission:', (err as Error).message)
    return NextResponse.json(
      { ok: false, error: 'Could not reach the submission service.' },
      { status: 502 },
    )
  }
}
