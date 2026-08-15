import Link from 'next/link'
import { Reveal } from '@/components/reveal'

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  links?: { label: string; href: string }[]
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
              {section.links && (
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                  {section.links.map((link) => {
                    const isExternal = link.href.startsWith('http')
                    return isExternal ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  )
}
