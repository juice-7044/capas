import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { LegalDoc, type LegalSection } from '@/components/legal-doc'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Use | CAPAS',
  description:
    'The terms that govern your use of the Lola Louis\u2019 Creative & Performing Arts website, including donations, enrollment, and intellectual property.',
}

const EFFECTIVE = 'Effective August 14, 2026'

const SECTIONS: LegalSection[] = [
  {
    heading: 'Acceptance of these terms',
    paragraphs: [
      `By accessing or using the ${SITE.name} ("CAPAS") website, you agree to these Terms of Use. If you do not agree, please do not use the site.`,
    ],
  },
  {
    heading: 'About our organization',
    paragraphs: [
      'CAPAS is a 501(c)(3) nonprofit organization. We are currently a pre-launch organization fundraising to reopen performing arts programming in the Bronx. No classes are actively running at this time, and enrollment forms reflect interest and waitlist placement rather than a guarantee of a seat.',
    ],
  },
  {
    heading: 'Donations',
    bullets: [
      'Donations to CAPAS are voluntary and, to the fullest extent allowed by law, tax-deductible. We will provide a receipt for your records.',
      'Unless a gift is explicitly designated and accepted for a restricted purpose, donations support our general mission to reopen and operate free performing arts programs.',
      'Because gifts fund charitable work, donations are generally non-refundable. If you believe a gift was made in error, contact us and we will work with you in good faith.',
    ],
  },
  {
    heading: 'Enrollment and waitlist',
    paragraphs: [
      'Submitting a waitlist or enrollment form does not create a binding agreement or guarantee placement. When programs reopen, participation will be subject to our program guidelines, available space, and any eligibility criteria we publish at that time.',
    ],
  },
  {
    heading: 'Acceptable use',
    paragraphs: ['When using this site, you agree not to:'],
    bullets: [
      'Use the site for any unlawful purpose or in violation of these terms.',
      'Attempt to gain unauthorized access to our systems, data, or other users\u2019 information.',
      'Interfere with or disrupt the operation, security, or integrity of the site.',
      'Submit false, misleading, or fraudulent information through our forms.',
    ],
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      'The CAPAS name, logo, program names such as "The Children\u2019s Legacy," and all site content, text, and images are the property of CAPAS or its licensors and are protected by applicable law. You may not reuse them without our written permission.',
    ],
  },
  {
    heading: 'Third-party links and services',
    paragraphs: [
      'Our site may link to or rely on third-party services, including our payment processor and email tools. We are not responsible for the content or practices of third-party sites, and your use of them is governed by their own terms.',
    ],
  },
  {
    heading: 'Disclaimer',
    paragraphs: [
      'The site is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, CAPAS disclaims all warranties, express or implied, and is not liable for any indirect or incidental damages arising from your use of the site.',
    ],
  },
  {
    heading: 'Changes to these terms',
    paragraphs: [
      'We may update these Terms of Use from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.',
    ],
  },
  {
    heading: 'Governing law',
    paragraphs: [
      'These terms are governed by the laws of the State of New York, without regard to its conflict-of-laws principles.',
    ],
  },
  {
    heading: 'Contact us',
    paragraphs: [`Questions about these terms? Email us at ${SITE.email}.`],
  },
]

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow={EFFECTIVE} title="Terms of Use" intro="The plain-language ground rules for using our site, donating, and joining the waitlist." />
      <LegalDoc sections={SECTIONS} />
    </SiteShell>
  )
}
