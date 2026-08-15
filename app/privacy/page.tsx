import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { LegalDoc, type LegalSection } from '@/components/legal-doc'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | CAPAS',
  description:
    'How Lola Louis\u2019 Creative & Performing Arts collects, uses, and protects the personal information of donors, families, and website visitors.',
}

const EFFECTIVE = 'Effective August 14, 2026'

const SECTIONS: LegalSection[] = [
  {
    heading: 'Who we are',
    paragraphs: [
      `${SITE.name} ("CAPAS," "we," "us," or "our") is a 501(c)(3) nonprofit organization based in the Bronx, New York. This Privacy Policy explains how we handle information collected through our website and in the course of our fundraising, enrollment, and community programs.`,
    ],
  },
  {
    heading: 'Information we collect',
    paragraphs: ['We only collect information you choose to give us, or that is needed to run our programs:'],
    bullets: [
      'Contact details you submit through our forms — such as your first name, email address, and any message you send.',
      'Donation information processed by our payment provider (for example, name, billing details, and gift amount). We do not store full card numbers on our servers.',
      'Enrollment and waitlist details you provide when signing up a student for future classes.',
      'Basic, non-identifying usage data (such as pages visited) that helps us improve the site.',
    ],
  },
  {
    heading: 'How we use your information',
    bullets: [
      'To process donations and send tax-deductible receipts.',
      'To respond to your questions and follow up on partnership, teaching, or board inquiries.',
      'To hold a student\u2019s place on the reopening waitlist and notify you when classes begin.',
      'To send updates or our newsletter — only when you have asked to receive them.',
    ],
  },
  {
    heading: 'What we will never do',
    bullets: [
      'We do not sell, rent, or trade your personal information. Ever.',
      'We do not require families to prove income beyond honor-system self-attestation.',
      'We do not share your details with third parties except the trusted service providers (such as our payment processor and email tools) that help us operate, and only as needed.',
    ],
  },
  {
    heading: 'Payments',
    paragraphs: [
      'Donations are handled by a PCI-compliant third-party payment processor. Their handling of your payment information is governed by their own privacy and security policies.',
    ],
  },
  {
    heading: 'Analytics & Google',
    paragraphs: [
      'We use Google Analytics (via Google Tag Manager) to understand how visitors use our site so we can improve it. Google Analytics sets cookies and collects information such as the pages you visit, your approximate location (derived from IP address, which Google anonymizes), device and browser type, and how you arrived at our site.',
      'This information is processed by Google on our behalf and is used only in aggregate to measure and improve our website. We do not use it to identify you personally, and we do not combine it with your donation or enrollment records.',
    ],
    links: [
      { label: 'Google Analytics opt-out browser add-on', href: 'https://tools.google.com/dlpage/gaoptout' },
      { label: 'How Google uses data', href: 'https://policies.google.com/technologies/partner-sites' },
    ],
  },
  {
    heading: 'Cookies',
    paragraphs: [
      'Our site uses a small number of cookies: strictly necessary cookies that make the site work, analytics cookies (Google Analytics) that help us measure traffic, and preference cookies that remember your choices. You can accept, decline, or delete cookies at any time through your browser settings.',
      'For a full breakdown of the cookies we use and how to manage or decline them, please see our Cookie Policy.',
    ],
    links: [{ label: 'Read our Cookie Policy', href: '/cookies' }],
  },
  {
    heading: 'Data retention',
    paragraphs: [
      'We keep personal information only for as long as we need it for the purpose it was collected, or as required by law:',
    ],
    bullets: [
      'Donation records are retained for a minimum of seven years to meet IRS and nonprofit accounting requirements.',
      'Newsletter and contact details are kept until you unsubscribe or ask us to delete them.',
      'Enrollment and waitlist information is kept until classes reopen and enrollment is complete, or until you ask us to remove it.',
      'Aggregate analytics data is retained according to our Google Analytics settings (no more than 14 months for user-level data) and cannot be traced back to you.',
    ],
  },
  {
    heading: 'Your rights & choices',
    paragraphs: [
      'You are in control of your information. At any time you may:',
    ],
    bullets: [
      'Unsubscribe from our newsletter using the link in any email.',
      'Opt out of Google Analytics using the browser add-on linked above, or by declining analytics cookies.',
      'Request a copy of the personal information we hold about you.',
      'Ask us to correct information that is inaccurate or out of date.',
      'Request deletion of your personal information ("right to be forgotten"), subject to records we are legally required to keep.',
    ],
  },
  {
    heading: 'How to make a request',
    paragraphs: [
      `To exercise any of the rights above, email us at ${SITE.email} with the details of your request. We will respond within 30 days and may ask you to confirm your identity before we act on a deletion or access request.`,
    ],
  },
  {
    heading: 'Children\u2019s privacy',
    paragraphs: [
      'Enrollment information for minors is submitted by a parent or guardian. We collect only what is necessary to serve the student and never market directly to children.',
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the effective date above.',
    ],
  },
  {
    heading: 'Contact us',
    paragraphs: [
      `Questions about this policy or your information? Email us at ${SITE.email} and we will respond promptly.`,
    ],
  },
]

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHero eyebrow={EFFECTIVE} title="Privacy Policy" intro="Your trust is the whole point. Here is exactly what we collect, why, and the lines we will never cross." />
      <LegalDoc sections={SECTIONS} />
    </SiteShell>
  )
}
