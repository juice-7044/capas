import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Transformations } from '@/components/transformations'
import { Impact } from '@/components/impact'
import { Classes } from '@/components/classes'
import { Sponsorships } from '@/components/sponsorships'
import { Roadmap } from '@/components/roadmap'
import { Community } from '@/components/community'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />
      <main>
        <Hero />
        <Transformations />
        <Impact />
        <Classes />
        <Sponsorships />
        <Roadmap />
        <Community />
      </main>
      <SiteFooter />
    </div>
  )
}
