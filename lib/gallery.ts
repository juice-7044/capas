export type MediaType = 'photo' | 'video'

export type GalleryItem = {
  id: string
  src: string // image, or poster for video
  alt: string
  caption: string
  production: string
  year: number
  media: MediaType
  /** For video items: link to watch (opens in the lightbox action). */
  videoUrl?: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'tcl-griot',
    src: '/images/lola-griot.png',
    alt: 'A performer costumed as a West African Griot storyteller',
    caption: 'The Griot opens the journey — The Children\u2019s Legacy',
    production: 'The Children\u2019s Legacy',
    year: 2025,
    media: 'photo',
  },
  {
    id: 'tcl-drummer',
    src: '/images/drummer.jpg',
    alt: 'A drummer performing live on stage',
    caption: 'Live percussion drives the ensemble scenes',
    production: 'The Children\u2019s Legacy',
    year: 2025,
    media: 'photo',
  },
  {
    id: 'tcl-trailer',
    src: '/images/hero-stage-dark.png',
    alt: 'A darkened theater stage lit by a single spotlight',
    caption: 'Production trailer — The Children\u2019s Legacy revival',
    production: 'The Children\u2019s Legacy',
    year: 2025,
    media: 'video',
    videoUrl: 'https://youtube.com/capas718',
  },
  {
    id: 'recital-piano',
    src: '/images/piano-hands.jpg',
    alt: 'Hands playing piano during a student recital',
    caption: 'Spring piano recital',
    production: 'Studio Recitals',
    year: 2024,
    media: 'photo',
  },
  {
    id: 'recital-violin',
    src: '/images/violin-macro.jpg',
    alt: 'Close-up of a violin being played',
    caption: 'Strings showcase',
    production: 'Studio Recitals',
    year: 2024,
    media: 'photo',
  },
  {
    id: 'recital-guitar',
    src: '/images/guitar.png',
    alt: 'An acoustic guitar resting on a stool',
    caption: 'Guitar students take the stage',
    production: 'Studio Recitals',
    year: 2023,
    media: 'photo',
  },
  {
    id: 'community-kids',
    src: '/images/bronx-kids.png',
    alt: 'Children in an arts workshop',
    caption: 'After-school arts workshop in the Northeast Bronx',
    production: 'Community Performances',
    year: 2024,
    media: 'photo',
  },
  {
    id: 'community-seniors',
    src: '/images/bronx-seniors.png',
    alt: 'Senior adults participating in a music class',
    caption: 'It is never too late to start — our seniors program',
    production: 'Community Performances',
    year: 2023,
    media: 'photo',
  },
  {
    id: 'community-adults',
    src: '/images/bronx-adults.png',
    alt: 'Adults rehearsing together in a studio',
    caption: 'Adult ensemble rehearsal',
    production: 'Community Performances',
    year: 2022,
    media: 'photo',
  },
  {
    id: 'community-highlight',
    src: '/images/hero-chairs-light.png',
    alt: 'Rows of chairs set for a community performance',
    caption: 'Season highlight reel',
    production: 'Community Performances',
    year: 2022,
    media: 'video',
    videoUrl: 'https://youtube.com/capas718',
  },
]

export const GALLERY_PRODUCTIONS = Array.from(
  new Set(GALLERY_ITEMS.map((i) => i.production)),
)

export const GALLERY_YEARS = Array.from(new Set(GALLERY_ITEMS.map((i) => i.year))).sort(
  (a, b) => b - a,
)
