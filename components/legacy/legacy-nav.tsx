'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { LEGACY_NAV } from '@/lib/legacy-production'

export function LegacyNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-[#c9a227]/25 bg-[#140a26]/95 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-none" aria-label="The Children's Legacy home">
          <span className="font-cinzel text-lg font-semibold text-gradient-gold">
            The Children&apos;s Legacy
          </span>
          <span className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-[#c4bdb0]">
            A Lola Louis Production
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {LEGACY_NAV.map((item) => {
            const active = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors hover:text-[#e6c04a] ${
                    active ? 'text-[#e6c04a]' : 'text-[#f5f0e8]/85'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <Link
          href="/tickets"
          className="btn-gold hidden rounded-full px-5 py-2 text-sm font-semibold lg:inline-flex"
        >
          Join the Waitlist
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a227]/30 text-[#f5f0e8] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#c9a227]/20 bg-[#140a26] px-6 py-5 lg:hidden">
          <ul className="flex flex-col gap-4">
            {LEGACY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-base ${
                    pathname === item.href ? 'text-[#e6c04a]' : 'text-[#f5f0e8]/85'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
