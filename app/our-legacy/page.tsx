import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { InstrumentAccent } from '@/components/instrument-accent'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Legacy · Who We Are, Alumni & Awards | CAPAS',
  description:
    'Who we are, our mission, the notable alumni who came through our doors, and the citations and awards CAPAS has earned for its work in the Bronx community.',
  alternates: { canonical: '/our-legacy' },
}

const ALUMNI = [
  {
    name: 'Sean Nelson',
    body: 'Recruited from CAPAS to star alongside Samuel L. Jackson in the widely-acclaimed film “Fresh.” His other credits include the Broadway production of “The Shadow Box” and, on television, “New York Undercover,” “Law & Order,” and “The Corner,” among several other films.',
  },
  {
    name: 'Afi McClendon',
    body: 'A CAPAS graduate who has appeared in several Broadway productions including “Once on This Island” and Cheryl West’s “Holiday Heart.” Afi appeared opposite Sean Nelson in “Fresh,” has television credits including “The Red Shoes” and “Ghostwriters,” and joined the Broadway cast of “Fela!”',
  },
  {
    name: 'On stages across New York',
    body: 'Other students have appeared in Off and Off-Off Broadway productions at the Public Theater, the National Black Theater, and the American Theater of Actors.',
  },
]

const AWARDS = [
  'Citation of Recognition from Senator Ruth Hassell-Thompson',
  'City Council Citation — Councilman Larry Seabrook',
  'New York State Assembly Citation — Assemblyman Carl E. Heastie',
  'Citation of Merit Award from Adolfo Carrión, Jr., President of the Borough of the Bronx',
  'Achievement Award — The National Association of Negro Business and Professional Women’s Club, Inc. (Bronx Chapter)',
  'L&L Productions Achievement Award for encouraging members of the community to celebrate their personal and artistic development',
  'AUDELCO Rising Star Award for best youth performance — Afi McClendon, Karloff Commissiong, and The Conscious Ones Acting Company',
]

export default function LegacyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Legacy"
        title="Who we are, and the talent that came through our doors."
        intro="For decades, CAPAS has been a community outreach and nonprofit program built on a simple belief: it is never too late to start, and every student deserves individual nurturing from professionally trained instructors."
      />

      {/* Who we are + Mission */}
      <section className="relative overflow-hidden bg-off-white py-24 sm:py-32">
        <InstrumentAccent
          instrument="violin"
          opacity={0.05}
          rotate={8}
          className="-right-16 top-10 h-80 w-80"
        />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="font-label text-[0.7rem] text-primary md:text-xs">Who we are</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
              A studio for every age, every ability.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                CAPAS is a community outreach and nonprofit program founded by artistic director
                Lola Louis. It began with a small number of piano and voice students and grew into
                professional instruction in music, voice, drama, dance, art, and musical theatre.
              </p>
              <p>
                Classes are offered to ages three and over&mdash;and because we believe it is never
                too late to start, senior citizens are welcomed too. We also offer classes to
                autistic students and some children with special needs.
              </p>
              <p>
                Our youth are encouraged to broaden their horizons by reading, thinking critically,
                and participating in field trips to performances and places that develop the
                imagination. Through the creative process, students gain a sense of accomplishment
                through hard work, discipline, and fun&mdash;building the self-esteem and confidence
                to understand themselves and their vast capabilities.
              </p>
              <p>
                Our classes are kept small, so that each student receives individual nurturing and
                attention from experienced, professionally trained instructors.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-primary/25 bg-card p-8 sm:p-10">
              <p className="font-label text-[0.7rem] text-primary md:text-xs">Our mission</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Minds, bodies, and spirits.
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Lola Louis&apos; Creative and Performing Arts, Inc. (CAPAS) is a 501(c)(3)
                  studio-based creative and performing arts program.
                </p>
                <p>
                  CAPAS aims to develop the minds, bodies, and spirits of children (three years old
                  and up) and adults by utilizing the creative arts process.
                </p>
                <p>
                  To this end, CAPAS fosters the development of artistic skills by providing a
                  supportive environment for creative fun and the freedom of artistic expression and
                  ideas.
                </p>
              </div>
              <p className="mt-8 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-foreground">
                The majority of our students received full and partial scholarships&mdash;no child
                was ever turned away for inability to pay.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Notable alumni */}
      <section className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground sm:py-32">
        <Image
          src="/images/drummer.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-right opacity-15 mix-blend-luminosity"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/40" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="font-label text-[0.7rem] text-cream/80 md:text-xs">Successful alumni</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl">
              The talent that walked out our doors.
            </h2>
            <p className="mt-5 leading-relaxed text-cream/80">
              Perhaps the most visible measure of our outreach is the publicity CAPAS earns when its
              students and graduates share their talents with the public&mdash;performing at
              neighborhood schools and public festivals across New York City throughout the year.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ALUMNI.map((a, i) => (
              <Reveal
                key={a.name}
                delay={i * 120}
                className="rounded-2xl border border-cream/20 bg-purple-dark/60 p-7"
              >
                <h3 className="font-display text-xl font-semibold text-cream">{a.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/80">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & citations */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-12">
            <p className="font-label text-[0.7rem] text-primary md:text-xs">Awards &amp; citations</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Recognized for our work in the community.
            </h2>
          </Reveal>
          <ul className="space-y-4">
            {AWARDS.map((award, i) => (
              <Reveal key={award} delay={i * 60}>
                <li className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-primary"
                  />
                  <span className="text-pretty leading-relaxed text-foreground">{award}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-off-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="font-label text-[0.7rem] text-primary md:text-xs">In their words</p>
            <blockquote className="mt-6 space-y-5 text-pretty font-display text-xl leading-relaxed text-foreground sm:text-2xl">
              <p>
                &ldquo;Through all of my years at Lola Louis&apos; Creative and Performing Arts
                Studio, I have gained strength, knowledge, and life-long memories that I will cherish
                forever. I know for a fact that I would not be the person I am today if I had not
                spent 14 of my 18 years of life in CAPAS. I truly consider CAPAS to be my second
                home.
              </p>
              <p>
                It enlightened me of my history in all its darkness and glory, and gave me the
                confidence to speak up and not be subjected to the stereotypes society places on my
                race. I&apos;ve been highly trained in the arts by phenomenal teachers in piano,
                dance, acting, and musical theatre&mdash;a background that helped me develop a
                presence on and off stage.
              </p>
              <p>
                It is because of Lola Louis and CAPAS that my life took a turn for the better after I
                was accepted into LaGuardia High School of Music &amp; Art and Performing Arts. Above
                all, I learned how to be true to myself and to others.&rdquo;
              </p>
            </blockquote>
            <p className="font-label mt-6 text-[0.7rem] text-muted-foreground">
              &mdash; Laianna Wright, CAPAS alumna
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-24">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Give the gift of the performing arts.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Your generous donation reduces the cost of instruction, instrument rentals and
            maintenance, costumes, performance fees, books, and supplies for the next generation of
            CAPAS students.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/donate"
              className="btn-green inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
            >
              Sponsor a Child
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  )
}
