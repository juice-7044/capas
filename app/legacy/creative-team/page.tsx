import type { Metadata } from 'next'
import { LegacyPageHeader } from '@/components/legacy/legacy-page-header'
import { PRODUCTION } from '@/lib/legacy-production'

export const metadata: Metadata = {
  title: 'Creative Team',
  description:
    "The directors, designers, and producers who brought The Children's Legacy back to the stage.",
}

export default function CreativeTeamPage() {
  return (
    <>
      <LegacyPageHeader
        eyebrow="Behind the Curtain"
        title="Creative Team & Crew"
        intro="Guided by the vision of playwright Lola Louis, a team of directors, designers, and producers reunited to revive her signature work."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-cinzel text-2xl text-[#e6c04a]">Direction &amp; Design</h2>
        <div className="mt-10 space-y-10">
          {PRODUCTION.creativeTeam.map((person) => (
            <article key={person.name} className="border-l-2 border-[#c9a227]/40 pl-6">
              <h3 className="font-cinzel text-xl text-[#f5f0e8]">{person.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-[#e6c04a]">
                {person.role}
              </p>
              <p className="mt-3 text-pretty leading-relaxed text-[#c4bdb0]">{person.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#c9a227]/15 bg-[#0f0720]">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">Production Crew</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {PRODUCTION.crew.map((person) => (
              <article key={person.name}>
                <h3 className="font-cinzel text-lg text-[#f5f0e8]">{person.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-[#e6c04a]">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#c4bdb0]">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-cinzel text-xl text-[#e6c04a]">Producers</h2>
            <p className="mt-4 text-sm uppercase tracking-[0.14em] text-[#f5f0e8]/70">
              Executive Producers
            </p>
            <ul className="mt-2 space-y-1 text-[#c4bdb0]">
              {PRODUCTION.producers.executive.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm uppercase tracking-[0.14em] text-[#f5f0e8]/70">
              Associate Producers
            </p>
            <ul className="mt-2 space-y-1 text-[#c4bdb0]">
              {PRODUCTION.producers.associate.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-cinzel text-xl text-[#e6c04a]">Board of Directors</h2>
            <ul className="mt-4 space-y-2 text-[#c4bdb0]">
              {PRODUCTION.producers.board.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
