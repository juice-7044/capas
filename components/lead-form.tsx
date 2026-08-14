'use client'

import { useState, type ReactNode } from 'react'
import { CheckCircle2 } from 'lucide-react'

export type Field = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  required?: boolean
  placeholder?: string
  options?: string[]
  full?: boolean
}

export function LeadForm({
  fields,
  submitLabel = 'Submit',
  successTitle = 'Thank you.',
  successBody = "We've received your message and will be in touch soon.",
  note,
  variant = 'green',
}: {
  fields: Field[]
  submitLabel?: string
  successTitle?: string
  successBody?: string
  note?: ReactNode
  variant?: 'green' | 'purple'
}) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Front-end scaffold: POST to /api/lead -> n8n -> Salesforce/Klaviyo later.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-8">
        <CheckCircle2 className="h-8 w-8 text-primary" />
        <h3 className="font-display text-2xl font-semibold text-foreground">{successTitle}</h3>
        <p className="text-pretty leading-relaxed text-muted-foreground">{successBody}</p>
      </div>
    )
  }

  const btnClass = variant === 'purple' ? 'btn-purple' : 'btn-green'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.full || f.type === 'textarea' ? 'sm:col-span-2' : ''}>
            <label
              htmlFor={f.name}
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              {f.label}
              {f.required && <span className="text-primary"> *</span>}
            </label>
            {f.type === 'textarea' ? (
              <textarea
                id={f.name}
                name={f.name}
                required={f.required}
                rows={4}
                placeholder={f.placeholder}
                className="w-full resize-y rounded-lg border border-border bg-off-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            ) : f.type === 'select' ? (
              <select
                id={f.name}
                name={f.name}
                required={f.required}
                defaultValue=""
                className="w-full rounded-lg border border-border bg-off-white px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="" disabled>
                  {f.placeholder || 'Select one'}
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type || 'text'}
                required={f.required}
                placeholder={f.placeholder}
                className="w-full rounded-lg border border-border bg-off-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            )}
          </div>
        ))}
      </div>

      {note && <div className="mt-5 text-sm leading-relaxed text-muted-foreground">{note}</div>}

      <button
        type="submit"
        className={`${btnClass} mt-6 w-full rounded-full py-3.5 text-base font-semibold transition-transform hover:scale-[1.01] sm:w-auto sm:px-10`}
      >
        {submitLabel}
      </button>
    </form>
  )
}
