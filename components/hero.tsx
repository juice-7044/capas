import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        src="/images/empty-stage.png"
        alt="An empty theatre auditorium in darkness with a single spotlight beam illuminating one gold-lit empty seat"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      {/* Vignette + wash so text stays legible over the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <p className="animate-rise text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Lola Louis Creative &amp; Performing Arts
          </p>

          <h1
            className="animate-rise mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '120ms' }}
          >
            Every chair on this stage is waiting for someone who
            <span className="text-primary"> can&apos;t afford to sit in it.</span>
          </h1>

          <p
            className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: '320ms' }}
          >
            CAPAS provides 100% free performing arts education to families
            earning under $150,000. Piano. Ballet. Hip-hop. Acting. Zero
            tuition. Forever.
          </p>

          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '520ms' }}
          >
            <a
              href="#community"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-transform hover:scale-[1.03]"
            >
              Light a Chair — $1
            </a>
            <a
              href="#transformations"
              className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-card"
            >
              See who&apos;s waiting
            </a>
            <a
              href="#partnerships"
              className="inline-flex items-center px-2 py-3.5 text-base font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Corporate partnerships
            </a>
          </div>
        </div>
      </div>

      <a
        href="#transformations"
        aria-label="Scroll to student transformations"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  )
}
