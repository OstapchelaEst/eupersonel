import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EUPERSONEL',
  description: 'the key to your success',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
