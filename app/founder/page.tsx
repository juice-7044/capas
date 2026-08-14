import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Lola Louis · Founder & Artistic Director | CAPAS',
  description:
    'The story of Lola Louis (1950s\u20132023) \u2014 griot, teaching artist, and founder of Lola Louis\u2019 Creative & Performing Arts, who spent three decades making the performing arts affordable and within reach for the Northeast Bronx.',
}

const PULL_QUOTES = [
  'I never asked a child if they could pay. I asked if they were ready to work.',
  'We don\u2019t teach children to perform. We teach them to show up.',
]

export default function FounderPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="border-b border-border bg-muted pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="font-label text-[0.7rem] text-primary md:text-xs">
              Founder & Artistic Director · In memoriam, 2023
            </p>
            <h1 className="mt-5 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-7xl">
              Lola Louis
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              For nearly thirty years she was the Bronx&apos;s griot &mdash; storyteller, teacher,
              and keeper of a promise that the arts belong to everyone, and that no child should be
              turned away for lack of money.
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
              In 1994, Lola Louis carried a keyboard into a church in the South Bronx and started
              teaching. There was no budget, no board, and no building she could call her own &mdash;
              only a conviction that talent in the Bronx was never the thing in short supply. Access
              was.
            </p>
            <p>
              She had trained as a performer and a griot, the West African tradition of the
              storyteller who carries a community&apos;s memory. She brought that role home. Her
              classes braided piano and ballet with call-and-response, oral history, and the plain
              discipline of showing up on time and ready to work.
            </p>
          </Reveal>

          <Reveal className="my-14">
            <blockquote className="border-l-4 border-primary pl-6 font-display text-2xl font-medium italic leading-snug text-foreground sm:text-3xl">
              {PULL_QUOTES[0]}
            </blockquote>
          </Reveal>

          <Reveal className="space-y-6 text-lg leading-relaxed text-foreground">
            <p>
              Word spread the way it does in a tight-knit borough &mdash; block by block, cousin to
              cousin. Within a few seasons the room was full, then too small. Lola kept tuition low
              on purpose and quietly waived it whenever a family couldn&apos;t manage; graduates came
              back to teach so that classes could stay affordable. Over the next three decades, more
              than two thousand Bronx residents &mdash; four-year-olds at the barre,
              eighty-eight-year-olds at the microphone &mdash; passed through her classes.
            </p>
            <p>
              Her signature work, <em>The Children&apos;s Legacy</em>, put seniors and students on
              one stage &mdash; movement, music, and griot storytelling in a single evening. It was
              never about producing professionals. It was about producing people who knew how to
              stand up, be counted, and carry something forward.
            </p>
          </Reveal>

          <Reveal className="my-14">
            <blockquote className="border-l-4 border-secondary pl-6 font-display text-2xl font-medium italic leading-snug text-foreground sm:text-3xl">
              {PULL_QUOTES[1]}
            </blockquote>
          </Reveal>

          <Reveal className="space-y-6 text-lg leading-relaxed text-foreground">
            <p>
              In 2011, Hurricane Irene flooded the space and the program lost its home. Undeterred,
              Lola moved the classes into her own apartment living room, teaching from the place she
              lived so the work would not stop. She kept that going until she passed away in October
              2023, and the apartment &mdash; the last classroom &mdash; had to be given up.
            </p>
            <p>
              What she built did not end with her. We are carrying her mission forward and raising
              the funds for a permanent Bronx home &mdash; this time with the goal of making every
              class free, so the performing arts are truly within reach of all.
            </p>
          </Reveal>
        </div>
      </article>

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
