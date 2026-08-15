import Image from 'next/image'
import { cn } from '@/lib/utils'

type Instrument = 'piano' | 'violin' | 'guitar'

const SRC: Record<Instrument, string> = {
  piano: '/images/piano.png',
  violin: '/images/violin.png',
  guitar: '/images/guitar.png',
}

/**
 * Decorative, non-interactive instrument watermark. Absolutely positioned
 * within a `relative`, `overflow-hidden` parent. Purely presentational.
 */
export function InstrumentAccent({
  instrument,
  className,
  opacity = 0.06,
  rotate = 0,
}: {
  instrument: Instrument
  className?: string
  opacity?: number
  rotate?: number
}) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute select-none', className)}
      style={{ opacity, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <Image
        src={SRC[instrument] || '/placeholder.svg'}
        alt=""
        width={600}
        height={600}
        className="h-full w-full object-contain"
      />
    </div>
  )
}
