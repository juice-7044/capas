'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Photo = { src: string; caption: string }

export function LegacyGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null)
  const isOpen = index !== null

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  )
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, prev, next])

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#c9a227]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e6c04a]"
            aria-label={`Open image: ${photo.caption}`}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140a26]/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 right-3 text-left font-cinzel text-xs text-[#f5f0e8] opacity-0 transition-opacity group-hover:opacity-100">
              {photo.caption}
            </span>
          </button>
        ))}
      </div>

      {isOpen && index !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0a0416]/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a227]/40 text-[#f5f0e8] hover:bg-[#c9a227]/10"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous image"
            className="absolute left-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a227]/40 text-[#f5f0e8] hover:bg-[#c9a227]/10 sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={photos[index].src}
                alt={photos[index].caption}
                fill
                sizes="90vw"
                className="rounded-xl object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center font-cinzel text-sm text-[#f5f0e8]">
              {photos[index].caption}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next image"
            className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a227]/40 text-[#f5f0e8] hover:bg-[#c9a227]/10 sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  )
}
