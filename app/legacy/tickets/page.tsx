import type { Metadata } from 'next'
import { LegacyPageHeader } from '@/components/legacy/legacy-page-header'
import { WaitlistForm } from '@/components/legacy/waitlist-form'

export const metadata: Metadata = {
  title: 'Tickets',
  description:
    "Join the waitlist for the next production of The Children's Legacy and be the first to know when dates are announced.",
}

export default function TicketsPage() {
  return (
    <>
      <LegacyPageHeader
        eyebrow="Future Productions"
        title="Join the Waitlist"
        intro="The next run of The Children's Legacy is being scheduled. Add your name and you'll be the first to hear about dates, school matinees, and community performances."
      />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-3xl border border-[#c9a227]/20 bg-[#170c2e] p-8 sm:p-10">
          <WaitlistForm />
          <p className="mt-6 text-xs leading-relaxed text-[#c4bdb0]/70">
            We&apos;ll only use your details to contact you about The Children&apos;s Legacy. No
            payment is collected now &mdash; this is a waitlist for upcoming performances.
          </p>
        </div>
      </section>
    </>
  )
}
