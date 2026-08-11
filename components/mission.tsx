'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Mission() {
  return (
    <section id="mission" className="relative bg-forest-deep">
      <div className="grid lg:grid-cols-2">
        {/* Full-bleed documentary image */}
        <div className="relative min-h-[52vh] lg:min-h-[88vh]">
          <Image
            src="/images/mission-door.png"
            alt="A Northeast Bronx mother stands in a doorway with her daughter, who holds a dance bag"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>

        {/* Text */}
        <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <Reveal className="max-w-xl">
            <p className="font-label text-[0.7rem] text-gold md:text-xs">Why we&apos;re free</p>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight text-ivory sm:text-5xl">
              Free isn&apos;t a discount.
              <br />
              <span className="text-gradient-gold">It&apos;s a door.</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ivory-dim md:text-lg">
              <p>
                In the Northeast Bronx, a year of private dance or music lessons can cost more than a
                month&apos;s rent. For most families here, that isn&apos;t a hard choice—it&apos;s no
                choice at all. Talent doesn&apos;t skip these blocks. Access does.
              </p>
              <p>
                So we don&apos;t offer scholarships, sliding scales, or discounts that still ask a
                family to prove they&apos;re poor enough. We offer an open door. When we reopen,
                every class will be tuition-free, for every age, from four to eighty-eight.
              </p>
            </div>
            <p className="mt-8 border-l-2 border-gold/40 pl-4 text-sm leading-relaxed text-ivory-dim/80">
              <span className="font-medium text-ivory">A note on eligibility:</span> we prioritize
              families earning under $150,000, verified once at enrollment on the honor system. No
              paperwork trails, no annual re-proving. Ask, and you&apos;re in.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
