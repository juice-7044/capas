import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Cinzel } from 'next/font/google'
import { LegacyNav } from '@/components/legacy/legacy-nav'
import { LegacyFooter } from '@/components/legacy/legacy-footer'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
})

export const metadata: Metadata = {
  title: {
    default: "The Children's Legacy \u2014 A Lola Louis Production",
    template: "%s \u2014 The Children's Legacy",
  },
  description:
    "The Children's Legacy is a dramatic journey through African and African American history, guided by a Griot. Written by Lola Lenore Louis and presented by Lola Louis' Creative & Performing Arts.",
}

export default function LegacyLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${cinzel.variable} min-h-screen bg-[#140a26] font-sans text-[#f5f0e8]`}>
      <LegacyNav />
      <main>{children}</main>
      <LegacyFooter />
    </div>
  )
}
