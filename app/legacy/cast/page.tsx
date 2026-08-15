import type { Metadata } from 'next'
import { LegacyPageHeader } from '@/components/legacy/legacy-page-header'
import { PRODUCTION } from '@/lib/legacy-production'

export const metadata: Metadata = {
  title: 'Cast',
  description:
    "Meet the cast of The Children's Legacy, from the Griot to the ensemble of young performers.",
}

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
}

export default function CastPage() {
  return (
    <>
      <LegacyPageHeader
        eyebrow="Who's Who"
        title="The Cast"
        intro="A company that spans original cast members returning as adults and a new generation of young performers from the Bronx and beyond."
      />

      {/* Leads */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-cinzel text-2xl text-[#e6c04a]">Principal Roles</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTION.leads.map((lead) => (
            <div
              key={lead.role}
              className="rounded-2xl border border-[#c9a227]/20 bg-[#170c2e] p-6 text-center"
            >
              <p className="font-cinzel text-lg text-[#f5f0e8]">{lead.role}</p>
              <p className="mt-2 text-sm text-[#c4bdb0]">{lead.actor}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured bios */}
      <section className="border-y border-[#c9a227]/15 bg-[#0f0720]">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">Featured Performers</h2>
          <div className="mt-10 space-y-10">
            {PRODUCTION.castBios.map((person) => (
              <article key={person.name} className="flex flex-col gap-5 sm:flex-row">
                <div
                  aria-hidden="true"
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#c9a227]/40 bg-[#170c2e] font-cinzel text-xl text-[#e6c04a]"
                >
                  {initials(person.name)}
                </div>
                <div>
                  <h3 className="font-cinzel text-xl text-[#f5f0e8]">{person.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.14em] text-[#e6c04a]">
                    {person.role}
                  </p>
                  <p className="mt-3 text-pretty leading-relaxed text-[#c4bdb0]">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full ensemble */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-cinzel text-2xl text-[#e6c04a]">The Full Company</h2>
        <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-3">
          {PRODUCTION.ensemble.map((name) => (
            <li
              key={name}
              className="rounded-full border border-[#c9a227]/20 bg-[#170c2e] px-4 py-2 text-sm text-[#f5f0e8]/85"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
