import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import { NewsletterForm } from '@/components/newsletter-form'
import { FOOTER_COLUMNS, SITE, SOCIALS } from '@/lib/site'

const SOCIAL_ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
} as const

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1.3fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/capas-logo-ivory-gold.webp"
              alt={SITE.name}
              width={300}
              height={200}
              className="h-16 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
              {SITE.name}. Three decades of affordable performing arts in the Bronx&mdash;raising the
              curtain again, this time free for all.
            </p>
            <p className="mt-6 text-balance font-display text-lg leading-snug text-cream">
              {SITE.tagline}
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-label text-[0.7rem] text-cream">Newsletter</h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
              First name required. We don&apos;t do &ldquo;Dear Supporter.&rdquo;
            </p>
            <div className="mt-4 max-w-xs">
              <NewsletterForm />
            </div>
            <ul className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon]
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors hover:border-cream/60 hover:bg-cream/10 hover:text-cream"
                    >
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-label text-[0.7rem] text-cream">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith('http')
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cream/75 transition-colors hover:text-cream"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-cream/75 transition-colors hover:text-cream"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Income threshold + honor-system footnote (footer only) */}
        <div className="mt-14 rounded-xl border border-cream/20 bg-primary-foreground/10 p-6">
          <p className="text-[13px] leading-relaxed text-cream/80">
            <span className="font-medium text-cream">
              *When we reopen, tuition will be free for families with household income below
              $150,000.
            </span>{' '}
            We use honor-system self-attestation because we trust our community. If you can pay, we
            encourage donating to fund another seat. If you can&apos;t, no questions, no shame.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-cream/20 pt-8 text-sm text-cream/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {SITE.name} is a 501(c)(3) nonprofit. Donations tax-deductible to the fullest extent of
            the law.
          </p>
          <p>
            Questions?{' '}
            <a href={`mailto:${SITE.email}`} className="text-cream underline-offset-4 hover:underline">
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
