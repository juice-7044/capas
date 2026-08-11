import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Mission } from '@/components/mission'
import { Transformations } from '@/components/transformations'
import { Impact } from '@/components/impact'
import { Roadmap } from '@/components/roadmap'
import { Classes } from '@/components/classes'
import { Sponsorships } from '@/components/sponsorships'
import { Community } from '@/components/community'
import { SiteFooter } from '@/components/site-footer'
import { SmoothScroll } from '@/components/smooth-scroll'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SmoothScroll />
      <SiteHeader />
      <main>
        <Hero />
        <Mission />
        <Transformations />
        <Impact />
        <Roadmap />
        <Classes />
        <Sponsorships />
        <Community />
      </main>
      <SiteFooter />
    </div>
  )
}
