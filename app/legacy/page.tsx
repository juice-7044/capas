import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTION } from '@/lib/legacy-production'

export default function LegacyHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden pt-24">
        <Image
          src="/images/legacy/tcl-keyart.png"
          alt="A Griot storyteller in a golden spotlight on a darkened stage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#140a26] via-[#140a26]/85 to-[#140a26]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140a26] via-transparent to-[#140a26]/50" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="font-cinzel text-xs uppercase tracking-[0.32em] text-[#e6c04a]">
              Lola Louis&apos; Creative &amp; Performing Arts presents
            </p>
            <h1 className="mt-5 text-balance font-cinzel text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-gradient-gold">The Children&apos;s Legacy</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#f5f0e8]/85">
              {PRODUCTION.tagline}
            </p>
            <p className="mt-3 text-sm text-[#c4bdb0]">
              Written by {PRODUCTION.writtenBy} &middot; {PRODUCTION.runtime}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/tickets"
                className="btn-gold inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold"
              >
                Join the Waitlist
              </Link>
              <Link
                href="/playbill"
                className="inline-flex items-center justify-center rounded-full border border-[#c9a227]/50 px-7 py-3 text-sm font-semibold text-[#f5f0e8] transition-colors hover:bg-[#c9a227]/10"
              >
                Read the Playbill
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Synopsis */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="legacy-hairline mx-auto mb-8 h-px w-32" />
        <h2 className="text-center font-cinzel text-3xl font-semibold text-gradient-gold">
          The Story
        </h2>
        <div className="mt-8 space-y-5">
          {PRODUCTION.synopsis.map((p, i) => (
            <p key={i} className="text-pretty text-lg leading-relaxed text-[#f5f0e8]/85">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Themes */}
      <section className="border-y border-[#c9a227]/15 bg-[#0f0720]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center font-cinzel text-3xl font-semibold text-gradient-gold">
            What the Play Explores
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTION.themes.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-[#c9a227]/20 bg-[#170c2e] p-6"
              >
                <h3 className="font-cinzel text-lg text-[#e6c04a]">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c4bdb0]">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stills */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-cinzel text-3xl font-semibold text-gradient-gold">
          On Stage
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { src: '/images/legacy/still-griot.png', label: 'The Griot' },
            { src: '/images/legacy/still-visitation.png', label: 'The Visitation' },
            { src: '/images/legacy/still-demonstration.png', label: 'The Demonstration' },
          ].map((s) => (
            <figure
              key={s.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#c9a227]/20"
            >
              <Image
                src={s.src}
                alt={`${s.label} scene from The Children's Legacy`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140a26] via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 font-cinzel text-sm text-[#f5f0e8]">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="text-sm font-medium text-[#e6c04a] underline-offset-4 hover:underline"
          >
            View the full gallery &rarr;
          </Link>
        </div>
      </section>

      {/* Dedication */}
      <section className="border-t border-[#c9a227]/15 bg-[#0f0720]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-pretty text-lg italic leading-relaxed text-[#f5f0e8]/85">
            &ldquo;{PRODUCTION.dedicationQuote.text}&rdquo;
          </p>
          <p className="mt-4 font-cinzel text-sm uppercase tracking-[0.22em] text-[#e6c04a]">
            {PRODUCTION.dedicationQuote.attribution}
          </p>
          <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-[#c4bdb0]">
            {PRODUCTION.dedication}
          </p>
        </div>
      </section>
    </>
  )
}
