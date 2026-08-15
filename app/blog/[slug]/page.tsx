import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteShell } from '@/components/site-shell'
import { Reveal } from '@/components/reveal'
import { BLOG_POSTS, formatDate, getPostBySlug } from '@/lib/blog'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post not found | CAPAS' }

  return {
    title: `${post.title} | CAPAS Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <SiteShell>
      <article>
        {/* Header */}
        <header className="border-b border-border bg-muted pt-32 pb-14 sm:pt-40 sm:pb-16">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-label text-[0.65rem] text-primary transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                All posts
              </Link>
              <div className="mt-6 flex items-center gap-3 font-label text-[0.6rem] text-primary">
                <span>{post.category}</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-primary/40" />
                <span className="text-muted-foreground">{post.readingTime}</span>
              </div>
              <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-sm text-muted-foreground">
                By {post.author} &middot; {formatDate(post.date)}
              </p>
            </Reveal>
          </div>
        </header>

        {/* Cover */}
        <div className="bg-off-white">
          <div className="mx-auto max-w-4xl px-6 pt-12">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
                <Image
                  src={post.cover || '/placeholder.svg'}
                  alt={post.coverAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Body */}
        <div className="bg-off-white py-14 sm:py-20">
          <div className="mx-auto max-w-2xl space-y-6 px-6">
            {post.body.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <Reveal key={i}>
                    <h2 className="pt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                      {block.text}
                    </h2>
                  </Reveal>
                )
              }
              if (block.type === 'quote') {
                return (
                  <Reveal key={i}>
                    <blockquote className="border-l-2 border-primary/50 pl-5 font-display text-xl leading-relaxed text-foreground">
                      <p className="text-pretty">&ldquo;{block.text}&rdquo;</p>
                      {block.cite && (
                        <cite className="font-label mt-3 block text-[0.65rem] not-italic text-muted-foreground">
                          &mdash; {block.cite}
                        </cite>
                      )}
                    </blockquote>
                  </Reveal>
                )
              }
              return (
                <Reveal key={i}>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                    {block.text}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <section className="bg-muted py-20">
          <Reveal className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-balance font-display text-3xl font-semibold text-foreground">
              Help us reopen the doors.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Every gift fills a seat for the next generation of CAPAS students. Fund a chair for as
              little as $1.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/donate"
                className="btn-green inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
              >
                Fund a Chair
              </Link>
            </div>
          </Reveal>
        </section>
      </article>
    </SiteShell>
  )
}
