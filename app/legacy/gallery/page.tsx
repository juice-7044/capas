import type { Metadata } from 'next'
import { LegacyPageHeader } from '@/components/legacy/legacy-page-header'
import { LegacyGallery } from '@/components/legacy/legacy-gallery'

export const metadata: Metadata = {
  title: 'Gallery',
  description: "Production photography from The Children's Legacy.",
}

const PHOTOS = [
  { src: '/images/legacy/tcl-keyart.png', caption: 'The Griot summons the ancestors' },
  { src: '/images/legacy/still-griot.png', caption: 'The Griot, center stage' },
  { src: '/images/legacy/still-visitation.png', caption: 'The Visitation \u2014 ancestral guidance' },
  {
    src: '/images/legacy/still-demonstration.png',
    caption: 'The Demonstration \u2014 empowerment and unity',
  },
  { src: '/images/legacy/still-ensemble.png', caption: 'The full company at curtain call' },
]

export default function LegacyGalleryPage() {
  return (
    <>
      <LegacyPageHeader
        eyebrow="In Pictures"
        title="Production Gallery"
        intro="Moments from the stage. Select any image to view it full size."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <LegacyGallery photos={PHOTOS} />
      </section>

      <section className="border-t border-[#c9a227]/15 bg-[#0f0720]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-cinzel text-2xl text-[#e6c04a]">Video Clips</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#c4bdb0]">
            Recording of live performances is restricted under copyright, but selected
            behind-the-scenes clips and highlights are shared on our YouTube channel.
          </p>
          <a
            href="https://youtube.com/capas718"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold"
          >
            Watch on YouTube
          </a>
        </div>
      </section>
    </>
  )
}
