import type { Metadata } from 'next'
import { LegacyPageHeader } from '@/components/legacy/legacy-page-header'
import { PRODUCTION } from '@/lib/legacy-production'

export const metadata: Metadata = {
  title: 'Playbill',
  description:
    "The digital playbill for The Children's Legacy \u2014 synopsis, scenes, cast, and credits.",
}

export default function PlaybillPage() {
  return (
    <>
      <LegacyPageHeader
        eyebrow="Digital Playbill"
        title="The Children's Legacy"
        intro={`Written by ${PRODUCTION.writtenBy} \u00B7 ${PRODUCTION.runtime}`}
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Synopsis */}
        <section>
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">Synopsis</h2>
          <div className="mt-6 space-y-4">
            {PRODUCTION.synopsis.map((p, i) => (
              <p key={i} className="text-pretty leading-relaxed text-[#c4bdb0]">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Main characters */}
        <section className="mt-14">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">Main Characters</h2>
          <ul className="mt-6 divide-y divide-[#c9a227]/15">
            {PRODUCTION.leads.map((lead) => (
              <li key={lead.role} className="flex items-baseline justify-between gap-4 py-3">
                <span className="font-cinzel text-[#f5f0e8]">{lead.role}</span>
                <span className="flex-1 translate-y-[-4px] border-b border-dotted border-[#c9a227]/30" />
                <span className="text-sm uppercase tracking-[0.12em] text-[#c4bdb0]">
                  {lead.actor}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Scenes */}
        <section className="mt-14">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">Scenes &amp; Setting</h2>
          <div className="mt-6 space-y-8">
            {PRODUCTION.acts.map((act) => (
              <div key={act.act}>
                <p className="font-cinzel text-lg text-[#f5f0e8]">
                  {act.act}: &ldquo;{act.name}&rdquo;
                </p>
                <ul className="mt-4 space-y-4">
                  {act.scenes.map((scene) => (
                    <li key={scene.title} className="border-l-2 border-[#c9a227]/40 pl-5">
                      <p className="text-sm uppercase tracking-[0.14em] text-[#e6c04a]">
                        {scene.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#c4bdb0]">{scene.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Company */}
        <section className="mt-14">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">The Company</h2>
          <p className="mt-6 text-pretty leading-relaxed text-[#c4bdb0]">
            {PRODUCTION.ensemble.join(' \u00B7 ')}
          </p>
        </section>

        {/* Credits */}
        <section className="mt-14">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">Credits</h2>
          <div className="mt-6 space-y-4 text-[#c4bdb0]">
            {PRODUCTION.creativeTeam.map((person) => (
              <p key={person.name}>
                <span className="text-[#f5f0e8]">{person.name}</span> &mdash; {person.role}
              </p>
            ))}
            {PRODUCTION.crew.map((person) => (
              <p key={person.name}>
                <span className="text-[#f5f0e8]">{person.name}</span> &mdash; {person.role}
              </p>
            ))}
          </div>
        </section>

        {/* Dedication */}
        <section className="mt-14 rounded-2xl border border-[#c9a227]/20 bg-[#0f0720] p-8 text-center">
          <p className="text-pretty leading-relaxed text-[#f5f0e8]/85">{PRODUCTION.dedication}</p>
          <p className="mt-5 text-sm italic text-[#c4bdb0]">
            &ldquo;{PRODUCTION.dedicationQuote.text}&rdquo; &mdash;{' '}
            {PRODUCTION.dedicationQuote.attribution}
          </p>
        </section>
      </div>
    </>
  )
}
