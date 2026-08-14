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
    heading: 'Cookies',
    paragraphs: [
      'Our site uses only essential cookies needed for it to function and, where applicable, privacy-respecting analytics. You can control cookies through your browser settings.',
    ],
  },
  {
    heading: 'Your choices',
    paragraphs: [
      'You may unsubscribe from our newsletter at any time using the link in any email. You may also ask us to access, correct, or delete the personal information we hold about you by contacting us.',
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
