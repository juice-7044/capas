import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <section className="border-b border-border bg-muted pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="font-label text-[0.7rem] text-primary md:text-xs">{eyebrow}</p>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  )
}
