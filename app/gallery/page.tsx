import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { GalleryGrid } from '@/components/gallery/gallery-grid'

export const metadata: Metadata = {
  title: 'Gallery · Productions, Recitals & Community | CAPAS',
  description:
    'Photos and video from Lola Louis\u2019 Creative & Performing Arts \u2014 stage productions, student recitals, and community performances across the Bronx. Filter by production, year, or media type.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Gallery"
        title="Thirty years, caught in the act."
        intro="Productions, recitals, and community performances. Filter by production, year, or media type, and tap any image to view it up close."
      />
      <GalleryGrid />
    </SiteShell>
  )
}
