import { SITE, SITE_URL, SOCIALS } from '@/lib/site'

/**
 * Site-wide JSON-LD structured data for SEO, local SEO, and AI/LLM discovery.
 * Rendered once in the root layout. Describes the nonprofit organization,
 * its founder, and the website itself so search engines and AI assistants
 * can accurately represent CAPAS.
 */
export function StructuredData() {
  const orgId = `${SITE_URL}/#organization`

  const graph = [
    {
      '@type': ['NGO', 'PerformingGroup', 'EducationalOrganization'],
      '@id': orgId,
      name: SITE.name,
      alternateName: ['CAPAS', "Lola Louis' Creative and Performing Arts, Inc."],
      url: SITE_URL,
      logo: `${SITE_URL}/images/og-capas.png`,
      image: `${SITE_URL}/images/og-capas.png`,
      email: SITE.email,
      description:
        'A 501(c)(3) performing arts nonprofit in the Northeast Bronx, founded by Lola Louis in 1985. CAPAS teaches piano, voice, dance, drama, art, and musical theatre to students of every age — children (ages three and up), adults, seniors, and students with special needs — and is raising funds to reopen with free classes for all.',
      slogan: SITE.tagline,
      foundingDate: '1985',
      founder: { '@id': `${SITE_URL}/#founder` },
      areaServed: [
        { '@type': 'Place', name: 'Northeast Bronx, New York' },
        { '@type': 'AdministrativeArea', name: 'The Bronx, New York City' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bronx',
        addressRegion: 'NY',
        addressCountry: 'US',
      },
      knowsAbout: [
        'Piano instruction',
        'Voice and vocal training',
        'Ballet and dance',
        'Hip-hop and tap',
        'Drama and acting',
        'Musical theatre',
        'Griot storytelling',
        'Youth arts education',
        'Arts education for seniors',
      ],
      nonprofitStatus: 'Nonprofit501c3',
      sameAs: SOCIALS.map((s) => s.href),
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#founder`,
      name: 'Lola Lenore Louis',
      alternateName: 'Lola Louis',
      birthDate: '1945',
      deathDate: '2023-10',
      birthPlace: { '@type': 'Place', name: 'Trinidad and Tobago' },
      jobTitle: 'Founder & Artistic Director',
      description:
        'Trinidad-born actress, director, singer, pianist, and ethnic folk dancer who founded Lola Louis\u2019 Creative & Performing Arts (CAPAS) to liberate and stimulate the minds of urban youth through the creative arts.',
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'American Academy of Dramatic Arts' },
        { '@type': 'CollegeOrUniversity', name: 'NYU Tisch School of the Arts' },
        { '@type': 'EducationalOrganization', name: 'Stella Adler Conservatory of Acting' },
        { '@type': 'EducationalOrganization', name: 'Trinity College of Music, England' },
      ],
      founderOf: { '@id': orgId },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      publisher: { '@id': orgId },
      inLanguage: 'en-US',
    },
  ]

  const json = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text; the content is fully controlled.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
