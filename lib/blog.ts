export const BLOG_CATEGORIES = [
  'News',
  'Fundraising',
  'Programs',
  'Behind the Scenes',
  'Community',
] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string; cite?: string }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  date: string // ISO
  author: string
  readingTime: string
  cover: string
  coverAlt: string
  body: BlogBlock[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'raising-the-curtain-again',
    title: 'Raising the Curtain Again: Our Plan to Reopen',
    excerpt:
      'After three decades of teaching, a pause, and a promise. Here is how we plan to reopen our doors — free for every family who needs us.',
    category: 'News',
    date: '2026-08-01',
    author: 'Ann Lemond-Hume',
    readingTime: '4 min read',
    cover: '/images/hero-chairs-light.png',
    coverAlt: 'Rows of empty chairs in a bright hall, waiting to be filled',
    body: [
      { type: 'p', text: 'For thirty years, the chairs in our studio were never empty for long. Children filed in after school, seniors arrived for afternoon piano, and on weekends the whole building hummed with scales, monologues, and the thud of dance across a wood floor.' },
      { type: 'h2', text: 'A pause, not an ending' },
      { type: 'p', text: 'When we lost our founder, Lola Louis, in October 2023, we also paused our regular programming. It was never meant to be permanent. This year, we are laying the groundwork to reopen — and to do it in a way that honors Lola\u2019s deepest belief: that no child should ever be turned away for inability to pay.' },
      { type: 'p', text: 'When we reopen, tuition will be free for families with household income below $150,000, on an honor system. If you can give, you fund another seat. If you can\u2019t, there are no questions and no shame.' },
      { type: 'quote', text: 'The chairs are empty. The stage is not.', cite: 'Our reopening campaign' },
      { type: 'p', text: 'Follow along here on the blog as we share renovation updates, teacher call-outs, and the first class schedules the moment they are ready.' },
    ],
  },
  {
    slug: 'fund-a-chair-campaign',
    title: 'Fund a Chair for $1: How Small Gifts Reopen a Studio',
    excerpt:
      'Every dollar fills a seat. Here is exactly where your gift goes and why the smallest donations add up to the biggest impact.',
    category: 'Fundraising',
    date: '2026-07-18',
    author: 'Development Team',
    readingTime: '3 min read',
    cover: '/images/piano-hands.jpg',
    coverAlt: 'Close-up of hands playing a piano keyboard',
    body: [
      { type: 'p', text: 'We built the Fund a Chair campaign around a simple idea: a single dollar can hold a seat for a student who might otherwise never walk through our doors.' },
      { type: 'h2', text: 'Where your gift goes' },
      { type: 'p', text: 'Your donation reduces the cost of instruction, instrument rentals and maintenance, costumes, performance fees, books, and supplies. Because our classes are kept small, every gift directly increases the individual attention each student receives.' },
      { type: 'p', text: 'Larger gifts sponsor a child for a full term; smaller gifts stack together to reopen entire rooms. Both matter. Both are welcome.' },
      { type: 'quote', text: 'The majority of our students received full or partial scholarships. No child was ever turned away for inability to pay.' },
      { type: 'p', text: 'Ready to fill a seat? Visit our donate page and give whatever feels right — a dollar or a thousand of them.' },
    ],
  },
  {
    slug: 'inside-our-music-program',
    title: 'Inside Our Music Program: Piano, Voice, and the Long Game',
    excerpt:
      'What actually happens in a CAPAS music class — from a child\u2019s first scale to a senior\u2019s return to the keyboard after fifty years.',
    category: 'Programs',
    date: '2026-07-02',
    author: 'Faculty',
    readingTime: '5 min read',
    cover: '/images/piano.png',
    coverAlt: 'An upright piano in a warm practice room',
    body: [
      { type: 'p', text: 'CAPAS began with piano and voice students in Lola\u2019s living room, and music has remained the backbone of everything we do. Our program spans ages three and up — and because it is never too late to start, seniors are welcome too.' },
      { type: 'h2', text: 'The long game' },
      { type: 'p', text: 'We teach for the long game: reading music, ear training, and the discipline of daily practice, alongside the pure joy of making sound. Students build the self-esteem and confidence to understand themselves and their vast capabilities.' },
      { type: 'p', text: 'Classes stay small so each student receives individual nurturing from experienced, professionally trained instructors. That is not a marketing line — it is the whole model.' },
      { type: 'p', text: 'Whether you are five or seventy-five, there is a bench here with your name on it.' },
    ],
  },
  {
    slug: 'the-childrens-legacy-revival',
    title: 'Behind the Scenes: Reviving The Children\u2019s Legacy',
    excerpt:
      'A look inside the rehearsal room as original cast members return to stage Lola\u2019s landmark play for a new generation.',
    category: 'Behind the Scenes',
    date: '2026-06-20',
    author: 'Shakira DeAbreu',
    readingTime: '6 min read',
    cover: '/images/lola-griot.png',
    coverAlt: 'A performer in the role of a West African Griot storyteller',
    body: [
      { type: 'p', text: 'Reviving The Children\u2019s Legacy meant bringing original cast members back into the room — some of whom first performed these roles as teenagers, decades ago.' },
      { type: 'h2', text: 'Keeping the names' },
      { type: 'p', text: 'Lola wrote the play so that the teen characters carried the real names of her original cast, to preserve their history. When I returned as the Griot and co-director, we kept that tradition alive.' },
      { type: 'quote', text: 'Before we can face the present or the future, we must first understand the past.', cite: 'The Griot, Act I' },
      { type: 'p', text: 'The production weaves dramatic scenes with music, movement, and visual storytelling into a 45-minute journey through history — from West African tradition through the present day.' },
      { type: 'p', text: 'Explore the full production, cast, and digital playbill on our production microsite.' },
    ],
  },
  {
    slug: 'a-second-home-in-the-bronx',
    title: 'A Second Home in the Bronx: Alumni Look Back',
    excerpt:
      'From Broadway stages to neighborhood classrooms, CAPAS alumni reflect on what the studio gave them — and what they carry forward.',
    category: 'Community',
    date: '2026-06-05',
    author: 'Alumni Network',
    readingTime: '4 min read',
    cover: '/images/drummer.jpg',
    coverAlt: 'A young drummer performing on stage',
    body: [
      { type: 'p', text: 'Ask a CAPAS alum what the studio meant to them and you will rarely hear about technique first. You hear the word home.' },
      { type: 'p', text: 'Our graduates have gone on to Broadway, film, and stages across New York — the Public Theater, the National Black Theater, the American Theater of Actors — and many have come back to teach.' },
      { type: 'quote', text: 'I know for a fact that I would not be the person I am today if I had not spent 14 of my 18 years of life in CAPAS. I truly consider CAPAS to be my second home.', cite: 'Laianna Wright, CAPAS alumna' },
      { type: 'p', text: 'As we prepare to reopen, we are inviting alumni to share their stories and help shape the next chapter. If CAPAS shaped you, we want to hear from you.' },
    ],
  },
  {
    slug: 'partnering-with-bronx-schools',
    title: 'Bringing Arts Back to Bronx Classrooms',
    excerpt:
      'Our school partnership program puts working artists in front of students — and arts integration back into the academic day.',
    category: 'Programs',
    date: '2026-05-22',
    author: 'Education Team',
    readingTime: '3 min read',
    cover: '/images/bronx-kids.png',
    coverAlt: 'Children participating in an arts workshop',
    body: [
      { type: 'p', text: 'Our educational programming extends beyond our own studio walls and into neighborhood schools through arts-integration partnerships.' },
      { type: 'h2', text: 'What partnership looks like' },
      { type: 'p', text: 'We bring arts integration into academic settings, offer professional development for educators, and host student matinees with accompanying educational materials.' },
      { type: 'p', text: 'For students facing systemic barriers, a single sustained relationship with a working artist can change the trajectory of a school year. That is the bet we are making, one classroom at a time.' },
      { type: 'p', text: 'Schools interested in partnering can reach us through our contact page.' },
    ],
  },
]

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
