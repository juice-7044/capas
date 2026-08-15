'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { BLOG_CATEGORIES, formatDate, type BlogPost } from '@/lib/blog'

const FILTERS = ['All', ...BLOG_CATEGORIES] as const

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('All')

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active)

  return (
    <section className="bg-off-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter posts by category">
          {FILTERS.map((f) => {
            const selected = f === active
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 font-label text-[0.65rem] transition-colors ${
                  selected
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {f}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">No posts in this category yet.</p>
        ) : (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <Image
                        src={post.cover || '/placeholder.svg'}
                        alt={post.coverAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 font-label text-[0.6rem] text-primary">
                      <span>{post.category}</span>
                      <span aria-hidden className="h-1 w-1 rounded-full bg-primary/40" />
                      <span className="text-muted-foreground">{post.readingTime}</span>
                    </div>
                    <h2 className="mt-3 text-balance font-display text-xl font-semibold leading-snug text-foreground">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <p className="mt-5 text-xs text-muted-foreground">
                      {post.author} &middot; {formatDate(post.date)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
