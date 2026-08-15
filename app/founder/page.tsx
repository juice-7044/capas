import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { InstrumentAccent } from '@/components/instrument-accent'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Lola Louis · Founder & Artistic Director | CAPAS',
  description:
    'The story of Lola Lenore Louis (1945\u20132023) \u2014 Trinidad-born actress, director, singer, pianist, and folk dancer who founded Lola Louis\u2019 Creative & Performing Arts to liberate young minds from what she called \u201climitation thinking.\u201d',
  alternates: { canonical: '/founder' },
}

const CREDENTIALS = [
  'American Academy of Dramatic Arts',
  'NYU Tisch School of the Arts',
  'Stella Adler Conservatory of Acting',
  'Associate Performance Diploma in Piano, Trinity College of Music, England',
]

const HONORS = [
  'AUDELCO Award nominee for lead and supporting actress in Black theater',
  'Achievement Award, Congress of Negro Women',
  'Cultural Contribution Award, Tobago Heritage Festival Committee',
]

export default function FounderPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-muted pt-32 pb-16 sm:pt-40 sm:pb-24">
        <InstrumentAccent
          instrument="piano"
          opacity={0.05}
          rotate={-8}
          className="-left-20 top-24 h-72 w-72"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="font-label text-[0.7rem] text-primary md:text-xs">
              Founder & Artistic Director · 1945&ndash;2023
            </p>
            <h1 className="mt-5 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-7xl">
              Lola Louis
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              A native of Trinidad and Tobago and a trained actress, director, singer, pianist, and
              ethnic folk dancer, Lola Lenore Louis used theater and the creative arts to liberate
              and stimulate the minds of urban youth &mdash; lifting them above what she called
              &ldquo;limitation thinking.&rdquo;
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-secondary/15"
          >
            <Image
              src="/images/lola-griot.png"
              alt="Lola Louis performing as the Griot in The Children's Legacy, in a red, green, and gold sequined headwrap with large gold earrings"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top"
            />
          </Reveal>
        </div>
      </section>

      {/* Longform body */}
      <article className="bg-off-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="space-y-6 text-lg leading-relaxed text-foreground">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-primary">
              Lola Lenore Louis was born in 1945 in the Republic of Trinidad and Tobago. Her
              nurturing and training began in Scarborough, Tobago, where she studied and performed
              piano &mdash; the first steps of a life given to the stage and to the students she
              would one day teach.
            </p>
            <p>
              She trained as an actress, director, singer, pianist, and ethnic folk dancer, and her
              performance experience reached far beyond New York and America to include Kenya and
              Egypt. She was a griot in the truest sense &mdash; a storyteller who carries a
              community&apos;s memory &mdash; and she brought that calling home to the Bronx.
            </p>
          </Reveal>

          <Reveal className="my-14 rounded-2xl border border-border bg-card p-8">
            <p className="font-label text-[0.7rem] text-primary">Training</p>
            <ul className="mt-4 space-y-2.5">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex gap-3 text-base leading-snug text-foreground">
                  <span aria-hidden className="mt-1 text-primary">
                    &bull;
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-label text-[0.7rem] text-secondary">Honors</p>
            <ul className="mt-4 space-y-2.5">
              {HONORS.map((h) => (
                <li key={h} className="flex gap-3 text-base leading-snug text-foreground">
                  <span aria-hidden className="mt-1 text-secondary">
                    &bull;
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="space-y-6 text-lg leading-relaxed text-foreground">
            <p>
              Her play, <em>The Children&apos;s Legacy</em>, was presented off-Broadway, at the
              Apollo Theatre, at the United Nations, at City Hall, and throughout New York City&apos;s
              public schools &mdash; putting seniors and students on one stage in an evening of
              movement, music, and griot storytelling.
            </p>
            <p>
              Her teaching began at home. In 1976 she started giving piano lessons out of her own
              living room at Lowerre Place in the Northeast Bronx. That living-room studio grew, and
              in 1985 she founded Lola Louis&apos; Creative and Performing Arts Studio (CAPAS),
              expanding beyond piano into voice, drama, dance, art, and musical theatre. In 1994,
              CAPAS was granted 501(c)(3) nonprofit status.
            </p>
            <p>
              As founder and director of CAPAS, she used theater and the creative arts as a medium
              to liberate and stimulate the minds of urban youth, in the hope that they would rise
              above &ldquo;limitation thinking.&rdquo; She provided the spark that awakened dormant
              talents in her students, launching them into experiences and possibilities beyond
              their own expectations.
            </p>
          </Reveal>

          <Reveal className="my-14">
            <blockquote className="border-l-4 border-primary pl-6 font-display text-2xl font-medium italic leading-snug text-foreground sm:text-3xl">
              She provided the spark that awakened dormant talents &mdash; launching students into
              possibilities beyond their own expectations.
            </blockquote>
          </Reveal>

          <Reveal className="space-y-6 text-lg leading-relaxed text-foreground">
            <p>
              Many CAPAS students moved on to high schools and colleges in pursuit of their dreams;
              others were launched into careers on the Broadway stage, in professional theater,
              movies, and television. Lola was always mindful that her God-given gifts were to be
              used in the service of others, and she always gave God the glory.
            </p>
            <p>
              Lola Louis passed away in October 2023. What she built did not end with her &mdash;
              her mission is carried forward today by those she taught and inspired.
            </p>
          </Reveal>
        </div>
      </article>

      {/* Succession */}
      <section className="bg-muted py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="rounded-3xl border border-border bg-card p-8 sm:p-12">
            <p className="font-label text-[0.7rem] text-secondary md:text-xs">
              Carrying the work forward
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Ann Lemond-Hume
            </h2>
            <p className="mt-2 text-sm font-medium text-primary">
              Executive & Artistic Director · Chairman of the Board
            </p>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                A long-time student of Lola&apos;s, as well as a family friend and confidant, Ann
                Lemond-Hume has been elected by the board to lead CAPAS into its next chapter. She
                carries firsthand the discipline, artistry, and generosity of spirit that Lola
                instilled in every student who came through her classes.
              </p>
              <p>
                Under her direction, CAPAS is raising the funds for a permanent Bronx home &mdash;
                this time with the goal of making every class free, so the performing arts are truly
                within reach of all.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
            Finish what Lola started.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-cream/80">
            Her work needs a home again. Fund the reopening &mdash; free performing arts for the
            Northeast Bronx, in her memory.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/donate"
              className="btn-green inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
            >
              Fund a Chair · $1
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              The 30-Year Story
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  )
}
