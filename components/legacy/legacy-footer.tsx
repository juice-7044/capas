import Link from 'next/link'
import { LEGACY_NAV, PRODUCTION } from '@/lib/legacy-production'

export function LegacyFooter() {
  return (
    <footer className="border-t border-[#c9a227]/20 bg-[#0f0720]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="legacy-hairline mx-auto mb-10 h-px w-40" />
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="font-cinzel text-xl text-gradient-gold">The Children&apos;s Legacy</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#c4bdb0]">
              Written by {PRODUCTION.writtenBy}. Presented by {PRODUCTION.presentedBy}. A dramatic
              journey through African &amp; African American history, guided by a Griot.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-[#c4bdb0]/70">
              Return to{' '}
              <a
                href="https://lolalouiscapas.org"
                className="text-[#e6c04a] underline-offset-4 hover:underline"
              >
                lolalouiscapas.org
              </a>
            </p>
          </div>

          <nav aria-label="Production">
            <p className="text-xs uppercase tracking-[0.22em] text-[#c4bdb0]/70">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {LEGACY_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#f5f0e8]/80 transition-colors hover:text-[#e6c04a]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 text-center text-xs text-[#c4bdb0]/60">
          In loving memory of Lola Lenore Louis (1945&ndash;2023). &copy;{' '}
          {new Date().getFullYear()} Lola Louis&apos; Creative &amp; Performing Arts, Inc.
        </p>
      </div>
    </footer>
  )
}
