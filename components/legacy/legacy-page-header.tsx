export function LegacyPageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <header className="relative overflow-hidden border-b border-[#c9a227]/15 bg-[#0f0720] pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full"
        style={{
          backgroundImage:
            'radial-gradient(80% 60% at 50% 0%, rgba(201,162,39,0.14) 0%, rgba(15,7,32,0) 60%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 pb-14 text-center">
        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#e6c04a]">{eyebrow}</p>
        <h1 className="mt-4 text-balance font-cinzel text-4xl font-bold text-gradient-gold sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#c4bdb0]">
            {intro}
          </p>
        )}
        <div className="legacy-hairline mx-auto mt-8 h-px w-32" />
      </div>
    </header>
  )
}
