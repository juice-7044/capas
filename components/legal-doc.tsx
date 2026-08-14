import { Reveal } from '@/components/reveal'

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export function LegalDoc({ sections }: { sections: LegalSection[] }) {
  return (
    <article className="bg-off-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="space-y-12">
          {sections.map((section) => (
            <Reveal key={section.heading} className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2.5 pl-1">
                  {section.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  )
}
