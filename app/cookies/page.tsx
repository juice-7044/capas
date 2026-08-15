import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { LegalDoc, type LegalSection } from '@/components/legal-doc'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Cookie Policy | CAPAS',
  description:
    'The cookies Lola Louis\u2019 Creative & Performing Arts uses, why we use them, and how to manage or decline them \u2014 including Google Analytics.',
  alternates: { canonical: '/cookies' },
}

const EFFECTIVE = 'Effective August 14, 2026'

const SECTIONS: LegalSection[] = [
  {
    heading: 'What are cookies?',
    paragraphs: [
      'Cookies are small text files that a website stores on your device when you visit. They let a site remember your actions and preferences over time, and help site owners understand how the site is being used. Some cookies are set by us; others (like analytics) are set by trusted third parties on our behalf.',
    ],
  },
  {
    heading: 'The cookies we use',
    paragraphs: ['We keep our use of cookies to a minimum. They fall into three categories:'],
    bullets: [
      'Strictly necessary cookies — required for the website to load and function correctly (for example, remembering your session and keeping the site secure). These cannot be switched off.',
      'Analytics cookies — set by Google Analytics through Google Tag Manager. They tell us, in aggregate, which pages are popular, how visitors move through the site, and where traffic comes from, so we can improve. They do not identify you personally.',
      'Preference cookies — remember choices you make (such as dismissing a banner) so you don\u2019t see the same prompt repeatedly.',
    ],
  },
  {
    heading: 'Google Analytics',
    paragraphs: [
      'We use Google Analytics to measure and improve our website. Google Analytics uses cookies to collect information such as pages visited, time on site, device and browser type, and an anonymized IP address. This data is aggregated and is never used to personally identify you.',
      'You can prevent Google Analytics from using your data by installing the official opt-out browser add-on, or by declining analytics cookies in your browser.',
    ],
    links: [
      { label: 'Google Analytics opt-out add-on', href: 'https://tools.google.com/dlpage/gaoptout' },
      { label: 'How Google uses data from partner sites', href: 'https://policies.google.com/technologies/partner-sites' },
    ],
  },
  {
    heading: 'How to manage or decline cookies',
    paragraphs: [
      'You are always in control. Every major browser lets you view, delete, and block cookies. Blocking all cookies may affect how some parts of the site work, but you can safely decline analytics and preference cookies without breaking the site.',
    ],
    bullets: [
      'Chrome: Settings → Privacy and security → Cookies and other site data.',
      'Safari: Settings → Privacy → Manage Website Data.',
      'Firefox: Settings → Privacy & Security → Cookies and Site Data.',
      'Edge: Settings → Cookies and site permissions → Manage and delete cookies.',
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      'We may update this Cookie Policy as our site evolves or as regulations change. When we do, we will revise the effective date at the top of this page.',
    ],
  },
  {
    heading: 'Questions?',
    paragraphs: [
      `If you have any questions about our use of cookies, email us at ${SITE.email} and we will be glad to help.`,
    ],
    links: [{ label: 'See our Privacy Policy', href: '/privacy' }],
  },
]

export default function CookiesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow={EFFECTIVE}
        title="Cookie Policy"
        intro="A plain-English guide to the handful of cookies we use, why we use them, and how to turn the optional ones off."
      />
      <LegalDoc sections={SECTIONS} />
    </SiteShell>
  )
}
