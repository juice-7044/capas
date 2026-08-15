import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'
import { PageHero } from '@/components/page-hero'
import { BlogIndex } from '@/components/blog/blog-index'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog · News, Programs & Stories | CAPAS',
  description:
    'News, fundraising updates, program spotlights, and behind-the-scenes stories from Lola Louis\u2019 Creative & Performing Arts in the Bronx.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <SiteShell>
      <PageHero
        eyebrow="The CAPAS Blog"
        title="News, stories, and life around the studio."
        intro="Updates from our reopening campaign, spotlights on our programs, and the people who make this community what it is."
      />
      <BlogIndex posts={posts} />
    </SiteShell>
  )
}
