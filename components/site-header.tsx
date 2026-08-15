'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV, SITE } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // The home hero is dark; the header is transparent over it until scrolled.
  // Use the ivory logo there, and the green logo on light backgrounds.
  const onDarkHero = pathname === '/' && !scrolled && !open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-border bg-off-white/90 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" aria-label={`${SITE.name} home`}>
          <Image
            src={onDarkHero ? '/images/capas-logo-ivory-gold.webp' : '/images/capas-logo-green-gold.webp'}
            alt={SITE.name}
            width={300}
            height={200}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="btn-green hidden rounded-full px-5 py-2 text-sm font-semibold transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Fund a Chair · $1
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-off-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-muted',
                    pathname === item.href ? 'text-primary' : 'text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/donate"
                className="btn-green block rounded-full px-5 py-3 text-center text-base font-semibold"
              >
                Fund a Chair · $1
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
