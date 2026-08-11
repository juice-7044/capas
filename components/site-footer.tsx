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
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="font-display text-lg font-semibold text-secondary-foreground">
                CAPAS
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
              Lola Louis Creative &amp; Performing Arts. 100% free performing
              arts education for families who&apos;ve been priced out.
            </p>
            <p className="mt-6 font-display text-lg leading-snug text-balance text-secondary-foreground">
              The show doesn&apos;t end.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-primary/15 pt-8 text-sm text-secondary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            CAPAS is a 501(c)(3) nonprofit. EIN: 00-0000000. All donations
            tax-deductible.
          </p>
          <p>
            Questions?{' '}
            <a
              href="mailto:founder@lolalouiscapas.org"
              className="text-primary underline-offset-4 hover:underline"
            >
              founder@lolalouiscapas.org
            </a>{' '}
            — yes, it&apos;s really me.
          </p>
        </div>
      </div>
    </footer>
  )
}
