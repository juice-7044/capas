'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'The Promise', href: '#transformations' },
  { label: 'Impact', href: '#impact' },
  { label: 'Classes', href: '#classes' },
  { label: 'Partners', href: '#partnerships' },
  { label: 'Community', href: '#community' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="inline-flex h-2.5 w-2.5 animate-chair-pulse rounded-full bg-primary" />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            CAPAS
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#community"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Light a Chair · $1
        </a>
      </div>
    </header>
  )
}
