import type { Metadata } from 'next'
import { LegacyPageHeader } from '@/components/legacy/legacy-page-header'
import { REVIEWS, TESTIMONIALS } from '@/lib/legacy-production'

export const metadata: Metadata = {
  title: 'Reviews',
  description: "Press and audience response to The Children's Legacy.",
}

export default function ReviewsPage() {
  return (
    <>
      <LegacyPageHeader
        eyebrow="Press & Praise"
        title="Reviews"
        intro="What critics and audiences are saying about the revival of Lola Louis' signature production."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-cinzel text-2xl text-[#e6c04a]">From the Press</h2>
        <div className="mt-10 space-y-8">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.source}
              className="rounded-2xl border border-[#c9a227]/20 bg-[#170c2e] p-8"
            >
              <p className="text-pretty text-lg italic leading-relaxed text-[#f5f0e8]/90">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="mt-5 font-cinzel text-sm uppercase tracking-[0.16em] text-[#e6c04a]">
                {review.source}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="border-t border-[#c9a227]/15 bg-[#0f0720]">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">From Our Audiences</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.author} className="border-l-2 border-[#c9a227]/40 pl-5">
                <p className="text-pretty leading-relaxed text-[#c4bdb0]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-[#e6c04a]">&mdash; {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
