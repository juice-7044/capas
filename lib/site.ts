export const SITE_URL = 'https://www.lolalouiscapas.org'

export const SITE = {
  name: "Lola Louis' Creative & Performing Arts",
  short: 'CAPAS',
  email: 'info@lolalouiscapas.org',
  city: 'Bronx',
  region: 'NY',
  regionName: 'New York',
  neighborhood: 'Northeast Bronx',
  country: 'US',
  tagline: 'The chairs are empty. The stage is not.',
  zeffyUrl: 'https://www.zeffy.com/en-US/donation-form/light-up-a-chair',
}

/** Build a Zeffy donation link, pre-filling the amount when provided. */
export function zeffyDonate(amount?: number) {
  if (!amount || amount < 1) return SITE.zeffyUrl
  return `${SITE.zeffyUrl}?amount=${Math.round(amount)}`
}

export const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Founder', href: '/founder' },
  { label: 'Legacy', href: '/our-legacy' },
  { label: 'Programs', href: '/programs' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Get Involved', href: '/board' },
  { label: 'Contact', href: '/contact' },
  {
    label: "The Children's Legacy",
    href: 'https://legacy.lolalouiscapas.org',
    external: true,
  },
]

export const SOCIALS = [
  { label: 'Facebook', href: 'https://facebook.com/lolalouiscapas', icon: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com/lolalouiscapas', icon: 'instagram' },
  { label: 'YouTube', href: 'https://youtube.com/capas718', icon: 'youtube' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/lola-louis-creative-performing-arts-inc',
    icon: 'linkedin',
  },
] as const

export const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Founder', href: '/founder' },
      { label: 'Legacy', href: '/our-legacy' },
      { label: 'Programs', href: '/programs' },
      { label: 'Blog', href: '/blog' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Donate', href: '/donate' },
      { label: 'Partnerships', href: '/partnerships' },
      { label: 'Board Openings', href: '/board' },
      { label: 'Teaching Roles', href: '/teachers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Terms', href: '/terms' },
      {
        label: 'Annual Reports',
        href: 'https://app.candid.org/profile/7052868/lola-louis-creative-performing-arts-inc-20-5554439',
      },
      { label: 'Board of Directors', href: '/board' },
    ],
  },
]
