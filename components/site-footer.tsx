const COLUMNS = [
  {
    title: 'Connect',
    links: ['Newsletter', 'SMS alerts', 'TikTok', 'Instagram', 'LinkedIn'],
  },
  {
    title: 'Resources',
    links: ['Annual reports', '990s & audits', 'Teaching artist applications', 'Partnership PDF'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Cookie settings', 'Board of Directors'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-plum-deep to-plum-darker">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
              <span className="font-display text-lg font-semibold text-ivory">CAPAS</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory-dim">
              Community Academy of Performing Arts. 100% free performing arts education for Bronx
              families who&apos;ve been priced out.
            </p>
            <p className="mt-6 text-balance font-display text-lg leading-snug text-ivory">
              El escenario es de todos.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-label text-[0.7rem] text-gold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ivory-dim transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Income threshold + honor-system footnote (footer only) */}
        <div className="mt-14 rounded-xl border border-gold/20 bg-forest-black/30 p-6">
          <p className="text-[13px] leading-relaxed text-ivory-dim">
            <span className="text-ivory">*Free tuition for families with household income below
            $150,000.</span>{' '}
            We use honor-system self-attestation because we trust our community. If you can pay, we
            encourage donating to fund another seat. If you can&apos;t, no questions, no shame. CAPAS
            is a 501(c)(3) nonprofit, EIN XX-XXXXXXX.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-gold/20 pt-8 text-sm text-ivory-dim sm:flex-row sm:items-center sm:justify-between">
          <p>All donations tax-deductible to the fullest extent of the law.</p>
          <p>
            Questions?{' '}
            <a
              href="mailto:contact@lolalouiscapas.org"
              className="text-gold underline-offset-4 hover:underline"
            >
              contact@lolalouiscapas.org
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
