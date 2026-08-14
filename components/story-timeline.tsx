import { Reveal } from '@/components/reveal'

export type Milestone = {
  year: string
  title: string
  body: string
}

export function StoryTimeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <ol className="relative mx-auto max-w-3xl border-l border-border pl-8 sm:pl-10">
      {milestones.map((m, i) => (
        <Reveal as="li" key={m.year} delay={(i % 3) * 100} className="relative pb-14 last:pb-0">
          <span className="absolute -left-[37px] flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background sm:-left-[45px]" />
          <p className="font-label text-xs text-primary">{m.year}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{m.title}</h3>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{m.body}</p>
        </Reveal>
      ))}
    </ol>
  )
}
