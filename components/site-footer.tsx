import Link from 'next/link'
import { NewsletterForm } from '@/components/newsletter-form'
import { FOOTER_COLUMNS, SITE, SOCIALS } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="font-display text-lg font-semibold text-foreground">
                {SITE.short}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.name}. Thirty years of free performing arts in the Northeast Bronx&mdash;raising
              the curtain again.
            </p>
            <p className="mt-6 text-balance font-display text-lg leading-snug text-foreground">
              {SITE.tagline}
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-label text-[0.7rem] text-primary">Newsletter</h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              First name required. We don&apos;t do &ldquo;Dear Supporter.&rdquo;
            </p>
            <div className="mt-4 max-w-xs">
              <NewsletterForm />
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-label text-[0.7rem] text-primary">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Income threshold + honor-system footnote (footer only) */}
        <div className="mt-14 rounded-xl border border-border bg-card p-6">
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">
              *Free tuition for families with household income below $150,000.
            </span>{' '}
            We use honor-system self-attestation because we trust our community. If you can pay, we
            encourage donating to fund another seat. If you can&apos;t, no questions, no shame.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {SITE.name} is a 501(c)(3) nonprofit. Donations tax-deductible to the fullest extent of
            the law.
          </p>
          <p>
            Questions?{' '}
            <a
              href={`mailto:${SITE.email}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
