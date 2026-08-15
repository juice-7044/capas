'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { Play, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import {
  GALLERY_ITEMS,
  GALLERY_PRODUCTIONS,
  GALLERY_YEARS,
  type GalleryItem,
  type MediaType,
} from '@/lib/gallery'

type MediaFilter = 'all' | MediaType

function FilterRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="font-label text-[0.6rem] text-muted-foreground">{label}</span>
      {children}
    </div>
  )
}

function Chip({
  selected,
  onClick,
  children,
}: {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 font-label text-[0.6rem] transition-colors ${
        selected
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground'
      }`}
    >
      {children}
    </button>
  )
}

export function GalleryGrid() {
  const [production, setProduction] = useState<string>('all')
  const [year, setYear] = useState<number | 'all'>('all')
  const [media, setMedia] = useState<MediaFilter>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = useMemo(
    () =>
      GALLERY_ITEMS.filter((it) => {
        if (production !== 'all' && it.production !== production) return false
        if (year !== 'all' && it.year !== year) return false
        if (media !== 'all' && it.media !== media) return false
        return true
      }),
    [production, year, media],
  )

  const activeItem = openIndex !== null ? items[openIndex] : null

  // Keyboard controls for the lightbox.
  useEffect(() => {
    if (openIndex === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % items.length))
      if (e.key === 'ArrowLeft')
        setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length))
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex, items.length])

  return (
    <section className="bg-off-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Filters */}
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5">
          <FilterRow label="Production">
            <Chip selected={production === 'all'} onClick={() => setProduction('all')}>
              All
            </Chip>
            {GALLERY_PRODUCTIONS.map((p) => (
              <Chip key={p} selected={production === p} onClick={() => setProduction(p)}>
                {p}
              </Chip>
            ))}
          </FilterRow>
          <FilterRow label="Year">
            <Chip selected={year === 'all'} onClick={() => setYear('all')}>
              All
            </Chip>
            {GALLERY_YEARS.map((y) => (
              <Chip key={y} selected={year === y} onClick={() => setYear(y)}>
                {y}
              </Chip>
            ))}
          </FilterRow>
          <FilterRow label="Media">
            <Chip selected={media === 'all'} onClick={() => setMedia('all')}>
              All
            </Chip>
            <Chip selected={media === 'photo'} onClick={() => setMedia('photo')}>
              Photos
            </Chip>
            <Chip selected={media === 'video'} onClick={() => setMedia('video')}>
              Video
            </Chip>
          </FilterRow>
        </div>

        {/* Grid */}
        {items.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">
            No media matches these filters yet.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 60}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-xl border border-border bg-muted"
                  aria-label={`Open ${item.caption}`}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={item.src || '/placeholder.svg'}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-black/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                    {item.media === 'video' && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 text-warm-black shadow-lg transition-transform group-hover:scale-110">
                          <Play className="h-6 w-6 translate-x-0.5" aria-hidden="true" />
                        </span>
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                      <p className="font-label text-[0.55rem] text-cream/80">
                        {item.production} &middot; {item.year}
                      </p>
                      <p className="mt-1 text-pretty text-sm font-medium leading-snug text-cream">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {activeItem && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.caption}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-warm-black/90 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/10"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length))
                }}
                aria-label="Previous"
                className="absolute left-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/10"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenIndex((i) => (i === null ? i : (i + 1) % items.length))
                }}
                aria-label="Next"
                className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/10"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          )}

          <figure
            className="relative flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-muted">
              <Image
                src={activeItem.src || '/placeholder.svg'}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />
            </div>
            <figcaption className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-label text-[0.6rem] text-primary">
                  {activeItem.production} &middot; {activeItem.year}
                </p>
                <p className="mt-1 text-pretty font-display text-lg text-foreground">
                  {activeItem.caption}
                </p>
              </div>
              {activeItem.media === 'video' && activeItem.videoUrl && (
                <a
                  href={activeItem.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-purple inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
                >
                  <Play className="h-4 w-4" aria-hidden="true" />
                  Watch clip
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
