import type { Metadata } from 'next'
import { LegacyPageHeader } from '@/components/legacy/legacy-page-header'
import { CAST_BY_SCENE, PRODUCTION } from '@/lib/legacy-production'

export const metadata: Metadata = {
  title: 'Playbill',
  description:
    "The digital playbill for The Children's Legacy \u2014 director's note, synopsis, scenes, cast, and credits.",
}

function CreditGroup({ label, names }: { label: string; names: readonly string[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.16em] text-[#e6c04a]">{label}</p>
      <p className="mt-2 text-pretty leading-relaxed text-[#c4bdb0]">{names.join(' \u00B7 ')}</p>
    </div>
  )
}

export default function PlaybillPage() {
  const { welcomeLetter, originalProduction, producers, sponsorTribute } = PRODUCTION

  return (
    <>
      <LegacyPageHeader
        eyebrow="Digital Playbill"
        title="The Children's Legacy"
        intro={`Written by ${PRODUCTION.writtenBy} \u00B7 ${PRODUCTION.runtime}`}
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Original production banner */}
        <section className="rounded-2xl border border-[#c9a227]/20 bg-[#0f0720] p-6 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-[#e6c04a]">
            {originalProduction.label}
          </p>
          <p className="mt-3 font-cinzel text-[#f5f0e8]">{originalProduction.venue}</p>
          <p className="mt-1 text-sm text-[#c4bdb0]">{originalProduction.address}</p>
          <p className="mt-1 text-sm text-[#c4bdb0]">{originalProduction.dates}</p>
          <p className="mt-4 text-sm text-[#c4bdb0]">
            Directed by {PRODUCTION.directedBy.join(', ')}
          </p>
        </section>

        {/* Director's welcome letter */}
        <section className="mt-14">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">{welcomeLetter.heading}</h2>
          <p className="mt-6 text-[#f5f0e8]">{welcomeLetter.greeting}</p>
          <div className="mt-4 space-y-4">
            {welcomeLetter.paragraphs.map((p, i) => (
              <p key={i} className="text-pretty leading-relaxed text-[#c4bdb0]">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-6 text-[#c4bdb0]">{welcomeLetter.signOff}</p>
          <p className="mt-2 font-cinzel text-lg text-[#f5f0e8]">{welcomeLetter.signature}</p>
          <p className="text-sm text-[#c4bdb0]">{welcomeLetter.signatureTitle}</p>
        </section>

        {/* Synopsis */}
        <section className="mt-14">
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

        {/* Cast list by scene */}
        <section className="mt-14">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">Cast List by Scene</h2>
          <div className="mt-6 space-y-8">
            {CAST_BY_SCENE.map((entry) => (
              <div key={entry.scene}>
                <p className="text-sm uppercase tracking-[0.14em] text-[#f5f0e8]">{entry.scene}</p>
                <ul className="mt-3 space-y-1.5">
                  {entry.roles.map((r, i) => (
                    <li
                      key={`${r.role}-${i}`}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="text-[#c4bdb0]">{r.role}</span>
                      <span className="flex-1 translate-y-[-4px] border-b border-dotted border-[#c9a227]/20" />
                      <span className="text-[#f5f0e8]">{r.actor}</span>
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

        {/* Creative team & crew */}
        <section className="mt-14">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">Creative Team &amp; Crew</h2>
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

        {/* Producers & supporters */}
        <section className="mt-14">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">Producers &amp; Supporters</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <CreditGroup label="Executive Producers" names={producers.executive} />
            <CreditGroup label="Associate Producers" names={producers.associate} />
            <CreditGroup label="Production Element Sponsors" names={producers.sponsors} />
            <CreditGroup label="Friends of the Production" names={producers.friends} />
            <CreditGroup label="In-Kind Contributors" names={producers.inKind} />
            <CreditGroup label="Production Assistants" names={producers.productionAssistants} />
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[#e6c04a]">Board of Directors</p>
            <ul className="mt-2 space-y-1.5 text-[#c4bdb0]">
              {producers.board.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <CreditGroup label="Special Thanks" names={producers.specialThanks} />
          </div>
        </section>

        {/* Sponsor tribute */}
        <section className="mt-14 rounded-2xl border border-[#c9a227]/20 bg-[#0f0720] p-8">
          <p className="text-pretty leading-relaxed text-[#f5f0e8]/85">
            &ldquo;{sponsorTribute.text}&rdquo;
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.14em] text-[#e6c04a]">
            &mdash; {sponsorTribute.attribution}
          </p>
        </section>

        {/* Dedication */}
        <section className="mt-8 rounded-2xl border border-[#c9a227]/20 bg-[#0f0720] p-8 text-center">
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
